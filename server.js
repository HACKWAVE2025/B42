import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

// Create logs directory if it doesn't exist
const logsDir = './logs';
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Create log file with timestamp
const logFile = path.join(logsDir, `fitbit-proxy-${new Date().toISOString().split('T')[0]}.log`);

// Helper function to write logs
const writeLog = (message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(logFile, logMessage);
  console.log(message); // Also log to console
};

const app = express();
const PORT = 3001;

// Enable CORS for your frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));

app.use(express.json());

// Get access token from environment
const getAccessToken = () => {
  const token = process.env.VITE_FITBIT_ACCESS_KEY;
  if (token) {
    // Remove quotes if present
    return token.replace(/^"(.*)"$/, '$1');
  }
  return null;
};

// Proxy endpoint for Fitbit API - catch all paths after /api/fitbit
app.use('/api/fitbit', async (req, res) => {
  const accessToken = getAccessToken();
  
  if (!accessToken) {
    return res.status(401).json({ error: 'No access token configured' });
  }

  // Remove /api/fitbit prefix and build the Fitbit API URL
  const fitbitPath = req.url.substring(1); // Remove leading /
  const fitbitUrl = `https://api.fitbit.com/${fitbitPath}`;
  
  writeLog(`Proxying request to: ${fitbitUrl}`);

  try {
    const response = await fetch(fitbitUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'Accept-Language': 'en_US'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      writeLog(`❌ Fitbit API Error ${response.status}: ${errorText}`);
      return res.status(response.status).json({ 
        error: `Fitbit API Error: ${response.statusText}`,
        details: errorText
      });
    }

    const data = await response.json();
    writeLog(`✅ Successfully fetched data from Fitbit API`);
    writeLog(`📊 Response data: ${JSON.stringify(data, null, 2)}`);
    res.json(data);
  } catch (error) {
    writeLog(`❌ Proxy error: ${error.message}`);
    res.status(500).json({ 
      error: 'Proxy server error',
      message: error.message 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Fitbit proxy server is running',
    hasToken: !!getAccessToken()
  });
});

app.listen(PORT, () => {
  writeLog('='.repeat(60));
  writeLog(`🚀 Fitbit proxy server running on http://localhost:${PORT}`);
  writeLog(`✅ CORS enabled for frontend`);
  writeLog(`🔑 Access token configured: ${getAccessToken() ? 'Yes' : 'No'}`);
  writeLog(`📁 Logs being written to: ${logFile}`);
  writeLog('='.repeat(60));
});
