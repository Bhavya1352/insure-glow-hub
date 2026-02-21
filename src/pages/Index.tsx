import { useState } from "react";
import Navbar from "@/components/Navbar";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Footer from "@/components/Footer";
import Conversation from "@/components/Conversation";

const Index = () => {
  const [activeHome, setActiveHome] = useState(1);

  return (
    <div className="min-h-screen bg-background selection:bg-purple-500/30">
      <Navbar activeHome={activeHome} setActiveHome={setActiveHome} />
      {activeHome === 1 ? <Home1 /> : <Home2 />}
      <Footer />
      <Conversation />
    </div>
  );
};

export default Index;

