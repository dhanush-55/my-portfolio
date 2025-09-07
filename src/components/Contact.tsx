import { Mail, MessageSquare, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = {
    email: 'dhanushkumar3013@gmail.com',
    phone: '+91 6300448539',
    location: 'Guntur, Andhra Pradesh, India',
    linkedin: 'https://www.linkedin.com/in/dhanush-904581284/',
    github: 'https://github.com/dhanush-55',
    whatsapp: 'https://wa.me/916300448539',
  };

  const handleWhatsApp = () => {
    window.open(contactInfo.whatsapp, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <Mail className="h-5 w-5 text-purple-500" />
                  <span>{contactInfo.email}</span>
                </a>

                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} // remove spaces for tel: format
                  className="flex items-center space-x-3 text-muted-foreground hover:text-purple-500 transition-colors"
                >
                  <Phone className="h-5 w-5 text-purple-500" />
                  <span>{contactInfo.phone}</span>
                </a>

                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-purple-500" />
                  <span>{contactInfo.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-3">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg hover:bg-purple-500/10 transition-colors group"
                  >
                    <Linkedin className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-card rounded-lg hover:bg-purple-500/10 transition-colors group"
                  >
                    <Github className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="glass-card p-8 rounded-xl border border-purple-400/40">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <p className="text-muted-foreground mb-8">
                Choose your preferred method to get in touch. I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Message on WhatsApp
                </Button>

                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="w-full border-purple-500 text-white hover:bg-purple-500/10 hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send me an Email
                </Button>
              </div>

              <div className="mt-8 p-4 bg-purple-500/10 rounded-lg border border-purple-400/40">
                <p className="text-sm text-center text-purple-500">
                  💡 Available for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;