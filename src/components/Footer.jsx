import { FaGithub } from "react-icons/fa";

//import NextLevelTransition from "./NextLevelTransition.jsx";

export default function Footer() {
  return (
    <div>
      <footer className="footer-basic">
        <div className="socialContainer">
          <div className="social">
            <a href="https://github.com/belladoeswork" target="_blank">
              <FaGithub />
              <p>Vanessa</p>
            </a>
          </div>
          <div className="social">
            <a href="https://github.com/ihirad " target="_blank">
              <FaGithub />
              <p>Izzy</p>
            </a>
          </div>
          <div className="social">
            <a href="https://github.com/Elri87" target="_blank">
              <FaGithub />
              <p>Elri</p>
            </a>
          </div>
          <div className="social">
            <a href="#">
              <FaGithub />
              <p>Zubedah</p>
            </a>
          </div>
        </div>
        <div>
          <p className="copyright">Bootcamp Oct 2023 - Jan 2024</p>
        </div>
      </footer>
    </div>
  );
}
