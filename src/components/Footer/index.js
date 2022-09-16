import React from "react";

function Footer() {
  return (
    <footer className="flex-row px-1">
      <div class="parent">
        <div>
          <a
            href="https://github.com/cpalileo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="icon"
              src={require(`../../assets/cover/github.png`)}
              alt="GitHub Logo"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/christopher-palileo-61414712a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="icon"
              src={require(`../../assets/cover/linkedin.png`)}
              alt="LinkedIn Logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
