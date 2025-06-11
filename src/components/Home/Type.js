import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Specialized E-commerce sites developer",
          "AI + Web sites Developer",
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
