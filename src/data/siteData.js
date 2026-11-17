export const site = {
  title: 'A Little World Made Just for You',
  tagline: 'Two Colours, One Love Story.',

  // EDIT: the name shown in the small top-bar logo
  navBrand: 'Our Little World',

  // EDIT: his nickname (shown big on the welcome screen)
  nickname: 'raji pa',

  // EDIT: your name (used in sign-offs)
  fromName: 'anu',

  // EDIT: HIS BIRTHDAY (PLACEHOLDER DATE - CHANGE IT!)
  // Format: 'YYYY-MM-DDTHH:MM:SS' using the time on HIS device.
  // Example for 25 March 2027 at midnight: '2027-03-25T00:00:00'
  birthdayDate: "2026-11-18T00:00:00",

  // Sections shown in the navigation bar (ids must match section ids)
  nav: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'celebrate', label: 'Celebrate' },
    { id: 'story', label: 'Our Story' },
    { id: 'memories', label: 'Memories' },
    { id: 'letters', label: 'Letters' },
    { id: 'reasons', label: 'Reasons' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'letter', label: 'My Letter' },
    { id: 'secret', label: 'Finale' },
  ],

  // ---------------- WELCOME SECTION ----------------
  hero: {
    eyebrow: 'Someone very special has a birthday...',
    greeting: 'Hello,',
    // EDIT: the first message he reads
    message:'My favourite person, my happiest place, and my forever kind of love. This little website holds a big piece of my heart.',
    countdownLabel: 'Counting down to your day',
    countdownDone: 'Today is your day, and this whole world is for you.',
    openButton: 'Open Your Surprise',
    ribbon: 'Happy Birthday',
    // EDIT: put your favourite photo at public/photos/hero.jpg
    photo: '/photos/hero.jpg',
    photoAlt: 'Our favourite photo together',
    photoLabel: 'Our favourite photo goes here',
    envelopeHint: 'A little secret is waiting inside. Tap the envelope.',
    heartsHint: 'Psst... five tiny hearts are hiding somewhere in this world.',
  },

  // The secret envelope on the welcome screen
  secretEnvelope: {
    label: 'A secret for you',
    letter: {
      eyebrow: 'A little secret',
      title: 'Before you begin...',
      paragraphs: [
        'Before you came into my life, I could count the days I was happy. But you are the one who has given me so much happiness that I can never count it. ❤️🥹',
'I wish we could spend our whole life together, happily, without any worries or sadness. No matter what difficulties you face, I promise I will always be by your side. I will never leave you alone. 🫂💗',
'I love you so much, Rajii pa! 🥰 You will always be my first child, and I will take care of you with all the love in my heart. ❤️😘',
'Love you paaa! ❤️🫶🏻',
'Happiest Birthday to you, my love! 🎂🎉💋'

      ],
      signOff: 'Always yours, anu',
    },
  },

  // ---------------- MUSIC ----------------
  music: {
    // EDIT: song title and artist shown in the player
    title: 'Our Special Song',
    // EDIT: put your mp3 at public/media/our-song.mp3
    src: '/media/fav song.mp3',
    // true = clicking "Open Your Surprise" also starts the song
    startOnOpen: true,
  },

  // ---------------- HIDDEN HEARTS HUNT ----------------
  heartsHunt: {
    // Must match the number of <HiddenHeart /> used on the page (we use 5)
    total: 5,
    title: 'You found all five hearts!',
    paragraphs: [
      '😘🫂 😘🫂 😘🫂 😘🫂',
    ],
  },
};
export const celebration = {
  eyebrow: "Let's celebrate",
  title: 'Make a Wish',
  subtitle: 'Tap the cake for a surprise, make a wish, then blow out every candle.',

  // EDIT: number of candles (1 to 7 looks best)
  candleCount: 5,

  wishButton: 'Make a Wish',
  confettiButton: 'More Confetti',
  relightButton: 'Light the Candles Again',
  candleHint: 'Tap each candle to blow it out.',

  // Pop-up opened by the "Make a Wish" button
  wishPrompt: {
    eyebrow: 'Make a wish',
    title: 'Close your eyes...',
    paragraphs: [
      'Before you blow out these candles, I want you to do something, Close your eyes and think about everything you wish for in your life. Think about all your dreams and desires. I promise I will do my best to make them come true for you. You will definitely get everything you have been wishing for, and all your dreams will come true. So make your wish with a lot of hope and confidence, and blow out the candles, paa! 🥹❤️🕯️✨',
    ],
    doneButton: 'I made my wish',
  },

  // Pop-up opened when he taps the cake itself
  cakeSurprise: {
    eyebrow: 'A cake surprise',
    title: 'You found a little secret',
    paragraphs: ['😘🫂 😘🫂 😘🫂 😘🫂 😘🫂💋🤗 💋🤗 💋🤗 💋🤗 💋🤗'],
  },

  // Revealed after ALL candles are blown out
  afterBlow: {
    eyebrow: 'Your wish is on its way',
    title: 'Happy Birthday!',
    paragraphs: [
      'Happy Birthday paaa, Today the world celebrates you, but my heart celebrates the blessing of having you in my life. ❤️🎂',
    ],
  },
};

