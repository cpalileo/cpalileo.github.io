import React from "react";
import Design from "../../assets/cover/design.jpg";

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2 parent">
        <div>
          <img
            src={Design}
            style={{ width: "25%" }}
            alt="Sketch of whiteboard code"
          ></img>
          <h2>TECHNICAL SKILLS LEARNED</h2>
          <div>
            <ul>
              LANGUAGES AND FRAMEWORKS:
              <li>React</li>
              <li>Angular</li>
              <li>NodeJs</li>
              <li>NoSQL</li>
              <li>Mongoose</li>
              <li>Express.js</li>
              <li>jQuery</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <ul>
              APPLICATIONS:
              <li>VS Code</li>
              <li>Git</li>
              <li>Bash</li>
              <li>GraphQL</li>
              <li>Jest</li>
              <li>Redux</li>
              <li>Xcode</li>
              <li>NOTEABLE</li>
            </ul>
          </div>
        </div>
        <div>
          <p>
            <a
              href="https://drive.google.com/file/d/1njQfnMRjopFaXi03K_7tNn5utYCM9EpK/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download a PDF copy of my resume.
            </a>
          </p>

          <iframe
            frameborder="0"
            scrolling="yes"
            width="640"
            height="800"
            title="Preview of my resume"
            src="https://drive.google.com/file/d/1njQfnMRjopFaXi03K_7tNn5utYCM9EpK/preview"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Resume;
