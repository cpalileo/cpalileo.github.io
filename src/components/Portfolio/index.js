import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "playlistant",
      description:
        "In progress: A web application for creating personal playlists",
      link: "http://limitless-hamlet-58053.herokuapp.com/",
      repo: "https://github.com/cpalileo/PlaylistAnt",
    },
    {
      name: "cryptosourcewallet",
      description:
        "A web app that lets registered users track crypto assets and values",
      link: "https://stark-badlands-81113.herokuapp.com/",
      repo: "https://github.com/cpalileo/CryptoSourceWallet",
    },
    {
      name: "cryptosourcenews",
      description:
        "A website for displaying articles from various crypto news sources",
      link: "https://cpalileo.github.io/CryptoSourceNews/#btc",
      repo: "https://github.com/cpalileo/CryptoSourceNews",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