// =====================================================================
//  STAGE 3: OUR LOVE STORY TIMELINE (vertical)
//  Add or remove items freely. Each id must be unique.
//  Put photos in public/photos/ and match the filenames below.
// =====================================================================
export const timeline = {
  
  title: 'Some of our cute moments ❤️',
  items: [
    {
      id: 't1',
      
      
      title: 'First picture together',
      photo: '/photos/unnamed.jpg',
      
      message: 'Our first picture together, the beginning of a thousand beautiful memories. ❤️',
    },
    {
      id: 't2',
      
      
      title: 'College bus selfie',
      photo: '/photos/clg bus.jpg',
      
      message: 'Our cute little college bus selfie, sitting opposite each other but always close at heart. 🚌💕',
    },
    {
      id: 't3',
      
      title: 'First hand-holding in traditonal attire',
      photo: '/photos/traditonal.jpg',
      
      message: 'Our first hand-in-hand moment in traditional attire, looking like a perfect pair. 🫶',
    },
    {
      id: 't4',
    
      title: 'Professional attire picture',
      photo: '/photos/proffesional.jpg',
      
      message: 'Our picture together in professional attire, looking perfectly made for each other. ✨',
    },
    {
      id: 't5',
      
      title: 'First outing and first hug',
      photo: '/photos/hug.jpg',
      
      message: "Our first outing, our first hug, and a memory I'll hold close to my heart forever. 🫂",
    },
    {
      id: 't6',
     
      title: 'Our eyes picture',
      photo: '/photos/eye.jpg',
      
      message: 'Our eyes tell a love story that words could never express. 👀❤️',
    },
    {
      id: 't7',
      
      title: 'childhood picture',
      photo: '/photos/kutti.jpg',
      
      message: 'My favourite little boy, who will always have the biggest place in my heart. 🥹💗',
    },
  ],
};

// =====================================================================
//  STAGE 3: MEMORIES GALLERY (scrapbook)
//  shape can be: 'portrait' | 'square' | 'landscape' | 'tall'
//  tilt = how much the photo is rotated, in degrees (-3 to 3)
//  message = the hidden note shown when the photo is opened
// =====================================================================
export const gallery = {
  eyebrow: 'Our memory book',
  title: 'Pages From Our Scrapbook',
  subtitle: 'Tap any photo to open it and find the note hidden behind it.',

  // The big highlighted memory
  favourite: {
    id: 'fav',
    badge: 'My Favourite Memory',
    src: '/photos/hold hand.jpg',
    
    teaser: 'you are always my favourite 🥹💕',
    
  },

  items: [
    { id: 'g1', src: '/photos/hold hand.jpg', shape: 'portrait', tilt: -2, caption: 'A little moment, but a memory I want to hold forever. ❤️', message: "I don't know where life will take us, but I hope your hand stays in mine through every step of it. 🥹❤️" },
    { id: 'g2', src: '/photos/bike and you.jpg', shape: 'square', tilt: 2, caption: 'Your two favourite things in one picture! 🏍️❤️', message: 'I know how much you love your bike, but I hope you know that I want to be your favourite person to ride through every road and every adventure with. ❤️' },
    { id: 'g3', src: '/photos/hand heart.jpg', shape: 'landscape', tilt: -1, caption: 'A little heart, made with a lot of love. ❤️', message: 'Two palms, two little hearts, but just one love. No matter where life takes us, a piece of my heart will always belong to you. 🥹💕' },
    { id: 'g4', src: '/photos/together biside.jpg', shape: 'tall', tilt: 2, caption: 'My favourite place is right beside you. ❤️', message: "I don't need anything special when I'm with you. Just sitting beside you, holding your arm and enjoying those little moments is enough to make me happy. 🥹💕" },
    { id: 'g5', src: '/photos/bike ride.jpg', shape: 'square', tilt: -2, caption: 'Our first ride, the beginning of many beautiful memories! 🏍️❤️', message: 'I still remember our very first bike ride together. That little selfie became one of my favourite memories. I wish we could go on a thousand more rides, making memories together. 🥹💕' },
    { id: 'g6', src: '/photos/fav pic.jpg', shape: 'portrait', tilt: 1, caption: 'My favourite picture of my favourite person. ❤️', message: "I don't know what makes this picture so special, but I could look at it a hundred times and still smile. Maybe it's because the person in it means the world to me. 🥹❤️" },
    { id: 'g7', src: '/photos/bus travel.jpg', shape: 'landscape', tilt: -2, caption: 'Our first night bus ride together! 🌙❤️', message: 'That night journey with you will always be a special memory for me. The little kisses, warm hugs, sweet moments and having you beside me made that ride even more beautiful. I still remember how special it felt to be close to you throughout the journey. I wish we could have many more night journeys filled with kisses, hugs and endless love,🥹😘🫂💕' },
    { id: 'g8', src: '/photos/snap.jpg', shape: 'tall', tilt: 1, caption: 'Our Snapchat profile together! 👻💛', message: "Even our Snapchat profile feels like a little symbol of us. Seeing our names and emojis together makes me smile every time. It's a small thing, but it reminds me that we are part of each other's little world. Here is to making many more memories together, kanna. 🥹❤️💕" },
  ],
};

