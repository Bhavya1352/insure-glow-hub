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
  LayoutDashboard,
  ShieldAlert,
  Settings,
  Globe
} from "lucide-react";
import { useDirection } from "@/contexts/DirectionContext";

const dropdowns = {
  Home: [
    { label: "Home 1", href: "/", icon: Rocket },
    { label: "Home 2", href: "/home-2", icon: Code },
  ],
  Dashboards: [
    { label: "User Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Admin Dashboard", href: "/admin", icon: Settings },
  ]
};

type DropdownItem = typeof dropdowns.Home[0];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  const { direction, toggleDirection } = useDirection();

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const renderDesktopDropdown = (key: string, items: DropdownItem[]) => (
    <div
      key={key}
      className="relative group px-3 py-2"
      onMouseEnter={() => setActiveDropdown(key)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button className="flex items-center gap-1 text-slate-300 font-medium hover:text-purple-400 transition">
        {key} <ChevronDown className={`w-3 h-3 transition-transform duration-300 mt-0.5 ${activeDropdown === key ? 'rotate-180' : ''}`} />
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 rtl:translate-x-1/2 pt-4 transition-all duration-200 transform ${activeDropdown === key ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
      >
        <div className="w-64 bg-slate-800 rounded-2xl shadow-xl border border-slate-700 p-2 overflow-hidden">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700 transition"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-900/30 text-purple-400 flex items-center justify-center">
                <item.icon className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm text-white">{item.label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMobileDropdown = (key: string, items: DropdownItem[]) => (
    <div key={key} className="space-y-4">
      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{key}</p>
      <div className="grid grid-cols-1 gap-2">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700 border border-slate-700/50 text-white font-medium"
          >
            <item.icon className="w-5 h-5 text-purple-400" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className={`absolute inset-0 transition-all duration-300 ${isAuthPage ? 'bg-slate-700/90 backdrop-blur-xl border-b border-slate-600/50' : scrolled ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 opacity-100' : 'bg-transparent border-b border-transparent opacity-100'}`}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white">Orbit<span className="text-purple-500">Scale</span></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {renderDesktopDropdown("Home", dropdowns.Home)}
              <Link to="/solutions" className="px-4 py-2 text-slate-300 font-medium hover:text-purple-400 transition rounded-full hover:bg-slate-800/50">Solutions</Link>
              <Link to="/pricing" className="px-4 py-2 text-slate-300 font-medium hover:text-purple-400 transition rounded-full hover:bg-slate-800/50">Pricing</Link>
              <Link to="/about" className="px-4 py-2 text-slate-300 font-medium hover:text-purple-400 transition rounded-full hover:bg-slate-800/50">About</Link>
              {!isAuthPage && renderDesktopDropdown("Dashboards", dropdowns.Dashboards)}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/login" className="text-slate-300 font-medium hover:text-purple-400 transition">Log in</Link>
              <Link to="/signup" className="px-6 py-2.5 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition shadow-lg shadow-white/20 hover:-translate-y-0.5">
                Get Started
              </Link>
              <button
                onClick={toggleDirection}
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-purple-400 transition"
                title={direction === "ltr" ? "Switch to RTL" : "Switch to LTR"}
              >
                <Globe className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleDirection}
                className="p-2 text-slate-400 hover:text-white transition"
              >
                <Globe className="w-5 h-5" />
              </button>
              <button
                className="p-2 text-slate-300 hover:text-white transition"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 w-[300px] h-full bg-slate-900/95 backdrop-blur-xl shadow-2xl z-[70] flex flex-col border-white/10 transition-transform duration-300 ease-in-out ${direction === 'rtl'
          ? `left-0 border-r ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`
          : `right-0 border-l ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`
          }`}
      >
        <div className="p-5 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDirection}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <Globe className="w-5 h-5" />
            </button>
            <span className="font-display font-bold text-lg text-white">Menu</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {renderMobileDropdown("Home", dropdowns.Home)}

          <div className="space-y-4">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Pages</p>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/solutions" className="block px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 font-medium transition" onClick={() => setMobileOpen(false)}>
                Solutions
              </Link>
              <Link to="/pricing" className="block px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 font-medium transition" onClick={() => setMobileOpen(false)}>
                Pricing
              </Link>
              <Link to="/about" className="block px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 font-medium transition" onClick={() => setMobileOpen(false)}>
                About
              </Link>
            </div>
          </div>

          {renderMobileDropdown("Dashboards", dropdowns.Dashboards)}

          <div className="my-4 border-t border-white/10"></div>

          <Link to="/login" className="block px-4 py-3 rounded-xl bg-white/10 text-white font-medium" onClick={() => setMobileOpen(false)}>
            Log in
          </Link>
          <Link to="/signup" className="block w-full py-3 rounded-xl bg-purple-600 text-white text-center font-bold shadow-lg shadow-purple-500/30 mt-4 hover:bg-purple-700 transition" onClick={() => setMobileOpen(false)}>
            Get Started Free
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
