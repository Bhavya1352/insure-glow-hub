import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

type Direction = "ltr" | "rtl";

interface DirectionContextType {
    direction: Direction;
    toggleDirection: () => void;
    isAnimating: boolean;
}

const DirectionContext = createContext<DirectionContextType | undefined>(undefined);

export const DirectionProvider = ({ children }: { children: ReactNode }) => {
    const [direction, setDirection] = useState<Direction>(() => {
        const saved = localStorage.getItem("site-direction");
        return (saved === "rtl" ? "rtl" : "ltr") as Direction;
    });
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        document.documentElement.dir = direction;
        document.documentElement.lang = direction === "rtl" ? "ar" : "en";
        localStorage.setItem("site-direction", direction);
    }, [direction]);

    const toggleDirection = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);

        // After the overlay covers the screen (250ms), switch direction
        setTimeout(() => {
            setDirection((prev) => (prev === "ltr" ? "rtl" : "ltr"));
        }, 250);

        // Remove animation class after full animation completes
        setTimeout(() => {
            setIsAnimating(false);
        }, 600);
    }, [isAnimating]);

    return (
        <DirectionContext.Provider value={{ direction, toggleDirection, isAnimating }}>
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
