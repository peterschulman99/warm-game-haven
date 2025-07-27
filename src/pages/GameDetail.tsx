import { useParams, Link } from "react-router-dom"
import { games } from "@/data/games"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { 
  Download, 
  Star, 
  Users, 
  ChevronLeft, 
  Shield, 
  Cpu, 
  HardDrive, 
  Monitor,
  ChevronRight,
  ExternalLink
} from "lucide-react"
import { GameCard } from "@/components/ui/game-card"

const GameDetail = () => {
  const { id } = useParams<{ id: string }>()
  const game = games.find(g => g.id === id)

  if (!game) {
    return (
      <div className="min-h-screen bg-gaming-bg flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Game Not Found</h1>
          <p className="text-muted-foreground">The game you're looking for doesn't exist.</p>
          <Button asChild className="bg-gradient-primary">
            <Link to="/games">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleDownload = () => {
    // Create a dummy file download
    const link = document.createElement('a')
    link.href = '/GameHub_Loader.exe'
    link.download = 'GameHub_Loader.exe'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const relatedGames = games.filter(g => 
    g.id !== game.id && g.genre === game.genre
  ).slice(0, 3)

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
    <div className="min-h-screen bg-gaming-bg">
      {/* Header */}
      <div className="bg-gaming-dark/50 py-6">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="text-gaming-blue hover:text-foreground">
            <Link to="/games">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Game Header */}
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <h1 className="text-4xl font-bold text-foreground">{game.title}</h1>
                    {game.badge && (
                      <Badge className={getBadgeColor(game.badge)}>
                        {game.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-lg font-semibold text-foreground">{game.rating}</span>
                      <span className="text-muted-foreground">rating</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-gaming-blue" />
                      <span className="text-lg font-semibold text-foreground">{game.downloads}</span>
                      <span className="text-muted-foreground">downloads</span>
                    </div>
                    
                    <Badge variant="secondary" className="text-sm">
                      {game.genre}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Game Image */}
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Description */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">About This Game</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {game.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {game.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gaming-blue rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Screenshots */}
            {game.screenshots && game.screenshots.length > 0 && (
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Screenshots</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {game.screenshots.map((screenshot, index) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                        <img
                          src={screenshot}
                          alt={`${game.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder.svg"
                          }}
                        />
                        <div className="absolute inset-0 bg-gaming-dark/0 group-hover:bg-gaming-dark/20 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Download Card */}
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6 space-y-4">
                <Button 
                  onClick={handleDownload}
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Safe & Undetected</span>
                </div>

                <Separator className="bg-border" />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">File Size:</span>
                    <span className="text-foreground">2.4 MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span className="text-foreground">Today</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version:</span>
                    <span className="text-foreground">2025.1</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Requirements */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-2">
                  <Monitor className="w-5 h-5" />
                  <span>System Requirements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Monitor className="w-4 h-4 text-gaming-blue mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">OS</p>
                      <p className="text-sm text-muted-foreground">{game.systemRequirements.os}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Cpu className="w-4 h-4 text-gaming-blue mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Processor</p>
                      <p className="text-sm text-muted-foreground">{game.systemRequirements.processor}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <HardDrive className="w-4 h-4 text-gaming-blue mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Memory</p>
                      <p className="text-sm text-muted-foreground">{game.systemRequirements.memory}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <HardDrive className="w-4 h-4 text-gaming-blue mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Storage</p>
                      <p className="text-sm text-muted-foreground">{game.systemRequirements.storage}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Links */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/how-it-works">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Installation Guide
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/support">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Get Support
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/faq">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    FAQ
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Games */}
        {relatedGames.length > 0 && (
          <div className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-foreground">
                More <span className="text-gaming-blue">{game.genre}</span> Games
              </h2>
              
              <Button variant="outline" className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white" asChild>
                <Link to="/games">
                  View All
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedGames.map((relatedGame) => (
                <GameCard key={relatedGame.id} {...relatedGame} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GameDetail