import { ArrowUp } from "lucide-react";
import { ReplayButton } from "./ReplayButton";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-muted/10 bg-background/30 px-4 py-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col border-b border-muted/5 pb-8">
          <div className="flex justify-between">
            <span className="font-mono text-base font-bold text-foreground">
              domxzmir
            </span>
            <ReplayButton />
          </div>
          <p className="mt-1 font-mono text-xs text-muted">
            // BUILD_LOG // STATUS: THIRD_YEAR_STUDENT
          </p>
        </div>

        <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <span className="block font-mono text-[10px] text-muted tracking-wider">
              BIN_SIGN: 01100100 01101111 01101101 01111000
            </span>
            <span className="block font-mono text-xs text-muted/60">
              &copy; {new Date().getFullYear()} domxzmir. Crafted in terminal_
            </span>
          </div>

          <button
            className="flex self-start items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-primary sm:self-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span>sys.return_top</span>
            <ArrowUp className="h-3.5 w-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};
