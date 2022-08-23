import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      <img
        src={require(`../../assets/projects/${name}.jpg`)}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <p>{description}</p>
        <h6>
          <p>
            <a href={link}>Live: {link}</a>
          </p>
          <p>
            <a href={repo}>Repo: {repo}</a>{" "}
          </p>
        </h6>
      </div>
    </div>
  );
}

export default Project;
