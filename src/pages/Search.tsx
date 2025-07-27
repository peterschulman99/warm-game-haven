import { useState, useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { GameCard } from "@/components/ui/game-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { games, popularGenres } from "@/data/games"
import { Search as SearchIcon, Filter, X, TrendingUp } from "lucide-react"

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("relevance")

  useEffect(() => {
    const query = searchParams.get("q")
    if (query) {
      setSearchQuery(query)
    }
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() })
    }
  }

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    )
  }

  const clearFilters = () => {
    setSelectedGenres([])
    setSortBy("relevance")
  }

  const filteredGames = games.filter(game => {
    const matchesSearch = !searchQuery || 
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(game.genre)
    
    return matchesSearch && matchesGenre
  }).sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "downloads":
        return parseInt(b.downloads.replace(/[^\d]/g, '')) - parseInt(a.downloads.replace(/[^\d]/g, ''))
      case "name":
        return a.title.localeCompare(b.title)
      case "relevance":
      default:
        // Simple relevance scoring based on title match
        const aScore = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ? 2 : 1
        const bScore = b.title.toLowerCase().includes(searchQuery.toLowerCase()) ? 2 : 1
        return bScore - aScore
    }
  })

  const popularSearchTerms = ["fortnite", "valorant", "rust", "warzone", "minecraft", "cs2", "apex"]

  return (
    <div className="min-h-screen bg-gaming-bg py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-gaming-blue to-gaming-red bg-clip-text text-transparent">
            Search Results
          </h1>
          {searchQuery && (
            <p className="text-xl text-muted-foreground">
              Results for "<span className="text-gaming-blue font-medium">{searchQuery}</span>"
            </p>
          )}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="search"
              placeholder="Search for games, features, or mods..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 bg-gaming-card border-border focus:border-primary text-lg"
            />
            <Button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-primary hover:shadow-glow"
            >
              Search
            </Button>
          </form>
        </div>

        {/* Filters and Sort */}
        <div className="space-y-6 mb-12">
          {/* Genre Filters */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Filter by genre:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {popularGenres.slice(1).map((genre) => (
                <Button
                  key={genre}
                  variant={selectedGenres.includes(genre) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleGenre(genre)}
                  className={selectedGenres.includes(genre) ? "bg-gradient-primary shadow-glow" : "border-border hover:border-gaming-blue"}
                >
                  {genre}
                  {selectedGenres.includes(genre) && (
                    <X className="w-3 h-3 ml-2" />
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Active Filters and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-4">
              {(selectedGenres.length > 0 || sortBy !== "relevance") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-gaming-red hover:text-gaming-red hover:bg-gaming-red/10"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              )}
              
              {selectedGenres.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {selectedGenres.map((genre) => (
                    <Badge key={genre} variant="secondary" className="text-xs">
                      {genre}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <div className="flex space-x-1">
                {[
                  { value: "relevance", label: "Relevance" },
                  { value: "rating", label: "Rating" },
                  { value: "downloads", label: "Downloads" },
                  { value: "name", label: "Name" }
                ].map((option) => (
                  <Button
                    key={option.value}
                    variant={sortBy === option.value ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSortBy(option.value)}
                    className={sortBy === option.value ? "bg-gradient-primary" : ""}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {searchQuery ? (
          <>
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-muted-foreground">
                Found {filteredGames.length} result{filteredGames.length !== 1 ? 's' : ''} 
                {selectedGenres.length > 0 && ` in ${selectedGenres.join(', ')}`}
              </p>
            </div>

            {/* Games Grid */}
            {filteredGames.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGames.map((game) => (
                  <GameCard key={game.id} {...game} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 bg-gaming-card rounded-full flex items-center justify-center">
                  <SearchIcon className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or removing some filters
                </p>
                <div className="space-y-4">
                  <Button 
                    onClick={clearFilters}
                    className="bg-gradient-primary hover:shadow-glow"
                  >
                    Clear All Filters
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    or{" "}
                    <Link to="/games" className="text-gaming-blue hover:underline">
                      browse all games
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Popular Searches */
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">
                What are you looking for?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enter a search term above or try one of these popular searches
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="w-5 h-5 text-gaming-blue" />
                <span className="text-sm font-medium text-foreground">Popular searches:</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {popularSearchTerms.map((term) => (
                  <Button
                    key={term}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery(term)
                      setSearchParams({ q: term })
                    }}
                    className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white capitalize"
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Link to="/games">
                  Browse All Games
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search