import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "SR. Backend Developer",
      company: "NCNP",
      location: "Saudi Arabia",
      period: "10/2023 - Present",
      type: "Full-time",
      description:
        "Responsible for the National Center project in the Kingdom of Saudi Arabia. Leading the development of a comprehensive microservices system with expertise in Redis, RabbitMQ, Kubernetes, Docker, and Laravel PHP backend. Proficient in designing scalable and resilient systems using MongoDB and MySQL databases. Adept at creating user stories and technical tasks on Jira for streamlined project management. Specialized in crafting custom packages to enhance system functionality and efficiency.",
      technologies: [
        "Laravel PHP",
        "Redis",
        "RabbitMQ",
        "Kubernetes",
        "Docker",
        "MongoDB",
        "MySQL",
        "Jira",
        "Microservices",
      ],
      highlights: [
        "Leading microservices architecture development",
        "Managing large-scale national project",
        "Custom package development",
        "Cross-functional team collaboration",
      ],
    },
    {
      title: "Team Leader",
      company: "Tungsten Media",
      location: "Remote",
      period: "7/2024 - 4/2025",
      type: "Part-time",
      description:
        "Working part-time as a team leader, responsible for managing team's front-end and back-end development to produce CMS projects using the Nest and Next Framework. Leading development teams and ensuring delivery of high-quality solutions.",
      technologies: [
        "Nest.js",
        "Next.js",
        "CMS Development",
        "Team Management",
      ],
      highlights: [
        "Team leadership and management",
        "Full-stack CMS development",
        "Modern framework implementation",
        "Project delivery optimization",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Egpay",
      location: "Egypt",
      period: "08/2022 - 10/2023",
      type: "Full-time",
      description:
        "Engaged in developing a payment site akin to Fawry, actively involved in PCI certification auditing for enhanced security compliance. Proficient in seamlessly integrating diverse payment companies and banks, ensuring a comprehensive and secure transaction ecosystem. Successfully implemented robust payment gateways, adhering to industry standards and regulations.",
      technologies: [
        "Payment Gateways",
        "PCI Compliance",
        "Security",
        "API Integration",
        "Financial Systems",
      ],
      highlights: [
        "PCI certification compliance",
        "Payment gateway integration",
        "Security implementation",
        "Multi-bank system integration",
      ],
    },
    {
      title: "Back End Developer",
      company: "Beone Express",
      location: "Egypt",
      period: "08/2021 - 08/2022",
      type: "Full-time",
      description:
        "Expert in PHP Laravel, MySQL, Livewire, and frontend technologies (JavaScript, jQuery, HTML, CSS, Bootstrap). Specialized in implementing a multi-tenant architecture using the Tenancy package, ensuring secure isolation of data for individual stores. Proficient in API development for seamless communication between project components.",
      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "Livewire",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Multi-tenant Architecture",
      ],
      highlights: [
        "Multi-tenant architecture implementation",
        "E-commerce platform development",
        "API development",
        "Data security and isolation",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Marselia Group",
      location: "Egypt",
      period: "05/2021 - 07/2021",
      type: "Full-time",
      description:
        "Extensive experience in designing, developing, and deploying e-commerce websites from the ground up using a tech stack that includes PHP Laravel, Bootstrap, jQuery, Ajax, MySQL database, and creating APIs for seamless communication. Skills extend beyond development to encompass domain acquisition, hosting setup, and ensuring websites are operational online.",
      technologies: [
        "PHP",
        "Laravel",
        "Bootstrap",
        "jQuery",
        "Ajax",
        "MySQL",
        "API Development",
      ],
      highlights: [
        "End-to-end e-commerce development",
        "Domain and hosting management",
        "Full deployment lifecycle",
        "API integration and development",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Speed Company",
      location: "Egypt",
      period: "09/2020 - 02/2021",
      type: "Full-time",
      description:
        "Wealth of experience in end-to-end development of e-commerce websites, using PHP Laravel for backend development, frontend technologies such as HTML, CSS, JavaScript, jQuery and Bootstrap for the user interface, and effectively managing domains and hosting.",
      technologies: [
        "PHP",
        "Laravel",
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Bootstrap",
      ],
      highlights: [
        "E-commerce platform development",
        "Full-stack web development",
        "Frontend and backend integration",
        "Infrastructure management",
      ],
    },
    {
      title: "Web Developer",
      company: "Just Work Media",
      location: "Egypt",
      period: "06/2020 - 09/2020",
      type: "Full-time",
      description:
        "Extensive experience in building websites using WordPress. Successfully designed, developed, and maintained numerous WordPress sites, catering to diverse needs and industries.",
      technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
      highlights: [
        "WordPress development",
        "Multi-industry website creation",
        "Site maintenance and optimization",
        "Custom theme development",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container-wide section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over 4 years of progressive experience in full-stack development,
            team leadership, and enterprise solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Timeline and Company Info */}
                  <div className="lg:col-span-1 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-primary">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                  </div>

                  {/* Job Description and Details */}
                  <div className="lg:col-span-3 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
