import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type BootContextType = {
  bootedCount: number;
  totalSections: number;
  introDone: boolean;
  isBooting: boolean;
  replay: () => void;
};

const BootContext = createContext<BootContextType | null>(null);

const INTRO_DELAY = 1500;
const SECTION_DELAY = 700;
const SCROLL_TOP_DELAY = 600;
const STORAGE_KEY = "boot-sequence-played";

export const BootProvider = ({
  children,
  totalSections,
}: {
  children: ReactNode;
  totalSections: number;
}) => {
  const alreadyPlayed = sessionStorage.getItem(STORAGE_KEY) === "true";

  const [introDone, setIntroDone] = useState(alreadyPlayed);
  const [bootedCount, setBootedCount] = useState(
    alreadyPlayed ? totalSections : 0,
  );

  const wasActivelyBooting = useRef(!alreadyPlayed);

  useEffect(() => {
    if (introDone) return;
    const timer = setTimeout(() => setIntroDone(true), INTRO_DELAY);
    return () => clearTimeout(timer);
  }, [introDone]);

  useEffect(() => {
    if (!introDone) return;

    if (bootedCount >= totalSections) {
      sessionStorage.setItem(STORAGE_KEY, "true");

      if (wasActivelyBooting.current) {
        wasActivelyBooting.current = false;
        const timer = setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, SCROLL_TOP_DELAY);
        return () => clearTimeout(timer);
      }
      return;
    }

    const timer = setTimeout(() => setBootedCount((c) => c + 1), SECTION_DELAY);
    return () => clearTimeout(timer);
  }, [bootedCount, totalSections, introDone]);

  const replay = () => {
    wasActivelyBooting.current = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIntroDone(false);
    setBootedCount(0);
  };

  return (
    <BootContext.Provider
      value={{
        bootedCount,
        totalSections,
        introDone,
        isBooting: !introDone || bootedCount < totalSections,
        replay,
      }}
    >
      {children}
    </BootContext.Provider>
  );
};

export const useBoot = () => {
  const ctx = useContext(BootContext);
  if (!ctx) throw new Error("useBoot must be used within BootProvider");
  return ctx;
};
