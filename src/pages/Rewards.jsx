import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';

const Rewards = () => {
  const [coins, setCoins] = useState(320);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);

  const dailyChallenges = [
    {
      id: 1,
      title: "Write a Journal Entry",
      description: "Share your thoughts and feelings",
      coins: 10,
      emoji: "📝",
      completed: true
    },
    {
      id: 2,
      title: "Complete a Meditation",
      description: "5 minutes of mindfulness",
      coins: 20,
      emoji: "🧘",
      completed: false
    },
    {
      id: 3,
      title: "Join Community Discussion",
      description: "Support or share in community",
      coins: 15,
      emoji: "💬",
      completed: true
    },
    {
      id: 4,
      title: "Add Gratitude Entry",
      description: "Write what you're grateful for",
      coins: 10,
      emoji: "🌿",
      completed: false
    },
    {
      id: 5,
      title: "Take Stress Assessment",
      description: "Check in with yourself",
      coins: 25,
      emoji: "📊",
      completed: false
    },
    {
      id: 6,
      title: "Daily Login Streak",
      description: "Come back tomorrow",
      coins: 5,
      emoji: "🔥",
      completed: true
    }
  ];

  const storeItems = [
    {
      id: 1,
      name: "Calm Wallpaper Pack",
      description: "Beautiful nature backgrounds",
      coins: 200,
      emoji: "🌿",
      category: "Visual"
    },
    {
      id: 2,
      name: "Unlock Premium Meditation",
      description: "Access 10+ guided sessions",
      coins: 350,
      emoji: "🧘",
      category: "Content"
    },
    {
      id: 3,
      name: "Custom Theme Colors",
      description: "Personalize your experience",
      coins: 150,
      emoji: "🎨",
      category: "Visual"
    },
    {
      id: 4,
      name: "Advanced Analytics",
      description: "Deep insights into your journey",
      coins: 400,
      emoji: "📈",
      category: "Feature"
    },
    {
      id: 5,
      name: "Exclusive Journal Prompts",
      description: "50+ thoughtful questions",
      coins: 180,
      emoji: "✍️",
      category: "Content"
    },
    {
      id: 6,
      name: "Mood Sticker Pack",
      description: "Express yourself with style",
      coins: 120,
      emoji: "😊",
      category: "Visual"
    },
    {
      id: 7,
      name: "Priority Support",
      description: "Get help when you need it",
      coins: 500,
      emoji: "🎯",
      category: "Feature"
    },
    {
      id: 8,
      name: "Breathing Exercise Library",
      description: "Techniques for calm",
      coins: 250,
      emoji: "🌬️",
      category: "Content"
    }
  ];

  const levelInfo = {
    current: 3,
    name: "Mind Explorer",
    nextLevel: "Zen Seeker",
    progress: 65,
    totalXP: 650,
    nextLevelXP: 1000
  };

  const handleRewardClick = (item) => {
    setSelectedReward(item);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Floating coins animation
  const FloatingCoin = ({ delay }) => (
    <motion.div
      className="absolute text-4xl"
      initial={{ y: 0, x: 0, opacity: 0, rotate: 0 }}
      animate={{
        y: [-20, -150],
        x: [0, Math.random() * 100 - 50],
        opacity: [0, 0.6, 0],
        rotate: [0, 360]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut"
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: '100%'
      }}
    >
      🪙
    </motion.div>
  );

  // Confetti animation
  const Confetti = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          initial={{
            x: '50vw',
            y: '50vh',
            opacity: 1,
            scale: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 1,
            rotate: Math.random() * 360
          }}
          transition={{
            duration: 2,
            ease: "easeOut"
          }}
        >
          {['🎉', '✨', '🌟', '💫', '⭐'][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-vyoma-dark">
      <Navbar />

      {/* Floating Coins Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <FloatingCoin key={i} delay={i * 0.4} />
        ))}
      </div>

      {/* Confetti */}
      {showConfetti && <Confetti />}

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
              <span className="gradient-text">Your MindCoins</span> 🌟
            </h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-vyoma-purple via-vyoma-pink to-vyoma-blue p-1 rounded-3xl">
                <div className="bg-vyoma-dark rounded-3xl px-12 py-6">
                  <motion.p
                    className="text-6xl font-bold gradient-text"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🪙 {coins}
                  </motion.p>
                  <p className="text-gray-400 mt-2">Your Balance</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Daily Challenges Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-8 text-center">
              ⚡ Daily Challenges
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dailyChallenges.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card
                    hover
                    className={`h-full ${
                      challenge.completed
                        ? 'bg-gradient-to-br from-vyoma-green/20 to-vyoma-teal/20 border border-vyoma-green/30'
                        : 'bg-gradient-to-br from-white/5 to-white/10 border border-white/10'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-5xl">{challenge.emoji}</span>
                      {challenge.completed && (
                        <motion.span
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="text-3xl"
                        >
                          ✓
                        </motion.span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {challenge.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">🪙</span>
                        <span className="text-xl font-bold text-vyoma-green">
                          +{challenge.coins}
                        </span>
                      </div>
                      {challenge.completed ? (
                        <span className="text-sm text-vyoma-green font-semibold">
                          Completed!
                        </span>
                      ) : (
                        <Button variant="secondary" className="text-sm py-2 px-4">
                          Start
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Progress & Levels Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-vyoma-purple/20 via-vyoma-pink/20 to-vyoma-blue/20 border border-white/20">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold gradient-text mb-2">
                  Level {levelInfo.current}: {levelInfo.name}
                </h2>
                <p className="text-gray-400">
                  Next Level: {levelInfo.nextLevel}
                </p>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>{levelInfo.totalXP} XP</span>
                  <span>{levelInfo.nextLevelXP} XP</span>
                </div>
                <div className="relative h-8 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${levelInfo.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-vyoma-purple via-vyoma-pink to-vyoma-blue rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                    {levelInfo.progress}%
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <p className="text-3xl font-bold gradient-text">
                      {levelInfo.current}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Current Level</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <p className="text-3xl font-bold gradient-text">
                      {coins}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Total Coins</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <p className="text-3xl font-bold gradient-text">
                      {levelInfo.totalXP}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Total XP</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Redeem Store Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold gradient-text mb-4">
                🛍️ Rewards Store
              </h2>
              <p className="text-gray-400">
                Spend your coins on exclusive rewards and features
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {storeItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <Card
                    hover
                    className="h-full cursor-pointer bg-gradient-to-br from-white/5 to-white/10 border border-white/10"
                    onClick={() => handleRewardClick(item)}
                  >
                    <div className="text-center">
                      <motion.div
                        className="text-6xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        {item.emoji}
                      </motion.div>
                      <span className="text-xs px-3 py-1 bg-vyoma-purple/30 text-vyoma-purple rounded-full">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-3 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-center space-x-2 p-3 bg-vyoma-dark/50 rounded-xl">
                        <span className="text-2xl">🪙</span>
                        <span className="text-xl font-bold text-vyoma-green">
                          {item.coins}
                        </span>
                      </div>
                      {coins >= item.coins ? (
                        <Button className="w-full mt-4 text-sm py-2">
                          Redeem Now
                        </Button>
                      ) : (
                        <Button
                          variant="secondary"
                          className="w-full mt-4 text-sm py-2 opacity-50 cursor-not-allowed"
                          disabled
                        >
                          Need {item.coins - coins} more
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Earn More Coins CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-vyoma-purple via-vyoma-pink to-vyoma-blue border-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Keep Growing Your Coin Stash! 💰
              </h2>
              <p className="text-lg text-white/80 mb-6">
                Complete daily challenges, engage with the community, and unlock amazing rewards
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" className="bg-white text-vyoma-purple hover:bg-gray-100">
                  View All Challenges
                </Button>
                <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  Earning Guide
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Reward Modal */}
      <AnimatePresence>
        {selectedReward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedReward(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-vyoma-gray border border-white/20 rounded-2xl p-8 max-w-md w-full text-center"
            >
              <motion.div
                className="text-8xl mb-6"
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {selectedReward.emoji}
              </motion.div>
              <h2 className="text-3xl font-bold gradient-text mb-4">
                Coming Soon! 🎉
              </h2>
              <p className="text-xl text-white mb-2">
                {selectedReward.name}
              </p>
              <p className="text-gray-400 mb-6">
                We're working hard to bring you amazing rewards. Stay tuned!
              </p>
              <div className="flex items-center justify-center space-x-2 mb-6 p-4 bg-white/5 rounded-xl">
                <span className="text-3xl">🪙</span>
                <span className="text-2xl font-bold text-vyoma-green">
                  {selectedReward.coins} coins
                </span>
              </div>
              <Button onClick={() => setSelectedReward(null)} className="w-full">
                Got It!
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Rewards;
