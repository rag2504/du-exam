import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <GraduationCap className="w-8 h-8" />
              <span className="font-display font-bold text-xl">Darshan University</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Pioneering digital education solutions for transparent, accurate, and efficient evaluation systems.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Evaluation Process</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Key Benefits</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Rajkot - Morbi Highway,</li>
              <li>Rajkot, Gujarat - 363650</li>
              <li className="pt-2">+91 97277 47310</li>
              <li>info@darshan.ac.in</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Darshan University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
