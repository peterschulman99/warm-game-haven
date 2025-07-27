import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { HelpCircle, Mail, FileText, Shield, Github, Twitter, MessageSquare } from "lucide-react"

interface FooterProps {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  const supportLinks = [
    { href: "/support", label: "Support", icon: HelpCircle },
    { href: "/contact", label: "Contact Us", icon: Mail },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "/terms", label: "Terms of Service", icon: FileText },
    { href: "/privacy", label: "Privacy Policy", icon: Shield },
  ]

  const socialLinks = [
    { href: "#", label: "Discord", icon: MessageSquare },
    { href: "#", label: "Twitter", icon: Twitter },
    { href: "#", label: "GitHub", icon: Github },
  ]

  return (
    <footer className={cn("bg-gaming-dark border-t border-border mt-auto", className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GH</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                GameHub <span className="text-gaming-blue">Software</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Elevate your gaming experience with premium game modifications and utilities. 
              Undetectable, regularly updated, and backed by 24/7 support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/games" className="block text-muted-foreground hover:text-gaming-blue transition-colors">
                Game Cheats
              </Link>
              <Link to="/utilities" className="block text-muted-foreground hover:text-gaming-blue transition-colors">
                Utilities
              </Link>
              <Link to="/how-it-works" className="block text-muted-foreground hover:text-gaming-blue transition-colors">
                How It Works
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-gaming-blue transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Community</h3>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-gaming-blue transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Join our community for updates, support, and exclusive content.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 GameHub Software. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">
                Made with ❤️ for gamers
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }