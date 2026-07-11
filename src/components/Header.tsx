import { LucideMenu } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex p-4 justify-between sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted/10">
      <span className="font-bold font-mono">domxzmir</span>
      <LucideMenu className="text-muted hover:text-foreground cursor-pointer" />
    </header>
  );
};
