import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
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
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-70"></div>
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Next-Gen Exam Assessment
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Digital Answer Paper <br className="hidden md:block"/>
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Evaluation System</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ensuring accuracy, transparency, and quality in examination assessment through secure, multi-level digital verification.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="h-14 px-8 rounded-full text-base bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-all"
              onClick={() => scrollTo('#process')}
            >
              How It Works
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 rounded-full text-base border-slate-200 hover:bg-slate-50 text-slate-700"
              onClick={() => scrollTo('#benefits')}
            >
              Explore Benefits
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
      <Section id="process">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">The Evaluation Process</h2>
          <p className="text-slate-600">A rigorous four-step workflow ensures every mark is justified.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Digital Scanning",
              desc: "Secure high-speed scanning of answer booklets into encrypted digital format.",
              icon: Scan
            },
            {
              step: "02",
              title: "Level 1 Review",
              desc: "Junior Supervisors check for completeness and assess basic correctness.",
              icon: FileCheck
            },
            {
              step: "03",
              title: "Level 2 Audit",
              desc: "Senior Supervisors conduct quality reviews and cross-verify marking standards.",
              icon: UserCheck
            },
            {
              step: "04",
              title: "Final Verification",
              desc: "University Authority provides final validation before result publication.",
              icon:  ShieldCheck
            }
          ].map((item, i) => (
            <div key={i} className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="text-5xl font-display font-bold text-slate-100 group-hover:text-blue-50 transition-colors absolute top-4 right-4 -z-10">
                {item.step}
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="benefits" className="bg-slate-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-3xl md:text-4xl mb-6 text-white">Why Digital Evaluation?</h2>
             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
               Moving beyond paper-based limitations to a system that is faster, fairer, and future-ready.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Zero Data Loss", icon: Lock },
                  { title: "2x Faster Results", icon: Clock },
                  { title: "Audit Trails", icon: FileCheck },
                  { title: "Bias Elimination", icon: UserCheck },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-800">
                    <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <b.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">{b.title}</span>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <Card className="bg-slate-800 border-slate-700 text-slate-100 p-6 flex flex-col items-center text-center hover:bg-slate-800/80 transition-colors">
                <TrendingUp className="w-10 h-10 text-green-400 mb-4" />
                <div className="text-3xl font-display font-bold text-white mb-1">95%</div>
                <div className="text-sm text-slate-400">Error Reduction</div>
             </Card>
             <Card className="bg-slate-800 border-slate-700 text-slate-100 p-6 flex flex-col items-center text-center hover:bg-slate-800/80 transition-colors">
                <Clock className="w-10 h-10 text-blue-400 mb-4" />
                <div className="text-3xl font-display font-bold text-white mb-1">50%</div>
                <div className="text-sm text-slate-400">Time Saved</div>
             </Card>
             <Card className="bg-slate-800 border-slate-700 text-slate-100 p-6 flex flex-col items-center text-center col-span-2 hover:bg-slate-800/80 transition-colors">
                <ShieldCheck className="w-10 h-10 text-purple-400 mb-4" />
                <div className="text-3xl font-display font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-400">Data Integrity</div>
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
