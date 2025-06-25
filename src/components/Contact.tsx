import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  MessageCircle,
  Download,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "androadel699@gmail.com",
      href: "mailto:androadel699@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+201201398736",
      href: "tel:+201201398736",
      description: "Call for urgent inquiries",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      href: "https://maps.google.com/?q=Cairo,Egypt",
      description: "Available for remote work",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/andro-adel-yousef/",
      icon: Linkedin,
      description: "Professional network and career updates",
    },
    {
      name: "GitHub",
      url: "https://github.com/andro-adel",
      icon: Github,
      description: "Code repositories and open source contributions",
    },
    {
      name: "Portfolio",
      url: "https://andro-adel-portofolio.netlify.app/",
      icon: ExternalLink,
      description: "Current portfolio website",
    },
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM (GMT+2)" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM (GMT+2)" },
    { day: "Sunday", hours: "Available for urgent matters" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container-wide section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project? I'm available for freelance
            opportunities, collaborations, and full-time positions. Let's build
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.label}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {info.description}
                        </p>
                        <Button variant="link" className="p-0 h-auto" asChild>
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">{link.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Availability & Quick Actions */}
          <div className="space-y-6">
            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="space-y-1">
                    <div className="font-medium text-sm">{schedule.day}</div>
                    <div className="text-sm text-muted-foreground">
                      {schedule.hours}
                    </div>
                    {index < workingHours.length - 1 && (
                      <hr className="my-3 border-border" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" asChild>
                  <a href="mailto:androadel699@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://andro-adel-portofolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://www.linkedin.com/in/andro-adel-yousef/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Status */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium text-green-600 dark:text-green-400">
                    Available for Work
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently open to new opportunities and exciting projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you need a full-stack developer, team leader, or technical
              consultant, I'm here to help bring your vision to life with
              cutting-edge technology and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:androadel699@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Conversation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+201201398736">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
