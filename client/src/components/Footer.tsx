import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-20 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-5">
            <div className="flex items-center gap-3 text-white">
              <div className="w-11 h-11 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://i.postimg.cc/hGH0Thht/unnamed.png" 
                  alt="Darshan University Logo" 
                  className="w-full h-full object-contain bg-white"
                />
              </div>
              <span className="font-display font-bold text-lg">Darshan University</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Pioneering digital education solutions for transparent, accurate, and efficient evaluation systems.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 inline-block">Home</a></li>
              <li><a href="#process" className="hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 inline-block">Evaluation Process</a></li>
              <li><a href="#benefits" className="hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 inline-block">Key Benefits</a></li>
              <li><a href="#faqs" className="hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 inline-block">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-400">Rajkot - Morbi Highway,</li>
              <li className="text-slate-400">Rajkot, Gujarat - 363650</li>
              <li className="pt-2 text-slate-400 hover:text-indigo-400 transition-colors">+91 97277 47310</li>
              <li className="text-slate-400 hover:text-indigo-400 transition-colors">info@darshan.ac.in</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-blue-600 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-blue-600 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-blue-600 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-blue-600 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 mt-16 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Darshan University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
