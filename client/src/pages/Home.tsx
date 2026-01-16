import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { cn } from "@/lib/utils";
import { 
  Scan, 
  CheckCircle2, 
  UserCheck, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  FileCheck, 
  Lock,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-body text-slate-900 selection:bg-primary/10">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 bg-slate-50 dark:bg-slate-950">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-black uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Institutional Excellence
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Digital Assessment <br className="hidden sm:block"/>
            <span className="text-gradient">Redefined.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Empowering Darshan University with the world's most advanced digital evaluation ecosystem. Secure. Transparent. Accurate.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <Button 
              size="lg" 
              className="w-full sm:w-auto h-16 sm:h-20 px-10 sm:px-12 rounded-[2rem] text-lg sm:text-xl font-black uppercase tracking-widest bg-primary hover:bg-primary/90 shadow-[0_20px_40px_-15px_rgba(79,101,241,0.5)] hover:-translate-y-1 transition-all active:scale-95"
              onClick={() => scrollTo('#process')}
            >
              Start Tour
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto h-16 sm:h-20 px-10 sm:px-12 rounded-[2rem] text-lg sm:text-xl font-black uppercase tracking-widest border-2 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 active:scale-95 transition-all shadow-xl shadow-slate-900/5"
              onClick={() => scrollTo('#benefits')}
            >
              Process Details
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section className="bg-slate-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 text-slate-900">Revolutionizing Academic Assessment</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our Digital Evaluation System replaces traditional manual checking with a secure, cloud-based platform. Answer sheets are scanned at high resolution, encrypted, and distributed digitally to evaluators.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This eliminates physical handling errors, prevents data loss, and ensures that every student's effort is graded with absolute precision and fairness.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Secure Storage</h4>
                  <p className="text-sm text-slate-500 mt-1">Encrypted database</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Analytics</h4>
                  <p className="text-sm text-slate-500 mt-1">Real-time insights</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Abstract visual representation of scanning/evaluation */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-100 to-white border border-slate-200 shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 flex flex-col justify-between transform translate-y-8 animate-in slide-in-from-bottom duration-1000">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="h-2 w-16 bg-slate-100 rounded mb-2"></div>
                  <div className="h-2 w-full bg-slate-100 rounded"></div>
                  <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                </div>
                <div className="bg-primary rounded-xl shadow-lg shadow-primary/20 p-4 flex flex-col justify-between text-white transform -translate-y-4 animate-in slide-in-from-top duration-1000 delay-150">
                   <Scan className="w-8 h-8 opacity-80" />
                   <div>
                     <div className="h-2 w-12 bg-white/30 rounded mb-2"></div>
                     <div className="text-2xl font-display font-bold">99.9%</div>
                     <div className="text-xs opacity-70">Accuracy Rate</div>
                   </div>
                </div>
                <div className="bg-slate-900 rounded-xl shadow-lg p-4 flex flex-col justify-between text-slate-300 col-span-2 transform translate-y-2 animate-in fade-in duration-1000 delay-300">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500">System Status</span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between text-xs">
                       <span>Processing Batch #2049</span>
                       <span className="text-green-400">Complete</span>
                     </div>
                     <div className="w-full bg-slate-800 rounded-full h-1.5">
                       <div className="bg-primary h-1.5 rounded-full w-full"></div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Workflow Section */}
      <Section id="process" className="section-padding">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">The Smart Workflow</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">A multi-layered verification engine designed for absolute academic integrity.</p>
        </div>

        <div className="mobile-card-grid">
          {[
            {
              step: "01",
              title: "Digital Ingest",
              desc: "High-resolution secure scanning of answer booklets into encrypted cloud architecture.",
              icon: Scan
            },
            {
              step: "02",
              title: "Primary Assessment",
              desc: "First-line evaluation by subject experts focusing on core marking metrics.",
              icon: FileCheck
            },
            {
              step: "03",
              title: "Quality Audit",
              desc: "Senior academic review to ensure consistency across the entire assessment batch.",
              icon: UserCheck
            },
            {
              step: "04",
              title: "Final Integrity",
              desc: "Executive authority validation for final result synchronization and publishing.",
              icon: ShieldCheck
            }
          ].map((item, i) => (
            <div key={i} className="group relative glass-card p-8 sm:p-10 hover-glow rounded-[2.5rem] transition-all duration-500 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
              <div className="text-7xl font-display font-black text-primary/5 group-hover:text-primary/10 transition-colors absolute top-4 right-6 leading-none">
                {item.step}
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/5">
                <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="benefits" className="bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(79,101,241,0.1),_transparent)] pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
             <h2 className="text-4xl md:text-5xl mb-8 text-white font-display font-black leading-tight">Why Choose Digital <br/>Assessment?</h2>
             <p className="text-slate-400 text-xl mb-12 leading-relaxed">
               Moving beyond the constraints of paper-based systems to a secure, transparent, and future-ready academic environment.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Zero Data Loss", icon: Lock, color: "text-blue-400" },
                  { title: "2x Faster Results", icon: Clock, color: "text-emerald-400" },
                  { title: "Audit Trails", icon: FileCheck, color: "text-purple-400" },
                  { title: "Bias Elimination", icon: UserCheck, color: "text-orange-400" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-5 bg-white/5 p-6 rounded-[1.5rem] border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <div className={cn("w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform", b.color)}>
                      <b.icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-lg">{b.title}</span>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
             <Card className="bg-white/5 border-white/10 text-slate-100 p-10 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-500 rounded-[2.5rem] hover:-translate-y-2">
                <TrendingUp className="w-14 h-14 text-emerald-400 mb-6" />
                <div className="text-5xl font-display font-black text-white mb-2">95%</div>
                <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Error Reduction</div>
             </Card>
             <Card className="bg-white/5 border-white/10 text-slate-100 p-10 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-500 rounded-[2.5rem] hover:-translate-y-2">
                <Clock className="w-14 h-14 text-blue-400 mb-6" />
                <div className="text-5xl font-display font-black text-white mb-2">50%</div>
                <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Time Saved</div>
             </Card>
             <Card className="bg-white/5 border-white/10 text-slate-100 p-10 flex flex-col items-center text-center col-span-2 hover:bg-white/10 transition-all duration-500 rounded-[2.5rem] hover:-translate-y-2">
                <ShieldCheck className="w-14 h-14 text-purple-400 mb-6" />
                <div className="text-5xl font-display font-black text-white mb-2">100%</div>
                <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Data Integrity</div>
             </Card>
          </div>
        </div>
      </Section>

      {/* FAQs Section */}
      <Section id="faqs" className="bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Common Questions</h2>
            <p className="text-slate-600">Everything you need to know about the new system.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "Is the digital evaluation system secure?",
                a: "Yes. The system uses end-to-end encryption for all data. Access is strictly role-based, ensuring only authorized evaluators can view assigned papers."
              },
              {
                q: "How does it reduce errors?",
                a: "Digital totaling removes calculation mistakes automatically. Mandatory field checks ensure no question is left un-evaluated before submission."
              },
              {
                q: "Who evaluates the papers?",
                a: "Qualified university faculty members evaluate the papers, just like the traditional method. The digital platform simply acts as a tool to facilitate their work."
              },
              {
                q: "Can I apply for re-evaluation?",
                a: "Yes, the re-evaluation process is streamlined. Since papers are digital, retrieving and re-assigning them for review is instant."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-slate-200 rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-primary hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-2xl">
          <div className="lg:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div>
               <h3 className="text-2xl font-display font-bold mb-4">Get in Touch</h3>
               <p className="text-slate-400 mb-8">
                 Have questions about the implementation or technical details? Our team is here to help.
               </p>
               
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center shrink-0">
                     <Scan className="w-4 h-4 text-primary" />
                   </div>
                   <div>
                     <h5 className="font-semibold text-white">Examination Cell</h5>
                     <p className="text-sm text-slate-400">Building A, 2nd Floor</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center shrink-0">
                     <Clock className="w-4 h-4 text-primary" />
                   </div>
                   <div>
                     <h5 className="font-semibold text-white">Support Hours</h5>
                     <p className="text-sm text-slate-400">Mon-Sat: 9:00 AM - 5:00 PM</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="pt-10">
               <div className="text-xs font-mono text-slate-500 mb-2">TRUSTED BY</div>
               <div className="text-xl font-display font-bold">Darshan University</div>
             </div>
          </div>
          
          <div className="lg:col-span-3 p-10">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Send an Inquiry</h3>
            <ContactForm />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
