import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Calendar, 
  Shield, 
  AlertTriangle, 
  Users, 
  Gavel,
  Mail,
  ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Terms = () => {
  const lastUpdated = "January 15, 2025"

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      content: `By downloading, installing, or using GameHub Software ("the Software"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our software or services.

These terms constitute a legally binding agreement between you and GameHub Software. Your use of our services indicates your acceptance of these terms and our Privacy Policy.`
    },
    {
      title: "Description of Service",
      icon: Shield,
      content: `GameHub Software provides game modification tools and utilities designed to enhance your gaming experience. Our services include:

• Game modification software and tools
• Performance optimization utilities  
• Customer support and documentation
• Regular software updates and improvements

We reserve the right to modify, suspend, or discontinue any aspect of our service at any time without prior notice.`
    },
    {
      title: "User Responsibilities",
      icon: Users,
      content: `As a user of GameHub Software, you agree to:

• Use our software in compliance with all applicable laws and regulations
• Not use our software for commercial purposes without written permission
• Not reverse engineer, decompile, or attempt to extract source code
• Not distribute, resell, or sublicense our software to third parties
• Take full responsibility for any consequences resulting from software use
• Keep your system and antivirus software updated for optimal security

You acknowledge that game modification may violate certain game terms of service, and you use our software at your own risk.`
    },
    {
      title: "Prohibited Activities",
      icon: AlertTriangle,
      content: `The following activities are strictly prohibited:

• Using our software to harass, threaten, or harm other users
• Attempting to bypass or circumvent our security measures
• Using our software in competitive tournaments or professional gaming
• Distributing malware or harmful code through our platform
• Creating unauthorized copies or derivative works
• Using our software to violate any local, state, or federal laws

Violation of these terms may result in immediate termination of your access to our services.`
    },
    {
      title: "Intellectual Property",
      icon: Gavel,
      content: `GameHub Software and all related materials are protected by copyright, trademark, and other intellectual property laws. You acknowledge that:

• We retain all rights, title, and interest in our software
• You receive only a limited, non-exclusive license to use our software
• You may not claim ownership of any portion of our intellectual property
• All feedback and suggestions become our property
• Third-party game content remains the property of respective owners

Any unauthorized use of our intellectual property may result in legal action.`
    },
    {
      title: "Disclaimers and Limitations",
      icon: Shield,
      content: `GameHub Software is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including:

• Warranties of merchantability or fitness for a particular purpose
• Guarantees of uninterrupted or error-free operation
• Warranties regarding compatibility with all games or systems
• Guarantees against detection by anti-cheat systems

Your use of our software is at your sole risk. We are not liable for any damages, including but not limited to game account suspensions, system damage, or data loss.`
    },
    {
      title: "Privacy and Data Collection",
      icon: Shield,
      content: `We respect your privacy and are committed to protecting your personal information. Our data practices include:

• Collection of minimal necessary information for service provision
• Secure storage and transmission of personal data
• No sale or sharing of personal information with third parties
• Regular security audits and updates to our systems

For complete details about our privacy practices, please review our Privacy Policy, which is incorporated into these terms by reference.`
    },
    {
      title: "Updates and Modifications",
      icon: Calendar,
      content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Continued use of our software after changes constitutes acceptance of the modified terms.

We recommend reviewing these terms periodically to stay informed of any updates. Material changes will be highlighted with updated effective dates.`
    },
    {
      title: "Termination",
      icon: AlertTriangle,
      content: `Either party may terminate this agreement at any time:

• You may stop using our software and delete all copies
• We may terminate your access for violation of these terms
• Termination does not affect any rights or obligations that have already accrued
• Upon termination, you must cease all use and delete all copies of our software

Sections regarding intellectual property, disclaimers, and limitations of liability survive termination.`
    },
    {
      title: "Governing Law and Disputes",
      icon: Gavel,
      content: `These terms are governed by the laws of the State of California, United States, without regard to conflict of law principles. Any disputes arising from these terms or your use of our software will be resolved through:

• Good faith negotiation as the first step
• Binding arbitration if negotiation fails
• Courts of competent jurisdiction in California for non-arbitrable matters

You waive any right to participate in class action lawsuits or class-wide arbitration.`
    },
    {
      title: "Contact Information",
      icon: Mail,
      content: `If you have questions about these Terms of Service, please contact us:

• Email: legal@gamehub.software
• Website: Contact form at gamehub.software/contact
• Mail: GameHub Software Legal Department, 123 Gaming Street, Tech District, CA 90210

We will respond to legal inquiries within 5 business days. For technical support, please use our standard support channels.`
    }
  ]

  return (
    <div className="min-h-screen bg-gaming-bg py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-gaming-blue to-gaming-red bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Please read these terms carefully before using GameHub Software. 
            By using our services, you agree to these terms and conditions.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mt-6">
            <Badge className="bg-gaming-blue text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Last Updated: {lastUpdated}
            </Badge>
            <Badge variant="outline" className="border-gaming-red text-gaming-red">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Legally Binding
            </Badge>
          </div>
        </div>

        {/* Important Notice */}
        <Card className="bg-gradient-to-r from-gaming-red/20 via-gaming-dark to-gaming-red/20 border-gaming-red/50 mb-12">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-gaming-red flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Important Legal Notice</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service constitute a legally binding agreement. Using GameHub Software 
                  indicates your acceptance of these terms. Game modification may violate certain game 
                  terms of service - use at your own discretion and risk.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl">{section.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Agreement Confirmation */}
        <Card className="bg-gradient-card border-border mt-12">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                By using GameHub Software, you agree to these terms
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you have any questions about these Terms of Service or need clarification 
                on any point, please don't hesitate to contact our legal team.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link to="/contact">
                  Contact Legal Team
                  <Mail className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              
              <Button variant="outline" className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white" asChild>
                <Link to="/privacy">
                  Privacy Policy
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer Notice */}
        <div className="mt-12 text-center">
          <Separator className="mb-6 bg-border" />
          <p className="text-sm text-muted-foreground">
            These terms are effective as of {lastUpdated} and will remain in effect until modified. 
            GameHub Software reserves the right to update these terms at any time without prior notice.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Terms