// Importing the SectionSvg component which will be used to render SVG graphics in the section
import SectionSvg from "../assets/svg/SectionSvg";

// Section component definition
// Props:
// - className: Optional custom class for additional styling
// - id: Optional id for anchoring the section
// - crosses: Boolean flag to indicate whether cross elements should be rendered
// - crossesOffset: Optional offset for positioning the crosses
// - customPaddings: Optional custom padding for the section
// - children: Content to be rendered inside the section
const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    // Main div container for the section
    <div
      id={id} // Set the id for the section if provided
      className={`
      relative
      ${
        // Positioning the element relative to allow positioning of child elements
        customPaddings ||
        // If custom padding is provided, use it, otherwise apply default padding:
        // `py-10`: Padding of 2.5 rem on top and bottom
        // `lg:py-16`: Padding of 4 rem on large screens
        // `xl:py-20`: Padding of 5 rem on extra-large screens
        // If `crosses` is true, add extra padding:
        // `lg:py-32`: Padding of 8 rem on large screens when crosses are enabled
        // `xl:py-40`: Padding of 10 rem on extra-large screens when crosses are enabled
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${
        className || ""
      } // If a custom class is provided, add it to the class list
      `}
    >
      {children} {/* Render the children passed into the Section component */}
      {/* Vertical stroke line on the left side of the section (visible only on medium and larger screens):
          - `hidden`: Hidden on small screens
          - `absolute`: Positioned absolutely inside the parent container
          - `top-0 left-5`: Positioned at the top-left with an offset of 1.25 rem from the left
          - `w-0.25 h-full`: Width of 0.0625 rem and height covering the full container
          - `bg-stroke-1`: Background color for the stroke
          - `pointer-events-none`: Ensures this element doesn't interfere with pointer events
          - `md:block`: Becomes visible starting from medium screens
          - `lg:left-7.5 xl:left-10`: Adjusts the left offset on larger screens (1.875 rem on lg, 2.5 rem on xl)
      */}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      {/* Vertical stroke line on the right side of the section (visible only on medium and larger screens):
          - Same classes and behavior as the left-side stroke, but positioned on the right side
          - `right-5`: Offset by 1.25 rem from the right
          - `lg:right-7.5 xl:right-10`: Adjusts the right offset on larger screens
      */}
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />
      {/* Conditional rendering of cross elements and an SVG, based on the `crosses` prop */}
      {crosses && (
        <>
          {/* Horizontal stroke line at the top of the section (visible only on large screens):
              - `hidden`: Hidden on small screens
              - `absolute`: Absolutely positioned at the top of the section
              - `top-0 left-7.5 right-7.5`: Horizontal positioning with left and right offsets of 1.875 rem
              - `h-0.25`: Height of 0.0625 rem
              - `bg-stroke-1`: Background color for the stroke
              - `crossesOffset`: Additional custom offset for the crosses, if provided
              - `pointer-events-none`: Ensures this element doesn't interfere with pointer events
              - `lg:block`: Becomes visible starting from large screens
              - `xl:left-10 right-10`: Adjusts the left and right offsets on extra-large screens to 2.5 rem
          */}
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />

          {/* Rendering the SectionSvg component with optional cross offset */}
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

// Exporting the Section component for use in other parts of the application
export default Section;
