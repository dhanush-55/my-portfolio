import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-black border-t border-border/00 py-0">
  <div className="section-container">
    <div className="flex flex-col md:flex-row items-center justify-between">
      {/* Copyright */}
      <div className="text-center md:text-left">
        <p className="text-muted-foreground text-sm leading-tight">
          © {currentYear}{' '}
          <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent font-semibold">
            Dhanush Portfolio
          </span>.
          All rights reserved.
        </p>
      </div>

          {/* Made with love */}
          <div className="flex items-center space-x-1 text-muted-foreground">
            <span>Built with</span>
            {/* <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> */}
            <span>•React.js •FrameFlow •CSS</span>
            {/* <Code className="h-4 w-4 text-purple-500" /> */}
            <span></span>
          </div>
        </div>

        {/* Tech Stack */}
        {/* <div className="mt-6 pt-6 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            Built with{' '}
            <span className="text-purple-500">React</span>,{' '}
            <span className="text-purple-500">TypeScript</span>, and{' '}
            <span className="text-purple-500">Tailwind CSS</span>
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
