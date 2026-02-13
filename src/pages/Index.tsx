import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaJava, FaDatabase, FaCode, FaMobileAlt, FaLaptopCode, FaBriefcase, FaHeart, FaMapMarkerAlt, FaEnvelope, FaArrowUp, FaBrain, FaServer, FaCloud, FaCogs, FaExternalLinkAlt, FaGooglePlay, FaApple, FaDownload, FaPaperPlane, FaUser, FaPhone } from "react-icons/fa";
import { SiKotlin, SiFlutter, SiJetpackcompose, SiFirebase, SiGradle, SiGit, SiAndroidstudio, SiMaterialdesign, SiTypescript, SiReact, SiTensorflow, SiPython, SiDocker, SiAmazon } from "react-icons/si";
import TypeWriter from "@/components/TypeWriter";
import heroBg from "@/assets/hero-bg.jpg";
import profileHero from "@/assets/junaid.png";
import profileSide from "@/assets/junaid.png";
import techBg from "@/assets/tech-bg.jpg";

const experienceData = [
  {
    company: "CareCloud",
    role: "Software Engineer",
    duration: "2024 - Present",
    description: [
      "Developing and maintaining enterprise-level healthcare software solutions serving thousands of users",
      "Building scalable mobile applications using Kotlin and Jetpack Compose with clean architecture",
      "Collaborating with cross-functional teams including designers, QA, and product managers",
      "Implementing secure HIPAA-compliant features for patient data management",
      "Optimizing app performance and reducing load times by 40% through code refactoring",
      "Mentoring junior developers and conducting code reviews to maintain code quality",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "REST APIs", "Healthcare Tech"],
  },
  {
    company: "AI Genmat",
    role: "Mobile App Developer",
    duration: "2023 - 2024",
    description: [
      "Built AI-powered mobile applications integrating machine learning models for real-time predictions",
      "Developed cross-platform solutions using Flutter and React Native for iOS and Android",
      "Implemented real-time data processing and analytics features with Firebase",
      "Integrated TensorFlow Lite models for on-device AI inference capabilities",
      "Collaborated with data scientists to optimize ML model performance on mobile devices",
    ],
    technologies: ["Flutter", "React Native", "Firebase", "AI/ML Integration"],
  },
  {
    company: "Hexler Tech",
    role: "Junior Android Developer",
    duration: "2022 - 2023",
    description: [
      "Started professional journey developing Android applications for diverse client projects",
      "Gained hands-on experience with Java, Kotlin, and Android SDK best practices",
      "Contributed to 5+ client projects and learned agile development methodologies",
      "Implemented RESTful API integrations and local database management with Room",
    ],
    technologies: ["Java", "Kotlin", "Android SDK", "Git"],
  },
];

const capabilityRows = [
  [
    { label: "KOTLIN", icon: SiKotlin },
    { label: "JAVA", icon: FaJava },
    { label: "JETPACK COMPOSE", icon: SiJetpackcompose },
    { label: "FLUTTER", icon: SiFlutter },
  ],
  [
    { label: "REACT NATIVE", icon: SiReact },
    { label: "FIREBASE", icon: SiFirebase },
    { label: "ROOM DB", icon: FaDatabase },
    { label: "TYPESCRIPT", icon: SiTypescript },
  ],
  [
    { label: "PYTHON", icon: SiPython },
    { label: "TENSORFLOW", icon: SiTensorflow },
    { label: "MACHINE LEARNING", icon: FaBrain },
    { label: "AI INTEGRATION", icon: FaCogs },
  ],
  [
    { label: "REST APIs", icon: FaCode },
    { label: "MICROSERVICES", icon: FaServer },
    { label: "DOCKER", icon: SiDocker },
    { label: "AWS", icon: SiAmazon },
  ],
  [
    { label: "ANDROID STUDIO", icon: SiAndroidstudio },
    { label: "GIT", icon: SiGit },
    { label: "MATERIAL DESIGN", icon: SiMaterialdesign },
    { label: "MOBILE UI/UX", icon: FaMobileAlt },
  ],
];

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://linkedin.com" },
  { icon: FaGithub, href: "https://github.com/JunaidJamshid123" },
  { icon: FaTwitter, href: "https://twitter.com" },
];

