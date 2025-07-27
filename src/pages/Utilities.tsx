import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Download, 
  Settings, 
  Shield, 
  Zap, 
  Cpu, 
  HardDrive,
  Monitor,
  Gamepad2,
  Wrench,
  Star
} from "lucide-react"

const Utilities = () => {
  const utilities = [
    {
      id: "game-booster",
      title: "Game Performance Booster",
      description: "Optimize your system for maximum gaming performance with automatic process prioritization and memory cleanup.",
      icon: Zap,
      rating: 4.9,
      downloads: "12K",
      features: [
        "Automatic RAM optimization",
        "CPU priority adjustment",
        "Background process management",
        "Real-time performance monitoring"
      ],
      badge: "POPULAR"
    },
    {
      id: "fps-unlocker",
      title: "Universal FPS Unlocker",
      description: "Remove frame rate limits and unlock higher FPS in supported games with intelligent detection.",
      icon: Monitor,
      rating: 4.7,
      downloads: "8.5K",
      features: [
        "Automatic game detection",
        "Safe FPS unlocking",
        "Custom FPS targeting",
        "No game file modification"
      ],
      badge: "HOT"
    },
    {
      id: "input-optimizer",
      title: "Gaming Input Optimizer",
      description: "Reduce input lag and improve responsiveness with advanced mouse and keyboard optimization.",
      icon: Gamepad2,
      rating: 4.6,
      downloads: "6.2K",
      features: [
        "Input lag reduction",
        "Mouse acceleration removal",
        "Keyboard polling optimization",
        "Custom sensitivity curves"
      ],
      badge: "NEW"
    },
    {
      id: "overlay-tool",
      title: "Gaming Overlay Suite",
      description: "Feature-rich overlay with FPS counter, hardware monitoring, and in-game communication tools.",
      icon: Settings,
      rating: 4.8,
      downloads: "9.1K",
      features: [
        "FPS and frame time display",
        "Hardware temperature monitoring",
        "Screenshot and recording",
        "Discord integration"
      ],
      badge: "UPDATED"
    },
    {
      id: "memory-cleaner",
      title: "Smart Memory Cleaner",
      description: "Intelligent memory management tool that frees up RAM when gaming, improving overall performance.",
      icon: HardDrive,
      rating: 4.5,
      downloads: "7.8K",
      features: [
        "Automatic memory cleaning",
        "Game-aware optimization",
        "Cache management",
        "Memory leak detection"
      ]
    },
    {
      id: "driver-updater",
      title: "Gaming Driver Updater",
      description: "Keep your graphics and gaming peripherals drivers up to date with automatic updates and rollback options.",
      icon: Wrench,
      rating: 4.4,
      downloads: "5.9K",
      features: [
        "Automatic driver detection",
        "Silent driver updates",
        "Driver rollback support",
        "Gaming-focused drivers"
      ]
    }
  ]

  const handleDownload = (utilityName: string) => {
    // Create a dummy file download
    const link = document.createElement('a')
    link.href = '/GameHub_Utility_Loader.exe'
    link.download = `GameHub_${utilityName.replace(/\s+/g, '_')}.exe`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "HOT":
        return "bg-gaming-red text-white"
      case "POPULAR":
        return "bg-gaming-blue text-white"
      case "UPDATED":
        return "bg-green-600 text-white"
      case "NEW":
        return "bg-purple-600 text-white"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <div className="min-h-screen bg-gaming-bg py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-gaming-blue to-gaming-red bg-clip-text text-transparent">
            Gaming Utilities & Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Enhance your gaming experience with our collection of professional utilities and optimization tools. 
            Boost performance, reduce lag, and get the competitive edge.
          </p>
        </div>

        {/* Features Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4 p-6 rounded-xl bg-gradient-card border border-border">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Performance Boost</h3>
            <p className="text-muted-foreground">
              Optimize your system for maximum gaming performance and FPS gains
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-xl bg-gradient-card border border-border">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Safe & Reliable</h3>
            <p className="text-muted-foreground">
              All utilities are thoroughly tested and safe to use with your games
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-xl bg-gradient-card border border-border">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Easy Setup</h3>
            <p className="text-muted-foreground">
              One-click installation and automatic configuration for hassle-free setup
            </p>
          </div>
        </div>

        {/* Utilities Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {utilities.map((utility) => (
            <Card key={utility.id} className="group bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <utility.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-foreground group-hover:text-gaming-blue transition-colors">
                        {utility.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium text-foreground">{utility.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="w-4 h-4 text-gaming-blue" />
                          <span className="text-sm text-muted-foreground">{utility.downloads}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {utility.badge && (
                    <Badge className={getBadgeColor(utility.badge)}>
                      {utility.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {utility.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {utility.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gaming-blue rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button 
                    onClick={() => handleDownload(utility.title)}
                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  
                  <Button variant="outline" className="hover:bg-gaming-blue hover:text-white">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-6 p-8 rounded-xl bg-gradient-to-r from-gaming-blue/20 via-gaming-dark to-gaming-red/20 border border-border">
          <h2 className="text-3xl font-bold text-foreground">
            Need Custom Optimization?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team can create custom optimization profiles for specific games or hardware configurations. 
            Contact our support team for personalized assistance.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Utilities