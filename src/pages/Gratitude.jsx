import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';

const Gratitude = () => {
  const [gratitudeEntries, setGratitudeEntries] = useState([
    {
      id: 1,
      date: "Oct 25, 2025",
      message: "My morning coffee and the quiet sunrise. Small moments matter.",
      emoji: "☀️",
      mood: "peaceful"
    },
    {
      id: 2,
      date: "Oct 24, 2025",
      message: "A friend called just to check in. It reminded me I'm not alone.",
      emoji: "💚",
      mood: "grateful"
    },
    {
      id: 3,
      date: "Oct 23, 2025",
      message: "Finished a project I've been putting off. Feels good to accomplish something.",
      emoji: "🎯",
      mood: "proud"
    },
    {
      id: 4,
      date: "Oct 22, 2025",
      message: "Found a new song that perfectly captures how I feel. Music heals.",
      emoji: "🎵",
      mood: "inspired"
    },
    {
      id: 5,
      date: "Oct 21, 2025",
      message: "Made myself a nice meal. Self-care is important.",
      emoji: "🍜",
      mood: "content"
    },
    {
      id: 6,
      date: "Oct 20, 2025",
      message: "Went for a walk in nature. The trees are beautiful this time of year.",
      emoji: "🌳",
      mood: "calm"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [newEntry, setNewEntry] = useState({ message: '', emoji: '🌿' });
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    { text: "Gratitude turns what we have into enough.", author: "Anonymous" },
    { text: "The more you practice gratitude, the more you see how much there is to be grateful for.", author: "Unknown" },
    { text: "Acknowledging the good that you already have is the foundation for all abundance.", author: "Eckhart Tolle" },
    { text: "Gratitude is not only the greatest of virtues, but the parent of all others.", author: "Cicero" }
  ];

  const emojiOptions = ['🌿', '☀️', '💚', '🌸', '✨', '🦋', '🌈', '💫', '🌺', '🍃'];

  const moodCalendar = [
    { day: 'Mon', emoji: '😊', mood: 'Happy' },
    { day: 'Tue', emoji: '😐', mood: 'Neutral' },
    { day: 'Wed', emoji: '😔', mood: 'Down' },
    { day: 'Thu', emoji: '😄', mood: 'Great' },
    { day: 'Fri', emoji: '😊', mood: 'Happy' },
    { day: 'Sat', emoji: '😐', mood: 'Neutral' },
    { day: 'Sun', emoji: '😴', mood: 'Tired' }
  ];

  const stats = {
    totalEntries: gratitudeEntries.length,
    currentStreak: 6,
    longestStreak: 12,
    topEmotion: "grateful"
  };

  const handleAddEntry = () => {
    if (newEntry.message.trim()) {
      const entry = {
        id: Date.now(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        message: newEntry.message,
        emoji: newEntry.emoji,
        mood: "grateful"
      };
      setGratitudeEntries([entry, ...gratitudeEntries]);
      setNewEntry({ message: '', emoji: '🌿' });
      setIsModalOpen(false);
    }
  };

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  // Floating leaves animation
  const FloatingLeaf = ({ delay }) => (
    <motion.div
      className="absolute text-3xl opacity-20"
      initial={{ y: -20, x: 0, rotate: 0 }}
      animate={{
        y: [0, 600],
        x: [0, Math.random() * 100 - 50],
        rotate: [0, 360],
        opacity: [0.3, 0.1, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: '-50px'
      }}
    >
      🍃
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-vyoma-dark">
      <Navbar />

      {/* Floating Leaves Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <FloatingLeaf key={i} delay={i * 0.7} />
        ))}
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Grow Your Garden</span>
              <br />
              <span className="gradient-text">of Gratitude</span> 🌿
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Cultivate joy one grateful thought at a time
            </p>
            <Button onClick={() => setIsModalOpen(true)} className="text-lg">
              <span className="text-2xl mr-2">+</span> Add Gratitude
            </Button>
          </motion.div>

          {/* Stats Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <Card className="text-center bg-gradient-to-br from-vyoma-purple/20 to-vyoma-pink/20 border border-white/10">
              <div className="text-4xl font-bold gradient-text">{stats.totalEntries}</div>
              <p className="text-sm text-gray-300 mt-2">Total Entries</p>
            </Card>
            <Card className="text-center bg-gradient-to-br from-vyoma-blue/20 to-vyoma-teal/20 border border-white/10">
              <div className="text-4xl font-bold gradient-text">{stats.currentStreak}</div>
              <p className="text-sm text-gray-300 mt-2">Day Streak 🔥</p>
            </Card>
            <Card className="text-center bg-gradient-to-br from-vyoma-pink/20 to-vyoma-purple/20 border border-white/10">
              <div className="text-4xl font-bold gradient-text">{stats.longestStreak}</div>
              <p className="text-sm text-gray-300 mt-2">Longest Streak</p>
            </Card>
            <Card className="text-center bg-gradient-to-br from-vyoma-teal/20 to-vyoma-blue/20 border border-white/10">
              <div className="text-2xl mt-2">💚</div>
              <p className="text-sm text-gray-300 mt-2">Top Emotion</p>
            </Card>
          </motion.div>

          {/* Mood Calendar Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <Card>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold gradient-text">This Week's Mood</h2>
                <Button
                  variant="secondary"
                  onClick={() => setIsCalendarOpen(true)}
                  className="text-sm"
                >
                  📅 View Calendar
                </Button>
              </div>
              <div className="grid grid-cols-7 gap-3">
                {moodCalendar.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <p className="text-xs text-gray-400 mb-2">{day.day}</p>
                    <p className="text-3xl mb-2">{day.emoji}</p>
                    <p className="text-xs text-gray-300">{day.mood}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Gratitude Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">
              Your Gratitude Garden
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gratitudeEntries.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 30, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, rotate: 1 }}
                >
                  <Card hover className="h-full bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-4xl">{entry.emoji}</span>
                      <span className="text-xs text-gray-400">{entry.date}</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed">{entry.message}</p>
                    <div className="mt-4 flex items-center space-x-2">
                      <span className="text-xs px-3 py-1 bg-vyoma-purple/20 text-vyoma-purple rounded-full">
                        {entry.mood}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Reflection Summary Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="bg-gradient-to-br from-vyoma-purple/10 to-vyoma-pink/10 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold gradient-text flex items-center">
                  <span className="mr-2">🤖</span>
                  AI Reflection Summary
                </h2>
                <span className="text-xs px-3 py-1 bg-vyoma-green/20 text-vyoma-green rounded-full">
                  Coming Soon
                </span>
              </div>
              <div className="p-8 bg-white/5 rounded-xl border-2 border-dashed border-white/20 text-center">
                <p className="text-gray-400 italic">
                  {/* AI summary will be added here later */}
                  AI-generated insights about your gratitude patterns, emotional growth, and personalized encouragement will appear here soon.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  🧠 Our AI is learning to understand your journey better
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Daily Quote Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="bg-gradient-to-br from-vyoma-blue/20 to-vyoma-teal/20 border border-white/20">
              <h2 className="text-2xl font-bold gradient-text mb-6 text-center">
                ✨ Daily Inspiration
              </h2>
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuoteIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-8"
                  >
                    <p className="text-2xl text-white italic mb-4">
                      "{quotes[currentQuoteIndex].text}"
                    </p>
                    <p className="text-gray-400">
                      — {quotes[currentQuoteIndex].author}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <div className="flex justify-center items-center space-x-4 mt-6">
                  <button
                    onClick={prevQuote}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    ←
                  </button>
                  <div className="flex space-x-2">
                    {quotes.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 w-2 rounded-full transition-all ${
                          index === currentQuoteIndex
                            ? 'bg-vyoma-green w-6'
                            : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextQuote}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Motivational Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-vyoma-purple via-vyoma-pink to-vyoma-blue border-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your Garden Grows With Every Thought 🌸
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Keep nurturing gratitude, and watch your mindset bloom
              </p>
              <Button onClick={() => setIsModalOpen(true)} variant="secondary" className="bg-white text-vyoma-purple hover:bg-gray-100">
                Add Another Gratitude
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Add Gratitude Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-vyoma-gray border border-white/20 rounded-2xl p-8 max-w-lg w-full"
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Add Your Gratitude 🌿
              </h2>
              
              <div className="mb-6">
                <label className="block text-sm text-gray-300 mb-3">
                  Choose an emoji
                </label>
                <div className="flex flex-wrap gap-2">
                  {emojiOptions.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => setNewEntry({ ...newEntry, emoji })}
                      className={`text-3xl p-2 rounded-lg transition-all ${
                        newEntry.emoji === emoji
                          ? 'bg-vyoma-purple scale-110'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-300 mb-3">
                  What are you grateful for today?
                </label>
                <textarea
                  value={newEntry.message}
                  onChange={(e) => setNewEntry({ ...newEntry, message: e.target.value })}
                  placeholder="I'm grateful for..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-vyoma-purple resize-none h-32"
                />
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddEntry}
                  className="flex-1"
                  disabled={!newEntry.message.trim()}
                >
                  Add to Garden
                </Button>
                <Button
                  onClick={() => setIsModalOpen(false)}
                  variant="secondary"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mood Calendar Modal */}
      <AnimatePresence>
        {isCalendarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setIsCalendarOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-vyoma-gray border border-white/20 rounded-2xl p-8 max-w-2xl w-full"
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">
                📅 Your Mood Calendar
              </h2>
              <div className="grid grid-cols-7 gap-4 mb-6">
                {moodCalendar.map((day, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-white/5 rounded-xl border border-white/10"
                  >
                    <p className="text-sm text-gray-400 mb-3">{day.day}</p>
                    <p className="text-5xl mb-3">{day.emoji}</p>
                    <p className="text-sm text-gray-300">{day.mood}</p>
                  </div>
                ))}
              </div>
              <Button onClick={() => setIsCalendarOpen(false)} variant="secondary" className="w-full">
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gratitude;
