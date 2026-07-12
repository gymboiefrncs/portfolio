import { RotateCcw } from "lucide-react";
import { useBoot } from "../hooks/BootSequence";

export const ReplayButton = () => {
  const { replay, isBooting } = useBoot();

  return (
    <button
      onClick={replay}
      disabled={isBooting}
      className="flex items-center gap-2 font-mono text-xs text-muted hover:text-primary transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <RotateCcw className="h-3.5 w-3.5" />$ replay --boot
    </button>
  );
};
