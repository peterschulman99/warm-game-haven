import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Settings,
  Calendar,
  Mail,
  AlertTriangle,
  CheckCircle,
  FileText,
  Globe
} from "lucide-react"
import { Link } from "react-router-dom"

const Privacy = () => {
  const lastUpdated = "January 15, 2025"

  const dataTypes = [
    {
      type: "Account Information",
      description: "Email address, username, and basic profile data",
      purpose: "User identification and communication",
      retention: "Until account deletion",
      icon: Users
    },
    {
      type: "System Information",
      description: "Operating system, hardware specs, and software versions",
      purpose: "Compatibility checking and troubleshooting",
      retention: "30 days",
      icon: Settings
    },
    {
      type: "Usage Analytics",
      description: "Feature usage, crash reports, and performance metrics",
      purpose: "Service improvement and bug fixes",
      retention: "90 days",
      icon: Database
    },
    {
      type: "Support Communications",
      description: "Messages, tickets, and interaction history",
      purpose: "Customer support and service quality",
      retention: "2 years",
      icon: Mail
    }
  ]

  const privacyPrinciples = [
    {
      title: "Data Minimization",
      description: "We collect only the information necessary to provide our services effectively.",
      icon: Eye
    },
    {
      title: "Purpose Limitation",
      description: "Your data is used only for the specific purposes disclosed to you.",
      icon: Shield
    },
    {
      title: "Transparency",
      description: "We clearly explain what data we collect and how it's used.",
      icon: Globe
    },
    {
      title: "Security First",
      description: "Your data is protected with industry-standard security measures.",
      icon: Lock
    },
    {
      title: "User Control",
      description: "You have control over your data with options to modify or delete it.",
      icon: Settings
    },
    {
      title: "Regular Audits",
      description: "We regularly review and update our privacy practices.",
      icon: CheckCircle
    }
  ]

  const yourRights = [
    "Access your personal data and understand how it's processed",
    "Request correction of inaccurate or incomplete information",
    "Delete your account and associated personal data",
    "Export your data in a machine-readable format",
    "Withdraw consent for data processing where applicable",
    "File complaints with relevant data protection authorities"
  ]

  const thirdPartyServices = [
    {
      service: "Analytics Services",
      purpose: "Website and software usage analytics",
      dataShared: "Anonymized usage statistics",
      privacy: "Privacy-focused, no personal identification"
    },
    {
      service: "Support Platform",
      purpose: "Customer support ticket management",
      dataShared: "Support communications and account info",
      privacy: "Encrypted storage, access-controlled"
    },
    {
      service: "Infrastructure Providers",
      purpose: "Hosting and content delivery",
      dataShared: "Technical logs and system data",
      privacy: "Industry-standard security compliance"
    }
  ]

  return (
    <div className="min-h-screen bg-gaming-bg py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-gaming-blue to-gaming-red bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're committed to protecting your privacy and being transparent about how we collect, 
            use, and safeguard your personal information.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mt-6">
            <Badge className="bg-gaming-blue text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Last Updated: {lastUpdated}
            </Badge>
            <Badge className="bg-green-600 text-white">
              <Shield className="w-4 h-4 mr-2" />
              GDPR Compliant
            </Badge>
          </div>
        </div>

        {/* Privacy Overview */}
        <Card className="bg-gradient-to-r from-gaming-blue/20 via-gaming-dark to-gaming-blue/20 border-border mb-12">
          <CardContent className="p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Your Privacy Matters</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                At GameHub Software, we believe privacy is a fundamental right. This policy explains 
                how we collect, use, protect, and respect your personal information when you use our services.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Principles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Our Privacy Principles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Collection */}
        <Card className="bg-gradient-card border-border mb-12">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center space-x-3">
              <Database className="w-6 h-6" />
              <span>Information We Collect</span>
            </CardTitle>
            <p className="text-muted-foreground">
              We collect only the information necessary to provide and improve our services.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {dataTypes.map((data, index) => (
              <div key={index} className="p-4 rounded-lg bg-gaming-dark/50 border border-border/50">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <data.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">{data.type}</h3>
                      <Badge variant="outline" className="text-xs">
                        Retained: {data.retention}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{data.description}</p>
                    <p className="text-gaming-blue text-sm font-medium">Purpose: {data.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Data Usage */}
        <Card className="bg-gradient-card border-border mb-12">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center space-x-3">
              <Settings className="w-6 h-6" />
              <span>How We Use Your Information</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Service Provision</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Deliver and maintain our software services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Provide customer support and assistance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Process transactions and manage accounts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Send important service notifications</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Service Improvement</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Analyze usage patterns and preferences</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Identify and fix bugs and issues</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Develop new features and improvements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Ensure security and prevent abuse</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Sharing */}
        <Card className="bg-gradient-card border-border mb-12">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center space-x-3">
              <Users className="w-6 h-6" />
              <span>Data Sharing and Third Parties</span>
            </CardTitle>
            <p className="text-muted-foreground">
              We do not sell your personal information. Limited data sharing occurs only with trusted partners.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {thirdPartyServices.map((service, index) => (
              <div key={index} className="p-4 rounded-lg bg-gaming-dark/50 border border-border/50">
                <div className="grid md:grid-cols-4 gap-4 items-start">
                  <div>
                    <h3 className="font-semibold text-foreground">{service.service}</h3>
                    <p className="text-sm text-muted-foreground">{service.purpose}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gaming-blue">Data Shared</p>
                    <p className="text-sm text-muted-foreground">{service.dataShared}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-400">Privacy Protection</p>
                    <p className="text-sm text-muted-foreground">{service.privacy}</p>
                  </div>
                  <div className="flex justify-end">
                    <Badge className="bg-green-600 text-white">
                      <Shield className="w-3 h-3 mr-1" />
                      Secure
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* User Rights */}
        <Card className="bg-gradient-card border-border mb-12">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center space-x-3">
              <FileText className="w-6 h-6" />
              <span>Your Rights and Choices</span>
            </CardTitle>
            <p className="text-muted-foreground">
              You have several rights regarding your personal information under applicable privacy laws.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {yourRights.map((right, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{right}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-gaming-blue/20 border border-gaming-blue/30">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gaming-blue mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-foreground font-medium">Exercise Your Rights</p>
                  <p className="text-muted-foreground text-sm">
                    To exercise any of these rights, contact us at privacy@gamehub.software or use our contact form. 
                    We'll respond within 30 days of receiving your request.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="bg-gradient-card border-border mb-12">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center space-x-3">
              <Lock className="w-6 h-6" />
              <span>Data Security</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              We implement comprehensive security measures to protect your personal information:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Technical Safeguards</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• End-to-end encryption for data transmission</li>
                  <li>• AES-256 encryption for data storage</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Secure coding practices and code reviews</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Operational Safeguards</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Access controls and authentication systems</li>
                  <li>• Employee training on data protection</li>
                  <li>• Incident response and breach notification procedures</li>
                  <li>• Regular backup and disaster recovery testing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact and Updates */}
        <Card className="bg-gradient-to-r from-gaming-blue/20 via-gaming-dark to-gaming-blue/20 border-border">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                Questions About Your Privacy?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or our data practices, 
                please don't hesitate to contact our privacy team.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link to="/contact">
                  Contact Privacy Team
                  <Mail className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              
              <Button variant="outline" className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white" asChild>
                <Link to="/terms">
                  Terms of Service
                  <FileText className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer Notice */}
        <div className="mt-12 text-center">
          <Separator className="mb-6 bg-border" />
          <p className="text-sm text-muted-foreground">
            This Privacy Policy is effective as of {lastUpdated}. We will notify you of any 
            material changes by posting the updated policy on our website with a new effective date.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy