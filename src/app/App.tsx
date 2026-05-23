import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ArrowRight, Monitor, Wifi, BookOpen, Award, Clock, Laptop,
  Star, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter,
  ChevronRight, Code, Palette, Calculator, Globe, Keyboard, FileText,
  Users, Shield, Zap, CheckCircle, Send, GraduationCap
} from "lucide-react";

const PURPLE = "#8B5CF6";
const BLUE = "#38BDF8";
const CYAN = "#22D3EE";

const glowPurple = "0 0 24px rgba(139,92,246,0.55), 0 0 48px rgba(139,92,246,0.2)";
const glowCyan = "0 0 24px rgba(34,211,238,0.5), 0 0 48px rgba(34,211,238,0.15)";
const glowBlue = "0 0 24px rgba(56,189,248,0.5), 0 0 48px rgba(56,189,248,0.15)";

const gradientBtn = `linear-gradient(135deg, ${PURPLE} 0%, ${BLUE} 100%)`;
const gradientText = `linear-gradient(135deg, #a78bfa 0%, ${CYAN} 100%)`;

const courses = [
  {
    icon: <Monitor size={28} />,
    title: "Basic Computer Training",
    duration: "2 Months",
    color: PURPLE,
    desc: "Learn fundamentals of computing, OS basics, file management, and essential digital literacy skills.",
  },
  {
    icon: <FileText size={28} />,
    title: "Advanced MS Office",
    duration: "3 Months",
    color: BLUE,
    desc: "Master Word, Excel, PowerPoint, and Outlook with practical business-ready projects.",
  },
  {
    icon: <Palette size={28} />,
    title: "Graphic Design",
    duration: "4 Months",
    color: CYAN,
    desc: "Create stunning visuals with Photoshop, Canva, and CorelDRAW for print and digital media.",
  },
  {
    icon: <Globe size={28} />,
    title: "Web Design Basics",
    duration: "3 Months",
    color: PURPLE,
    desc: "Build modern responsive websites using HTML, CSS, and beginner-friendly design principles.",
  },
  {
    icon: <Calculator size={28} />,
    title: "Tally & GST",
    duration: "2 Months",
    color: BLUE,
    desc: "Industry-standard accounting software training covering inventory, payroll, and GST filing.",
  },
  {
    icon: <Wifi size={28} />,
    title: "Internet & Digital Skills",
    duration: "1 Month",
    color: CYAN,
    desc: "Navigate the web safely, use email professionally, and explore essential online tools.",
  },
  {
    icon: <Keyboard size={28} />,
    title: "Typing & Productivity",
    duration: "1 Month",
    color: PURPLE,
    desc: "Build speed and accuracy in typing with shortcut mastery and productivity tool training.",
  },
];

const facilities = [
  { icon: <Monitor size={26} />, title: "Smart Computer Lab", desc: "Modern workstations with the latest hardware and software configurations." },
  { icon: <Wifi size={26} />, title: "High-Speed Internet", desc: "Uninterrupted 100Mbps fibre connectivity for seamless online learning." },
  { icon: <BookOpen size={26} />, title: "Practical Assignments", desc: "Real-world projects that build a strong portfolio from day one." },
  { icon: <Laptop size={26} />, title: "Individual Systems", desc: "One dedicated computer per student — no sharing, full focus." },
  { icon: <Clock size={26} />, title: "Flexible Timings", desc: "Morning, afternoon, and evening batches to fit your schedule." },
  { icon: <Award size={26} />, title: "Completion Certificate", desc: "Industry-recognised certificates to strengthen your job applications." },
];

const testimonials = [
  {
    name: "Priya Sarkar",
    role: "Graduate Student, Jadavpur University",
    rating: 5,
    text: "The instructors here are incredibly patient and knowledgeable. I enrolled for the MS Office course and landed a data-entry role within a month of completing it. Highly recommended for beginners!",
    initials: "PS",
    color: PURPLE,
  },
  {
    name: "Rahul Ghosh",
    role: "Job Seeker, South Kolkata",
    rating: 5,
    text: "Harmonic gave me practical skills that no other institute offered at this price. The Tally & GST course got me placed as an accounts assistant. The staff genuinely cares about your success.",
    initials: "RG",
    color: BLUE,
  },
  {
    name: "Ananya Chatterjee",
    role: "Class 12 Student, Salt Lake",
    rating: 5,
    text: "I was completely new to computers. The basic training was so well structured that within weeks I was confident enough to help classmates. Excellent environment and caring teachers.",
    initials: "AC",
    color: CYAN,
  },
  {
    name: "Sourav Mandal",
    role: "Freelance Graphic Designer",
    rating: 5,
    text: "The Graphic Design course opened a whole new world for me. I now take freelance projects online. The trainers taught industry tools like Photoshop and Canva with real briefs — not just theory.",
    initials: "SM",
    color: PURPLE,
  },
];

const navLinks = ["Home", "Courses", "About", "Facilities", "Testimonials", "Contact"];

const featureHighlights = [
  { icon: <Zap size={20} />, label: "Practical Training", color: PURPLE },
  { icon: <Shield size={20} />, label: "Affordable Courses", color: BLUE },
  { icon: <Users size={20} />, label: "Expert Trainers", color: CYAN },
  { icon: <Award size={20} />, label: "Certification Support", color: PURPLE },
];

