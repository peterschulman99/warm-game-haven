export interface Game {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  rating: number
  downloads: string
  badge?: "HOT" | "POPULAR" | "UPDATED" | "NEW"
  genre: string
  features: string[]
  systemRequirements: {
    os: string
    processor: string
    memory: string
    storage: string
  }
  screenshots: string[]
}

export const games: Game[] = [
  {
    id: "roblox-executor-2025",
    title: "Roblox Executor 2025",
    description: "Free executor with simple design, fast launch, and basic script support. Ideal for beginners who want a safe and easy tool for Roblox!",
    fullDescription: "The ultimate Roblox script executor designed for both beginners and advanced users. Features a clean, intuitive interface with powerful scripting capabilities. Regular updates ensure compatibility with the latest Roblox versions while maintaining undetected status.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400",
    rating: 4.8,
    downloads: "3.8K",
    badge: "HOT",
    genre: "Sandbox",
    features: [
      "Simple and intuitive interface",
      "Fast script execution",
      "Regular updates for compatibility",
      "Undetected by anti-cheat",
      "Supports most popular scripts",
      "24/7 community support"
    ],
    systemRequirements: {
      os: "Windows 10/11",
      processor: "Intel Core i3 or AMD equivalent",
      memory: "4 GB RAM",
      storage: "200 MB available space"
    },
    screenshots: [
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800",
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800"
    ]
  },
  {
    id: "rust-hack-2025",
    title: "Rust Hack 2025",
    description: "Dominate Rust with Unstoppable Power! Elevate your Rust survival experience with our pro-level external cheat! Conquer the wilderness using auto-aim, ESP vision, god mode, and no-recoil.",
    fullDescription: "Transform your Rust gameplay with our advanced external cheat system. Features include precision aimbot, comprehensive ESP, and various quality-of-life improvements that give you the edge in this harsh survival world.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
    rating: 5.0,
    downloads: "2.9K",
    badge: "POPULAR",
    genre: "Survival",
    features: [
      "Advanced aimbot with customizable settings",
      "Full ESP (players, items, animals)",
      "No recoil and no spread",
      "Silent aim technology",
      "Radar and minimap features",
      "Anti-detection mechanisms"
    ],
    systemRequirements: {
      os: "Windows 10/11",
      processor: "Intel Core i5 or AMD Ryzen 5",
      memory: "8 GB RAM",
      storage: "500 MB available space"
    },
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800"
    ]
  },
  {
    id: "warzone-hack-2025",
    title: "Call of Duty Warzone Hack 2025",
    description: "Call of Duty Warzone Free Cheat: Aimbot, Wallhacks & ESP. For a long time the cheat is not detected by the anti-cheat, it is the best choice for you!",
    fullDescription: "Experience Call of Duty Warzone like never before with our comprehensive cheat package. Featuring advanced aimbot, wallhacks, and ESP systems designed to enhance your battle royale experience while staying undetected.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400",
    rating: 4.5,
    downloads: "2.1K",
    badge: "UPDATED",
    genre: "Battle Royale",
    features: [
      "Precision aimbot with bone targeting",
      "Advanced wallhacks and ESP",
      "Enemy distance and health display",
      "Weapon and loot ESP",
      "No recoil compensation",
      "Bypass all major anti-cheats"
    ],
    systemRequirements: {
      os: "Windows 10/11",
      processor: "Intel Core i7 or AMD Ryzen 7",
      memory: "16 GB RAM",
      storage: "1 GB available space"
    },
    screenshots: [
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800",
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800"
    ]
  },
  {
    id: "fortnite-hack-2025",
    title: "Fortnite Hack 2025: Aimbot, ESP, Wallhacks",
    description: "Fortnite Hack 2025: Aimbot, ESP, Wallhacks! FREE Download! A proven solution with many years of stable operation. (Easy to use/Undetected)",
    fullDescription: "The most trusted Fortnite enhancement tool with years of proven reliability. Our sophisticated cheat system provides competitive advantages while maintaining the highest safety standards and remaining completely undetected.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
    rating: 5.0,
    downloads: "2.1K",
    badge: "UPDATED",
    genre: "Battle Royale",
    features: [
      "Smart aimbot with prediction",
      "Player and loot ESP",
      "Building ESP and editing tools",
      "Storm prediction and timing",
      "Anti-aim and silent aim",
      "Completely undetectable"
    ],
    systemRequirements: {
      os: "Windows 10/11",
      processor: "Intel Core i5 or AMD Ryzen 5",
      memory: "8 GB RAM",
      storage: "750 MB available space"
    },
    screenshots: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800"
    ]
  },
  {
    id: "valorant-hack-2025",
    title: "Valorant Hack 2025",
    description: "Valorant Hack 2025 free ESP, Aimbot, Wallhack and more! This Valorant Hack is a completely private and completely undetected product!",
    fullDescription: "Dominate the tactical shooter scene with our premium Valorant enhancement suite. Designed specifically for competitive play, featuring advanced targeting systems and tactical information overlays.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
    rating: 4.6,
    downloads: "1.7K",
    badge: "NEW",
    genre: "Tactical Shooter",
    features: [
      "Bone-targeted aimbot system",
      "Advanced player ESP",
      "Ability and spike ESP",
      "Crosshair customization",
      "Trigger bot functionality",
      "Private and undetected"
    ],
    systemRequirements: {
      os: "Windows 10/11",
      processor: "Intel Core i5 or AMD Ryzen 5",
      memory: "8 GB RAM",
      storage: "600 MB available space"
    },
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800"
    ]
  },
  {
    id: "minecraft-hack-2025",
    title: "Minecraft Hack Client 2025",
    description: "Ultimate Minecraft hack client with advanced modules, ghost mode, and extensive customization options for all game modes.",
    fullDescription: "The most comprehensive Minecraft enhancement client featuring over 100 modules, advanced bypasses, and complete customization. Perfect for both survival and PvP gameplay with sophisticated anti-detection systems.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400",
    rating: 4.9,
    downloads: "5.2K",
    badge: "POPULAR",
    genre: "Sandbox",
    features: [
      "100+ hack modules",
      "Advanced bypass systems",
      "Ghost mode for servers",
      "Custom HUD and UI",
      "Macro and scripting support",
      "Regular updates"
    ],
    systemRequirements: {
      os: "Windows 10/11",
      processor: "Intel Core i3 or AMD equivalent",
      memory: "4 GB RAM",
      storage: "300 MB available space"
    },
    screenshots: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800"
    ]
  },
  {
    id: "cs2-hack-2025",
    title: "Counter-Strike 2 Hack 2025",
    description: "Professional CS2 cheat with legit aimbot, triggerbot, and advanced ESP. Designed for competitive play with maximum safety.",
    fullDescription: "Elevate your Counter-Strike 2 performance with our professional-grade enhancement suite. Featuring human-like aimbot behaviors, comprehensive game sense improvements, and unparalleled safety measures.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400",
    rating: 4.7,
    downloads: "3.1K",
    badge: "HOT",
    genre: "Tactical Shooter",
    features: [
      "Legit aimbot with human simulation",
      "Advanced triggerbot",
      "Weapon and player ESP",
      "Recoil control system",
      "Bhop and movement assistance",
      "VAC and Faceit bypass"
    ],
    systemRequirements: {
      os: "Windows 10/11",
      processor: "Intel Core i5 or AMD Ryzen 5",
      memory: "8 GB RAM",
      storage: "800 MB available space"
    },
    screenshots: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800",
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800"
    ]
  },
  {
    id: "apex-legends-hack-2025",
    title: "Apex Legends Hack 2025",
    description: "Dominate the Apex arena with advanced aimbot, ESP, and movement enhancements. Optimized for all legends and game modes.",
    fullDescription: "Master the Apex Games with our cutting-edge enhancement suite. Features legend-specific optimizations, advanced prediction algorithms, and comprehensive battlefield awareness tools.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400",
    rating: 4.4,
    downloads: "1.9K",
    badge: "UPDATED",
    genre: "Battle Royale",
    features: [
      "Legend-optimized aimbot",
      "Advanced player tracking",
      "Loot and weapon ESP",
      "Ring prediction system",
      "Movement enhancement",
      "EAC bypass technology"
    ],
    systemRequirements: {
      os: "Windows 10/11",
      processor: "Intel Core i5 or AMD Ryzen 5",
      memory: "8 GB RAM",
      storage: "900 MB available space"
    },
    screenshots: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800"
    ]
  },
  {
    id: "gta-5-mod-menu",
    title: "GTA 5 Online Mod Menu 2025",
    description: "Complete GTA 5 Online mod menu with money drops, vehicle spawning, and advanced protection systems. Safe and undetected.",
    fullDescription: "Experience GTA 5 Online like never before with our comprehensive mod menu. Features everything from money generation to vehicle customization, all while maintaining complete protection from Rockstar's detection systems.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
    rating: 4.8,
    downloads: "4.3K",
    badge: "POPULAR",
    genre: "Open World",
    features: [
      "Money and RP generation",
      "Vehicle spawning and customization",
      "Teleportation system",
      "Player protection modes",
      "Session management tools",
      "Anti-ban protection"
    ],
    systemRequirements: {
      os: "Windows 10/11",
      processor: "Intel Core i5 or AMD Ryzen 5",
      memory: "8 GB RAM",
      storage: "1.2 GB available space"
    },
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800"
    ]
  },
  {
    id: "fall-guys-hack-2025",
    title: "Fall Guys Hack 2025",
    description: "Dominate the bean race with speed hacks, grab assistance, and qualification guarantees. Perfect for competitive seasons.",
    fullDescription: "Never fail to qualify again with our Fall Guys enhancement suite. Features subtle movement improvements, grab assistance, and timing optimizations that give you the competitive edge while maintaining a natural appearance.",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400",
    rating: 4.2,
    downloads: "890",
    badge: "NEW",
    genre: "Party Game",
    features: [
      "Speed and movement enhancement",
      "Grab assistance technology",
      "Perfect timing systems",
      "Qualification guarantee modes",
      "Anti-griefing protection",
      "Completely undetectable"
    ],
    systemRequirements: {
      os: "Windows 10/11",
      processor: "Intel Core i3 or AMD equivalent",
      memory: "4 GB RAM",
      storage: "250 MB available space"
    },
    screenshots: [
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800"
    ]
  }
]

export const popularGenres = [
  "All Games",
  "Battle Royale",
  "Tactical Shooter",
  "Sandbox",
  "Survival",
  "Open World",
  "Party Game",
  "MMORPG",
  "Racing",
  "Sports"
]