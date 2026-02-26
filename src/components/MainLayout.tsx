import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
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
    const isDashboard = location.pathname.startsWith("/dashboard") || location.pathname.startsWith("/admin");
    const showNavbar = !isDashboard;
    const { isAnimating } = useDirection();

    return (
        <>
            <div className="min-h-screen bg-background selection:bg-purple-500/30">
                {showNavbar && <Navbar />}
                <main>{children}</main>
                <Footer />
                <Conversation />
            </div>

            {/* RTL Transition Overlay */}
            <div className={`rtl-overlay ${isAnimating ? 'rtl-animating-in' : ''}`} />
        </>
    );
};

export default MainLayout;
