import { Code2, Database, Globe, Terminal, GitBranch, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        {
          name: 'Python',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <defs>
                <linearGradient id="python-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#3776AB"}} />
                  <stop offset="100%" style={{stopColor:"#4B8BBE"}} />
                </linearGradient>
                <linearGradient id="python-yellow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#FFD43B"}} />
                  <stop offset="100%" style={{stopColor:"#FFE873"}} />
                </linearGradient>
              </defs>
              <path fill="url(#python-blue)" d="M13.275 15.88h5.417c1.508 0 2.712-1.241 2.712-2.756v-5.164c0-1.47-1.24-2.574-2.712-2.819-0.932-0.155-1.898-0.226-2.825-0.221s-1.813 0.083-2.592 0.221c-2.295 0.405-2.712 1.254-2.712 2.819v2.067h5.423v0.689h-7.459c-1.576 0-2.956 0.947-3.388 2.75-0.498 2.066-0.52 3.355 0 5.512 0.385 1.606 1.306 2.75 2.882 2.75h1.865v-2.478c0-1.79 1.549-3.369 3.388-3.369z"/>
              <path fill="url(#python-yellow)" d="M26.826 13.465c-0.389-1.569-1.133-2.75-2.712-2.75h-2.035v2.408c0 1.867-1.583 3.439-3.388 3.439h-5.417c-1.484 0-2.712 1.27-2.712 2.756v5.164c0 1.47 1.278 2.334 2.712 2.756 1.717 0.505 3.363 0.596 5.417 0 1.365-0.395 2.712-1.191 2.712-2.756v-2.067h-5.417v-0.689h8.129c1.576 0 2.163-1.099 2.712-2.75 0.566-1.699 0.542-3.332 0-5.512z"/>
              <circle fill="#3776AB" cx="12.933" cy="7.619" r="1.018"/>
              <circle fill="#FFD43B" cx="19.033" cy="24.794" r="1.018"/>
            </svg>
          )
        },
       
        {
          name: 'C/C++',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <path fill="#00599C" d="M22.394,6H9.606L3.213,16l6.393,10h12.787l6.393-10L22.394,6z M11.375,15.188H9.281V17.28H8.125v-2.092H6.031v-1.156h2.094V12.031h1.156v2.001h2.094V15.188z M18.156,15.688h-0.75v0.75h-0.656v-0.75h-0.75v-0.625h0.75v-0.75h0.656v0.75h0.75V15.688z M22.125,15.688h-0.75v0.75h-0.656v-0.75h-0.75v-0.625h0.75v-0.75h0.656v0.75h0.75V15.688z"/>
            </svg>
          )
        },
        {
          name: 'SQL',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <path fill="#4479A1" d="M16,2C8.268,2,2,8.268,2,16s6.268,14,14,14s14-6.268,14-14S23.732,2,16,2z M16,4c6.627,0,12,5.373,12,12s-5.373,12-12,12S4,22.627,4,16S9.373,4,16,4z"/>
              <text x="16" y="20" textAnchor="middle" fill="#4479A1" fontSize="8" fontFamily="monospace" fontWeight="bold">SQL</text>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: [
        {
          name: 'React.js',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <circle fill="#61DAFB" cx="16" cy="16" r="2"/>
              <g fill="none" stroke="#61DAFB" strokeWidth="1">
                <ellipse cx="16" cy="16" rx="11" ry="4.2"/>
                <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(60 16 16)"/>
                <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(120 16 16)"/>
              </g>
            </svg>
          )
        },
        {
          name: 'HTML/CSS',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <path fill="#E34F26" d="M6,2L7.56,26.94L16,29L24.44,26.94L26,2H6ZM23.24,25.18L16,27.34L8.76,25.18L7.48,11H24.52L23.24,25.18Z"/>
              <path fill="#1572B6" d="M16,27.34L23.24,25.18L24.52,11H16V27.34Z"/>
            </svg>
          )
        },
        {
          name: 'JavaScript',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <rect fill="#F7DF1E" width="32" height="32" rx="2"/>
              <path fill="#000" d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"/>
            </svg>
          )
        },
        // {
        //   name: 'Tailwind CSS',
        //   icon: (
        //     <svg viewBox="0 0 32 32" className="w-8 h-8">
        //       <path fill="#38BDF8" d="M16,6.5c-5.5,0-8.25,2.75-8.25,8.25.825-2.75,1.788-3.781,2.888-3.094,1.225.764,2.102,2.977,4.553,5.427C17.69,19.582,20.269,22.5,25.25,22.5c5.5,0,8.25-2.75,8.25-8.25-.825,2.75-1.787,3.781-2.887,3.094-1.226-.764-2.103-2.977-4.554-5.427C23.56,9.417,20.981,6.5,16,6.5ZM8.25,14.75c-5.5,0-8.25,2.75-8.25,8.25.825-2.75,1.787-3.781,2.887-3.094,1.226.764,2.103,2.977,4.554,5.427C9.94,27.832,12.519,30.75,17.5,30.75c5.5,0,8.25-2.75,8.25-8.25-.825,2.75-1.787,3.781-2.887,3.094-1.226-.764-2.103-2.977-4.554-5.427C15.81,17.667,13.231,14.75,8.25,14.75Z"/>
        //     </svg>
        //   )
        // }
      ]
    },
    {
      title: 'Developer Tools',
      icon: GitBranch,
      skills: [
        {
          name: 'Git',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <path fill="#F05033" d="M31.396,14.575,17.425,0.604a2.056,2.056,0,0,0-2.908,0L12.065,3.057l3.693,3.693A2.444,2.444,0,0,1,18.847,9.84l3.557,3.557a2.445,2.445,0,0,1,2.61.597,2.444,2.444,0,1,1-1.456,1.456A2.405,2.405,0,0,1,22.9,14.88L19.759,11.74v9.335a2.444,2.444,0,1,1-1.946,0V11.666a2.444,2.444,0,0,1-1.336-3.208L12.783,4.764,0.604,16.943a2.056,2.056,0,0,0,0,2.908L14.575,33.822a2.057,2.057,0,0,0,2.908,0L31.396,19.909a2.056,2.056,0,0,0,0-2.908"/>
            </svg>
          )
        },
        {
          name: 'GitHub',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <path fill="#fcfbfbff" fillRule="evenodd" d="M16,2a14,14,0,0,0-4.427,27.291c.7.129.959-.3.959-.674,0-.332-.012-1.213-.019-2.381-3.891.845-4.711-1.876-4.711-1.876a3.7,3.7,0,0,0-1.548-2.041c-1.265-.866.1-.849.1-.849a2.938,2.938,0,0,1,2.145,1.442,2.98,2.98,0,0,0,4.067,1.162,2.988,2.988,0,0,1,.89-1.875c-3.115-.354-6.387-1.558-6.387-6.931a5.422,5.422,0,0,1,1.443-3.766,5.04,5.04,0,0,1,.138-3.71s1.173-.376,3.848,1.436a13.26,13.26,0,0,1,7,0c2.673-1.812,3.844-1.436,3.844-1.436a5.044,5.044,0,0,1,.14,3.71,5.413,5.413,0,0,1,1.443,3.766c0,5.386-3.276,6.573-6.4,6.92a3.343,3.343,0,0,1,.953,2.6c0,1.875-.017,3.388-.017,3.847,0,.371.253.808.965.67A14,14,0,0,0,16,2Z"/>
            </svg>
          )
        },
        {
          name: 'VS Code',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <path fill="#007ACC" d="M29.01,5.03L24.29,2.18a1.88,1.88,0,0,0-2.36.49L12.06,12.38,5.79,7.66a1.25,1.25,0,0,0-1.65.04L2.29,9.24a1.25,1.25,0,0,0,0,1.78L7.4,16,2.29,21a1.25,1.25,0,0,0,0,1.78l1.85,1.54a1.25,1.25,0,0,0,1.65.04l6.27-4.72L21.93,29.33a1.88,1.88,0,0,0,2.36.49L29.01,27a1.88,1.88,0,0,0,.99-1.66V6.69A1.88,1.88,0,0,0,29.01,5.03ZM24,23L14.06,16,24,9Z"/>
            </svg>
          )
        },
        {
          name: 'Linux',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <path fill="#FCC624" d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M25,23H7V9h18V23z"/>
              <circle fill="#333" cx="11" cy="14" r="1"/>
              <circle fill="#333" cx="21" cy="14" r="1"/>
              <path fill="none" stroke="#333" strokeWidth="2" d="M12,19c0,2.2,1.8,4,4,4s4-1.8,4-4"/>
            </svg>
          )
        }
      ]
    },
    {
      title: 'Core Concepts',
      icon: Database,
      skills: [
        {
          name: 'Data Structures',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <rect fill="#4CAF50" x="4" y="6" width="24" height="4" rx="2"/>
              <rect fill="#2196F3" x="4" y="14" width="24" height="4" rx="2"/>
              <rect fill="#FF9800" x="4" y="22" width="24" height="4" rx="2"/>
              <circle fill="#F44336" cx="6" cy="8" r="1"/>
              <circle fill="#9C27B0" cx="6" cy="16" r="1"/>
              <circle fill="#607D8B" cx="6" cy="24" r="1"/>
            </svg>
          )
        },
        {
          name: 'Algorithms',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <path fill="#FF6B6B" d="M16,4L8,12L16,20L24,12Z"/>
              <path fill="#4ECDC4" d="M4,16L12,24L20,16L12,8Z"/>
              <path fill="#45B7D1" d="M12,8L20,16L12,24L4,16Z"/>
            </svg>
          )
        },
        // {
        //   name: 'DBMS',
        //   icon: (
        //     <svg viewBox="0 0 32 32" className="w-8 h-8">
        //       <ellipse fill="#336791" cx="16" cy="8" rx="10" ry="4"/>
        //       <ellipse fill="#336791" cx="16" cy="16" rx="10" ry="4"/>
        //       <ellipse fill="#336791" cx="16" cy="24" rx="10" ry="4"/>
        //       <rect fill="#336791" x="6" y="8" width="20" height="16"/>
        //     </svg>
        //   )
        // },
        {
          name: 'OOP',
          icon: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
              <rect fill="#8E44AD" x="4" y="4" width="10" height="10" rx="2"/>
              <rect fill="#E74C3C" x="18" y="4" width="10" height="10" rx="2"/>
              <rect fill="#2ECC71" x="4" y="18" width="10" height="10" rx="2"/>
              <rect fill="#F39C12" x="18" y="18" width="10" height="10" rx="2"/>
              <line stroke="#34495E" strokeWidth="2" x1="14" y1="9" x2="18" y2="9"/>
              <line stroke="#34495E" strokeWidth="2" x1="9" y1="14" x2="9" y2="18"/>
              <line stroke="#34495E" strokeWidth="2" x1="23" y1="14" x2="23" y2="18"/>
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-purple-500">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-6 rounded-xl hover-lift"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-purple-600/40 rounded-lg">
                  <category.icon className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    {/* Icon without white circle */}
                    <div className="mb-3 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-sm group-hover:text-purple-500 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
  <h3 className="text-2xl font-semibold mb-6">Other Skills</h3>
  <div className="flex flex-wrap justify-center gap-3">
    {['Problem Solving', 'Teamwork', 'Time Management', 'Quick Learner', 'Communication'].map(
      (skill) => (
        <span
          key={skill}
          className="cursor-pointer hover:scale-105 transition-transform 
                     px-4 py-2 rounded-lg text-purple-600 border border-purple-600"
        >
          {skill}
        </span>
      )
    )}
  </div>
</div>


      </div>
    </section>
  );
};

export default Skills;