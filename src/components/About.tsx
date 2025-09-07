import { User, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover my journey, skills, and what drives me as a developer
          </p>
        </div>

        {/* About Paragraph */}
        <div
          className="glass-card p-8 rounded-xl max-w-4xl mx-auto
              transition-transform duration-300 ease-in-out
              hover:-translate-y-2 hover:shadow-2xl"
        >
          <p className="text-lg leading-relaxed text-foreground/90 mb-6">
            Hi, I'm <span className="text-purple-500 font-semibold">Dhanush Kumar Nizampatnam</span>,
            currently pursuing my B.Tech in Computer Science and Engineering at Vignana's Institute
            of Information Technology. With a strong foundation in data structures, algorithms, and
            web development, I'm passionate about creating efficient and user-friendly applications.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            My journey in tech began with learning Python and C++, and has evolved into Frontend
            development with modern frameworks like React and Node.js. I believe in writing clean,
            maintainable code and am always eager to learn new technologies and best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;