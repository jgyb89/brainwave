// Importing components and assets used in this component
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

// Services functional component that renders a section describing various AI-powered services
const Services = () => {
  return (
    // Rendering the Section component with an id for anchor linking
    <Section id="how-to-use">
      <div className="container">
        {/* Rendering the Heading component with title and subtitle */}
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          {/* 
            Container for the first service block:
            - `relative`: Positions child elements relative to this container
            - `z-1`: Sets a low stacking order for the element
            - `flex items-center`: Flexbox layout with items vertically centered
            - `h-[39rem]`: Sets a fixed height of 39 rem for the container
            - `mb-5`: Adds a margin of 1.25 rem below the container
            - `p-8`: Adds padding of 2 rem on all sides
            - `border border-n-1/10`: Adds a thin border with a 10% opacity neutral color
            - `rounded-3xl`: Applies large rounded corners to the container
            - `overflow-hidden`: Prevents child elements from overflowing the container
            - `lg:p-20`: Adds larger padding of 5 rem on large screens
            - `xl:h-[46rem]`: Increases height to 46 rem on extra-large screens
          */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            {/* 
              Background image for the first service:
              - `absolute`: Absolutely positions the image inside its parent container
              - `top-0 left-0 w-full h-full`: Makes the image cover the entire container
              - `pointer-events-none`: Prevents the image from interacting with pointer events
              - `md:w-3/5 xl:w-auto`: On medium screens, the image takes up 60% width, and full width on extra-large screens
            */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            {/* 
              Service description for the first service:
              - `relative z-1`: Keeps the description stacked above the image (z-index 1)
              - `max-w-[17rem]`: Restricts the width of the description to 17 rem
              - `ml-auto`: Automatically applies left margin, aligning the block to the right
            */}
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {/* 
                  Mapping over brainwaveServices array to display each service feature:
                  - `flex items-start`: Flexbox with items aligned at the top (start)
                  - `py-4`: Adds vertical padding of 1 rem on top and bottom
                  - `border-t border-n-6`: Adds a top border with a neutral color
                */}
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    {/* Icon with fixed size */}
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 
              Generating component:
              - `absolute`: Positioned at the bottom center of the parent container
              - `left-4 right-4 bottom-4`: Offsets the component from the sides and bottom by 1 rem
              - `border-n-1/10 border`: Applies a border with 10% opacity of a neutral color
              - `lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2`: On large screens, centers the element horizontally and positions it further from the bottom
            */}
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          {/* 
            Grid layout for the next two service blocks:
            - `relative`: Positions elements relative to this container
            - `z-1`: Keeps this element at the same stacking level as others
            - `grid gap-5`: Applies grid layout with a gap of 1.25 rem between grid items
            - `lg:grid-cols-2`: On large screens, divides the container into 2 columns
          */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* 
              Second service block:
              - `relative min-h-[39rem]`: Sets a minimum height of 39 rem and relative positioning
              - `border border-n-1/10`: Adds a thin border with 10% opacity
              - `rounded-3xl overflow-hidden`: Large rounded corners and hidden overflow
            */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              {/* 
                Background image for the second service:
                - `absolute inset-0`: Fills the entire container
                - `h-full w-full object-cover`: Ensures the image covers the container without distortion
              */}
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              {/* 
                Gradient overlay and text for the second service:
                - `absolute inset-0`: Fills the container
                - `flex flex-col justify-end`: Flexbox column layout with content pushed to the bottom
                - `p-8 bg-gradient-to-b from-n-8/0 to-n-8/90`: Adds padding and a gradient background that fades from transparent to 90% opacity
                - `lg:p-15`: Increases padding to 3.75 rem on large screens
              */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              {/* PhotoChatMessage component for chat interface */}
              <PhotoChatMessage />
            </div>

            {/* 
              Third service block:
              - `p-4 bg-n-7 rounded-3xl overflow-hidden`: Adds padding, dark background, large rounded corners, and hidden overflow
              - `lg:min-h-[46rem]`: Sets a minimum height of 46 rem on large screens
            */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                {/* 
                  Icon list for the video generation section:
                  - `flex items-center justify-between`: Flexbox layout with centered and spaced-out items
                */}
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 
                Video chat message section:
                - `relative h-[20rem] bg-n-8 rounded-xl overflow-hidden`: Sets height, dark background, rounded corners, and hides overflow
                - `md:h-[25rem]`: Increases height to 25 rem on medium screens
              */}
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                {/* Components related to video chat and controls */}
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          {/* Gradient component, likely a visual effect */}
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

// Exporting the Services component as the default export
export default Services;
