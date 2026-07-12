import { useEffect, useState } from "react";

const sections = ["home", "projects", "skills", "contacts"] as const;
export const Header = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-0% 0px -50% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="flex p-4 justify-between sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted/10">
      <span className="font-bold font-mono">domxzmir</span>
      <nav>
        <ul className="flex gap-2">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`font-mono text-sm transition-colors ${
                  activeSection === id
                    ? "text-primary"
                    : "text-muted hover:text-primary"
                }`}
              >
                <span className="text-xs">{id}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
