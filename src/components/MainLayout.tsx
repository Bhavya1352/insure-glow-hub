import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Conversation from "./Conversation";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-background selection:bg-purple-500/30">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Conversation />
        </div>
    );
};

export default MainLayout;
