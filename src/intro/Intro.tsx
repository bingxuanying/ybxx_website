import { useState } from "react";
import "./Intro.css";

import { motion } from "framer-motion";
import IntroLeftContainer from "./IntroLeftContainer";
import RightContainer from "./IntroRightContainer";
import TiltResumeCard from "./TiltResumeCard";

function Intro() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <motion.div className="intro-canvas">
      <IntroLeftContainer />
      <RightContainer />
      {isResumeOpen ? (
        <>
          <div className="resume-center">
            <TiltResumeCard isResumeOpen={isResumeOpen} />
          </div>
          <div className="mask" onClick={() => setIsResumeOpen(false)}></div>
        </>
      ) : (
        <>
          <div className="resume-side" onClick={() => setIsResumeOpen(true)}>
            <TiltResumeCard isResumeOpen={isResumeOpen} />
          </div>
        </>
      )}
    </motion.div>
  );
}

export default Intro;