function GlowOrb({ size, color, style }: { size: number; color: string; style?: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}33 0%, transparent 70%)`,
        filter: `blur(${size * 0.3}px)`,
        ...style,
      }}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
      style={{
        background: "rgba(139,92,246,0.12)",
        border: "1px solid rgba(139,92,246,0.35)",
        color: "#a78bfa",
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: "0.06em",
      }}>
      {children}
    </div>
  );
}

function GradientHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-extrabold leading-tight ${className}`}
      style={{
        fontFamily: "'Sora', sans-serif",
        background: gradientText,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </h2>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
  const [hoveredFacility, setHoveredFacility] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", phone: "", email: "", course: "", message: "" });
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#0B1020", fontFamily: "'Inter', sans-serif", color: "#F1F5F9" }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .float { animation: float 6s ease-in-out infinite; }
        .float-delay { animation: float 6s ease-in-out infinite 2s; }
        .float-delay2 { animation: float 6s ease-in-out infinite 4s; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .spin-slow { animation: spin-slow 20s linear infinite; }
        .glass {
          background: rgba(17, 24, 39, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(139, 92, 246, 0.18);
        }
        .glass-hover:hover {
          background: rgba(17, 24, 39, 0.85);
          border-color: rgba(139, 92, 246, 0.4);
        }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0B1020; }
        ::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.4); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(139,92,246,0.7); }
        .gradient-border {
          position: relative;
          background: rgba(17,24,39,0.7);
          border-radius: 14px;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 15px;
          background: linear-gradient(135deg, rgba(139,92,246,0.5), rgba(56,189,248,0.3), rgba(34,211,238,0.5));
          z-index: -1;
        }
        .input-field {
          background: rgba(26,34,53,0.8);
          border: 1px solid rgba(139,92,246,0.2);
          border-radius: 10px;
          color: #F1F5F9;
          padding: 12px 16px;
          width: 100%;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .input-field:focus {
          border-color: rgba(139,92,246,0.6);
          box-shadow: 0 0 0 3px rgba(139,92,246,0.12);
        }
        .input-field::placeholder { color: #475569; }
        select.input-field option { background: #111827; color: #F1F5F9; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(11,16,32,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(139,92,246,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: gradientBtn, boxShadow: glowPurple }}
            >
              <GraduationCap size={20} color="white" />
            </div>
            <div className="text-left hidden sm:block">
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.9rem", lineHeight: 1.1, color: "#F1F5F9" }}>
                Harmonic
              </div>
              <div style={{ fontSize: "0.65rem", color: "#94A3B8", letterSpacing: "0.04em", lineHeight: 1 }}>
                Computer Training Centre
              </div>
            </div>
            <div className="sm:hidden" style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#F1F5F9" }}>
              Harmonic CTC
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-sm font-medium transition-colors duration-200 hover:text-purple-400"
                style={{ color: "#94A3B8", fontFamily: "'Inter', sans-serif" }}
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{ background: gradientBtn, boxShadow: "0 0 16px rgba(139,92,246,0.4)", fontFamily: "'Sora', sans-serif" }}
            >
              Join Now <ArrowRight size={15} />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#94A3B8", background: "rgba(139,92,246,0.08)" }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="lg:hidden px-6 pb-6 pt-2"
            style={{ background: "rgba(11,16,32,0.97)", borderBottom: "1px solid rgba(139,92,246,0.15)" }}
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="block w-full text-left py-3 text-base font-medium border-b transition-colors"
                style={{ color: "#94A3B8", borderColor: "rgba(139,92,246,0.1)", fontFamily: "'Inter', sans-serif" }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-4 w-full py-3 rounded-lg text-base font-semibold text-white"
              style={{ background: gradientBtn }}
            >
              Join Now
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background orbs */}
        <GlowOrb size={600} color={PURPLE} style={{ top: "-100px", left: "-200px" }} />
        <GlowOrb size={500} color={BLUE} style={{ top: "100px", right: "-150px" }} />
        <GlowOrb size={400} color={CYAN} style={{ bottom: "-50px", left: "30%" }} />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="relative z-10">
              <SectionLabel>⚡ Kolkata's Premier Tech Institute</SectionLabel>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] mb-6"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                <span style={{ color: "#F1F5F9" }}>Master Digital</span>
                <br />
                <span style={{
                  background: gradientText,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Skills for the
                </span>
                <br />
                <span style={{ color: "#F1F5F9" }}>Future</span>
              </h1>

              <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Advanced computer training for students, beginners, and job seekers in Kolkata. Build real-world skills, earn certificates, and unlock new career opportunities.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => scrollTo("courses")}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl"
                  style={{ background: gradientBtn, boxShadow: glowPurple, fontFamily: "'Sora', sans-serif", fontSize: "1rem" }}
                >
                  Start Learning <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
                  style={{
                    border: "1px solid rgba(139,92,246,0.4)",
                    color: "#a78bfa",
                    background: "rgba(139,92,246,0.08)",
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  Book Free Demo
                </button>
              </div>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-3">
                {featureHighlights.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: `rgba(${f.color === PURPLE ? "139,92,246" : f.color === BLUE ? "56,189,248" : "34,211,238"},0.1)`,
                      border: `1px solid rgba(${f.color === PURPLE ? "139,92,246" : f.color === BLUE ? "56,189,248" : "34,211,238"},0.3)`,
                      color: f.color,
                    }}
                  >
                    {f.icon}
                    {f.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero visual */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Floating ring */}
              <div
                className="absolute w-80 h-80 rounded-full spin-slow pointer-events-none"
                style={{
                  border: "1px solid rgba(139,92,246,0.2)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
              <div
                className="absolute w-64 h-64 rounded-full pointer-events-none"
                style={{
                  border: "1px dashed rgba(34,211,238,0.15)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  animation: "spin-slow 30s linear infinite reverse",
                }}
              />

              {/* Main image */}
              <div
                className="relative rounded-2xl overflow-hidden float"
                style={{
                  width: "100%",
                  maxWidth: "520px",
                  boxShadow: `${glowPurple}, 0 40px 80px rgba(0,0,0,0.6)`,
                  border: "1px solid rgba(139,92,246,0.3)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1778489769184-45868633c527?w=900&h=620&fit=crop&auto=format"
                  alt="Trainer guiding students at computers in Kolkata classroom"
                  className="w-full h-72 sm:h-80 lg:h-96 object-cover"
                  style={{ background: "#111827" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(11,16,32,0.85) 0%, transparent 60%)" }}
                />

                {/* Floating badge 1 */}
                <div
                  className="absolute bottom-4 left-4 px-4 py-3 rounded-xl float-delay glass"
                  style={{ boxShadow: glowPurple }}
                >
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#94A3B8", marginBottom: 2 }}>ENROLLED</div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: PURPLE }}>1,200+</div>
                  <div style={{ fontSize: "0.75rem", color: "#94A3B8" }}>Students Trained</div>
                </div>

                {/* Floating badge 2 */}
                <div
                  className="absolute bottom-4 right-4 px-4 py-3 rounded-xl float-delay2 glass"
                  style={{ boxShadow: glowCyan }}
                >
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#94A3B8", marginBottom: 2 }}>COURSES</div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: CYAN }}>7+</div>
                  <div style={{ fontSize: "0.75rem", color: "#94A3B8" }}>Programs Offered</div>
                </div>
              </div>

              {/* Top-right badge */}
              <div
                className="absolute top-4 right-4 lg:-right-4 px-4 py-3 rounded-xl float glass"
                style={{ boxShadow: glowBlue, maxWidth: "160px" }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={11} fill={CYAN} color={CYAN} />
                  ))}
                </div>
                <div style={{ fontSize: "0.7rem", color: "#94A3B8" }}>Trusted by local students & parents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="relative py-12" style={{ background: "rgba(17,24,39,0.6)", borderTop: "1px solid rgba(139,92,246,0.1)", borderBottom: "1px solid rgba(139,92,246,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "1,200+", label: "Students Trained", color: PURPLE },
              { value: "7+", label: "Professional Courses", color: BLUE },
              { value: "98%", label: "Placement Rate", color: CYAN },
              { value: "8+", label: "Years of Excellence", color: PURPLE },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-extrabold mb-1"
                  style={{ fontFamily: "'Sora', sans-serif", color: stat.color, textShadow: `0 0 20px ${stat.color}55` }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "#94A3B8" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── COURSES ── */}
      <section id="courses" className="relative py-24 px-6 lg:px-10 overflow-hidden">
        <GlowOrb size={500} color={PURPLE} style={{ top: "50%", right: "-200px", transform: "translateY(-50%)" }} />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>// Our Programs</SectionLabel>
            <GradientHeading className="text-4xl sm:text-5xl mb-4">
              Courses Designed to<br />Launch Careers
            </GradientHeading>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              From absolute beginner to job-ready professional — choose a program that fits your goal and timeline.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredCourse(i)}
                onMouseLeave={() => setHoveredCourse(null)}
                className="rounded-2xl p-6 cursor-pointer transition-all duration-300 gradient-border"
                style={{
                  background: hoveredCourse === i ? "rgba(17,24,39,0.95)" : "rgba(17,24,39,0.7)",
                  transform: hoveredCourse === i ? "translateY(-6px)" : "translateY(0)",
                  boxShadow: hoveredCourse === i
                    ? `0 0 30px ${course.color}40, 0 20px 60px rgba(0,0,0,0.5)`
                    : "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `rgba(${course.color === PURPLE ? "139,92,246" : course.color === BLUE ? "56,189,248" : "34,211,238"},0.12)`,
                    border: `1px solid rgba(${course.color === PURPLE ? "139,92,246" : course.color === BLUE ? "56,189,248" : "34,211,238"},0.3)`,
                    color: course.color,
                    boxShadow: hoveredCourse === i ? `0 0 16px ${course.color}44` : "none",
                    transition: "box-shadow 0.3s",
                  }}
                >
                  {course.icon}
                </div>

                {/* Duration tag */}
                <div
                  className="inline-block px-2.5 py-1 rounded-md text-xs font-medium mb-3"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    background: `rgba(${course.color === PURPLE ? "139,92,246" : course.color === BLUE ? "56,189,248" : "34,211,238"},0.1)`,
                    color: course.color,
                  }}
                >
                  {course.duration}
                </div>

                <h3
                  className="text-base font-bold mb-2 text-white"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {course.title}
                </h3>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed">{course.desc}</p>

                <button
                  className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: course.color, fontFamily: "'Sora', sans-serif" }}
                >
                  Explore Course <ChevronRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative py-24 px-6 lg:px-10 overflow-hidden">
        <div style={{ background: "rgba(17,24,39,0.4)", borderTop: "1px solid rgba(139,92,246,0.1)", borderBottom: "1px solid rgba(139,92,246,0.1)" }} className="absolute inset-0 pointer-events-none" />
        <GlowOrb size={600} color={BLUE} style={{ top: "0", left: "-200px" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div
                className="rounded-2xl overflow-hidden float"
                style={{
                  boxShadow: `${glowBlue}, 0 40px 80px rgba(0,0,0,0.6)`,
                  border: "1px solid rgba(56,189,248,0.3)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1723987135977-ae935608939e?w=800&h=600&fit=crop&auto=format"
                  alt="Students learning together at computers"
                  className="w-full h-80 lg:h-96 object-cover"
                  style={{ background: "#111827" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.1) 0%, transparent 50%)" }}
                />
              </div>

              {/* Floating stat */}
              <div
                className="absolute -bottom-5 -right-5 px-5 py-4 rounded-2xl float-delay glass"
                style={{ boxShadow: glowCyan }}
              >
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "#94A3B8", marginBottom: 4 }}>SINCE 2016</div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: CYAN }}>8 Years</div>
                <div style={{ fontSize: "0.8rem", color: "#94A3B8" }}>of Empowering Students</div>
              </div>

              {/* Corner decoration */}
              <div
                className="absolute -top-5 -left-5 w-20 h-20 rounded-xl float-delay2"
                style={{
                  background: "rgba(139,92,246,0.08)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  boxShadow: glowPurple,
                }}
              />
            </div>

            {/* Text side */}
            <div className="order-1 lg:order-2">
              <SectionLabel>// Who We Are</SectionLabel>
              <GradientHeading className="text-4xl sm:text-5xl mb-6">
                Kolkata's Trusted<br />Computer Institute
              </GradientHeading>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Harmonic Computer Training Centre has been shaping the digital futures of Kolkata students since 2016. We combine hands-on practical learning with expert guidance, making technology accessible and career-transforming for everyone.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { text: "Practical hands-on learning with real project work", color: PURPLE },
                  { text: "Beginner-friendly environment — no prior experience needed", color: BLUE },
                  { text: "Career-focused curriculum aligned with industry demand", color: CYAN },
                  { text: "Modern, well-equipped computer lab with individual systems", color: PURPLE },
                  { text: "Experienced local trainers who understand your journey", color: BLUE },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} style={{ color: item.color, flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "#CBD5E1" }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{ background: gradientBtn, boxShadow: glowPurple, fontFamily: "'Sora', sans-serif" }}
              >
                Learn More About Us <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section id="facilities" className="relative py-24 px-6 lg:px-10 overflow-hidden">
        <GlowOrb size={500} color={CYAN} style={{ bottom: "0", right: "-100px" }} />
        <GlowOrb size={400} color={PURPLE} style={{ top: "50px", left: "-100px" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <SectionLabel>// Our Facilities</SectionLabel>
            <GradientHeading className="text-4xl sm:text-5xl mb-4">
              Everything You Need<br />to Learn & Grow
            </GradientHeading>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A modern, fully-equipped learning environment built for focus, comfort, and real skill development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((fac, i) => {
              const colors = [PURPLE, BLUE, CYAN, BLUE, PURPLE, CYAN];
              const c = colors[i];
              const rgb = c === PURPLE ? "139,92,246" : c === BLUE ? "56,189,248" : "34,211,238";
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredFacility(i)}
                  onMouseLeave={() => setHoveredFacility(null)}
                  className="glass glass-hover rounded-2xl p-7 transition-all duration-300"
                  style={{
                    transform: hoveredFacility === i ? "translateY(-4px)" : "translateY(0)",
                    boxShadow: hoveredFacility === i ? `0 0 24px ${c}33, 0 16px 40px rgba(0,0,0,0.3)` : "none",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `rgba(${rgb},0.12)`,
                      border: `1px solid rgba(${rgb},0.3)`,
                      color: c,
                    }}
                  >
                    {fac.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif", color: "#F1F5F9" }}>
                    {fac.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{fac.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="relative py-24 px-6 lg:px-10 overflow-hidden">
        <div style={{ background: "rgba(17,24,39,0.3)", borderTop: "1px solid rgba(139,92,246,0.1)", borderBottom: "1px solid rgba(139,92,246,0.1)" }} className="absolute inset-0 pointer-events-none" />
        <GlowOrb size={500} color={PURPLE} style={{ top: "0", left: "30%" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <SectionLabel>// Student Stories</SectionLabel>
            <GradientHeading className="text-4xl sm:text-5xl mb-4">
              Real Results from<br />Real Students
            </GradientHeading>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Hear directly from students whose careers and confidence have been transformed at Harmonic.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: `0 0 0 1px rgba(${t.color === PURPLE ? "139,92,246" : t.color === BLUE ? "56,189,248" : "34,211,238"},0.15)`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={14} fill={t.color} color={t.color} />
                  ))}
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "#CBD5E1" }}>"{t.text}"</p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: `rgba(${t.color === PURPLE ? "139,92,246" : t.color === BLUE ? "56,189,248" : "34,211,238"},0.18)`,
                      border: `1px solid rgba(${t.color === PURPLE ? "139,92,246" : t.color === BLUE ? "56,189,248" : "34,211,238"},0.4)`,
                      color: t.color,
                      fontFamily: "'Sora', sans-serif",
                      boxShadow: `0 0 12px ${t.color}30`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "#64748B" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative py-24 px-6 lg:px-10 overflow-hidden">
        <GlowOrb size={500} color={BLUE} style={{ top: "0", right: "-150px" }} />
        <GlowOrb size={400} color={CYAN} style={{ bottom: "0", left: "-100px" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <SectionLabel>// Get In Touch</SectionLabel>
            <GradientHeading className="text-4xl sm:text-5xl mb-4">
              Start Your Journey<br />Today
            </GradientHeading>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Send us a query and our team will contact you within 24 hours to discuss the right course for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-3 gradient-border p-8 rounded-2xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "rgba(34,211,238,0.12)", border: "1px solid rgba(34,211,238,0.3)" }}
                  >
                    <CheckCircle size={32} color={CYAN} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Sora', sans-serif", color: CYAN }}>
                    Query Sent!
                  </h3>
                  <p style={{ color: "#94A3B8" }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#94A3B8" }}>Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#94A3B8" }}>Phone Number *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#94A3B8" }}>Email Address</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#94A3B8" }}>Course Interested In *</label>
                    <select
                      required
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="input-field"
                    >
                      <option value="">Select a course...</option>
                      {courses.map((c) => (
                        <option key={c.title} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#94A3B8" }}>Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your goals or ask any questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-field"
                      style={{ resize: "none" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl"
                    style={{ background: gradientBtn, boxShadow: glowPurple, fontFamily: "'Sora', sans-serif" }}
                  >
                    <Send size={18} /> Send Query
                  </button>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact cards */}
              {[
                {
                  icon: <MapPin size={20} />, color: PURPLE,
                  label: "Our Location",
                  value: "Harmonic Computer Training Centre, Kolkata, West Bengal, India",
                },
                {
                  icon: <Phone size={20} />, color: BLUE,
                  label: "Call Us",
                  value: "+91 98765 43210",
                },
                {
                  icon: <Mail size={20} />, color: CYAN,
                  label: "Email Us",
                  value: "info@harmonicctc.in",
                },
              ].map((info, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-5 flex items-start gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `rgba(${info.color === PURPLE ? "139,92,246" : info.color === BLUE ? "56,189,248" : "34,211,238"},0.12)`,
                      border: `1px solid rgba(${info.color === PURPLE ? "139,92,246" : info.color === BLUE ? "56,189,248" : "34,211,238"},0.3)`,
                      color: info.color,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#64748B" }}>{info.label}</div>
                    <div className="text-sm font-medium" style={{ color: "#CBD5E1" }}>{info.value}</div>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(139,92,246,0.2)", background: "#0f1728" }}
              >
                <div
                  className="w-full h-36 flex items-center justify-center relative"
                  style={{ background: "linear-gradient(135deg, rgba(11,16,32,0.9) 0%, rgba(17,24,39,0.9) 100%)" }}
                >
                  <div className="text-center">
                    <MapPin size={28} color={PURPLE} className="mx-auto mb-2" style={{ filter: `drop-shadow(0 0 8px ${PURPLE})` }} />
                    <div className="text-sm font-medium" style={{ color: "#94A3B8" }}>Kolkata, West Bengal</div>
                    <div style={{ fontSize: "0.7rem", color: "#475569", fontFamily: "'JetBrains Mono', monospace", marginTop: 4 }}>22.5726° N, 88.3639° E</div>
                  </div>
                  {/* decorative grid dots */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.1) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>
              </div>

              {/* Social links */}
              <div>
                <div className="text-sm font-medium mb-3" style={{ color: "#94A3B8" }}>Follow Us</div>
                <div className="flex gap-3">
                  {[
                    { icon: <Facebook size={18} />, color: PURPLE },
                    { icon: <Instagram size={18} />, color: BLUE },
                    { icon: <Youtube size={18} />, color: CYAN },
                    { icon: <Twitter size={18} />, color: PURPLE },
                  ].map((social, i) => (
                    <button
                      key={i}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        background: `rgba(${social.color === PURPLE ? "139,92,246" : social.color === BLUE ? "56,189,248" : "34,211,238"},0.1)`,
                        border: `1px solid rgba(${social.color === PURPLE ? "139,92,246" : social.color === BLUE ? "56,189,248" : "34,211,238"},0.25)`,
                        color: social.color,
                      }}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="relative py-14 px-6 lg:px-10"
        style={{ background: "#080d1a", borderTop: "1px solid rgba(139,92,246,0.15)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: gradientBtn, boxShadow: glowPurple }}
                >
                  <GraduationCap size={22} color="white" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#F1F5F9" }}>
                    Harmonic Computer Training Centre
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5 max-w-sm" style={{ color: "#64748B" }}>
                Empowering Kolkata Students with Modern Digital Education — one skill at a time.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <Facebook size={16} /> },
                  { icon: <Instagram size={16} /> },
                  { icon: <Youtube size={16} /> },
                  { icon: <Twitter size={16} /> },
                ].map((s, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 hover:text-purple-400"
                    style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.15)", color: "#64748B" }}
                  >
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="text-sm font-semibold mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#F1F5F9" }}>Quick Links</div>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo(link.toLowerCase())}
                      className="text-sm transition-colors hover:text-purple-400"
                      style={{ color: "#64748B" }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <div className="text-sm font-semibold mb-5" style={{ fontFamily: "'Sora', sans-serif", color: "#F1F5F9" }}>Our Courses</div>
              <ul className="space-y-3">
                {courses.slice(0, 5).map((c) => (
                  <li key={c.title}>
                    <button
                      onClick={() => scrollTo("courses")}
                      className="text-sm transition-colors hover:text-purple-400"
                      style={{ color: "#64748B" }}
                    >
                      {c.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: "1px solid rgba(139,92,246,0.1)" }}
          >
            <p className="text-sm text-center" style={{ color: "#475569" }}>
              © 2024 Harmonic Computer Training Centre, Kolkata. All rights reserved.
            </p>
            <p
              className="text-xs text-center"
              style={{ color: "#334155", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Empowering Kolkata Students with Modern Digital Education
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
