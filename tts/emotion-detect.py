from fastapi import FastAPI, UploadFile, File
import librosa
import numpy as np
import uvicorn

app = FastAPI(title="Speech Features API")

@app.post("/extract_features")
async def extract_features(file: UploadFile = File(...)):
    y, sr = librosa.load(file.file, sr=16000)
    
    f0, voiced_flag, voiced_probs = librosa.pyin(y, fmin=50, fmax=300)
    pitch = float(np.nanmean(f0)) if f0 is not None else 0.0
    
    energy = float(np.mean(librosa.feature.rms(y=y)))
    
    duration = librosa.get_duration(y=y, sr=sr)
    onsets = librosa.onset.onset_detect(y=y, sr=sr)
    speech_rate = float(len(onsets) / duration) if duration > 0 else 0.0
    
    return {
        "pitch_hz": pitch,
        "energy": energy,
        "speech_rate_per_sec": speech_rate
    }

@app.get("/health")
def health_check():
    return {"status": "ok"}


if __name__ == "__main__":
    uvicorn.run("avd1:app", host="0.0.0.0", port=9001, reload=True)