// =====================================================================
//  STAGE 4: LOVE LETTERS (secret envelopes)
//  tone: 'blush' | 'sage' | 'cream'
// =====================================================================
export const letters = {
  eyebrow: 'Secret envelopes',
  title: 'Letters For Every Moment',
  subtitle: 'Four envelopes, each waiting for the right moment. Tap one to open it.',
  items: [
    {
      id: 'miss',
      tone: 'blush',
      label: 'Read When You Miss Me',
      letter: {
        eyebrow: 'Open when you miss me',
        title: '🫂❤️',
        paragraphs: [
          'If you are missing me right now, close your eyes and imagine me holding you tight. 🫂❤️ Even if I am not beside you, my love is always with you. Read these words whenever you wish I was near you. Remember, no distance or situation can ever change how much I love you. I wish I could hug you, kiss you, and tell you how much you mean to me. Until I can do that, let these words remind you that you are always in my heart. 💋🥹',

'I miss you too, Love you so much, paaa! ❤️😘',
        ],
      },
    },
    {
      id: 'sad',
      tone: 'sage',
      label: 'Read When You Feel Sad',
      letter: {
        eyebrow: 'Open when you feel sad',
        title: '❤️',
        paragraphs: [
          'If you are feeling sad, remember that you dont have to face everything alone. ❤️ I may not always be beside you to hold your hand, but I will always be there to listen to you and support you. It is okay to have bad days, kanna. Dont forget how special, strong and precious you are to me. Whatever happens, we will face it together. I wish I could hug you tightly right now and take away all your sadness. 🫂🥺',

'Always remember, you have me, paaa. I love you so much! ❤️💋'
        ],
        
      },
    },
    {
      id: 'smile',
      tone: 'cream',
      label: 'Read When You Need a Smile',
      letter: {
        eyebrow: 'Open when you need a smile',
        title: '😘💗',
        paragraphs: [
          'Hey! Are you forgetting to smile? 🥹❤️ Come on, give me that cute smile of yours! I dont know if I can make all your problems disappear, but I will always try my best to bring a smile to your face. Remember all our silly moments, our funny conversations and the little things that make us laugh together. You look so cute when you smile, and your happiness means everything to me. 🥰',
          'So smile for me, paaa! Your smile is one of my favourite things in this world. Love you loads! 😘💗'
        ],
      },
    },
    {
      id: 'birthday',
      tone: 'blush',
      special: true,
      label: 'Your Birthday Letter',
      letter: {
        eyebrow: 'A letter for your birthday',
        paragraphs: [
          ' To My Favourite Person,Rajii ❤️',

'Happiest Birthday, my love! 🎂💗',
'Today is all about you, and I wish I could make this day as special as you are to me. I dont know how to put all my feelings into words, but I want you to know how much you mean to me',
'You came into my life and filled it with so much happiness. Every little moment with you has become a beautiful memory. From our silly fights to our endless talks, from our laughter to our little adventures, I love every part of our story. 🥹❤️',
'I dont expect our life to be perfect. We may have difficult days, misunderstandings and problems, but I promise I will always stand beside you. Whatever happens, we will face it together. I want us to grow together, achieve our dreams together and spend our whole life making beautiful memories. 🫂',
'I wish all your dreams come true. I want to see you happy, successful and proud of yourself. Whenever life feels difficult, remember that you have someone who believes in you and loves you more than words can explain',
'And one more thing, Rajii pa, you will always be my first child. I will pamper you, take care of you, tease you and love you endlessly. Dont ever forget that! 🥰😘',
'Thank you for being my happiness, my comfort and my favourite person',
'Love you so much, paaa! 💋❤️',
'Once again, happiest birthday to you, my forever favourite person! 🎂🎉',
'Forever yours. ❤️'
        ],
      },
    },
  ],
};

