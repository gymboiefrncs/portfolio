import { useBoot } from "../hooks/BootSequence";

export const BootStatus = () => {
  const { introDone, bootedCount, totalSections } = useBoot();

  const fullyDone = introDone && bootedCount >= totalSections;
  if (fullyDone) return null;

  return (
    <div className="h-4 flex items-center gap-2 font-mono text-xs text-muted">
      {!introDone && <span className="text-lg">booting...</span>}
      <span className="h-4 w-2 bg-white animate-[blink_1.5s_step-end_infinite]" />
    </div>
  );
};
