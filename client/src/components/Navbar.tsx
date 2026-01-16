import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Process", href: "#process" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQs", href: "#faqs" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
        isScrolled ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-slate-900/5 border-slate-200/50 dark:border-slate-800/50 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollToSection("#home")}>
            <div className="w-14 h-14 rounded-[1.25rem] bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-3xl leading-tight text-slate-950 dark:text-white tracking-tighter">Darshan</span>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] ml-0.5">University</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all hover:tracking-[0.2em]"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl shadow-primary/30 rounded-[1.25rem] px-10 py-8 h-auto font-black uppercase tracking-widest text-sm active:scale-95 transition-all hover:-translate-y-1"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-left text-base font-medium text-slate-600 py-2 border-b border-slate-50 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <Button onClick={() => scrollToSection("#contact")} className="w-full mt-2">
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
}
