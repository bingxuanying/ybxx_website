import "./HeaderBar.css";
import { motion } from "framer-motion";

function HeaderBar() {
  return (
    <motion.div className="header-bar-canvas">
      <div className="header-icon">
        <div className="header-icon-char">YBX.</div>
      </div>
    </motion.div>
  );
}

export default HeaderBar;
