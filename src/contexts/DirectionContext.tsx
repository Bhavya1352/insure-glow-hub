import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Direction = "ltr" | "rtl";

interface DirectionContextType {
    direction: Direction;
    toggleDirection: () => void;
}

const DirectionContext = createContext<DirectionContextType | undefined>(undefined);

export const DirectionProvider = ({ children }: { children: ReactNode }) => {
    const [direction, setDirection] = useState<Direction>(() => {
        const saved = localStorage.getItem("site-direction");
        return (saved === "rtl" ? "rtl" : "ltr") as Direction;
    });

    useEffect(() => {
        document.documentElement.dir = direction;
        document.documentElement.lang = direction === "rtl" ? "ar" : "en";
        localStorage.setItem("site-direction", direction);
    }, [direction]);

    const toggleDirection = () => {
        setDirection((prev) => (prev === "ltr" ? "rtl" : "ltr"));
    };

    return (
        <DirectionContext.Provider value={{ direction, toggleDirection }}>
            {children}
        </DirectionContext.Provider>
    );
};

export const useDirection = (): DirectionContextType => {
    const context = useContext(DirectionContext);
    if (!context) {
        throw new Error("useDirection must be used within a DirectionProvider");
    }
    return context;
};
