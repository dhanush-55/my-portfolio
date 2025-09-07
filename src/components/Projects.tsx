import { ExternalLink, Github, Heart, Cloud, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Blood Donation',
      description:
        'A secure platform connecting blood donors with those in need, featuring real-time donor search and efficient blood type matching.',
      icon: Heart,
      technologies: ['React', 'Node.js', 'Database', 'API'],
      features: [
        'Secure database for donor information',
        'Real-time blood type search',
        'Direct contact with donors',
        'Interactive front-end with robust back-end',
      ],
      github: 'https://github.com/dhanush-55/Blood-Donation',
      live: 'https://blood-donation-main.netlify.app/', // ✅ Added correct link
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Weather Now',
      description:
        'Real-time weather application with OpenWeatherMap API integration, providing accurate forecasts and dynamic visual elements.',
      icon: Cloud,
      technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
      features: [
        'Real-time weather data',
        'Location-based forecasts',
        'Responsive interface',
        'Temperature graphs and visual elements',
      ],
      github: 'https://github.com/dhanush-55/weather-app',
      live: 'https://weather-now-main.netlify.app/', // ✅ Added Weather Now link
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern and responsive portfolio showcasing my projects, skills, and achievements with smooth animations and clean UI.',
      icon: Code,
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      features: [
        'Responsive design for all devices',
        'Animated sections with Framer Motion',
        'Dynamic project showcase',
        'Contact form integration',
      ],
      github: 'https://github.com/dhanush-55/my-portfolio',
      live: 'https://my-portfolio-main1.netlify.app/', // replace with actual deployed link
      color: 'from-purple-500 to-purple-700',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my best work and technical capabilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden hover-lift group border border-purple-500/40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                {/* Title & Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <project.icon className="h-8 w-8 text-purple-500" />
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-500 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="text-purple-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg border border-purple-400 text-purple-400 text-xs cursor-pointer hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* Code Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500 text-white hover:bg-purple-500/10 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                    onClick={() =>
                      window.open(project.github, '_blank', 'noopener,noreferrer')
                    }
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>

                  {/* Live Demo Button */}
                  <Button
                    asChild
                    size="sm"
                    className="bg-purple-700 text-white hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
