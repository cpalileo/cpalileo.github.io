import React from "react";

function Footer() {
  return (
    <footer className="flex-row px-1">
      <div class="parent">
        <div>
          <a href="https://www.github.com/">
            <img
              class="icon"
              src={require(`../../assets/cover/github.png`)}
              alt="GitHub Logo"
            />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/">
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
