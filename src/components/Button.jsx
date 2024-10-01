// Button component that supports both buttons and anchor tags, with customizable styles and behavior

import ButtonSvg from "../assets/svg/ButtonSvg";

// Defines the classes for the button, including conditional padding, text color, and any additional classes passed in
const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  // Ensures the button's text or children appear above other elements
  const spanClasses = "relative z-10";

  // Renders a button element when 'href' is not provided, handling click events and rendering button content
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  // Renders an anchor (<a>) element when 'href' is provided, making the button behave like a link
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  // Conditionally returns either the button or anchor based on whether 'href' is provided
  return href ? renderLink() : renderButton();
};

export default Button;
