import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Globe,
  Shield,
  Database,
  Users,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "National Center Project (NCNP)",
      description:
        "A comprehensive government platform for the Kingdom of Saudi Arabia, built with microservices architecture. Leading the development of scalable systems using modern cloud technologies and ensuring high availability for national-level operations.",
      url: "https://ncnp.gov.sa/ar",
      technologies: [
        "Laravel",
        "Microservices",
        "Kubernetes",
        "Docker",
        "Redis",
        "RabbitMQ",
        "MongoDB",
        "MySQL",
      ],
      features: [
        "Microservices architecture",
        "High availability design",
        "Scalable infrastructure",
        "Government-grade security",
      ],
      icon: Globe,
      category: "Government Platform",
    },
    {
      title: "EgPay Payment Platform",
      description:
        "A comprehensive payment solution similar to Fawry, featuring PCI DSS compliance, multi-bank integration, and secure transaction processing. Designed to handle high-volume financial transactions with enterprise-grade security.",
      url: "https://egpay.org",
      technologies: [
        "Payment Gateways",
        "PCI Compliance",
        "Security",
        "API Integration",
        "Laravel",
      ],
      features: [
        "PCI DSS compliance",
        "Multi-bank integration",
        "Secure transactions",
        "Real-time processing",
      ],
      icon: Shield,
      category: "Fintech Platform",
    },
    {
      title: "Alatraf Healthcare Platform",
      description:
        "A sophisticated healthcare management system providing comprehensive medical services and patient management. Built with modern web technologies to ensure reliable and secure healthcare operations.",
      url: "https://alatraf.sa/en",
      technologies: [
        "Laravel",
        "MySQL",
        "API Development",
        "Healthcare Systems",
      ],
      features: [
        "Patient management",
        "Medical records",
        "Appointment scheduling",
        "Healthcare analytics",
      ],
      icon: Users,
      category: "Healthcare System",
    },
    {
      title: "Tungsten Media CMS",
      description:
        "A powerful content management system built with modern frameworks. Designed for media companies to manage their digital content efficiently with advanced publishing workflows and multi-user collaboration features.",
      url: "https://tungsten-media.com/en",
      technologies: [
        "Nest.js",
        "Next.js",
        "CMS Development",
        "Team Management",
      ],
      features: [
        "Content management",
        "Publishing workflows",
        "Multi-user collaboration",
        "Media optimization",
      ],
      icon: Database,
      category: "CMS Platform",
    },
  ];

  const personalProjects = [
    {
      title: "E-commerce Multi-tenant Platform",
      description:
        "Developed a scalable e-commerce solution similar to Expand Cart with multi-tenant architecture, ensuring secure data isolation for individual stores.",
      technologies: ["Laravel", "Tenancy", "MySQL", "API Development"],
      features: [
        "Multi-tenant architecture",
        "Store isolation",
        "E-commerce features",
        "API development",
      ],
    },
    {
      title: "Microservices Package",
      description:
        "Created a comprehensive package for microservices initialization including logging, messaging with RabbitMQ, and Redis caching capabilities.",
      technologies: ["PHP", "RabbitMQ", "Redis", "Microservices"],
      features: [
        "Service initialization",
        "Message queuing",
        "Caching system",
        "Logging framework",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container-wide section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of enterprise-level projects demonstrating expertise in
            scalable architecture, security, and modern development practices
          </p>
        </div>

        {/* Main Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <project.icon className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">
            Additional Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {personalProjects.map((project, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium mb-2">Features:</h5>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/andro-adel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
