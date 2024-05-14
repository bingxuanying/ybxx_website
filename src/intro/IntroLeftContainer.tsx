import "./IntroLeftContainer.css";
import links from "../assets/links.json";

function IntroLeftContainer() {
  return (
    <div className="left-container-main">
      <div className="desc left-container-item">
        Senior Backend Software Engineer @TikTok @Ex-Amazon
      </div>
      <div className="name left-container-item">Bignxuan (Ethan) Ying</div>
      <div className="left-container-item icon-bar">
        <div
          className="linkedin-icon"
          onMouseUp={() => window.open(links["linkedin"], "_blank")}
        >
          <img className="icon " src="icons/linkedin.png" alt="linkedin-icon" />
        </div>
        <div
          className="github-icon"
          onMouseUp={() => window.open(links["github"], "_blank")}
        >
          <img className="icon" src="icons/github.png" alt="github-icon" />
        </div>
        <div
          className="instagram-icon"
          onMouseUp={() => window.open(links["instagram"], "_blank")}
        >
          <img
            className="icon "
            src="icons/instagram.png"
            alt="instagram-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default IntroLeftContainer;
