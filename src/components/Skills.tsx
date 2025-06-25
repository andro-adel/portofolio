import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Database,
  Cloud,
  Layers,
  Smartphone,
  Globe,
  Settings,
  Users,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Next.js", level: 88 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Bootstrap", level: 90 },
        { name: "Material UI", level: 85 },
        { name: "jQuery", level: 90 },
        { name: "Ajax", level: 90 },
      ],
    },
    {
      title: "Backend Development",
      icon: Code,
      skills: [
        { name: "PHP Laravel", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Nest.js", level: 85 },
        { name: "REST API", level: 95 },
        { name: "GraphQL", level: 80 },
        { name: "Livewire", level: 85 },
        { name: "Microservices", level: 90 },
      ],
    },
    {
      title: "Database Technologies",
      icon: Database,
      skills: [
        { name: "MySQL", level: 95 },
        { name: "MongoDB", level: 90 },
        { name: "Redis", level: 88 },
        { name: "Database Design", level: 90 },
        { name: "Query Optimization", level: 85 },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "RabbitMQ", level: 88 },
        { name: "Kafka", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Server Management", level: 85 },
      ],
    },
    {
      title: "Project Management",
      icon: Users,
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Jira", level: 88 },
        { name: "Agile/Scrum", level: 85 },
        { name: "User Stories", level: 90 },
        { name: "Technical Planning", level: 88 },
      ],
    },
    {
      title: "Specialized Skills",
      icon: Settings,
      skills: [
        { name: "Payment Systems", level: 90 },
        { name: "PCI Compliance", level: 85 },
        { name: "Multi-tenant Architecture", level: 88 },
        { name: "E-commerce Development", level: 95 },
        { name: "CMS Development", level: 90 },
        { name: "WordPress", level: 85 },
      ],
    },
  ];

  const certifications = [
    "Full Stack PHP Laravel - IT Sharks (2020)",
    "MERN Stack Development - Route Academy (2022)",
    "Master Computer Science - Route Academy (2022-2023)",
    "Microservices Architecture",
    "PCI DSS Compliance",
    "Kubernetes Administration",
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container-wide section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical skills across the full development stack
            with expertise in modern technologies and best practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Learning */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Layers className="h-6 w-6 text-primary" />
                Certifications & Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-primary" />
                Development Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium block">
                      Scalable Architecture
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Microservices and modular design patterns
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium block">Security First</span>
                    <span className="text-sm text-muted-foreground">
                      PCI compliance and industry best practices
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium block">
                      Team Collaboration
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Agile methodologies and cross-functional teamwork
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium block">
                      Continuous Learning
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Staying current with emerging technologies
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
