import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      message: "Today was tough, but I made it through. Sometimes just surviving the day is enough. 💪",
      emoji: "💪",
      timestamp: "2 hours ago",
      reactions: { hearts: 24, hugs: 18 },
      username: "Anonymous User"
    },
    {
      id: 2,
      message: "I talked to someone about my anxiety for the first time. It felt scary but liberating. 🦋",
      emoji: "🦋",
      timestamp: "4 hours ago",
      reactions: { hearts: 45, hugs: 32 },
      username: "Anonymous User"
    },
    {
      id: 3,
      message: "Small wins matter. I got out of bed, showered, and made breakfast. That's huge for me. ☀️",
      emoji: "☀️",
      timestamp: "6 hours ago",
      reactions: { hearts: 67, hugs: 41 },
      username: "Anonymous User"
    },
    {
      id: 4,
      message: "To anyone struggling tonight: You are not alone. Tomorrow is a new day. 🌙",
      emoji: "🌙",
      timestamp: "8 hours ago",
      reactions: { hearts: 89, hugs: 56 },
      username: "Anonymous User"
    },
    {
      id: 5,
      message: "Started journaling today. It's messy and emotional but I think it's helping. 📝",
      emoji: "📝",
      timestamp: "12 hours ago",
      reactions: { hearts: 52, hugs: 38 },
      username: "Anonymous User"
    },
    {
      id: 6,
      message: "Remember: Progress isn't linear. Bad days don't erase good days. Keep going. 🌸",
      emoji: "🌸",
      timestamp: "1 day ago",
      reactions: { hearts: 103, hugs: 78 },
      username: "Anonymous User"
    }
  ]);

  const [newPost, setNewPost] = useState('');

  const topSupporters = [
    { name: "Sarah M.", avatar: "🌟", supportCount: 156, badge: "Champion" },
    { name: "Alex K.", avatar: "💫", supportCount: 142, badge: "Guardian" },
    { name: "Jordan L.", avatar: "✨", supportCount: 128, badge: "Helper" },
    { name: "Riley P.", avatar: "🌈", supportCount: 115, badge: "Friend" }
  ];

  const upliftingPosts = [
    { title: "Most Hearts", count: 203, emoji: "❤️" },
    { title: "Most Shared", count: 156, emoji: "🔄" },
    { title: "Most Impactful", count: 189, emoji: "⭐" }
  ];

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        message: newPost,
        emoji: "💬",
        timestamp: "Just now",
        reactions: { hearts: 0, hugs: 0 },
        username: "Anonymous User"
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const handleReaction = (postId, type) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          reactions: {
            ...post.reactions,
            [type]: post.reactions[type] + 1
          }
        };
      }
      return post;
    }));
  };

  // Floating hearts animation
  const FloatingHeart = ({ delay }) => (
    <motion.div
      className="absolute text-4xl opacity-20"
      initial={{ y: 0, x: 0, opacity: 0 }}
      animate={{
        y: [-20, -100],
        x: [0, Math.random() * 50 - 25],
        opacity: [0, 0.3, 0]
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
      ❤️
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-vyoma-dark">
      <Navbar />
      
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.5} />
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
              <span className="gradient-text">You're Never Alone</span> 💬
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A safe space to share, support, and connect with others on their mental health journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Feed - Left/Center */}
            <div className="lg:col-span-2 space-y-6">
              {/* Post Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="sticky top-24 z-20">
                  <h2 className="text-2xl font-bold mb-4 gradient-text">
                    Share Your Thoughts
                  </h2>
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Your story matters. Share anonymously..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:border-vyoma-purple resize-none h-32"
                  />
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-400">
                      🔒 Your identity is protected
                    </p>
                    <Button onClick={handlePostSubmit}>
                      Post Anonymously
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* Posts Feed */}
              <div className="space-y-4">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card hover className="border border-white/5">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">{post.emoji}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-semibold text-white">
                                {post.username}
                              </p>
                              <p className="text-sm text-gray-400">
                                {post.timestamp}
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-200 leading-relaxed mb-4">
                            {post.message}
                          </p>
                          <div className="flex items-center space-x-6">
                            <button
                              onClick={() => handleReaction(post.id, 'hearts')}
                              className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors"
                            >
                              <span className="text-xl">❤️</span>
                              <span className="text-sm">{post.reactions.hearts}</span>
                            </button>
                            <button
                              onClick={() => handleReaction(post.id, 'hugs')}
                              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                            >
                              <span className="text-xl">🤗</span>
                              <span className="text-sm">{post.reactions.hugs}</span>
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors text-sm">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center py-8"
              >
                <Button variant="secondary">
                  Load More Stories
                </Button>
              </motion.div>
            </div>

            {/* Sidebar - Right */}
            <div className="space-y-6">
              {/* Top Supporters */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-24"
              >
                <Card>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-2">❤️</span>
                    Top Supporters
                  </h3>
                  <div className="space-y-4">
                    {topSupporters.map((supporter, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{supporter.avatar}</div>
                          <div>
                            <p className="font-semibold text-white">
                              {supporter.name}
                            </p>
                            <p className="text-xs text-gray-400">
                              {supporter.badge}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-vyoma-purple font-bold">
                            {supporter.supportCount}
                          </p>
                          <p className="text-xs text-gray-400">supports</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                {/* Most Uplifting Posts */}
                <Card className="mt-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="mr-2">🌸</span>
                    Most Uplifting
                  </h3>
                  <div className="space-y-4">
                    {upliftingPosts.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-vyoma-purple/20 to-vyoma-pink/20 rounded-lg border border-white/10"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{stat.emoji}</span>
                          <p className="font-semibold text-white">
                            {stat.title}
                          </p>
                        </div>
                        <p className="text-2xl font-bold gradient-text">
                          {stat.count}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                {/* Community Guidelines */}
                <Card className="mt-6 bg-vyoma-purple/10 border border-vyoma-purple/20">
                  <h3 className="text-lg font-bold mb-3 text-vyoma-purple">
                    💡 Community Guidelines
                  </h3>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Be kind and supportive</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Respect anonymity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>No judgment zone</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>Share hope & encouragement</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
