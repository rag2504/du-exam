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
import { useCounter } from "@/hooks/use-counter";

export default function Home() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Counter animations for stats
  const errorReduction = useCounter(95, 2000);
  const timeSaved = useCounter(50, 2000);
  const dataIntegrity = useCounter(100, 2000);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 font-body text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-24 lg:pt-48 lg:pb-44 overflow-hidden">
        {/* Refined Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-r from-indigo-400/20 to-blue-500/20 rounded-full blur-3xl floating"></div>
          <div className="absolute top-32 right-20 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/15 to-cyan-500/15 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-[450px] h-[450px] bg-gradient-to-r from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-indigo-200/60 text-indigo-700 text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-sm hover:shadow-md transition-shadow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Institutional Excellence
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-slate-900 mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Digital Assessment <br className="hidden sm:block"/>
            <span className="text-gradient">Reimagined</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Experience the future of academic evaluation with a <span className="text-indigo-600 font-semibold">secure</span>, <span className="text-blue-600 font-semibold">transparent</span>, and <span className="text-cyan-600 font-semibold">efficient</span> digital platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <Button 
              size="lg" 
              className="group w-full sm:w-auto h-14 px-10 rounded-xl text-base font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:scale-[0.98] border-0"
              onClick={() => scrollTo('#process')}
            >
              Explore the Process
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto h-14 px-10 rounded-xl text-base font-semibold border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50/50 text-indigo-700 hover:text-indigo-800 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:scale-[0.98] backdrop-blur-sm bg-white/60"
              onClick={() => scrollTo('#contact')}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section className="bg-gradient-to-br from-white via-indigo-50/20 to-blue-50/30 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-indigo-200/15 to-blue-200/15 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">Transforming Academic Assessment</h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                Our Digital Evaluation System replaces traditional manual checking with a <span className="text-indigo-600 font-semibold">secure</span>, <span className="text-blue-600 font-semibold">cloud-based platform</span>. Answer sheets are scanned at high resolution, encrypted, and distributed digitally to evaluators.
              </p>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                This eliminates physical handling errors, prevents data loss, and ensures that every student's effort is graded with <span className="text-cyan-600 font-semibold">absolute precision</span> and <span className="text-indigo-600 font-semibold">fairness</span>.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group flex items-start gap-4 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-indigo-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-slate-900">Vault-Grade Security</h4>
                  <p className="text-sm text-slate-600 mt-1">Military-level encryption</p>
                </div>
              </div>
              <div className="group flex items-start gap-4 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-cyan-100 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100/40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-base text-slate-900">Real-time Analytics</h4>
                  <p className="text-sm text-slate-600 mt-1">Live performance tracking</p>
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
      <Section id="process" className="section-padding bg-gradient-to-br from-slate-50 via-indigo-50/30 to-blue-50/30">
        <div className="text-center mb-20 px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">The Smart Workflow</h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">A multi-layered verification engine designed for <span className="text-indigo-600 font-semibold">absolute academic integrity</span>.</p>
        </div>

        <div className="mobile-card-grid">
          {[
            {
              step: "01",
              title: "Digital Ingest",
              desc: "High-resolution secure scanning of answer booklets into encrypted cloud architecture.",
              icon: Scan,
              gradient: "from-indigo-500 to-blue-600",
              glowColor: "group-hover:shadow-indigo-200/50"
            },
            {
              step: "02",
              title: "Primary Assessment",
              desc: "First-line evaluation by subject experts focusing on core marking metrics.",
              icon: FileCheck,
              gradient: "from-blue-500 to-cyan-600",
              glowColor: "group-hover:shadow-blue-200/50"
            },
            {
              step: "03",
              title: "Quality Audit",
              desc: "Senior academic review to ensure consistency across the entire assessment batch.",
              icon: UserCheck,
              gradient: "from-cyan-500 to-teal-600",
              glowColor: "group-hover:shadow-cyan-200/50"
            },
            {
              step: "04",
              title: "Final Integrity",
              desc: "Executive authority validation for final result synchronization and publishing.",
              icon: ShieldCheck,
              gradient: "from-indigo-600 to-purple-600",
              glowColor: "group-hover:shadow-indigo-200/50"
            }
          ].map((item, i) => (
            <div key={i} className={`group relative glass-card p-10 rounded-2xl hover:shadow-xl ${item.glowColor} transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden hover:-translate-y-2`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-7xl font-display font-black text-slate-100 dark:text-slate-800/50 absolute top-6 right-6 leading-none select-none">
                {item.step}
              </div>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 relative z-10">{item.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="benefits" className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(99,102,241,0.12),_transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.08),_transparent)] pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
             <h2 className="text-3xl md:text-4xl mb-6 text-white font-display font-bold leading-tight">Why Choose Digital Assessment?</h2>
             <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed">
               Moving beyond the constraints of paper-based systems to a secure, transparent, and future-ready academic environment.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Zero Data Loss", icon: Lock, color: "text-blue-400" },
                  { title: "2x Faster Results", icon: Clock, color: "text-cyan-400" },
                  { title: "Complete Audit Trails", icon: FileCheck, color: "text-indigo-400" },
                  { title: "Bias Elimination", icon: UserCheck, color: "text-purple-400" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <div className={cn("w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center", b.color)}>
                      <b.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-sm">{b.title}</span>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
             <Card ref={errorReduction.ref} className="bg-white/5 backdrop-blur-sm border border-white/10 text-slate-100 p-8 flex flex-col items-center text-center hover:bg-white/10 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 rounded-2xl group">
                <TrendingUp className="w-12 h-12 text-cyan-400 mb-5 group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-display font-bold text-white mb-2">{errorReduction.count}%</div>
                <div className="text-sm font-medium text-slate-300">Error Reduction</div>
             </Card>
             <Card ref={timeSaved.ref} className="bg-white/5 backdrop-blur-sm border border-white/10 text-slate-100 p-8 flex flex-col items-center text-center hover:bg-white/10 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 rounded-2xl group">
                <Clock className="w-12 h-12 text-blue-400 mb-5 group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-display font-bold text-white mb-2">{timeSaved.count}%</div>
                <div className="text-sm font-medium text-slate-300">Time Saved</div>
             </Card>
             <Card ref={dataIntegrity.ref} className="bg-white/5 backdrop-blur-sm border border-white/10 text-slate-100 p-8 flex flex-col items-center text-center col-span-2 hover:bg-white/10 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 rounded-2xl group">
                <ShieldCheck className="w-12 h-12 text-indigo-400 mb-5 group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-display font-bold text-white mb-2">{dataIntegrity.count}%</div>
                <div className="text-sm font-medium text-slate-300">Data Integrity</div>
             </Card>
          </div>
        </div>
      </Section>

      {/* FAQs Section */}
      <Section id="faqs" className="bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">Everything you need to know about the new system.</p>
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
              <AccordionItem key={i} value={`item-${i}`} className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl px-6 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-100/40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-indigo-600 hover:no-underline py-5 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
             
             <div className="relative z-10">
               <h3 className="text-2xl font-display font-bold mb-3">Get in Touch</h3>
               <p className="text-slate-300 text-base mb-10 leading-relaxed">
                 Have questions about the implementation or technical details? Our team is here to help.
               </p>
               
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                     <Scan className="w-5 h-5 text-indigo-400" />
                   </div>
                   <div>
                     <h5 className="font-semibold text-white mb-1">Examination Cell</h5>
                     <p className="text-sm text-slate-400">Building A, 2nd Floor</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                     <Clock className="w-5 h-5 text-blue-400" />
                   </div>
                   <div>
                     <h5 className="font-semibold text-white mb-1">Support Hours</h5>
                     <p className="text-sm text-slate-400">Mon-Sat: 9:00 AM - 5:00 PM</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="pt-10 relative z-10">
               <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">Trusted By</div>
               <div className="text-xl font-display font-bold">Darshan University</div>
             </div>
          </div>
          
          <div className="lg:col-span-3 p-12">
            <h3 className="text-2xl font-display font-bold mb-8 text-slate-900">Send an Inquiry</h3>
            <ContactForm />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
