import { useEffect, useState } from "react";
import { Eye, ArrowDown, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const roles = ["CSE Student", "Frontend Developer", "Problem Solver"];
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const handleTyping = () => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText((prev) => prev + currentRole.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "dhanush resume 4.pdf";
    link.download = "Dhanush_Kumar_Resume.pdf";
    link.click();
  };

  const handleContactMe = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-glow-pulse" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
          {/* Name with gradient */}
          <h1 className="text-5xl md:h-12 md:text-7xl font-bold text-purple-500">
  Dhanush Kumar
</h1>

          <h1 className="text-5xl md:text-6xl font-bold text-300">
            Nizampatnam
          </h1>

          {/* Typed text animation */}
          <div className="h-8 md:h-10">
            <p className="text-xl md:text-3xl text-purple-200">
              <span className="text-purple-400 font-semibold">
                {typedText}
                <span className="animate-blink">|</span>
              </span>
            </p>
          </div>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
            Computer Science student at VIIT with a passion for creating
            innovative web solutions. Specializing in React, Python, and modern
            web technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* View CV */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/20 hover:scale-105 transition-all duration-300"
            >
              <a
                href="dhanush resume 4.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="mr-2 h-5 w-5 inline" />
                View CV
              </a>
            </Button>

            {/* Download CV */}
            <Button
              size="lg"
              onClick={handleDownloadCV}
              aria-label="Download my CV"
              className="bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/40"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>

            {/* Contact Me */}
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactMe}
              aria-label="Contact me"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/20 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-sm text-purple-300 mb-2 animate-pulse">
            Scroll Down
          </p>
          <ArrowDown className="text-purple-400 h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// /* Custom CSS (add in globals.css or Hero.css)
// -------------------------------------------------- */
// .gradient-text {
//   background: linear-gradient(90deg, #800080, #ba55d3, #e6e6fa);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// .bg-gradient-glow {
//   background: radial-gradient(circle at center, #800080, #0f0f0f 70%);
// }
