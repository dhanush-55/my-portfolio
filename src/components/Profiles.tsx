import { Code, Trophy, Star, GitBranch } from 'lucide-react';

const Profiles = () => {
  const profiles = [
    {
      platform: "CodeChef",
      username: "@dhanush_55",
      icon: Code,
      stats: "Rating: 1450+ | 250+ Problems Solved",
      rating: "2⭐",
      url: "https://www.codechef.com/users/dhanush_55",
      color: "from-orange-500 to-red-500",
    },
    {
      platform: "LeetCode",
      username: "@dhanush___23",
      icon: Trophy,
      stats: "Rating: 1450+ | 200+ Problems",
      rating: "1450+",
      url: "https://leetcode.com/u/dhanush___23/",
      color: "from-yellow-500 to-orange-500",
    },
    {
      platform: "HackerRank",
      username: "@dhanush_55",
      icon: Star,
      stats: "Python 4⭐ | C++ 3⭐ | SQL Basics",
      rating: "4⭐",
      url: "https://www.hackerrank.com/profile/dhanush_55",
      color: "from-green-500 to-emerald-500",
    },
    // {
    //   platform: 'GitHub',
    //   username: '@dhanush-55',
    //   icon: GitBranch,
    //   stats: 'Active Contributor | Open Source',
    //   rating: 'Active',
    //   url: 'https://github.com/dhanush-55',
    //   color: 'from-gray-600 to-gray-800',
    // },
  ];

  const certifications = [
    {
      title: 'Cisco - CCNA',
      issuer: 'Cisco',
      date: 'April 2025',
      link: '#',
    },
    {
      title: 'Cisco - CyberSecurity',
      issuer: 'Cisco',
      date: 'June 2025',
      link: '#',
    },
    {
      title: 'Python Essentials',
      issuer: 'Cisco',
      date: 'May 2025',
      link: '#',
    },
    {
      title: 'edX IBM - Relational Database Basics',
      issuer: 'IBM',
      date: 'May 2024',
      link: '#',
    },
  ];

  return (
    <section id="profiles" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coding{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
              Profiles
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My competitive programming journey and achievements
          </p>
        </div>

        {/* Coding Platforms - Improved Alignment */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl hover-lift group cursor-pointer animate-fade-up flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top accent bar */}
              <div className={`h-1 bg-gradient-to-r ${profile.color} mb-6 rounded-full w-full`} />
              
              {/* Header section with consistent alignment */}
              <div className="flex items-center justify-start mb-6 flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 mr-4 flex-shrink-0">
                  <profile.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-200" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-lg leading-tight truncate">{profile.platform}</h3>
                  <p className="text-sm text-muted-foreground truncate">{profile.username}</p>
                </div>
              </div>

              {/* Stats section with consistent spacing */}
              <div className="flex-grow flex flex-col justify-between">
                <div className="mb-4">
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent mb-2 text-center">
                    {profile.rating}
                  </p>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {profile.stats}
                  </p>
                </div>
                
                {/* Visual indicator for external link */}
                <div className="flex justify-center pt-2 border-t border-purple-500/10">
                  <div className="text-xs text-purple-500/70 font-medium">
                    View Profile →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-lift animate-fade-up flex items-start justify-between"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1 min-w-0 mr-4">
                  <h4 className="font-bold text-lg mb-2 leading-tight">{cert.title}</h4>
                  <p className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent text-sm font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-sm">{cert.date}</p>
                </div>
                {cert.link !== '#' && (
                  <div className="flex-shrink-0">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-600 transition-colors p-2 rounded-lg hover:bg-purple-500/10"
                    >
                      <Trophy className="h-5 w-5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiles;