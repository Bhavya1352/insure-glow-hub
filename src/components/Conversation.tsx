import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MessageSquare,
    X,
    Send,
    Settings,
    Globe,
    User,
    ShieldCheck,
    Sparkles,
    Headphones
} from "lucide-react";

interface Message {
    id: number;
    text: string;
    sender: "user" | "advocate";
    time: string;
}

const Conversation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRTL, setIsRTL] = useState(false);
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Initializing Protection DNA Support Matrix... Hello, I am Sarah from the Advocacy Squad. How can I assist with your matrix today?",
            sender: "advocate",
            time: "Now"
        }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    // Listen for global open events
    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener("open-advocacy-chat", handleOpenChat);
        return () => window.removeEventListener("open-advocacy-chat", handleOpenChat);
    }, []);

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputText.trim()) return;

        const newMessage: Message = {
            id: Date.now(),
            text: inputText,
            sender: "user",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMessage]);
        setInputText("");

        // Mock Response
        setTimeout(() => {
            const response: Message = {
                id: Date.now() + 1,
                text: "Analyzing your query... Our advocacy layers are ready. A specialist will be with you in under 90 seconds.",
                sender: "advocate",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, response]);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="w-16 h-16 rounded-2xl bg-orbit-purple flex items-center justify-center text-white shadow-premium glow-purple relative group"
                    >
                        <MessageSquare className="w-8 h-8" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-background animate-pulse" />
                        <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-[#0a0c10] border border-white/10 text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Advocacy Desk
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: 20, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 20, opacity: 0, scale: 0.95 }}
                        className={`w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] bg-[#0a0c10]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-premium flex flex-col overflow-hidden`}
                        dir={isRTL ? "rtl" : "ltr"}
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-orbit-purple/20 border border-orbit-purple/30 flex items-center justify-center text-orbit-purple">
                                    <Headphones className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-white uppercase tracking-widest">Advocacy Squad</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Live: Sarah</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsRTL(!isRTL)}
                                    className={`p-2 rounded-lg transition-colors ${isRTL ? 'bg-purple-500/20 text-purple-500' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                                    title="Toggle RTL Layout"
                                >
                                    <Globe className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black uppercase tracking-[0.2em] text-white/40">
                                    <ShieldCheck className="w-3 h-3" /> Encrypted Advocacy DNA
                                </div>
                            </div>

                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? (isRTL ? -10 : 10) : (isRTL ? 10 : -10) }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === 'user' ? (isRTL ? 'justify-start' : 'justify-end') : (isRTL ? 'justify-end' : 'justify-start')}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-4 rounded-2xl text-[13px] leading-relaxed ${msg.sender === 'user'
                                                ? 'bg-orbit-purple text-white rounded-br-none shadow-premium'
                                                : 'bg-white/5 border border-white/10 text-white/80 rounded-bl-none italic'
                                            }`}
                                    >
                                        {msg.text}
                                        <div className={`mt-1.5 text-[8px] font-black uppercase tracking-widest ${msg.sender === 'user' ? 'text-white/50' : 'text-white/30'}`}>
                                            {msg.time}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-6 border-t border-white/5 bg-white/[0.01]">
                            <form onSubmit={handleSendMessage} className="relative">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder={isRTL ? "...اكتب رسالتك" : "Command matrix..."}
                                    className="w-full bg-[#111317] border border-white/10 rounded-2xl py-4 px-6 pr-14 text-sm text-white focus:outline-none focus:border-orbit-purple focus:ring-1 focus:ring-orbit-purple/50 transition-all placeholder:text-white/20"
                                />
                                <button
                                    type="submit"
                                    className={`absolute ${isRTL ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-orbit-purple text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-premium`}
                                >
                                    <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                                </button>
                            </form>
                            <div className="mt-3 flex items-center justify-center gap-2">
                                <Sparkles className="w-3 h-3 text-purple-500/50" />
                                <span className="text-[8px] font-black text-white/20 uppercase tracking-widest italic">
                                    Powered by OrbitScale Risk Intelligence
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Conversation;
