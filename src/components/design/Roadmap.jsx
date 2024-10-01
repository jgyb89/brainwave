// This file provides decorative elements for the Roadmap section.
// It exports a `Gradient` component that adds a gradient background effect.

import { gradient } from "../../assets";

export const Gradient = () => {
  // Render a gradient behind the roadmap elements
  return (
    <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <img
          className="w-full"
          src={gradient}
          width={942}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};
