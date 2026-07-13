import { useEffect, useState } from "react";
import { useBoot } from "../hooks/BootSequence";

const sections = ["home", "projects", "skills", "contacts"] as const;
export const Header = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { bootedCount } = useBoot();

  useEffect(() => {
    if (bootedCount === 0) setActiveSection(null); // dont highlight any nav buttons while booting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "0% 0px -50% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [bootedCount]);

  return (
    <header className="flex p-4 md:px-6 lg:px-12 justify-between sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted/10">
      <span className="font-bold font-mono sm:text-lg md:text-xl">
        domxzmir
      </span>
      <nav>
        <ul className="flex gap-2 sm:gap-4 md:gap-6">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`font-mono transition-colors ${
                  activeSection === id
                    ? "text-primary"
                    : "text-muted hover:text-primary"
                }`}
              >
                <span className="text-xs sm:text-sm lg:text-md">{id}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
