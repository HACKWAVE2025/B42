import { useState } from 'react';
import JournalInput from '../components/journal/JournalInput';
import SummaryPanel from '../components/journal/SummaryPanel';
import MoodCalendar from '../components/journal/MoodCalendar';

function Journal() {
  const [showMoodCalendar, setShowMoodCalendar] = useState(false);
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: '21 Oct',
      text: 'Felt grateful after talking to a friend.',
      emotion: '😊'
    },
    {
      id: 2,
      date: '22 Oct',
      text: 'Tired but proud of finishing work.',
      emotion: '😌'
    },
    {
      id: 3,
      date: '23 Oct',
      text: 'Felt overwhelmed.',
      emotion: '😔'
    }
  ]);

  const handleSaveEntry = (entryText) => {
    const newEntry = {
      id: entries.length + 1,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
      text: entryText.substring(0, 60) + (entryText.length > 60 ? '...' : ''),
      emotion: '😊' // Default emotion for new entries
    };
    setEntries([newEntry, ...entries]);
    console.log('Entry saved:', entryText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            MindJournal
          </h1>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section - Journal Writing Area */}
          <JournalInput onSaveEntry={handleSaveEntry} />

          {/* Right Section - Summary & Insights */}
          <SummaryPanel 
            entries={entries}
            onViewCalendar={() => setShowMoodCalendar(true)}
          />
        </div>
      </div>

      {/* Mood Calendar Modal */}
      {showMoodCalendar && (
        <MoodCalendar onClose={() => setShowMoodCalendar(false)} />
      )}
    </div>
  );
}

export default Journal;
