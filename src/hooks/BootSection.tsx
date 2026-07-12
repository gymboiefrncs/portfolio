import { useEffect, useRef, type ReactNode } from "react";
import { useBoot } from "./BootSequence";

export const BootSection = ({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) => {
  const { bootedCount } = useBoot();
  const ref = useRef<HTMLDivElement>(null);
  const revealed = bootedCount > index;
  const wasRevealed = useRef(revealed);

  useEffect(() => {
    if (revealed && !wasRevealed.current && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    wasRevealed.current = revealed;
  }, [revealed]);

  if (!revealed) return null;

  return <div ref={ref}>{children}</div>;
};
