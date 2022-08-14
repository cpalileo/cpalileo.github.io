import React from "react";
import selfPortrait from "../../assets/cover/portrait.jpg";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        {/* <div className="profile-img my-5">
          <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div> */}
        <img
          src={selfPortrait}
          style={{ width: "25%" }}
          alt="Self Portrait"
        ></img>
        <h1>Christopher Palileo</h1>
        <p>
          I am a software developer who is eager to leverage a wealth of
          experiences from diverse backgrounds. Recently, I earned a certificate
          in full stack development from the University of California Davis. I
          am motivated to put newly acquired skills in JavaScript, CSS, NodeJS,
          and React.js into practice. I have a strong desire to leverage all of
          my skills as a part of a quality-driven team so that I can
          meaningfully contribute to my future employer.
        </p>
      </div>
    </section>
  );
}

export default About;
