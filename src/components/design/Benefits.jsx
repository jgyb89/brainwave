// This file contains design elements specific to the Benefits section.
// It exports a `GradientLight` component, which adds a radial gradient background effect for decoration.

export const GradientLight = () => {
  // Render a div with specific styling that applies the radial gradient
  return (
    <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
  );
};
