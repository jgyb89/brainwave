import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

// The main Benefits component, rendering the "Chat Smarter, Not Harder with Brainwave" section
const Benefits = () => {
  return (
    <Section id="features">
      {" "}
      {/* Wraps the content in a section with the id "features" */}
      <div className="container relative z-2">
        {/* Renders a Heading component with a specific title */}
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {/* Iterates over the 'benefits' array and renders each benefit item */}
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`, // Applies background image to each benefit item
              }}
              key={item.id} // Uses the unique id from each item as the key
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                {/* Renders the benefit title */}
                <h5 className="h5 mb-5">{item.title}</h5>
                {/* Renders the benefit text */}
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  {/* Displays the benefit icon */}
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  {/* Displays a call to action with an arrow */}
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow /> {/* Renders an arrow icon */}
                </div>
              </div>

              {/* Adds a light gradient overlay if the 'light' property is true */}
              {item.light && <GradientLight />}

              {/* Clip path effect for the background */}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }} // Uses a clip path for visual effects
              >
                {/* Image overlay with hover effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Adds the clip path definition to the DOM */}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
