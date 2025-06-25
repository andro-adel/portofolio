import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-wide section-padding relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/assets/3352ecd7cb25461ea99e2dcf47702de6/1698569580543-de5cdb?format=webp&width=800"
                  alt="Andro Adel Yousef - Senior Backend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Andro Adel</span>
              <span className="block gradient-text">Yousef</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Senior Backend Developer & Full Stack Engineer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized in microservices architecture, payment systems, and
            scalable web applications. Leading development teams and building
            cutting-edge solutions with modern technologies like Laravel,
            Node.js, React, and cloud infrastructure.
          </p>

          {/* Key highlights */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <span className="font-semibold text-blue-600">4+</span> Years
              Experience
            </div>
            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <span className="font-semibold text-purple-600">
                Microservices
              </span>{" "}
              Expert
            </div>
            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <span className="font-semibold text-green-600">Team</span> Leader
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>

            <Button variant="outline" size="lg" className="px-8" asChild>
              <a
                href="https://andro-adel-portofolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                View Portfolio
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
