import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Star, Users, TrendingUp, Clock } from "lucide-react"
import { Link } from "react-router-dom"

interface GameCardProps {
  id: string
  title: string
  description: string
  image: string
  rating: number
  downloads: string
  badge?: "HOT" | "POPULAR" | "UPDATED" | "NEW"
  genre?: string
  className?: string
}

const GameCard = ({
  id,
  title,
  description,
  image,
  rating,
  downloads,
  badge,
  genre,
  className
}: GameCardProps) => {
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

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "HOT":
        return <TrendingUp className="w-3 h-3" />
      case "POPULAR":
        return <Users className="w-3 h-3" />
      case "UPDATED":
        return <Clock className="w-3 h-3" />
      case "NEW":
        return <Star className="w-3 h-3" />
      default:
        return null
    }
  }

  const handleDownload = () => {
    // Create a dummy file download
    const link = document.createElement('a')
    link.href = '/GameHub_Loader.exe' // This would be your actual file
    link.download = 'GameHub_Loader.exe'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className={cn(
      "group relative overflow-hidden bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1",
      className
    )}>
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className={cn("text-xs font-semibold", getBadgeColor(badge))}>
            <span className="flex items-center space-x-1">
              {getBadgeIcon(badge)}
              <span>{badge}</span>
            </span>
          </Badge>
        </div>
      )}

      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/80 via-transparent to-transparent" />
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-gaming-blue transition-colors line-clamp-1">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-foreground">{rating}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Download className="w-4 h-4 text-gaming-blue" />
              <span className="text-sm text-muted-foreground">{downloads}</span>
            </div>
          </div>

          {genre && (
            <Badge variant="secondary" className="text-xs">
              {genre}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        <div className="flex space-x-2 w-full">
          <Button
            onClick={handleDownload}
            className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          
          <Button variant="outline" size="icon" asChild className="hover:bg-gaming-blue hover:text-white">
            <Link to={`/game/${id}`}>
              <Eye className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export { GameCard }