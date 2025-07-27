import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  Download, 
  Settings, 
  CreditCard, 
  Users,
  HelpCircle,
  ExternalLink,
  MessageSquare
} from "lucide-react"
import { Link } from "react-router-dom"

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const categories = [
    { name: "All", icon: HelpCircle, count: 24 },
    { name: "Getting Started", icon: Download, count: 8 },
    { name: "Safety & Security", icon: Shield, count: 6 },
    { name: "Technical Support", icon: Settings, count: 7 },
    { name: "Account & Billing", icon: CreditCard, count: 3 }
  ]

  const faqItems = [
    {
      category: "Getting Started",
      question: "How do I download and install GameHub software?",
      answer: "Download is simple: 1) Choose your game from our catalog, 2) Click 'Download' to get the GameHub Loader, 3) Run the installer as administrator, 4) Follow the on-screen instructions. The entire process takes less than 5 minutes.",
      popularity: "high"
    },
    {
      category: "Safety & Security",
      question: "Are GameHub mods safe to use? Will I get banned?",
      answer: "Yes, our mods are designed to be completely undetectable. We use advanced techniques including memory-based injection and sophisticated anti-detection algorithms. We've maintained a 99.8% safety record over 3 years with zero confirmed bans when following our guidelines.",
      popularity: "high"
    },
    {
      category: "Technical Support",
      question: "Why is my antivirus flagging GameHub as a virus?",
      answer: "This is a common false positive. Game modification software often triggers antivirus alerts because it interacts with game processes in ways similar to malware. Our software is completely safe - add the GameHub folder to your antivirus exclusions list to resolve this issue.",
      popularity: "high"
    },
    {
      category: "Getting Started",
      question: "What games does GameHub support?",
      answer: "We support over 50 popular games including Fortnite, Call of Duty Warzone, Valorant, CS2, Rust, GTA 5, Minecraft, Apex Legends, and many more. Check our games catalog for the complete list and current compatibility status.",
      popularity: "medium"
    },
    {
      category: "Safety & Security",
      question: "How do you keep your mods undetected?",
      answer: "We employ multiple layers of protection: 1) Regular updates within 24-48 hours of game patches, 2) Advanced memory injection techniques, 3) Encrypted communication protocols, 4) Continuous monitoring of anti-cheat developments, 5) Beta testing with volunteer users before public release.",
      popularity: "medium"
    },
    {
      category: "Technical Support",
      question: "The game crashes when I use GameHub mods. What should I do?",
      answer: "First, ensure you're running the latest version of both the game and GameHub. Try: 1) Restart your computer, 2) Run both the game and GameHub as administrator, 3) Temporarily disable other overlays (Discord, Steam, etc.), 4) Check if your system meets minimum requirements. Contact support if issues persist.",
      popularity: "medium"
    },
    {
      category: "Account & Billing",
      question: "Is GameHub free to use?",
      answer: "Yes, GameHub is completely free! All our game modifications and utilities are available at no cost. We believe in making gaming enhancements accessible to everyone. There are no hidden fees, subscriptions, or premium tiers.",
      popularity: "high"
    },
    {
      category: "Technical Support",
      question: "Can I use GameHub with multiple games at the same time?",
      answer: "Yes, you can have GameHub configured for multiple games simultaneously. However, we recommend only running mods for one game at a time to ensure optimal performance and stability. Switch between games by selecting them in the GameHub interface.",
      popularity: "low"
    },
    {
      category: "Safety & Security",
      question: "What should I do if I encounter suspicious activity?",
      answer: "If you notice any unusual behavior, immediately: 1) Stop using the affected mod, 2) Run a full system scan, 3) Contact our security team immediately, 4) Change your game account passwords as a precaution. We take security very seriously and investigate all reports promptly.",
      popularity: "low"
    },
    {
      category: "Getting Started",
      question: "Do I need to keep GameHub running while playing?",
      answer: "For most mods, yes. GameHub needs to remain running in the background to maintain mod functionality. However, it uses minimal system resources (typically <50MB RAM and <1% CPU). You can minimize it to the system tray during gameplay.",
      popularity: "medium"
    },
    {
      category: "Technical Support",
      question: "My mods stopped working after a game update. Help!",
      answer: "This is normal when games update. We typically release compatibility updates within 24-48 hours. Check our status page or Discord for update announcements. In the meantime, avoid launching the affected game with mods until we confirm compatibility.",
      popularity: "high"
    },
    {
      category: "Account & Billing",
      question: "How do I report a bug or request a feature?",
      answer: "You can report bugs or request features through: 1) Our Discord community server, 2) The 'Contact Us' page on our website, 3) Email us directly at support@gamehub.software. Include detailed information and screenshots when reporting bugs.",
      popularity: "low"
    },
    {
      category: "Safety & Security",
      question: "Can I get banned for using GameHub on streaming platforms?",
      answer: "While our mods are undetectable by game anti-cheat systems, streaming platforms have their own policies. We recommend checking the terms of service for your streaming platform. Many streamers use our mods without issues, but always be aware of platform-specific rules.",
      popularity: "medium"
    },
    {
      category: "Technical Support",
      question: "GameHub won't start or keeps crashing. What's wrong?",
      answer: "Common solutions: 1) Run as administrator, 2) Ensure Windows is updated, 3) Install latest Visual C++ Redistributables, 4) Temporarily disable antivirus, 5) Check if Windows Defender is blocking the application. If issues persist, contact our technical support team.",
      popularity: "medium"
    },
    {
      category: "Getting Started",
      question: "How often are new games added to GameHub?",
      answer: "We add new games based on community demand and popularity. Typically, we add 2-3 new games per month. Popular requests on our Discord server and through our website are prioritized. Follow our social media for announcements about new game support.",
      popularity: "low"
    }
  ]

  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch = searchQuery === "" || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case "high":
        return "bg-gaming-red text-white"
      case "medium":
        return "bg-gaming-blue text-white"
      case "low":
        return "bg-green-600 text-white"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  const getPopularityLabel = (popularity: string) => {
    switch (popularity) {
      case "high":
        return "Popular"
      case "medium":
        return "Common"
      case "low":
        return "Rare"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-gaming-bg py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-gaming-blue to-gaming-red bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find quick answers to common questions about GameHub software, installation, 
            safety, and troubleshooting. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="search"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-gaming-dark border-border focus:border-primary"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      selectedCategory === category.name 
                        ? "bg-gradient-primary text-white shadow-glow" 
                        : "text-muted-foreground hover:text-foreground hover:bg-gaming-dark"
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    <span className="flex-1 text-left">{category.name}</span>
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Help */}
            <Card className="bg-gradient-to-r from-gaming-blue/20 via-gaming-dark to-gaming-blue/20 border-border">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-gaming-blue/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-gaming-blue" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Still Need Help?</h3>
                  <p className="text-sm text-muted-foreground">
                    Can't find the answer you're looking for? Our support team is here to help.
                  </p>
                </div>
                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                  <Link to="/contact">
                    Contact Support
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3 space-y-4">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-muted-foreground">
                  Showing {filteredFAQs.length} of {faqItems.length} questions
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
              </div>
            </div>

            {/* FAQ Items */}
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((item, index) => (
                  <Card key={index} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="w-full p-6 text-left hover:bg-gaming-dark/30 transition-all duration-300 rounded-lg"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center space-x-3">
                              <h3 className="text-lg font-semibold text-foreground group-hover:text-gaming-blue transition-colors">
                                {item.question}
                              </h3>
                              <Badge className={getPopularityColor(item.popularity)}>
                                {getPopularityLabel(item.popularity)}
                              </Badge>
                            </div>
                            <p className="text-sm text-gaming-blue font-medium">
                              {item.category}
                            </p>
                          </div>
                          
                          <div className="flex-shrink-0 ml-4">
                            {expandedItems.includes(index) ? (
                              <ChevronUp className="w-5 h-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </button>
                      
                      {expandedItems.includes(index) && (
                        <div className="px-6 pb-6 border-t border-border/50">
                          <div className="pt-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-gaming-card rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">No FAQs found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or selecting a different category
                </p>
                <Button 
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All")
                  }}
                  className="bg-gradient-primary hover:shadow-glow"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