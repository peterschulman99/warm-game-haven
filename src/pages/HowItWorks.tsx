import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Download, 
  FolderOpen, 
  Play, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Monitor,
  Settings,
  HelpCircle,
  ExternalLink,
  ChevronRight
} from "lucide-react"
import { Link } from "react-router-dom"

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Choose Your Game",
      description: "Browse our catalog and select the game mod you want to download.",
      icon: Monitor,
      details: [
        "Browse by category or use search",
        "Read game descriptions and features",
        "Check compatibility and requirements",
        "View screenshots and user ratings"
      ]
    },
    {
      number: 2,
      title: "Download the Mod",
      description: "Click the download button and save the GameHub Loader to your computer.",
      icon: Download,
      details: [
        "Single click download process",
        "Lightweight loader file (< 5MB)",
        "Automatic virus scan included",
        "Download progress tracking"
      ]
    },
    {
      number: 3,
      title: "Extract & Install",
      description: "Run the GameHub Loader and follow the automated installation process.",
      icon: FolderOpen,
      details: [
        "Automatic game detection",
        "One-click installation process",
        "No manual file editing required",
        "Backup creation for safety"
      ]
    },
    {
      number: 4,
      title: "Launch & Play",
      description: "Start your game and enjoy the enhanced features with full safety protection.",
      icon: Play,
      details: [
        "Launch game normally",
        "Mods activate automatically",
        "Real-time status monitoring",
        "24/7 support available"
      ]
    }
  ]

  const safetyFeatures = [
    {
      title: "Advanced Anti-Detection",
      description: "Our mods use sophisticated techniques to remain invisible to anti-cheat systems.",
      icon: Shield
    },
    {
      title: "Regular Updates",
      description: "We update our mods within 24-48 hours of any game patches to maintain compatibility.",
      icon: CheckCircle
    },
    {
      title: "Safe Injection Methods",
      description: "We use memory-based injection that doesn't modify game files directly.",
      icon: Settings
    },
    {
      title: "Automatic Backups",
      description: "Our installer creates automatic backups before making any changes to your system.",
      icon: FolderOpen
    }
  ]

  const troubleshooting = [
    {
      problem: "Antivirus Detection",
      solution: "Add GameHub folder to your antivirus exclusions. This is a false positive due to the nature of game modifications.",
      severity: "common"
    },
    {
      problem: "Game Won't Launch",
      solution: "Ensure you're running the game as administrator and that Windows Defender real-time protection is temporarily disabled.",
      severity: "common"
    },
    {
      problem: "Features Not Working",
      solution: "Verify that you've launched the GameHub Loader before starting your game. Check if your game version is supported.",
      severity: "uncommon"
    },
    {
      problem: "Performance Issues",
      solution: "Close unnecessary background programs and ensure your system meets the minimum requirements for both the game and our mods.",
      severity: "uncommon"
    }
  ]

  return (
    <div className="min-h-screen bg-gaming-bg py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-gaming-blue to-gaming-red bg-clip-text text-transparent">
            How GameHub Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get started with GameHub in just 4 simple steps. Our streamlined process makes it easy to enhance 
            your gaming experience while maintaining maximum safety and compatibility.
          </p>
        </div>

        {/* Installation Steps */}
        <div className="space-y-8 mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Installation Process
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card key={step.number} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-foreground flex items-center space-x-2">
                        <step.icon className="w-5 h-5" />
                        <span>{step.title}</span>
                      </CardTitle>
                      <p className="text-muted-foreground mt-1">{step.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety & Security */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Safety & Security Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your safety is our top priority. Here's how we keep you protected while gaming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="text-center bg-gradient-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-20">
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground text-center text-2xl">
                System Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Minimum Requirements</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Operating System:</span>
                      <span className="text-foreground">Windows 10 64-bit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processor:</span>
                      <span className="text-foreground">Intel Core i3 / AMD Ryzen 3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Memory:</span>
                      <span className="text-foreground">4 GB RAM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Storage:</span>
                      <span className="text-foreground">100 MB available space</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Recommended Requirements</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Operating System:</span>
                      <span className="text-foreground">Windows 11 64-bit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processor:</span>
                      <span className="text-foreground">Intel Core i5 / AMD Ryzen 5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Memory:</span>
                      <span className="text-foreground">8 GB RAM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Storage:</span>
                      <span className="text-foreground">500 MB available space</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Troubleshooting */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Common Issues & Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick fixes for the most common problems our users encounter.
            </p>
          </div>

          <div className="space-y-4">
            {troubleshooting.map((item, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {item.severity === "common" ? (
                        <AlertTriangle className="w-6 h-6 text-yellow-400" />
                      ) : (
                        <HelpCircle className="w-6 h-6 text-gaming-blue" />
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold text-foreground">{item.problem}</h3>
                        <Badge variant={item.severity === "common" ? "default" : "secondary"}>
                          {item.severity}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help & Support */}
        <div className="text-center space-y-8">
          <Card className="bg-gradient-to-r from-gaming-blue/20 via-gaming-dark to-gaming-red/20 border-border">
            <CardContent className="p-12 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Need Additional Help?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our support team is available 24/7 to help you with any issues or questions. 
                We also have comprehensive guides and video tutorials available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                  <Link to="/support">
                    Get Support
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white" asChild>
                  <Link to="/faq">
                    View FAQ
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks