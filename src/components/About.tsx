import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Calendar, Globe, User } from "lucide-react";

const About = () => {
  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Cairo, Egypt" },
    { icon: Phone, label: "Phone", value: "+201201398736" },
    { icon: Mail, label: "Email", value: "androadel699@gmail.com" },
    { icon: Calendar, label: "Born", value: "November 24, 1994" },
    { icon: User, label: "Status", value: "Single" },
    { icon: Globe, label: "Nationality", value: "Egyptian" },
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Very Well Spoken & Written" },
  ];

  const education = [
    {
      title: "Master Computer Science",
      institution: "Route Academy",
      period: "2022 - 2023",
      description:
        "Advanced studies in computer science principles and software engineering.",
    },
    {
      title: "MERN Stack Development",
      institution: "Route Academy",
      period: "2022",
      description:
        "Full-stack development using MongoDB, Express.js, React, and Node.js.",
    },
    {
      title: "Full Stack PHP Laravel",
      institution: "IT Sharks",
      period: "2020",
      description:
        "Comprehensive training in PHP Laravel framework and full-stack development.",
    },
    {
      title: "Foreign Languages",
      institution: "MUST University",
      period: "2016",
      description: "Language studies with good proficiency level.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container-wide section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating scalable, efficient solutions and leading
            teams to success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Professional Objective
              </h3>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  My goal is to contribute to the success of forward-thinking
                  organizations by designing, developing, and deploying
                  cutting-edge web applications. I utilize my proficiency in
                  both front-end and back-end technologies to create seamless
                  and efficient solutions, fostering positive user experiences.
                </p>
                <p>
                  I am committed to staying abreast of emerging technologies,
                  collaborating with cross-functional teams, and continuously
                  improving my skills to deliver high-quality software solutions
                  that meet and exceed client expectations.
                </p>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Languages</h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-border"
                  >
                    <span className="font-medium">{lang.name}</span>
                    <Badge variant="secondary">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Personal Information & Education */}
          <div className="space-y-8">
            {/* Personal Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">
                  Personal Information
                </h3>
                <div className="grid gap-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <info.icon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground min-w-[80px]">
                        {info.label}:
                      </span>
                      <span className="font-medium">{info.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{edu.title}</h4>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
