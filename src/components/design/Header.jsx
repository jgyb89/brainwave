// This file contains design elements for the Header section.
// It exports several components (`Rings`, `SideLines`, `BackgroundCircles`, and `HamburgerMenu`)
// that add decorative elements in the background, enhancing the visual design of the header.

import { background } from "../../assets";

// Rings component adds a series of concentric circles in the background
export const Rings = () => {
  // Render three concentric circles with decreasing sizes and border styling
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      {/* Middle circle */}
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      {/* Smallest circle */}
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

// SideLines component adds vertical lines on both sides of the header
export const SideLines = () => {
  // Render two vertical lines, one on the left and one on the right side
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

// BackgroundCircles component adds decorative small colored circles in the background
export const BackgroundCircles = () => {
  // Render three small circles in different positions with gradient colors
  return (
    <>
      {/* Top-left small circle */}
      <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
      {/* Top-right small circle */}
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
      {/* Bottom-left larger circle */}
      <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>
  );
};

// HamburgerMenu component combines several background elements for mobile view
export const HamburgerMenu = () => {
  // Render a background image, concentric rings, side lines, and background circles
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      {/* Decorative rings */}
      <Rings />

      {/* Vertical side lines */}
      <SideLines />

      {/* Decorative circles */}
      <BackgroundCircles />
    </div>
  );
};
