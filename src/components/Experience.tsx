import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Android Web Developer Intern',
      company: 'Eduskills',
      duration: 'Jan 2025 - Mar 2025',
      location: 'Remote',
      description: [
        'Created the first android app in android studio using Kotlin with Jetpack libraries for setup and basics.',
        'Built the UI with user input, edit state, and applied modern design principles.',
        'Implemented lists and styled them with material design using Jetpack compose.',
        'Developed navigation flows and structured the app architecture for scalability.',
        'Integrated internet connectivity with API calls and handled required permissions.',
        'Implemented data persistence using Sqlite, shared preferences, and data store.',
      ],
      technologies: ['Kotlin', 'Android Studio', 'Jetpack', 'Material Design', 'SQLite'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-">
      <div className="section-container">
        <div className="text-center mb-12">
         <h2 className="text-4xl md:text-5xl font-bold mb-4">
  Work <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Experience</span>
</h2>


          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-400/30" />

              {/* Timeline dot */}
              <div className="absolute left-8 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 animate-glow-pulse" />

              {/* Content */}
              <div className="ml-20 glass-card p-6 rounded-xl hover-lift mb-8 animate-fade-up">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-purple-500 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end space-y-1 mt-2 sm:mt-0">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="text-purple-500 mr-2">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-purple-400 border border-purple-400 text-xs cursor-pointer hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