const projectsData = [
  {
    title: "HealthCare Pro",
    description: "A comprehensive healthcare management app enabling patients to book appointments, access medical records, and connect with doctors via telemedicine.",
    image: "https://picsum.photos/seed/healthcare/600/400",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "HIPAA"],
    github: "https://github.com/JunaidJamshid123",
    playStore: "#",
    featured: true,
  },
  {
    title: "AI Chat Assistant",
    description: "An intelligent chatbot application powered by machine learning, offering natural language processing and smart responses for customer support.",
    image: "https://picsum.photos/seed/aichat/600/400",
    technologies: ["Flutter", "TensorFlow Lite", "Python", "REST API"],
    github: "https://github.com/JunaidJamshid123",
    playStore: "#",
    featured: true,
  },
  {
    title: "FinTrack Wallet",
    description: "A secure digital wallet and expense tracker with budgeting features, bill reminders, and detailed financial analytics dashboard.",
    image: "https://picsum.photos/seed/fintrack/600/400",
    technologies: ["Kotlin", "Room DB", "Material Design", "Biometrics"],
    github: "https://github.com/JunaidJamshid123",
    playStore: "#",
    featured: false,
  },
  {
    title: "FitLife Tracker",
    description: "A fitness and wellness app with workout plans, calorie tracking, step counter, and integration with wearable devices for health monitoring.",
    image: "https://picsum.photos/seed/fitness/600/400",
    technologies: ["React Native", "Firebase", "Health APIs", "Charts"],
    github: "https://github.com/JunaidJamshid123",
    playStore: "#",
    featured: false,
  },
  {
    title: "EduLearn Platform",
    description: "An e-learning mobile application with video courses, quizzes, progress tracking, and certificate generation for online education.",
    image: "https://picsum.photos/seed/education/600/400",
    technologies: ["Flutter", "Node.js", "MongoDB", "Video Streaming"],
    github: "https://github.com/JunaidJamshid123",
    playStore: "#",
    featured: true,
  },
  {
    title: "TaskFlow Manager",
    description: "A productivity app for team collaboration with task management, real-time updates, file sharing, and project timeline visualization.",
    image: "https://picsum.photos/seed/taskflow/600/400",
    technologies: ["Kotlin", "Jetpack Compose", "WebSocket", "Cloud Sync"],
    github: "https://github.com/JunaidJamshid123",
    playStore: "#",
    featured: false,
  },
];

// Contact Form Component with Validation
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-8 rounded-2xl border border-foreground/10 bg-background/50 backdrop-blur-sm space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-foreground text-sm font-semibold mb-2">
            Your Name
          </label>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full pl-12 pr-4 py-3 rounded-xl bg-background border ${
                errors.name ? "border-red-500" : "border-foreground/20"
              } text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-foreground text-sm font-semibold mb-2">
            Your Email
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full pl-12 pr-4 py-3 rounded-xl bg-background border ${
                errors.email ? "border-red-500" : "border-foreground/20"
              } text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-foreground text-sm font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
            className={`w-full px-4 py-3 rounded-xl bg-background border ${
              errors.subject ? "border-red-500" : "border-foreground/20"
            } text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
          />
          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-foreground text-sm font-semibold mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell me about your project..."
            className={`w-full px-4 py-3 rounded-xl bg-background border ${
              errors.message ? "border-red-500" : "border-foreground/20"
            } text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold tracking-wider uppercase hover:shadow-[0_0_30px_hsla(149,65%,50%,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>

        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <div className="p-4 rounded-xl bg-primary/20 border border-primary/30 text-primary text-center text-sm font-medium">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-500 text-center text-sm font-medium">
            ✗ Failed to send message. Please try again.
          </div>
        )}
      </div>
    </form>
  );
};

