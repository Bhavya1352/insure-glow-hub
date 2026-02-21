import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
  Rocket,
  Code,
  Lock,
  Globe,
  LayoutDashboard,
  ShieldAlert,
  Users,
  Building2,
  Phone,
  Activity,
  Folder,
  Key,
  Settings
} from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dropdowns = {
    Home: [
      { label: "Home 1", href: "/", icon: Activity },
      { label: "Home 2", href: "/home-2", icon: ShieldCheck },
      { label: "Admin Console", href: "/admin", icon: Settings },
    ],
    Dashboards: [
      { label: "User Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { label: "Project Management", href: "#", icon: Folder },
      { label: "API Console", href: "#", icon: Key },
    ]
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 px-8 rounded-[2.5rem] bg-black/40 backdrop-blur-3xl border border-white/5 shadow-2xl">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 p-2 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-glow">
              <ShieldCheck className="w-full h-full text-white" />
            </div>
            <span className="text-xl font-display font-black text-white italic tracking-tighter">Orbit.Scale</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {Object.entries(dropdowns).map(([key, items]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors py-2">
                  {key} <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 p-4 rounded-[2rem] bg-[#0a0c10] border border-white/10 shadow-premium backdrop-blur-2xl"
                    >
                      {items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-all group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-purple-500 transition-colors">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[11px] font-black uppercase tracking-widest text-white group-hover:text-purple-500 transition-colors">{item.label}</p>
                            <p className="text-[9px] font-medium text-white/30 italic">View System Matrix</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link to="/solutions" className="text-[11px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors">Solutions</Link>
            <Link to="/pricing" className="text-[11px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors">Pricing</Link>
            <Link to="/about" className="text-[11px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors">About</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link to="/login" className="hidden lg:block text-[11px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">Log in</Link>
            <Link to="/signup" className="px-6 py-3 rounded-xl bg-white text-black text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-premium">
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 group"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6 text-white" /> : (
                <>
                  <div className="w-6 h-0.5 bg-white/50 group-hover:bg-white transition-colors" />
                  <div className="w-6 h-0.5 bg-white/50 group-hover:bg-white transition-colors" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden rounded-[2.5rem] bg-black/80 backdrop-blur-3xl border border-white/5 shadow-2xl"
            >
              <div className="p-8 flex flex-col gap-8">
                {Object.entries(dropdowns).map(([key, items]) => (
                  <div key={key} className="space-y-4">
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{key}</p>
                    <div className="grid grid-cols-1 gap-2">
                      {items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5"
                        >
                          <item.icon className="w-5 h-5 text-purple-500" />
                          <span className="text-[11px] font-black uppercase tracking-widest text-white">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="space-y-4">
                  <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Pages</p>
                  <div className="grid grid-cols-1 gap-2">
                    <Link to="/solutions" className="p-4 rounded-2xl bg-white/5 border border-white/5 text-[11px] font-black uppercase tracking-widest text-white" onClick={() => setMobileOpen(false)}>Solutions</Link>
                    <Link to="/pricing" className="p-4 rounded-2xl bg-white/5 border border-white/5 text-[11px] font-black uppercase tracking-widest text-white" onClick={() => setMobileOpen(false)}>Pricing</Link>
                    <Link to="/about" className="p-4 rounded-2xl bg-white/5 border border-white/5 text-[11px] font-black uppercase tracking-widest text-white" onClick={() => setMobileOpen(false)}>About</Link>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <Link to="/login" className="flex-1 py-4 text-center rounded-2xl border border-white/10 text-[11px] font-black uppercase tracking-widest text-white" onClick={() => setMobileOpen(false)}>Log in</Link>
                  <Link to="/signup" className="flex-1 py-4 text-center rounded-2xl bg-white text-black text-[11px] font-black uppercase tracking-widest" onClick={() => setMobileOpen(false)}>Get Started</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
