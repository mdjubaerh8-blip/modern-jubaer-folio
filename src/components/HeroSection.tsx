import { ArrowDown, FileText, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary animate-pulse-glow">
              <img src={profileImg} alt="MD Jubaer Hossain" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 animate-fade-up tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          <span className="text-foreground">MD JUBAER</span>
          <br />
          <span className="text-primary">HOSSAIN</span>
        </h1>

        <p className="text-lg sm:text-xl text-primary font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          IT Executive | Data Analysis & Reporting Specialist | Aspiring Data Scientist
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          An IT professional with experience in IT operations, data handling, and resource management at Medipath Diagnostic Complex. With an academic background in Computer Technology and ongoing B.Sc. in Computer Science & Engineering, he is focused on growing into a data science professional by applying analytical thinking, technical expertise, and problem-solving skills to deliver efficient, data-driven solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
            View Services
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors">
            <Mail size={18} /> Contact Me
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors">
            <FileText size={18} /> Download Resume
          </a>
        </div>

        <a href="#about" className="inline-block mt-16 text-muted-foreground hover:text-primary transition-colors animate-bounce">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
