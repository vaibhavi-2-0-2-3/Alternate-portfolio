const emojiMap = {
  "happy": ["😊", "😃", "😄", "🙂", "😁"],
  "sad": ["😢", "😭", "😔", "😞", "☹️"],
  "love": ["❤️", "😍", "🥰", "💕", "💗"],
  "angry": ["😠", "😡", "🤬", "😤", "💢"],
  "surprised": ["😮", "😯", "😲", "😱", "🤯"],
  "laugh": ["😂", "🤣", "😅", "😆", "😝"],
  "cool": ["😎", "🤩", "🔥", "✨", "💫"],
  "sleep": ["😴", "💤", "🥱", "😪"],
  "food": ["🍕", "🍔", "🍟", "🌮", "🍜"],
  "animal": ["🐶", "🐱", "🐼", "🦁", "🐯"],
  "nature": ["🌺", "🌸", "🌳", "🌞", "⭐"],
  "sport": ["⚽", "🏀", "🎾", "⚾", "🏈"],
  "music": ["🎵", "🎶", "🎸", "🎹", "🎼"],
  "weather": ["☀️", "🌧️", "⛈️", "❄️", "🌈"],
  "travel": ["✈️", "🚗", "🚂", "🚢", "🗺️"],
  "work": ["💻", "📱", "📚", "✏️", "💼"],
  "celebration": ["🎉", "🎊", "🎈", "🎂", "🎁"],
  "think": ["🤔", "💭", "💡", "🧐"],
  "hello": ["👋", "🤝", "🙋‍♂️", "🙋‍♀️"],
  "bye": ["👋", "✌️", "💫", "🌟"]
};

const keywords = {
  "happy": ["joy", "cheerful", "glad", "pleased", "content"],
  "sad": ["unhappy", "depressed", "crying", "tears", "upset"],
  "love": ["heart", "romance", "affection", "loving", "adore"],
  "angry": ["mad", "furious", "rage", "annoyed", "irritated"],
  "surprised": ["shocked", "amazed", "astonished", "wow", "unexpected"],
  "laugh": ["funny", "haha", "lol", "hilarious", "rofl"],
  "cool": ["awesome", "amazing", "great", "wonderful", "fantastic"],
  "sleep": ["tired", "sleepy", "rest", "nap", "bed"],
  "food": ["eat", "hungry", "meal", "snack", "cooking"],
  "animal": ["pet", "dog", "cat", "wild", "zoo"],
  "nature": ["flower", "tree", "plant", "sun", "garden"],
  "sport": ["game", "ball", "play", "exercise", "athletic"],
  "music": ["song", "singing", "melody", "rhythm", "dance"],
  "weather": ["sun", "rain", "storm", "snow", "rainbow"],
  "travel": ["trip", "journey", "vacation", "holiday", "adventure"],
  "work": ["job", "office", "study", "business", "professional"],
  "celebration": ["party", "birthday", "congrats", "congratulations", "event"],
  "think": ["thought", "idea", "wondering", "curious", "contemplating"],
  "hello": ["hi", "hey", "greet", "welcome", "greeting"],
  "bye": ["goodbye", "farewell", "see you", "later", "cya"]
};

export const findEmoji = (text: string): string => {
  const lowercaseText = text.toLowerCase();

  // Direct category match
  for (const [category, emojis] of Object.entries(emojiMap)) {
    if (lowercaseText.includes(category)) {
      return emojis[Math.floor(Math.random() * emojis.length)];
    }
  }

  // Keyword match
  for (const [category, keywordList] of Object.entries(keywords)) {
    if (keywordList.some(keyword => lowercaseText.includes(keyword))) {
      return emojiMap[category as keyof typeof emojiMap][
        Math.floor(Math.random() * emojiMap[category as keyof typeof emojiMap].length)
      ];
    }
  }

  // Fallback for no match
  const allCategories = Object.keys(emojiMap);
  const randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
  return emojiMap[randomCategory as keyof typeof emojiMap][0];
};