const Index = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {/* Background Image */}
        <img
          src={heroBg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/80" style={{ zIndex: 1 }} />

        {/* Top bar */}
        <div className="relative z-10 w-full flex items-start justify-between px-8 md:px-16 pt-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <FaLaptopCode className="text-primary-foreground text-lg" />
            </div>
            <span className="text-foreground font-bold tracking-[0.2em] text-sm uppercase hidden sm:block">
              Junaid Jamshid
            </span>
          </div>
          <div className="text-right">
            <h2 className="text-primary text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase">
              Software
            </h2>
            <h2 className="text-primary text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase">
              Engineer
            </h2>
          </div>
        </div>

        {/* Name */}
        <div className="relative z-10 flex flex-col items-center justify-center" style={{ marginTop: "5vh" }}>
          <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-[0.02em] leading-none uppercase">
            <span className="text-[hsl(210,80%,55%)]">Junaid </span>
            <span className="text-primary">Jamshid</span>
          </h1>
        </div>

        {/* Profile Photo */}
        <div className="relative z-10 flex justify-center" style={{ marginTop: "2vh" }}>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-primary/10 blur-[80px] rounded-full" />
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[26rem] lg:h-[26rem] rounded-full p-[5px] bg-gradient-to-br from-primary via-primary/80 to-primary/60 shadow-[0_0_60px_hsla(149,65%,50%,0.3)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img src={profileHero} alt="Junaid Jamshid" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>

        {/* Typing Effect Below Profile */}
        <div className="relative z-10 flex justify-center mt-6">
          <div className="h-8">
            <TypeWriter
              texts={[
                "Building exceptional mobile experiences",
                "Crafting clean & modern Android apps",
                "Turning ideas into Play Store reality",
                "Kotlin • Jetpack Compose • Flutter",
              ]}
              speed={60}
              deleteSpeed={30}
              delayBetween={2500}
              className="text-muted-foreground text-base md:text-lg font-medium"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 w-full flex items-end justify-between px-8 md:px-16 pb-10 mt-auto">
          <div>
            <p className="text-foreground text-lg md:text-2xl font-semibold tracking-wide">Software Engineer</p>
            <p className="text-muted-foreground text-sm md:text-base font-medium">Mobile Apps Developer</p>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[hsl(210,80%,55%)] hover:text-primary transition-colors text-2xl">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/JunaidJamshid123" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors text-2xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ME SECTION ===== */}
      <section id="about" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
        {/* Tech Background */}
        <img
          src={techBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-background/85" style={{ zIndex: 1 }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-12">
              <div>
                <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase">
                  About Me
                </h2>
                <div className="w-16 h-1 bg-primary mt-4 rounded-full" />
              </div>

              <div className="space-y-6">
                <p className="text-foreground text-lg md:text-xl font-semibold leading-relaxed">
                  I am a Software Engineer & Mobile Apps Developer based in Pakistan.
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
                  My name is Junaid Jamshid, I'm a passionate software engineer specializing in mobile app development with Kotlin, Jetpack Compose, and Flutter. I create clean, modern, and user-friendly applications that deliver exceptional experiences. I'm dedicated, detail-oriented, and always eager to learn new technologies.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-primary text-2xl md:text-3xl font-black tracking-tight uppercase">
                  My Capabilities
                </h3>

                <div className="flex flex-col gap-3 max-w-2xl">
                  {capabilityRows.map((row, i) => (
                    <div key={i} className="flex flex-wrap gap-3">
                      {row.map(({ label, icon: Icon }) => (
                        <div key={label} className="flex items-center gap-2.5 px-5 py-3 border border-foreground/20 rounded-lg text-foreground text-xs font-bold tracking-[0.1em] hover:border-primary hover:text-primary transition-all duration-300 cursor-default">
                          <Icon className="text-sm" />
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Side Profile */}
            <div className="hidden lg:flex justify-end items-end h-full">
              <div className="relative">
                <img
                  src={profileSide}
                  alt="Junaid Jamshid"
                  className="w-[350px] xl:w-[420px] h-auto object-cover opacity-80"
                  style={{ maskImage: "linear-gradient(to top, transparent 0%, black 20%)", WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section id="experience" className="relative py-24 md:py-32 overflow-hidden bg-background">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" style={{ zIndex: 0 }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Career Journey
            </span>
            <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-primary mt-6 rounded-full mx-auto" />
            <p className="text-muted-foreground text-sm md:text-base mt-6 max-w-2xl mx-auto">
              My professional journey in software development, building innovative solutions across different industries.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Center */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
            
            <div className="space-y-8 md:space-y-12">
              {experienceData.map((exp, index) => (
                <div key={exp.company} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 z-10">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsla(149,65%,50%,0.6)]" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-20" />
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'}`}>
                    <div className="group relative p-6 md:p-8 rounded-2xl border border-foreground/10 bg-gradient-to-br from-background via-background to-primary/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_hsla(149,65%,50%,0.15)] overflow-hidden">
                      {/* Glow Effect */}
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/20">
                        <span className="text-primary text-xs font-bold tracking-wider">{exp.duration}</span>
                      </div>
                      
                      {/* Company Header */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                          <FaBriefcase className="text-primary text-xl" />
                        </div>
                        <div className="pt-1">
                          <h3 className="text-foreground text-xl md:text-2xl font-bold tracking-tight">{exp.company}</h3>
                          <p className="text-primary text-base md:text-lg font-semibold">{exp.role}</p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <ul className="text-muted-foreground text-sm leading-relaxed mb-5 pl-[4.5rem] space-y-2">
                        {exp.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pl-[4.5rem]">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1.5 text-xs font-bold tracking-wider uppercase rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200 cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Timeline End Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 bottom-0">
              <div className="w-3 h-3 rounded-full bg-primary/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <img
          src={techBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-background/90" style={{ zIndex: 1 }} />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              My Work
            </span>
            <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mt-6 rounded-full mx-auto" />
            <p className="text-muted-foreground text-sm md:text-base mt-6 max-w-2xl mx-auto">
              A collection of mobile applications I've built, showcasing my expertise in Android, iOS, and cross-platform development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project.title}
                className={`group relative rounded-2xl border border-foreground/10 bg-background/80 backdrop-blur-sm overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_hsla(149,65%,50%,0.15)] ${
                  project.featured ? 'md:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold tracking-wider uppercase">
                      Featured
                    </div>
                  )}
                  
                  {/* Links Overlay */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary hover:bg-background transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary hover:bg-background transition-colors"
                    >
                      <FaGooglePlay className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-foreground text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/JunaidJamshid123?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary/10 border border-primary/30 text-primary font-bold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_hsla(149,65%,50%,0.4)] transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
              View All Projects
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-background">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" style={{ zIndex: 0 }} />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Get In Touch
            </span>
            <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase">
              Contact Me
            </h2>
            <div className="w-24 h-1 bg-primary mt-6 rounded-full mx-auto" />
            <p className="text-muted-foreground text-sm md:text-base mt-6 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-foreground text-2xl md:text-3xl font-bold mb-6">Let's work together</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm currently available for freelance work and full-time positions. If you have a project that needs mobile expertise or want to build something amazing together, let's talk!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <a href="mailto:jamshidjunaid763@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-foreground/10 bg-background/50 hover:border-primary/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FaEnvelope className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">Email</p>
                    <p className="text-foreground font-semibold">jamshidjunaid763@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+923001234567" className="flex items-center gap-4 p-4 rounded-xl border border-foreground/10 bg-background/50 hover:border-primary/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FaPhone className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">Phone</p>
                    <p className="text-foreground font-semibold">+92 300 1234567</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-foreground/10 bg-background/50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">Location</p>
                    <p className="text-foreground font-semibold">Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Download Resume Button */}
              <a
                href="/resume.pdf"
                download="Junaid_Jamshid_Resume.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold tracking-wider uppercase hover:shadow-[0_0_30px_hsla(149,65%,50%,0.4)] transition-all duration-300"
              >
                <FaDownload className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative pt-20 pb-8 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/20 rounded-full blur-[80px]" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-12 gap-12 md:gap-8 pb-12">
            {/* Brand - Takes more space */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-[0_0_30px_hsla(149,65%,50%,0.3)]">
                  <FaLaptopCode className="text-primary-foreground text-xl" />
                </div>
                <div>
                  <span className="text-foreground font-black tracking-wide text-lg block">Junaid Jamshid</span>
                  <span className="text-primary text-xs font-semibold tracking-wider uppercase">Software Engineer</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Passionate about creating exceptional mobile experiences. Specializing in Android development with Kotlin, Jetpack Compose, and cross-platform solutions with Flutter.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map(({ icon: Icon, href }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary hover:scale-110 hover:shadow-[0_0_20px_hsla(149,65%,50%,0.4)] transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 md:col-start-7">
              <h4 className="text-foreground font-bold tracking-wider text-sm uppercase mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Quick Links
              </h4>
              <nav className="flex flex-col gap-3">
                {[
                  { label: "About Me", href: "#about" },
                  { label: "Experience", href: "#experience" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary text-sm transition-all duration-200 hover:translate-x-1 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-200" />
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4">
              <h4 className="text-foreground font-bold tracking-wider text-sm uppercase mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Get In Touch
              </h4>
              <div className="space-y-4">
                <a href="mailto:jamshidjunaid763@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 group">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                    <FaEnvelope className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">jamshidjunaid763@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-xs tracking-wider order-2 md:order-1">
                © {new Date().getFullYear()} Junaid Jamshid. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs tracking-wider flex items-center gap-1.5 order-1 md:order-2">
                Made with <FaHeart className="text-red-500 animate-pulse w-3 h-3" /> using 
                <span className="text-primary font-semibold">React</span> & 
                <span className="text-primary font-semibold">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <a href="#" className="fixed bottom-24 lg:bottom-8 right-8 w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsla(149,65%,50%,0.4)] transition-all duration-300 z-50">
          <FaArrowUp className="w-4 h-4" />
        </a>
      </footer>

      {/* ===== FIXED SOCIAL LINKS ===== */}
      <div className="fixed left-8 bottom-0 z-40 hidden lg:flex flex-col items-center gap-5">
        {socialLinks.map(({ icon: Icon, href }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="social-icon text-muted-foreground hover:text-primary">
            <Icon className="w-4 h-4" />
          </a>
        ))}
        <div className="w-px h-20 bg-border" />
      </div>

      <div className="fixed right-8 bottom-0 z-40 hidden lg:flex flex-col items-center gap-5">
        <a href="mailto:jamshidjunaid763@gmail.com" className="text-muted-foreground hover:text-primary text-xs tracking-wider transition-colors duration-200" style={{ writingMode: "vertical-rl" }}>
          jamshidjunaid763@gmail.com
        </a>
        <div className="w-px h-20 bg-border" />
      </div>

      {/* Mobile Social Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-t border-border">
        <div className="flex justify-center items-center gap-10 py-4">
          {socialLinks.map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
