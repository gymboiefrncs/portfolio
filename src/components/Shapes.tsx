export const ShapeSquare = ({ className }: { className: string }) => (
  <svg viewBox="0 0 20 20" className={className}>
    <rect
      x="1"
      y="1"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

export const ShapeSquareFilled = ({ className }: { className: string }) => (
  <svg viewBox="0 0 12 12" className={className} width="10" height="10">
    <rect x="0" y="0" width="12" height="12" fill="currentColor" />
  </svg>
);

export const ShapeBlob = ({ className }: { className: string }) => (
  <svg viewBox="0 0 60 60" className={className} width="50" height="50">
    <path
      d="M20 10 C40 5, 55 15, 55 30 C55 45, 35 55, 20 48 C8 42, 5 25, 20 10 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

export const ShapeBracket = ({ className }: { className: string }) => (
  <svg viewBox="0 0 20 20" className={className} width="18" height="18">
    <path
      d="M2 2 L2 8 M2 2 L8 2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

export const ShapeDots = ({ className }: { className: string }) => (
  <svg viewBox="0 0 40 10" className={className} width="36" height="9">
    <circle cx="4" cy="5" r="3" fill="currentColor" />
    <circle cx="18" cy="5" r="3" fill="currentColor" />
    <circle cx="32" cy="5" r="3" fill="currentColor" />
  </svg>
);

export const ShapeDotGrid3 = ({ className }: { className: string }) => (
  <svg viewBox="0 0 60 60" className={className}>
    <g fill="currentColor">
      <circle cx="15" cy="15" r="2.5" />
      <circle cx="30" cy="15" r="2.5" />
      <circle cx="45" cy="15" r="2.5" />
      <circle cx="15" cy="30" r="2.5" />
      <circle cx="30" cy="30" r="2.5" />
      <circle cx="45" cy="30" r="2.5" />
      <circle cx="15" cy="45" r="2.5" />
      <circle cx="30" cy="45" r="2.5" />
      <circle cx="45" cy="45" r="2.5" />
    </g>
  </svg>
);

export const ShapeDotGrid5 = ({ className }: { className: string }) => {
  const positions = [0, 15, 30, 45, 60];
  return (
    <svg viewBox="0 0 60 60" className={className}>
      <g fill="currentColor">
        {positions.map((y) =>
          positions.map((x) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" />
          )),
        )}
      </g>
    </svg>
  );
};

export const ShapeDiamond = ({ className }: { className: string }) => (
  <svg viewBox="0 0 60 60" className={className}>
    <rect
      x="10"
      y="10"
      width="40"
      height="40"
      transform="rotate(45 30 30)"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

export const ShapeDiamondFilled = ({ className }: { className: string }) => (
  <svg viewBox="0 0 60 60" className={className}>
    <rect
      x="10"
      y="10"
      width="40"
      height="40"
      transform="rotate(45 30 30)"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

export const ShapeSquareOutline = ({ className }: { className: string }) => (
  <svg viewBox="0 0 60 60" className={className}>
    <rect
      x="10"
      y="10"
      width="40"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);
