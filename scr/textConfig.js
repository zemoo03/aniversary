const textConfig = {
  landing: {
    title: "Hey Payuuuu! 💕",
    subtitle: "I Wanted to do something special for you, so I made something special just for you...",
    lastLine: "Click below to see what it is! ✨",
    button: "Open My Heart 💖",
    footer: "Made with love, only for you 💕",
  },

  // ActivityPage/Letter configuration
  letter: {
    headerTitle: "A Love Letter 💌",
    headerSubtitle: "From my heart to yours",
    letterHeaderTitle: "My Sweetest Payuuuu",
    letterMessage: `My dearest Payuuuu,

Every moment with you feels like a beautiful dream that I never want to wake up from.

I can't believe it's been 4 years since we started this journey. Today, on 29-04-2026, we officially complete 4 amazing years together! Every day with you is a gift, and I'm grateful for every second we share. You make me want to be the best version of myself.
`,
    letterSignature: "With all my love, Always yours 💕`",
    envelopeClickHint: "Click to open the envelope",
    specialDeliveryText: "Special Delivery 💌",
    continueButton: "Continue To See More ✨"
  },

  chillZone: {
    heading: "A Dedicated Playlist For You",
    subheading: "I Hope You'll Like It",
    chooseTrackHint: "Choose a track to start vibing ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      { id: 1, title: "Dil Cheeze Tujhe Dedi", caption: "You own this heart — dedicated to you 💞" },
      { id: 2, title: "If the world was ending", caption: "Even if the world ends, I'd still find you 🤍" },
      { id: 3, title: "Dil ka Jo Haal hai", caption: "Tu Kaare Dil Bekarar 💞" }
    ]
  },

  cards: {
    heading: "Some Special Cards For You",
    subheading: "Click each card to reveal a special message!",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start by tapping any card above ✨",
      discovered: (n, total) => `${n} of ${total} messages discovered! Keep exploring 💕`,
      complete: "Amazing! You've discovered all the messages! 🎉"
    },
    popup: {
      title: "All Messages Unlocked!",
      message: "Each message is a piece of my heart that belongs to you forever. ✨",
      openFinal: "Open the Final Letter 💌",
      stay: "Stay here a bit longer"
    },
    cardMessages: [
      "You're my favorite kind of memory — the one that makes me smile without even realizing it. 💖",
      "You don't even have to try — you just make everything around you feel lighter, warmer, better. ✨",
      "The little things you do — your expressions, your laughter, the way you talk — they've all become my favorite details. 🌸"
    ]
  },

  finalLetter: {
    title: "Final Love Letter",
    sealingText: "Sealing your letter...",
    sealButton: "Seal this Letter 💌",
    restartButton: "Restart",
    sealedTitle: "Letter Sealed with Love",
    sealedSubtitle: "I Love You Always",
    typedDefault: "Always Yours 💕",
    experienceAgain: "Experience Again ✨",
    sendKissButton: "Send a Virtual Kiss 💋",
    dateLocale: "en-US",
    // Letter content
    letterGreeting: "My sweetest Payuuuu,",
    letterParagraphs: [
      "Happy 4th Anniversary, my love! (29-04-2026) 🎉",
      "You're the calm I reach for and the laugh that brightens my day.",
      "I hope this tiny world made you smile — and whispered how much you mean to me.",
      "I'll keep making memories, big and small, always with you.",
      "Forever yours, in every little universe."
    ],
    sealingNote: "Sealing will finish the experience."
  },

  common: {
    continue: "Continue to Next ✨",
    close: "Close",
    ok: "OK"
  }
};

export default textConfig;