import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Achievements = () => {
  const [hoveredBadge, setHoveredBadge] = useState(null);

  const badges = [
    {
      id: 1,
      name: "First Journal Entry",
      description: "Started your mindfulness journey",
      emoji: "📝",
      unlocked: true,
      unlockedDate: "Oct 21, 2025",
      rarity: "Common",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "7-Day Streak",
      description: "Logged in for 7 consecutive days",
      emoji: "🌙",
      unlocked: true,
      unlockedDate: "Oct 23, 2025",
      rarity: "Rare",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Community Helper",
      description: "Supported 10 community members",
      emoji: "💬",
      unlocked: true,
      unlockedDate: "Oct 25, 2025",
      rarity: "Rare",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Morning Routine Master",
      description: "Completed morning meditation 5 times",
      emoji: "☀️",
      unlocked: true,
      unlockedDate: "Oct 20, 2025",
      rarity: "Common",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 5,
      name: "Gratitude Guardian",
      description: "Wrote 25 gratitude entries",
      emoji: "🌿",
      unlocked: false,
      progress: 18,
      total: 25,
      rarity: "Epic",
      color: "from-teal-500 to-green-500"
    },
    {
      id: 6,
      name: "Meditation Master",
      description: "Completed 50 meditation sessions",
      emoji: "🧘",
      unlocked: false,
      progress: 32,
      total: 50,
      rarity: "Epic",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 7,
      name: "Stress Warrior",
      description: "Tracked stress levels for 30 days",
      emoji: "💪",
      unlocked: false,
      progress: 12,
      total: 30,
      rarity: "Rare",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 8,
      name: "Coin Collector",
      description: "Earned 1000 total coins",
      emoji: "🪙",
      unlocked: false,
      progress: 320,
      total: 1000,
      rarity: "Legendary",
      color: "from-amber-500 to-yellow-500"
    },
    {
      id: 9,
      name: "Support Champion",
      description: "Helped 50 people in community",
      emoji: "🏆",
      unlocked: false,
      progress: 8,
      total: 50,
      rarity: "Legendary",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 10,
      name: "Zen Master",
      description: "Reach Level 10",
      emoji: "🎯",
      unlocked: false,
      progress: 3,
      total: 10,
      rarity: "Legendary",
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 11,
      name: "Night Owl",
      description: "Journal before bed 20 times",
      emoji: "🦉",
      unlocked: false,
      progress: 5,
      total: 20,
      rarity: "Rare",
      color: "from-blue-700 to-indigo-700"
    },
    {
      id: 12,
      name: "Consistency King",
      description: "30-day login streak",
      emoji: "👑",
      unlocked: false,
      progress: 6,
      total: 30,
      rarity: "Legendary",
      color: "from-yellow-600 to-amber-600"
    }
  ];

  const timeline = [
    { date: "Oct 20", event: "Morning Routine Master ☀️", completed: true },
    { date: "Oct 21", event: "First Journal Entry 📝", completed: true },
    { date: "Oct 23", event: "7-Day Streak 🌙", completed: true },
    { date: "Oct 25", event: "Community Helper 💬", completed: true },
    { date: "Oct 28", event: "Unlock Next Badge", completed: false },
    { date: "Nov 2", event: "Reach Level 5", completed: false },
    { date: "Nov 10", event: "Gratitude Guardian 🌿", completed: false }
  ];

  const stats = {
    totalBadges: badges.length,
    unlockedBadges: badges.filter(b => b.unlocked).length,
    commonBadges: badges.filter(b => b.rarity === "Common" && b.unlocked).length,
    rareBadges: badges.filter(b => b.rarity === "Rare" && b.unlocked).length,
    epicBadges: badges.filter(b => b.rarity === "Epic" && b.unlocked).length,
    legendaryBadges: badges.filter(b => b.rarity === "Legendary" && b.unlocked).length
  };

  // Floating sparkles animation
  const FloatingSparkle = ({ delay }) => (
    <motion.div
      className="absolute text-3xl"
      initial={{ y: 0, x: 0, opacity: 0, scale: 0 }}
      animate={{
        y: [-20, -120],
        x: [0, Math.random() * 60 - 30],
        opacity: [0, 1, 0],
        scale: [0, 1, 0.5],
        rotate: [0, 180]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut"
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: '100%'
      }}
    >
      ✨
    </motion.div>
  );

  const getRarityColor = (rarity) => {
    const colors = {
      Common: "text-gray-400",
      Rare: "text-blue-400",
      Epic: "text-purple-400",
      Legendary: "text-yellow-400"
    };
    return colors[rarity] || "text-gray-400";
  };

  return (
    <div className="min-h-screen bg-vyoma-dark">
      <Navbar />

      {/* Floating Sparkles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <FloatingSparkle key={i} delay={i * 0.3} />
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
            <motion.div
              animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block text-8xl mb-6"
            >
              🏆
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Your Journey So Far</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every badge tells a story of growth, persistence, and self-care
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <Card className="text-center bg-gradient-to-br from-vyoma-purple/20 to-vyoma-pink/20 border border-white/10">
              <div className="text-4xl font-bold gradient-text">
                {stats.unlockedBadges}/{stats.totalBadges}
              </div>
              <p className="text-sm text-gray-300 mt-2">Badges Unlocked</p>
            </Card>
            <Card className="text-center bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30">
              <div className="text-4xl font-bold text-yellow-400">
                {stats.legendaryBadges}
              </div>
              <p className="text-sm text-gray-300 mt-2">Legendary 👑</p>
            </Card>
            <Card className="text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <div className="text-4xl font-bold text-purple-400">
                {stats.epicBadges + stats.rareBadges}
              </div>
              <p className="text-sm text-gray-300 mt-2">Epic & Rare 💎</p>
            </Card>
            <Card className="text-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
              <div className="text-4xl font-bold text-blue-400">
                {stats.commonBadges}
              </div>
              <p className="text-sm text-gray-300 mt-2">Common ⭐</p>
            </Card>
          </motion.div>

          {/* Badge Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">
              Your Badge Collection
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    rotate: badge.unlocked ? [0, -5, 5, -5, 5, 0] : 0
                  }}
                  onHoverStart={() => setHoveredBadge(badge.id)}
                  onHoverEnd={() => setHoveredBadge(null)}
                  className="relative"
                >
                  <Card
                    className={`h-full text-center cursor-pointer transition-all ${
                      badge.unlocked
                        ? `bg-gradient-to-br ${badge.color} bg-opacity-20 border-2`
                        : 'bg-white/5 border border-white/10 grayscale opacity-60'
                    }`}
                  >
                    {badge.unlocked && (
                      <motion.div
                        className="absolute -top-2 -right-2 text-2xl"
                        animate={{ rotate: [0, 10, -10, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✓
                      </motion.div>
                    )}
                    <motion.div
                      className="text-6xl mb-3"
                      animate={
                        badge.unlocked && hoveredBadge === badge.id
                          ? { scale: [1, 1.3, 1], rotate: [0, 360] }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                    >
                      {badge.emoji}
                    </motion.div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getRarityColor(
                        badge.rarity
                      )} bg-white/10`}
                    >
                      {badge.rarity}
                    </span>
                    <h3 className="text-base font-bold text-white mt-3 mb-1">
                      {badge.name}
                    </h3>
                    <p className="text-xs text-gray-400 mb-3">
                      {badge.description}
                    </p>
                    {badge.unlocked ? (
                      <p className="text-xs text-vyoma-green font-semibold">
                        Unlocked {badge.unlockedDate}
                      </p>
                    ) : (
                      <div className="mt-2">
                        <div className="w-full bg-white/10 rounded-full h-2 mb-1">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${(badge.progress / badge.total) * 100}%`
                            }}
                            viewport={{ once: true }}
                            className={`bg-gradient-to-r ${badge.color} h-2 rounded-full`}
                          />
                        </div>
                        <p className="text-xs text-gray-400">
                          {badge.progress}/{badge.total}
                        </p>
                      </div>
                    )}

                    {/* Tooltip */}
                    {hoveredBadge === badge.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-vyoma-gray border border-white/20 rounded-lg shadow-xl z-20 whitespace-nowrap"
                      >
                        <p className="text-sm font-semibold text-white">
                          {badge.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {badge.unlocked
                            ? `Unlocked on ${badge.unlockedDate}`
                            : 'Keep Going!'}
                        </p>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                          <div className="border-4 border-transparent border-t-vyoma-gray"></div>
                        </div>
                      </motion.div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Progress Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-vyoma-purple/10 to-vyoma-pink/10 border border-white/20 overflow-hidden">
              <h2 className="text-3xl font-bold gradient-text mb-8 text-center">
                📅 Your Achievement Timeline
              </h2>
              <div className="overflow-x-auto pb-4">
                <div className="flex space-x-4 min-w-max px-4">
                  {timeline.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative flex flex-col items-center"
                    >
                      {/* Timeline dot */}
                      <motion.div
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 ${
                          milestone.completed
                            ? 'bg-gradient-to-br from-vyoma-purple to-vyoma-pink'
                            : 'bg-white/10 border-2 border-dashed border-white/30'
                        }`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {milestone.completed ? '✓' : '🔒'}
                      </motion.div>

                      {/* Content */}
                      <div className="text-center w-40">
                        <p className="text-sm font-semibold text-white mb-1">
                          {milestone.date}
                        </p>
                        <p
                          className={`text-xs ${
                            milestone.completed ? 'text-gray-300' : 'text-gray-500'
                          }`}
                        >
                          {milestone.event}
                        </p>
                      </div>

                      {/* Line connecting to next */}
                      {index < timeline.length - 1 && (
                        <div
                          className={`absolute top-8 left-full w-4 h-0.5 ${
                            milestone.completed ? 'bg-vyoma-purple' : 'bg-white/20'
                          }`}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-gray-400 italic">
                  Scroll right to see upcoming milestones →
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Keep Growing Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-vyoma-purple via-vyoma-pink to-vyoma-blue border-0">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                🌱
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Keep Growing — New Badges Coming Soon!
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Your journey is just beginning. Each step forward unlocks new achievements
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm"
                >
                  <p className="text-white font-semibold">
                    Next Badge in {badges.find(b => !b.unlocked)?.progress || 0} actions
                  </p>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Achievements;
