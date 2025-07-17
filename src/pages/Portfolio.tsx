import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  ChevronUp,
  Code2,
  Brain,
  Database,
  Cloud,
  Award,
  BookOpen,
  User,
  Briefcase,
  MessageSquare,
  Phone,
  Menu,
  X
} from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Portfolio = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Configuration - Easy to update resume and profile paths
  const RESUME_CONFIG = {
    fileName: 'Sandhya_Sri_Damarla_Resume.pdf',
    displayName: 'Sandhya_Sri_Damarla_Resume.pdf'
  };
  
  const PROFILE_CONFIG = {
    imagePath: '/placeholder-profile.jpg', // Replace with your actual image path
    alt: 'Sandhya Sri Damarla Profile Picture'
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = `/${RESUME_CONFIG.fileName}`;
    link.download = RESUME_CONFIG.displayName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsNavOpen(false);
  };

  // Smooth scroll functionality and active section tracking
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.scroll-fade-in');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = {
    "Big Data": ["Apache Spark", "Pyspark", "Python", "Databricks", "SQL", "AWS"],
    "Gen AI": ["LLMs", "RAG", "LangChain", "OpenAI", "Hugging Face", "Agents", "Prompt Engineering", "Vector databases",],
    "Cloud": ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    "Languages": ["Python", "SQL", "Spark"]
  };

  const projects = [
    {
      title: "FactoryGPT – AI Chatbot for Real-time Factory Analytics",
      description: "Built a conversational AI chatbot using LLMs, RAG, Agents, prompt tuning, LangChain, and AWS Bedrock. Deployed on AWS EBS for real-time monitoring and natural language insights into factory production, counters, downtime, etc. Used AutoGen agents and integrated dynamic SQL via table schema.",
      tech: ["Gen AI", "Prompt Engineering", "LangChain", "LLMs", "RAG", "Vector database", "AWS Bedrock", "Sagemaker", "Databricks", "Python", "Agents(Autogen)", "FastAPI", "EBS", "Python", "AWS"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Chat Assistant – Smart Document Q&A System",
      description: "Developed a conversational AI platform using LLMs and RAG architecture, Implemented RAG architecture for document-based Q&A. Used Gemini LLM, FAISS vector store, and FastAPI backend Developed document ingestion, question relevance detection, and real-time answer generation ",
      tech: ["Python", "NLP", "Prompt engineering", "Agents", "RAG", "Vector Database(FAISS)", "LLM’s(Gemini)", "FastAPI", LangChain"],
      github: "#",
      demo: "#"
    },
    {
      title: "LPD Kinaxis – Big Data Inventory Analytics",
      description: "Created data pipelines in Databricks, PySpark, and AWS (S3, Athena). Designed ETL workflows and optimized large-scale inventory datasets. Managed scheduled Airflow jobs and coordinated cross-team data delivery.",
      tech: ["Databricks", "Pyspark", "Spark SQL", "AWS (S3, Athena)", "GitHub", "Airflow"],
      github: "#",
      demo: "#"
    }
  ];

  const blogs = [
    {
      title: "The Future of Large Language Models in Enterprise",
      preview: "Exploring how LLMs are transforming business operations and the challenges of implementation...",
      platform: "Medium",
      url: "#"
    },
    {
      title: "Building Scalable Data Pipelines with Apache Spark",
      preview: "A comprehensive guide to designing and implementing robust data processing architectures...",
      platform: "Dev.to",
      url: "#"
    },
    {
      title: "RAG Architecture: Beyond Basic Implementation",
      preview: "Advanced techniques for building production-ready Retrieval Augmented Generation systems...",
      platform: "Hashnode",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 glass-nav px-6 py-3 rounded-full">
        <div className="flex items-center space-x-6">
          <button
            className="md:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div className={`${isNavOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full md:top-auto left-0 md:left-auto mt-2 md:mt-0 glass-nav md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none space-y-2 md:space-y-0 md:space-x-6 min-w-[200px] md:min-w-0`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center section-spacing max-w-6xl mx-auto">
          <div className="scroll-fade-in">
            {/* Profile Picture */}
            <div className="mb-8 animate-scale-in">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-purple opacity-20 animate-pulse"></div>
                <img
                  src={PROFILE_CONFIG.imagePath}
                  alt={PROFILE_CONFIG.alt}
                  className="w-full h-full rounded-full object-cover glass-card border-2 border-white/20 shadow-xl hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='0.3em' fill='%23fff' font-size='60'%3E👤%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
              Sandhya Sri Damarla
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-muted-foreground animate-fade-in-up">
              Big Data & Generative AI Engineer
            </p>
            <p className="text-lg md:text-xl mb-12 text-accent max-w-2xl mx-auto animate-slide-in-left">
              Crafting Intelligent Systems for a Smarter Tomorrow
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-right">
              <Button variant="glass" className="px-8 py-4 text-lg hover-glow" onClick={downloadResume}>
                <Download className="mr-2" />
                Download Resume
              </Button>
              <Button variant="glass-outline" className="px-8 py-4 text-lg hover-glow" onClick={() => scrollToSection('projects')}>
                <Briefcase className="mr-2" />
                View Projects
              </Button>
              <Button variant="glass-outline" className="px-8 py-4 text-lg hover-glow" onClick={() => scrollToSection('contact')}>
                <MessageSquare className="mr-2" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="glass-card p-8">
                <User className="w-12 h-12 text-primary mb-6" />
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I'm a passionate Big Data and Generative AI Engineer with expertise in building 
                  scalable data solutions and intelligent systems. My journey spans across designing 
                  real-time data pipelines, implementing ML models, and creating AI-powered applications 
                  that drive business value.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With a strong foundation in distributed computing, machine learning, and cloud 
                  technologies, I transform complex data challenges into innovative solutions that 
                  shape the future of technology.
                </p>
              </div>
              
              <div className="glass-card p-8">
                <Brain className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-primary">Key Expertise</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Large-scale Data Processing & Analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Generative AI & LLM Implementation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple rounded-full mr-3"></div>
                    Cloud Architecture & DevOps
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Real-time Streaming & ETL Pipelines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-spacing">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="glass-card p-6 hover-glow group">
                  <Code2 className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="glass-card flex-1">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" className="glass-button flex-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-spacing bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, techList]) => (
                <Card key={category} className="glass-card p-6 hover-glow">
                  <div className="flex items-center mb-4">
                    {category === "Big Data" && <Database className="w-8 h-8 text-primary mr-3" />}
                    {category === "AI/ML" && <Brain className="w-8 h-8 text-accent mr-3" />}
                    {category === "Cloud" && <Cloud className="w-8 h-8 text-purple mr-3" />}
                    {(category === "Languages" || category === "Tools") && <Code2 className="w-8 h-8 text-primary mr-3" />}
                    <h3 className="text-xl font-semibold text-foreground">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techList.map((tech) => (
                      <Badge key={tech} className="bg-primary/20 text-primary border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Latest Blog Posts
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <Card key={index} className="glass-card p-6 hover-glow group cursor-pointer">
                  <BookOpen className="w-10 h-10 text-accent mb-4 group-hover:text-primary transition-colors" />
                  <Badge variant="outline" className="mb-3 text-xs">{blog.platform}</Badge>
                  <h3 className="text-lg font-semibold mb-3 text-foreground line-clamp-2">{blog.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{blog.preview}</p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-accent">
                    Read More <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-spacing bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Extra Skills & Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card p-8 hover-glow">
                <Award className="w-12 h-12 text-purple mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Certifications & Awards</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• AWS Certified Solutions Architect</li>
                  <li>• Google Cloud Professional Data Engineer</li>
                  <li>• Databricks Certified Data Engineer</li>
                  <li>• Winner - AI Innovation Hackathon 2023</li>
                  <li>• Best Paper Award - ML Conference 2023</li>
                </ul>
              </Card>
              
              <Card className="glass-card p-8 hover-glow">
                <User className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Leadership & Community</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Tech Speaker at 15+ conferences</li>
                  <li>• Mentor for Women in Tech initiatives</li>
                  <li>• Open source contributor (50+ repositories)</li>
                  <li>• Data Science community organizer</li>
                  <li>• Technical workshop facilitator</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
              Let's Build Something Great Together
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              Ready to transform your data challenges into intelligent solutions?
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="bg-secondary/20 border-white/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-secondary/20 border-white/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="bg-secondary/20 border-white/20 focus:border-primary"
                    />
                  </div>
                  <Button className="glass-button w-full hover-glow">
                    <Mail className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
              
              <div className="space-y-8">
                <Card className="glass-card p-6 hover-glow">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">sandhya.damarla@email.com</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="glass-card p-6 hover-glow">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-accent mr-4" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>
                
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="glass-card hover-glow">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="glass-card hover-glow">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="glass-card hover-glow">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-spacing bg-gradient-secondary border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">
              © 2024 Sandhya Sri Damarla. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="glass-card" onClick={downloadResume}>
                <Download className="mr-2 w-4 h-4" />
                Resume
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="glass-card hover-glow"
                onClick={scrollToTop}
              >
                <ChevronUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
