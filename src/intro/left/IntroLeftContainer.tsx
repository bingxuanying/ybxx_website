import "./IntroLeftContainer.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function IntroLeftContainer() {
  return (
    <div className="left-container-main">
      <div className="name left-container-item">Bignxuan (Ethan) Ying</div>

      <div className="left-container-item icon-bar">
        <LinkedInIcon className="icon linkedin-icon" fontSize="large" />
        <GitHubIcon className="icon github-icon" fontSize="large" />
      </div>
    </div>
  );
}

export default IntroLeftContainer;
