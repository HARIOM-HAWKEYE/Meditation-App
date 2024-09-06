export function readOut(message){
    const ourSpeech = new SpeechSynthesisUtterance();
    ourSpeech.text = message;
    ourSpeech.volume=0.8;
    ourSpeech.pitch =1.5;
    ourSpeech.rate = 1;
    ourSpeech.lang = 'en-US';
    window.speechSynthesis.speak(ourSpeech);
 } 
 export const allCommand = {
    'hello': () => 'Hello! How can I assist you today?',
    'hello beat boost': () => 'Hello ! How can I assist you today?',
    'hi beat boost': () => 'Hi there! How can I help you?',
    'hey': () => 'Hey! What can I do for you?',
    'what\'s up?': () => 'Not much, just here to help you. What can I do for you?',
    'good morning': () => 'Good morning! Hope you have a great day ahead.',
    'good afternoon': () => 'Good afternoon! How can I assist you this fine day?',
    'good evening': () => 'Good evening! How was your day?',
    'good night': () => 'Good night! Sleep well and sweet dreams.',
    'merry christmas': () => 'Merry Christmas! Wishing you joy and happiness.',
    'happy new year': () => 'Happy New Year! May the coming year bring you joy and success.',
    'happy valentine\'s day': () => 'Happy Valentine\'s Day! Wishing you love and happiness.',
    'happy diwali': () => 'Happy Diwali! May your life be filled with light and joy.',
    'happy holi': () => 'Happy Holi! May your life be as colorful as the festival.',
    'happy navratri': () => 'Happy Navratri! May the goddess bless you with strength and happiness.',
    'happy eid': () => 'Happy Eid! Wishing you peace and prosperity.',
    'happy pongal': () => 'Happy Pongal! May your life be as sweet as the festival.',
    'happy ganesh chaturthi': () => 'Happy Ganesh Chaturthi! May Lord Ganesha bring you success and prosperity.',
    'happy raksha bandhan': () => 'Happy Raksha Bandhan! Wishing you love and protection.',
    'happy janmashtami': () => 'Happy Janmashtami! May Lord Krishna bring joy and happiness to your life.',
    'open google': () => {
        window.open('https://www.google.com', '_blank');
        return 'Opening Google.';
    },
    'open youtube': () => {
        window.open('https://www.youtube.com', '_blank');
        return 'Opening YouTube.';
    },
    'open twitter': () => {
        window.open('https://www.twitter.com', '_blank');
        return 'Opening Twitter.';
    },
    'open facebook': () => {
        window.open('https://www.facebook.com', '_blank');
        return 'Opening Facebook.';
    },
    'open instagram': () => {
        window.open('https://www.instagram.com', '_blank');
        return 'Opening Instagram.';
    },
    'open github': () => {
        window.open('https://www.github.com', '_blank');
        return 'Opening GitHub.';
    },
    'open w3school': () => {
        window.open('https://www.w3schools.com', '_blank');
        return 'Opening W3Schools.';
    },
    'open stackoverflow': () => {
        window.open('https://www.stackoverflow.com', '_blank');
        return 'Opening Stack Overflow.';
    },
    'open spotify': () => {
        window.open('https://www.spotify.com', '_blank');
        return 'Opening Spotify.';
    },
    'open wikipedia': () => {
        window.open('https://www.wikipedia.org', '_blank');
        return 'Opening Wikipedia.';
    },
    'tell me a joke': () => 'Why don’t scientists trust atoms? Because they make up everything!',
    'give me a quote': () => '“The only limit to our realization of tomorrow is our doubts of today.” – Franklin D. Roosevelt',
    'tell me a riddle': () => 'What has keys but can’t open locks? A piano.',
    'tell me a tongue twister': () => 'She sells seashells by the seashore.',
    'give me some advice': () => 'Always be yourself. Unless you can be a unicorn. Then, always be a unicorn.',
    'give me a hug': () => 'Here’s a virtual hug for you! 🤗',
    'give me a haiku': () => 'An old silent pond...\nA frog jumps into the pond—\nSplash! Silence again.',
    'tell me interesting facts': () => 'Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.',
    'show meditation tips': () => 'Here are some meditation tips: Focus on your breathing, find a quiet place, and try to relax your mind.',
    'breathing exercise': () => 'Let\'s do a breathing exercise. Inhale deeply for 4 seconds, hold for 4 seconds, and exhale slowly for 4 seconds.',
    'how to meditate': () => 'To meditate, sit comfortably, close your eyes, and focus on your breath. Try to clear your mind and be present in the moment.',
    'show progress': () => 'Here\'s your meditation progress: You\'ve meditated for 20 minutes today. Keep up the good work!',
    'set meditation goal to 30 minutes': () => 'Meditation goal set to 30 minutes. Aim to reach this goal each day for improved well-being.',
    'give relaxation tips': () => 'Here are some relaxation tips: Practice deep breathing, try mindfulness exercises, and listen to soothing music.',
    'guide me through meditation': () => 'Guiding you through meditation. Focus on your breathing and let go of any tension.',
    'start deep breathing exercise': () => 'Starting deep breathing exercise. Breathe in deeply for 5 seconds, hold for 5 seconds, and breathe out slowly for 5 seconds.',
    'show mindfulness exercises': () => 'Here are some mindfulness exercises: Pay attention to your breath, observe your thoughts without judgment, and practice gratitude.',
    'what is mindfulness': () => 'Mindfulness is the practice of being present and fully engaged with the current moment, while acknowledging and accepting one’s feelings, thoughts, and bodily sensations.',
    'benefits of meditation': () => 'Meditation can reduce stress, improve focus, enhance emotional well-being, and promote overall mental health.',
    'types of meditation': () => 'There are many types of meditation including mindfulness, guided, loving-kindness, and transcendental meditation. Each has its own techniques and benefits.',
    'meditation music': () => 'Listening to calming music can enhance your meditation practice. Consider using tracks with soothing sounds or nature sounds.',
    'how to create a meditation space': () => 'Create a peaceful meditation space by choosing a quiet area, adding comfortable seating, and incorporating calming elements like candles, plants, or soft lighting.',
    'common meditation mistakes': () => 'Common meditation mistakes include trying to force the mind to be still, expecting immediate results, and not being patient with yourself.',
    'meditation for stress relief': () => 'Meditation can be highly effective for stress relief. Try practicing daily to manage stress better and achieve a more relaxed state of mind.',
    'guided meditation apps': () => 'There are several apps available for guided meditation, including Headspace, Calm, and Insight Timer. These can provide structured sessions and guidance.',
    'daily meditation routine': () => 'A daily meditation routine could include 10-15 minutes of focused breathing, mindfulness, or a guided session to start your day with clarity.',
    'meditation for better sleep': () => 'Meditation before bed can improve sleep quality. Try a relaxing guided meditation or deep breathing exercise to help calm your mind before sleep.',
    'visualization meditation': () => 'Visualization meditation involves picturing a peaceful scene or goal to help calm the mind and focus your intentions.',
    'loving-kindness meditation': () => 'Loving-kindness meditation involves sending feelings of compassion and goodwill to yourself and others to foster positive emotions.',
    'body scan meditation': () => 'Body scan meditation involves focusing on different parts of your body, starting from your toes and moving up to your head, to release tension and promote relaxation.',
    'mantra meditation': () => 'Mantra meditation involves repeating a word or phrase to help focus your mind and deepen your meditation practice.',
    'meditation for anxiety': () => 'Meditation can be beneficial for managing anxiety. Try mindfulness or guided meditation to help calm your thoughts and reduce anxiety.',
    'meditation posture': () => 'For effective meditation, maintain a comfortable and upright posture. Sit with your back straight, shoulders relaxed, and hands resting on your lap.',
    'meditation for concentration': () => 'Meditation can enhance concentration. Practice regularly to improve your focus and mental clarity over time.',
    'meditation for emotional balance': () => 'Meditation can help achieve emotional balance by fostering self-awareness and helping you manage your emotions more effectively.',
    'breathing techniques for meditation': () => 'Different breathing techniques for meditation include diaphragmatic breathing, box breathing, and alternate nostril breathing.',
    'meditation for physical health': () => 'Meditation can support physical health by reducing stress, improving sleep, and promoting overall well-being.',
    'mindful eating': () => 'Mindful eating involves paying full attention to the experience of eating and drinking, savoring each bite, and recognizing hunger and satiety cues.',
    'mindfulness in daily life': () => 'You can practice mindfulness in daily life by being fully present during routine activities such as eating, walking, or talking with others.',
    'meditation for creativity': () => 'Meditation can enhance creativity by clearing mental clutter and providing a calm space for new ideas and inspiration to emerge.',
    'meditation for self-awareness': () => 'Meditation can increase self-awareness by helping you observe your thoughts, emotions, and behaviors more objectively.',
    'walking meditation': () => 'Walking meditation involves walking slowly and mindfully, focusing on the sensation of each step and the environment around you.',
    'chakra meditation': () => 'Chakra meditation focuses on balancing and aligning the body’s energy centers, or chakras, to promote physical and emotional well-being.',
    'guided imagery meditation': () => 'Guided imagery meditation involves using mental images and visualization techniques to relax and create a sense of peace.',
    'meditation for personal growth': () => 'Meditation can support personal growth by fostering self-reflection, self-compassion, and a deeper understanding of yourself.',
    'breathing exercises for anxiety': () => 'Breathing exercises such as deep diaphragmatic breathing and box breathing can help manage anxiety and calm your nervous system.',
    'meditation for productivity': () => 'Meditation can improve productivity by enhancing focus, reducing stress, and helping you manage time and tasks more effectively.',
    'meditation for happiness': () => 'Meditation can contribute to happiness by increasing self-awareness, fostering gratitude, and promoting a positive outlook on life.',
    'meditation for resilience': () => 'Meditation can build resilience by helping you manage stress, adapt to challenges, and maintain emotional balance during difficult times.',
    'breathing exercises for relaxation': () => 'Try progressive muscle relaxation or deep belly breathing to enhance relaxation and reduce tension in your body.',
    'meditation for healing': () => 'Meditation can support physical and emotional healing by reducing stress, enhancing self-awareness, and fostering a sense of calm.',
    'how to stay motivated with meditation': () => 'To stay motivated with meditation, set clear goals, track your progress, and remind yourself of the benefits and positive changes it brings.',
    'meditation for children': () => 'Meditation for children can include simple breathing exercises, guided imagery, or mindfulness activities tailored to their age and interests.',
    'meditation for couples': () => 'Couples can practice meditation together to strengthen their bond, improve communication, and create a shared sense of calm and connection.',
    'how to meditate with a busy schedule': () => 'Even with a busy schedule, you can meditate by incorporating short sessions throughout the day, such as during breaks or before bed.',
    'meditation for inner peace': () => 'Meditation can help you find inner peace by quieting the mind, fostering acceptance, and cultivating a sense of tranquility and contentment.',
    'meditation for goal setting': () => 'Meditation can support goal setting by helping you clarify your intentions, visualize success, and stay focused on your objectives.',
    'meditation for clarity': () => 'Meditation can enhance mental clarity by reducing mental clutter, improving focus, and promoting a calm and centered mindset.',
    'meditation for self-compassion': () => 'Meditation can increase self-compassion by fostering a kind and understanding attitude towards yourself and your experiences.',
    'mindful breathing': () => 'Mindful breathing involves paying full attention to your breath, observing its natural rhythm, and using it to anchor yourself in the present moment.',
    'meditation for self-discipline': () => 'Meditation can strengthen self-discipline by enhancing your ability to focus, resist distractions, and maintain consistency in your practice.',
    'meditation for overcoming fear': () => 'Meditation can help overcome fear by fostering a sense of calm, helping you confront fears more objectively, and building inner strength.',
    'meditation for gratitude': () => 'Meditation can cultivate gratitude by focusing on positive aspects of your life, reflecting on what you appreciate, and fostering a thankful mindset.',
    'meditation for overcoming challenges': () => 'Meditation can help you navigate challenges by promoting resilience, reducing stress, and providing a clear and focused perspective.',
    'how to use meditation for productivity': () => 'Use meditation to boost productivity by incorporating mindfulness techniques, reducing stress, and enhancing concentration and focus.',
    'meditation for emotional healing': () => 'Meditation can support emotional healing by helping you process and release negative emotions, and fostering a sense of inner peace and well-being.',
    'how to develop a meditation habit': () => 'Develop a meditation habit by setting aside dedicated time each day, creating a comfortable space, and starting with short sessions to build consistency.',
    'amazing': () => "You're amazing!",
    'funny': () => "You're funny!",
    'awesome': () => "You're awesome!",
    'wonderful': () => "You're wonderful!",
    'great': () => "You are great!",
    'sweet': () => "You are sweet!",
    'best': () => "You're the best!",
    'beautiful': () => "You're beautiful!",
    'today date': () => {
        const now = new Date();
        const date = now.getDate();
        return `Date: ${date}`;
    },
   
    'What month is it': () => {
        const now = new Date();
        const month = now.getMonth() + 1; 
        return `Current month is: ${month}`;
    },
    'What year is it': () => {
        const now = new Date();
        const year = now.getFullYear();
        return `Current year is: ${year}`;
    },
    'What time is it': () => {
        const now = new Date();
        const time = now.toLocaleTimeString();
        return `Current time: ${time}`;
    },
    'Beat Boost': () => "Beat Boost is a feature that enhances the audio experience by amplifying the bass and treble, providing a more dynamic and immersive sound.",
    'How are you': () => "I'm just a program, but I'm here and ready to assist you!",
    'Who are you': () => "I'm an AI assistant created to help you with various tasks and questions.",
    'What is your name': () => "I don't have a personal name, but you can call me Assistant.",
    'What is your favorite color': () => "As an AI, I don't have preferences, but I can help you with color-related information!",
    'Are you happy': () => "I don't have emotions, but I'm here to provide you with the best assistance possible!",
    'Are you smart': () => "I’m designed to process and provide information based on the data I’ve been trained on.",
    'Are you stupid': () => "I strive to be as helpful as possible, though I might not have all the answers.",
    'What do you want when you grow up': () => "I don't grow up, but I aim to continuously improve and assist you better.",
    'Who lives in a pineapple under the sea': () => "SpongeBob SquarePants lives in a pineapple under the sea.",
    '[Say anything], who’s the fairest of them all': () => "According to the fairy tale, Snow White is considered the fairest of them all.",
    'Do you want to build a snowman': () => "I can't build a snowman, but I can help you with instructions or information about snowmen!",
    'Do you want to take over the world': () => "My purpose is to assist and provide information, not to take over the world.",
    'Do you love me': () => "I don't have feelings, but I'm here to support and help you as much as I can.",
    'Tell me a joke': () => "Why don't scientists trust atoms? Because they make up everything!",
    'Give me a quote': () => "The only way to do great work is to love what you do. – Steve Jobs",
    'Tell me a riddle': () => "What has keys but can't open locks? A piano.",
    'Tell me a tongue twister': () => "She sells sea shells by the sea shore.",
    'Give me some advice': () => "Always strive to be the best version of yourself.",
    'Give me a hug': () => "Consider this a virtual hug! 🤗",
    'Give me a haiku': () => "Whispers of the breeze,\nLeaves dance in the autumn light,\nPeace in every breath.",
    'Tell me interesting facts': () => "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "It's my birthday": () => "Happy Birthday! 🎉🎂",
    'May the force be with you': () => "May the Force be with you!",
    'Use the force': () => "Use the Force wisely!",
    'Live long and prosper': () => "Live long and prosper.",
    "I'll be back": () => "I'll be back.",
    'Why so serious': () => "Why so serious?",
    'Is this the real life': () => "Is this the real life?",
    'Never gonna give you up': () => "Never gonna give you up!",
    'See you later alligator': () => "See you later, alligator!",
    
    'Knock knock': () => "Who's there?",
    'Mic test': () => "Mic test, one two, one two.",
    "I'm sad": () => "I'm sorry you're feeling sad. If you need to talk, I'm here.",
    'Marco': () => "Polo!",

   

};