// =====================================================================
//  STAGE 4: REASONS WHY I LOVE YOU (flip cards)
//  topic = front of the card, reason = back of the card
//  wide: true makes a card a little bigger on large screens
// =====================================================================
export const reasons = {
  eyebrow: 'Reasons I love you',
  title: 'A Million Reasons, But Here Are Some...',
  subtitle: 'Tap a card to turn it over.',
  items: [
    { topic: 'Your smile', reason: 'Your smile is my favourite thing about you. Even on my worst days, just seeing you smile makes everything feel better. I could look at your smile a thousand times and never get tired of it. I hope you always keep smiling, because your happiness means the world to me. ❤️', wide: true },
    { topic: 'The way you cares', reason: 'One thing I love most about you is the way you care for me. You are always there for me, whether I am going through my periods, dealing with family situations, or having a difficult day. You never make me feel alone, and your little efforts make me feel so loved and safe. I may not say it every time, but I notice every little thing you do for me, and I am truly lucky to have someone like you. ❤️' },
    { topic: 'Your little habits', reason: 'I love all your little habits, even the ones you dont notice yourself. The way you talk, the way you care, your silly little actions and all those tiny things make you so special to me. And one thing I love the most is that, even if we get angry and say things to each other, once everything settles down, you come back to me as if nothing happened. That little thing means so much to me. It makes me feel that no matter what happens, you will always come back to me. I hope we never lose this little habit of ours. ❤️' },
    { topic: 'Your personality', reason: 'I love your personality so much. The way you behave, the way you talk, your caring nature, your little childish side and even your anger make you who you are. One thing I love the most is that no matter how angry you are, the moment you see me, you just smile. I dont know if you realise how much I love that little thing. It makes my heart so happy every single time. You have your own way of making me smile, and I hope you never change. ❤️' },
    { topic: 'Yourfunny side', reason: 'I love your funny side so much. Especially when you do something wrong and then come to me, acting all cute and trying to convince me with your little ways. I can never stay angry at you for long. Your silly behaviour and the way you pamper me always make me smile. These little moments with you are my favourite. ❤️' },
    { topic: 'The little things you does', reason: 'I love the little things you do, like coming back to me after an argument as if nothing happened, smiling the moment you see me even when you are angry, and pampering me whenever you do something wrong. These little actions may seem normal to you, but they mean a lot to me. I love how you never let your anger come between us for too long. These are the tiny things that make me fall for you again and again. ❤️', wide: true },
    { topic: 'How you make me happy', reason: 'You make me happy in the simplest ways. Just seeing you, talking to you, listening to your silly talks and spending even a little time with you makes my day better. Whenever I am sad, you remind me of all the beautiful things that have happened between us and all the happy moments we have shared. You make me remember that there is still so much to smile about. I dont need anything special from you; just having you by my side is enough to make me happy. ❤️' },
    { topic: 'Reason for my love', reason: 'My own reason for loving you is simply because you are you. I love the way you make me feel, the comfort I find in you, and how I can be completely myself around you. I dont need a special reason or a perfect moment to love you. Even in your simplest, most ordinary moments, you are my favourite person. If I had to choose again, I would still choose you. Every single time. ❤️' },
  ],
};

// =====================================================================
//  STAGE 4: MEMORY QUIZ
//  correct = position of the right a
// nswer (0 = first, 1 = second...)
//  note    = a sweet line shown after he answers
//  results: min = lowest score needed for that message.
//  If you add questions, adjust the "min" numbers.
// =====================================================================
export const quiz = {
  eyebrow: 'Just for fun',
  title: 'How Well Do You Remember us?',
  subtitle: 'A tiny quiz about our memories.',
  restartLabel: 'Play again',
  questions: [
    {
      question: '1. What is our love Anniversary date ?',
      options: ['Feb 1', 'Jan 30', 'Feb 2'],
      correct: 0,
    },
    {
      question: '2. What is our First long time Kiss date ?',
      options: ['March 13', 'March 14', 'March 16'],
      correct: 1,
    },
    {
      question: '3. What is our Bike ride date ?',
      options: ['May 16', 'May 10', 'May 13'],
      correct: 2,
    },
  ],
  results: [
    { min: 0, title: 'Result for a low score', message: 'I didnt except this from you' },
    { min: 2, title: 'Result for a good score', message: 'ohh you forget to remember all these dates,I feel sad for this' },
    { min: 3, title: 'Result for a perfect score', message: 'I Know it,love you paaaa' },
  ],
};

