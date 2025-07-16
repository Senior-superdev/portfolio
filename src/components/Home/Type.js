import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Master of API Integration",
          "Specialized Python, JavaScript and PHP Developer",
          "Senior Full-Stack Developer",
          "The son of shopify and WordPress"
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
