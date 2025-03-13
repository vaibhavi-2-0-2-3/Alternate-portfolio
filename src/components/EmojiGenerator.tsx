import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { findEmoji } from '../utils/EnojiSearch';

const EmojiGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const [emoji, setEmoji] = useState('😊');
  const [isLoading, setIsLoading] = useState(false);

  const generateEmoji = () => {
    if (!text.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      const result = findEmoji(text);
      setEmoji(result);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && text.trim()) {
      generateEmoji();
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex-1 flex items-center justify-center w-full">
        <motion.div
          animate={{
            scale: isLoading ? [1, 1.1, 1] : 1,
            rotate: isLoading ? [0, 360] : 0
          }}
          transition={{
            duration: 1,
            repeat: isLoading ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="text-8xl select-none cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => !isLoading && generateEmoji()}
        >
          {emoji}
        </motion.div>
      </div>
      <div className="w-full space-y-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type something"
          className={`w-full text-center px-4 py-2 rounded-lg bg-transparent border ${isLoading ? 'opacity-50' : ''
            } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          disabled={isLoading}
        />
        <button
          onClick={generateEmoji}
          disabled={isLoading || !text.trim()}
          className={`w-full px-4 py-2 rounded-lg transition-all ${isLoading || !text.trim()
            ? 'bg-gray-600 cursor-not-allowed opacity-50'
            : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg'
            }`}
        >
          Generate Emoji
        </button>
      </div>
    </div>
  );
};

export default EmojiGenerator;