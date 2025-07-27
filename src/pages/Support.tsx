import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare, 
  Mail, 
  Clock, 
  Users, 
  HelpCircle,
  ExternalLink,
  Phone,
  Calendar,
  CheckCircle
} from "lucide-react"
import { Link } from "react-router-dom"

const Support = () => {
  const supportOptions = [
    {
      title: "Live Chat Support",
      description: "Get instant help from our support team via live chat. Average response time under 2 minutes.",
      icon: MessageSquare,
      availability: "24/7 Available",
      responseTime: "< 2 minutes",
      badge: "FASTEST"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message and we'll respond with a comprehensive solution within hours.",
      icon: Mail,
      availability: "24/7 Available",
      responseTime: "< 4 hours",
      badge: "DETAILED"
    },
    {
      title: "Community Forum",
      description: "Connect with other users, share tips, and get help from our community moderators.",
      icon: Users,
      availability: "Always Open",
      responseTime: "< 1 hour",
      badge: "COMMUNITY"
    },
    {
      title: "Video Call Support",
      description: "Schedule a one-on-one video call with our technical experts for complex issues.",
      icon: Phone,
      availability: "Business Hours",
      responseTime: "Same Day",
      badge: "PREMIUM"
    }
  ]

  const commonTopics = [
    {
      title: "Installation Issues",
      description: "Help with downloading, installing, and setting up GameHub software",
      articles: 15,
      views: "12.5K"
    },
    {
      title: "Game Compatibility",
      description: "Information about supported games and version compatibility",
      articles: 23,
      views: "18.2K"
    },
    {
      title: "Anti-Virus Conflicts",
      description: "Resolving false positives and antivirus software conflicts",
      articles: 8,
      views: "9.8K"
    },
    {
      title: "Performance Optimization",
      description: "Tips for optimizing system performance while using our mods",
      articles: 12,
      views: "7.3K"
    },
    {
      title: "Account & Billing",
      description: "Account management, subscription, and payment related questions",
      articles: 6,
      views: "4.2K"
    },
    {
      title: "Feature Requests",
      description: "Submit requests for new games, features, or improvements",
      articles: 4,
      views: "3.1K"
    }
  ]

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "FASTEST":
        return "bg-gaming-red text-white"
      case "DETAILED":
        return "bg-gaming-blue text-white"
      case "COMMUNITY":
        return "bg-green-600 text-white"
      case "PREMIUM":
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
            Support Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get the help you need, when you need it. Our dedicated support team is here to ensure 
            your gaming experience is smooth and trouble-free.
          </p>
        </div>

        {/* Support Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center space-y-2 p-6 rounded-xl bg-gradient-card border border-border">
            <div className="text-3xl font-bold text-gaming-blue">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          
          <div className="text-center space-y-2 p-6 rounded-xl bg-gradient-card border border-border">
            <div className="text-3xl font-bold text-gaming-blue">&lt; 2min</div>
            <div className="text-sm text-muted-foreground">Average Response</div>
          </div>
          
          <div className="text-center space-y-2 p-6 rounded-xl bg-gradient-card border border-border">
            <div className="text-3xl font-bold text-gaming-blue">98%</div>
            <div className="text-sm text-muted-foreground">Resolution Rate</div>
          </div>
          
          <div className="text-center space-y-2 p-6 rounded-xl bg-gradient-card border border-border">
            <div className="text-3xl font-bold text-gaming-blue">25K+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
        </div>

        {/* Support Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Choose Your Support Method
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="group bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-foreground group-hover:text-gaming-blue transition-colors">
                          {option.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4 text-gaming-blue" />
                            <span className="text-sm text-muted-foreground">{option.availability}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Badge className={getBadgeColor(option.badge)}>
                      {option.badge}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Response Time: </span>
                      <span className="text-foreground font-semibold">{option.responseTime}</span>
                    </div>
                    
                    <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                      Get Help
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Common Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Popular Help Topics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonTopics.map((topic, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-gaming-blue transition-colors">
                      {topic.title}
                    </h3>
                    <HelpCircle className="w-5 h-5 text-gaming-blue flex-shrink-0" />
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {topic.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {topic.articles} articles
                    </span>
                    <span className="text-muted-foreground">
                      {topic.views} views
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Support */}
        <Card className="bg-gradient-to-r from-gaming-red/20 via-gaming-dark to-gaming-red/20 border-border mb-16">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-gaming-red/20 rounded-full flex items-center justify-center">
              <Phone className="w-8 h-8 text-gaming-red" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Critical Issue? Need Immediate Help?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you're experiencing a game-breaking issue or security concern, 
                contact our emergency support line for immediate assistance.
              </p>
            </div>
            
            <Button size="lg" className="bg-gaming-red hover:bg-gaming-red/80 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Emergency Support
            </Button>
          </CardContent>
        </Card>

        {/* Self-Help Resources */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">
            Self-Help Resources
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">FAQ</h3>
                <p className="text-muted-foreground text-sm">
                  Find answers to frequently asked questions
                </p>
                <Button variant="outline" className="w-full border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white" asChild>
                  <Link to="/faq">
                    Browse FAQ
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">How It Works</h3>
                <p className="text-muted-foreground text-sm">
                  Learn how to install and use our software
                </p>
                <Button variant="outline" className="w-full border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white" asChild>
                  <Link to="/how-it-works">
                    Read Guide
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
                <p className="text-muted-foreground text-sm">
                  Send us a message for personalized help
                </p>
                <Button variant="outline" className="w-full border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white" asChild>
                  <Link to="/contact">
                    Send Message
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support