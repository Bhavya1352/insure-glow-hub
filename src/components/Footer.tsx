import { Link } from "react-router-dom";
import { ShieldCheck, Twitter, Linkedin, Instagram, Activity } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Solutions", href: "/solutions" },
        { label: "Pricing", href: "/pricing" },
        { label: "Security", href: "#" },
        { label: "Releases", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "#" },
        { label: "Legal", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "API Status", href: "#" },
        { label: "Support", href: "#" }
      ]
    },
    {
      title: "Dashboards",
      links: [
        { label: "User Portal", href: "/dashboard" },
        { label: "Admin Console", href: "/admin" },
        { label: "Team Space", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-[#050608] border-t border-white/5 pt-16 md:pt-32 pb-10 md:pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 mb-16 md:mb-24">
          {/* Brand Column */}
          <div className="sm:col-span-2">
            <Link to="/" className="flex items-center gap-3 group mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 p-2 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-glow">
                <ShieldCheck className="w-full h-full text-white" />
              </div>
              <span className="text-2xl font-display font-black text-white italic tracking-tighter">Orbit.Scale</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed italic mb-8">
              Empowering the next generation of engineering teams with technical protection matrices and deep-mesh insurance.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="col-span-1">
              <h4 className="text-white font-black text-[10px] uppercase tracking-widest mb-6 underline decoration-purple-500/50 decoration-2 underline-offset-8">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-muted-foreground hover:text-white transition-colors text-[12px] font-bold uppercase tracking-widest">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
            © 2026 OrbitScale Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center md:justify-end">
            <Link to="#" className="text-[10px] font-black text-white/20 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-[10px] font-black text-white/20 uppercase tracking-widest hover:text-white transition-colors">Terms of Service</Link>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black text-emerald-500 uppercase tracking-widest">
              <Activity className="w-3 h-3" /> System Operational
            </div>
          </div>
        </div>
      </div>

      {/* Background Aesthetic */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 blur-[150px] rounded-full" />
    </footer>
  );
};

export default Footer;
