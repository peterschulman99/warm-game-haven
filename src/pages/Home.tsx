import { useState } from "react"
import { Link } from "react-router-dom"
import { GameCard } from "@/components/ui/game-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { games, popularGenres } from "@/data/games"
import { 
  Shield, 
  RefreshCw, 
  HeadphonesIcon, 
  Star, 
  TrendingUp, 
  Users, 
  Download,
  ChevronRight,
  Search,
  Filter
} from "lucide-react"

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState("All Games")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredGames = games.filter(game => {
    const matchesGenre = selectedGenre === "All Games" || game.genre === selectedGenre
    const matchesSearch = searchQuery === "" || 
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesGenre && matchesSearch
  })

  const featuredGames = games.filter(game => 
    ["HOT", "POPULAR"].includes(game.badge || "")
  ).slice(0, 3)

  const stats = [
    { icon: Download, label: "Active Downloads", value: "50K+" },
    { icon: Users, label: "Happy Users", value: "25K+" },
    { icon: Star, label: "Average Rating", value: "4.8" },
    { icon: TrendingUp, label: "Success Rate", value: "99%" }
  ]

  return (
    <div className="min-h-screen bg-gaming-bg">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-blue/20 via-transparent to-gaming-red/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gaming-blue/20 text-gaming-blue border-gaming-blue/30">
                Premium Game Software
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-gaming-blue to-gaming-red bg-clip-text text-transparent">
                Elevate Your Gaming with{" "}
                <span className="text-gaming-blue">GameHub</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Access premium game modifications for your favorite titles. Gain the competitive edge with our 
                undetectable mods, updated regularly to stay ahead of anti-cheat systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link to="/games">
                  Browse Game Cheats
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white" asChild>
                <Link to="/how-it-works">
                  How It Works
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Undetected & Regularly Updated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gaming-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Why Choose <span className="text-gaming-blue">GameHub</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide premium game modifications with regular updates and dedicated support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Undetectable Mods</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mods are designed to bypass anti-cheat systems and remain undetected during gameplay.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Regular Updates</h3>
              <p className="text-muted-foreground leading-relaxed">
                We constantly update our mods to ensure compatibility with the latest game versions.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                <HeadphonesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">24/7 Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our dedicated support team is available around the clock to assist with any issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-20 bg-gaming-dark/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-foreground">Featured Games</h2>
              <p className="text-muted-foreground">Our most popular and trending game modifications</p>
            </div>
            
            <Button variant="outline" className="hidden md:flex border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white" asChild>
              <Link to="/games">
                View All Games
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white" asChild>
              <Link to="/games">
                View All Games
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Browse Games Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Browse Game Cheats</h2>
            <p className="text-xl text-muted-foreground">Discover our complete collection of premium game modifications</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="search"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-gaming-card border-border focus:border-primary text-lg"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {popularGenres.map((genre) => (
                  <Button
                    key={genre}
                    variant={selectedGenre === genre ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedGenre(genre)}
                    className={selectedGenre === genre ? "bg-gradient-primary" : ""}
                  >
                    {genre}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.slice(0, 8).map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>

          {filteredGames.length > 8 && (
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link to="/games">
                  View All {filteredGames.length} Games
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gaming-blue/20 via-gaming-dark to-gaming-red/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Elevate Your Gaming Experience?
            </h2>
            <p className="text-xl text-muted-foreground">
              Browse our collection of premium game mods and take your gameplay to the next level.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
              <Link to="/games">
                Get Started Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home