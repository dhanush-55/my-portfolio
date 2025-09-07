import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech - Computer Science and Engineering (Cyber Security)",
      institution: "Vignan's Institute of Information Technology",
      duration: "2022 - 2026",
      location: "Duvvada, Andhra Pradesh",
      grade: "CGPA: 8.54",
      highlights: ["Data Structures", "Algorithms", "Web Development", "Cyber Security"],
    },
    {
      degree: "Intermediate - MPC",
      institution: "K.V.S.R.T JUNIOR COLLEGE",
      duration: "2020 - 2022",
      location: "Tenali, Andhra Pradesh",
      grade: "Percentage: 92%",
      highlights: ["Mathematics", "Physics", "Chemistry"],
    },
    {
      degree: "SSC (10th Standard)",
      institution: "M J P A P B C WR SCHOOL BOYS",
      duration: "2019 - 2020",
      location: "Nizampatnam, Andhra Pradesh",
      grade: "Percentage: 100%",
      highlights: ["Top Performer", "Academic Excellence"],
    },
  ];

  return (
    <section id="education" className="py-0 bg-gradient-">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-purple-700" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-8 top-8 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400 to-purple-700 shadow-lg shadow-purple-500/50 animate-glow-pulse" />
              
              {/* Content */}
              <div
                className="ml-20 glass-card p-6 rounded-xl hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between flex-wrap mb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <GraduationCap className="h-6 w-6 text-purple-500" />
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                </div>

                <p className="text-lg font-semibold mb-2 bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
                  {edu.institution}
                </p>
                
                <p className="text-muted-foreground mb-3">{edu.location}</p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-4 w-4 text-purple-500" />
                  <span className="font-semibold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
                    {edu.grade}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 rounded-lg border border-purple-400 text-purple-400 text-xs cursor-pointer hover:scale-105 transition-transform"
                    >
                      {highlight}
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

export default Education;
