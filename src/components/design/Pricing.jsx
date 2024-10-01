// This file defines decorative elements for the Pricing section.
// It exports a `LeftLine` component that adds a horizontal line graphic on the left side.

import { lines } from "../../assets";

export const LeftLine = () => {
  // Render a line that is positioned to the left of the pricing section
  return (
    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

export const RightLine = () => {
  // Render a line that is positioned to the right of the pricing section
  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};
