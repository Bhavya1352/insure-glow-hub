import { ShieldCheck, Twitter, Linkedin, Instagram, Activity } from "lucide-react";

const footerLinks = [
  {
    title: "Protection DNA",
    links: ["Health Matrix", "Legacy Shield", "Asset Drive", "Travel Layer", "Business Defense"],
  },
  {
    title: "Advocacy",
    links: ["Track a Claim", "Document Vault", "Hospital Matrix", "Transparency Report", "Grievance Desk"],
  },
  {
    title: "The Team",
    links: ["Our DNA", "Leadership", "Risk Engineering", "Press & Media", "Contact Registry"],
  },
  {
    title: "Regulatory",
    links: ["IRDAI Compliance", "Terms of Matrix", "Privacy DNA", "Cookie Policy", "Disclaimer"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#050608] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-orbit-purple flex items-center justify-center shadow-premium">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-foreground tracking-tight">
                Orbit<span className="text-gradient-purple">Scale</span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm text-sm">
              Architecting absolute protection through insurance engineering.
              Built on the principles of transparency, speed, and absolute advocacy.
            </p>

            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 w-fit mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">System Status: IRDAI SECURED</span>
            </div>

            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-purple-500/50 transition-all shadow-premium"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title} className="col-span-1">
              <h4 className="text-white font-black text-[10px] uppercase tracking-widest mb-6">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-white transition-colors text-[12px] font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-[10px] text-muted-foreground/60 font-bold uppercase tracking-widest">
              © 2025 OrbitScale Insurance DNA. All rights reserved.
            </p>
            <p className="text-[9px] text-muted-foreground/40 mt-1 font-medium">
              IRDAI Reg. No. 142 · CIN: U66010MH2018PTC302945 · ISO 27001 DNA Certified
            </p>
          </div>
          <p className="text-[10px] text-muted-foreground/40 max-w-md text-center md:text-right leading-relaxed italic">
            "Insurance is the subject matter of solicitation. Secure your matrix carefully after reviewing all policy DNA documentation."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