// =====================================================================
//  STAGE 5: FULL-SCREEN BIRTHDAY LETTER + SCRATCH CARD
//  The paragraphs are typed out one letter at a time.
// =====================================================================
export const birthdayLetter = {
  eyebrow: 'My birthday letter',
  greeting: 'My dearest', // shown before his nickname
  paragraphs: [
    'Happy Birthday, My Love! ❤️',

'First of all, happiest birthday to you,❤️ I dont know how to put all my feelings into words, but I just want you to know how special you are to me',
'I am so happy to have you in my life. Thank you for caring for me, understanding me, making me smile and staying with me through my happy and difficult times. I love all your little habits, your cute smile, your one-sided dimple, your funny side and everything that makes you YOU',
'I wish you achieve everything you dream of. May this year bring you lots of happiness, success and beautiful memories. Never stop smiling, because your smile is one of my favourite things in this world',
'I want to create many more memories with you, celebrate many more birthdays together and keep choosing each other every single day',
'Once again, happy birthday, my favourite person! I love you so much. ❤️😘'
  ],
  closing: 'love you paaaaaaaaaa ❤️😘',
  signOff: 'Forever yours,', // your name (site.fromName) is added after this
  skipLabel: 'Show the whole letter',

  scratch: {
    eyebrow: 'One more thing',
    title: 'A Hidden Message',
    hint: 'Scratch the card with your finger or mouse.',
    prompt: 'Scratch here',
    prizeEyebrow: 'Hidden message',
    message: 'Even if I had a thousand chances to choose someone, I would still choose you. It is always you, paa ❤️',
    skipLabel: 'Reveal it for me',
  },
};

// =====================================================================
//  STAGE 6: THE SECRET ENDING
//  Files to add:
//    public/media/voice-message.mp3   (your voice)
//    public/media/birthday-video.mp4  (your video)
//    public/media/our-song.mp3        (already used by the music player)
// =====================================================================
export const secret = {
  eyebrow: 'The grand finale',
  title: 'The Secret Ending',
  subtitle: 'A few last surprises are waiting here, made just for you.',

  // true = the final ending is always available (use this to test it yourself)
  // false = he must discover the surprises below first
  skipUnlockCheck: false,

  // The surprises he must discover (keys are used by the other sections)
  requiredSteps: [
    { key: 'cake', label: 'Blow out every candle on the cake' },
    { key: 'letters', label: 'Open all four letters' },
    { key: 'quiz', label: 'Finish the memory quiz' },
    { key: 'scratch', label: 'Scratch the card at the end of my letter' },
    { key: 'gift', label: 'Open the gift box below' },
  ],

  voice: {
    title: 'A Message in My Voice',
    
    src: '/media/voice.mp3',
    missing: 'Voice message not found yet. Add it as public/media/voice-message.mp3',
  },

  song: {
    title: 'Special Song',
    subtitle: 'My favourite song about you',
  },

  gift: {
    title: 'A Little Gift Box',
    hint: 'Tap the box to open it.',
    
    paragraphs: ['💗😘💗💋💋💋💋💋💋💋🫂🫂🫂🫂🫂🫂🫂🫂💗😘💗'],
    
  },

  hunt: {
    title: 'The Five Hidden Hearts',
    hint: 'Five tiny hearts are hiding across this world. Find them all.',
  },

  unlockTitle: 'The Final Surprise',
  unlockHint: 'Discover everything below to unlock the last secret.',
  lockedButton: 'Still locked',
  finaleButton: 'Reveal the Final Secret',
};

// The full-screen finale that opens from the button above
export const finale = {
  eyebrow: 'The last secret',
  title: 'Happy Birthday',
  // EDIT: each line fades in one after another
  lines: [
    'You are my favourite person. ❤️',
    'My happiest place is always with you.',
    'I dont need a perfect life, just you by my side.',
    "Today, tomorrow and always, it's you! 💗",
  ],
  // EDIT: put your favourite photo at public/photos/finale.jpg
  photo: '/photos/bike and you.jpg',
  photoAlt: 'Our favourite photo together',
  photoLabel: 'Our favourite photo goes here',
  replayLabel: 'Watch again',
  closeLabel: 'Back to our world',
};
