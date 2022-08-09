import React from "react";
import coverImage from "../../assets/img-about/portrait.jpg";

// The About() below is the meat of the component that returns the JSX code which will be used for rendering in the app.js file
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Christopher Palileo</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;
