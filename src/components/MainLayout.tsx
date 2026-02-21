import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
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

    return (
        <div className="min-h-screen bg-background selection:bg-purple-500/30">
            {showNavbar && <Navbar />}
            <main>{children}</main>
            <Footer />
            <Conversation />
        </div>
    );
};

export default MainLayout;
