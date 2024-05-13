import "./Intro.css";

import IntroLeftContainer from "./left/IntroLeftContainer";
import RightContainer from "./right/IntroRightContainer";

function Intro() {
  return (
    <div className="intro-canvas">
      <IntroLeftContainer />
      <RightContainer />
    </div>
  );
}

export default Intro;
