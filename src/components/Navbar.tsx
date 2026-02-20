import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Menu, X, Phone, ChevronDown, Rocket, Code, Lock, Activity } from "lucide-react";

const navLinks = [
  { label: "Protection DNA", href: "#coverage" },
  { label: "Claims Advocacy", href: "#how-it-works" },
  { label: "Settlement Matrix", href: "#testimonials" },
  { label: "Premium Tiers", href: "#pricing" },
];

interface NavbarProps {
  activeHome: number;
  setActiveHome: (home: number) => void;
}

const Navbar = ({ activeHome, setActiveHome }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-3.5 group shrink-0">
          <div className="w-11 h-11 rounded-xl bg-orbit-purple flex items-center justify-center shadow-premium transition-transform group-hover:scale-110">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-display font-black text-foreground tracking-tight leading-none">
              Orbit<span className="text-gradient-purple">Scale</span>
            </span>
            <span className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] mt-1.5 opacity-70">
              Insurance DNA Matrix
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-[12px] font-black uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all group-hover:w-full" />
            </a>
          ))}

          {/* Home Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setHomeDropdownOpen(true)}
              onMouseLeave={() => setHomeDropdownOpen(false)}
              className="flex items-center gap-1 text-[12px] font-black uppercase tracking-[0.1em] text-foreground transition-colors"
            >
              Platform <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${homeDropdownOpen ? 'rotate-180' : ''}`} />

              <AnimatePresence>
                {homeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-[#0a0c10] border border-white/10 rounded-2xl shadow-premium overflow-hidden p-2 backdrop-blur-3xl"
                  >
                    <button
                      onClick={() => setActiveHome(1)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${activeHome === 1 ? 'bg-white/5 text-foreground' : 'hover:bg-white/5 text-muted-foreground'}`}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest">Portal 1</span>
                      <div className="w-7 h-7 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500">
                        <Rocket className="w-4 h-4" />
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveHome(2)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${activeHome === 2 ? 'bg-white/5 text-foreground' : 'hover:bg-white/5 text-muted-foreground'}`}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest">Portal 2</span>
                      <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                        <Code className="w-4 h-4" />
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-black text-white/60 uppercase tracking-widest">IRDAI SECURED</span>
          </div>
          <a href="#" className="text-[12px] font-black uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors">My Vault</a>
          <a
            href="#pricing"
            className="px-6 py-2.5 rounded-xl bg-white text-black text-[12px] font-black uppercase tracking-widest shadow-premium hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2"
          >
            <Lock className="w-3.5 h-3.5" /> Secure Matrix
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-6 py-8 flex flex-col gap-8">
              <div className="flex flex-col gap-4 border-b border-white/5 pb-6">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Initialization Type</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => { setActiveHome(1); setMobileOpen(false); }}
                    className={`flex items-center gap-2 p-3 rounded-xl border ${activeHome === 1 ? 'bg-white/5 border-white/20 text-foreground' : 'border-white/5 text-muted-foreground'}`}
                  >
                    <Rocket className="w-4 h-4 text-pink-500" />
                    <span className="text-xs font-black uppercase tracking-widest">Portal 1</span>
                  </button>
                  <button
                    onClick={() => { setActiveHome(2); setMobileOpen(false); }}
                    className={`flex items-center gap-2 p-3 rounded-xl border ${activeHome === 2 ? 'bg-white/5 border-white/20 text-foreground' : 'border-white/5 text-muted-foreground'}`}
                  >
                    <Code className="w-4 h-4 text-purple-500" />
                    <span className="text-xs font-black uppercase tracking-widest">Portal 2</span>
                  </button>
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { handleScroll(e, link.href); setMobileOpen(false); }}
                  className="text-[12px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={(e) => { handleScroll(e, "#pricing"); setMobileOpen(false); }}
                className="mt-2 px-6 py-4 rounded-xl bg-white text-black text-[12px] font-black uppercase tracking-widest text-center shadow-premium flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5" /> Secure Matrix
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
