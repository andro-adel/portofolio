import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/andro-adel",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/andro-adel-yousef/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:androadel699@gmail.com",
      icon: Mail,
    },
    {
      name: "Portfolio",
      href: "https://andro-adel-portofolio.netlify.app/",
      icon: ExternalLink,
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-wide section-padding">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  Andro Adel Yousef
                </h3>
                <p className="text-muted-foreground">
                  Senior Backend Developer & Full Stack Engineer
                </p>
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                Passionate about building scalable, secure, and efficient web
                applications. Specialized in microservices architecture, payment
                systems, and team leadership.
              </p>
              <div className="flex space-x-2">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      <link.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Cairo, Egypt</p>
                <a
                  href="mailto:androadel699@gmail.com"
                  className="block hover:text-foreground transition-colors"
                >
                  androadel699@gmail.com
                </a>
                <a
                  href="tel:+201201398736"
                  className="block hover:text-foreground transition-colors"
                >
                  +201201398736
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear} Andro Adel Yousef. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>in Cairo, Egypt</span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Built with React, TypeScript & TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
