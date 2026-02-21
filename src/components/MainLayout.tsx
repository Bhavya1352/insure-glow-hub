import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import { useDirection } from "../contexts/DirectionContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Conversation from "./Conversation";

interface MainLayoutProps {
    children: ReactNode;
}

const LANDING_PAGES = ["/", "/home-2"];

const MainLayout = ({ children }: MainLayoutProps) => {
    const location = useLocation();
    const showNavbar = LANDING_PAGES.includes(location.pathname);
    const { direction, toggleDirection, isAnimating } = useDirection();
    const isRTL = direction === "rtl";

    return (
        <>
            {/* Main content wrapper — gets scaleX(-1) when RTL */}
            <div
                className="min-h-screen bg-background selection:bg-purple-500/30"
                style={isRTL ? { transform: "scaleX(-1)" } : undefined}
            >
                {showNavbar && <Navbar />}
                <main>{children}</main>
                <Footer />
                <Conversation />
            </div>

            {/* These are OUTSIDE the transform so they stay in normal position */}
            {/* RTL Transition Overlay */}
            <div className={`rtl-overlay ${isAnimating ? 'rtl-animating-in' : ''}`} />

            {/* Floating RTL/LTR Toggle — always visible on every page */}
            <button
                onClick={toggleDirection}
                className="fixed bottom-6 left-6 z-[9999] w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-600/30 flex items-center justify-center hover:bg-purple-500 hover:scale-110 active:scale-95 transition-all border border-purple-400/20"
                title={isRTL ? "Switch to LTR" : "Switch to RTL"}
            >
                <Globe className="w-5 h-5" />
            </button>
        </>
    );
};

export default MainLayout;
