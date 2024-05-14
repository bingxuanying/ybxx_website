import "./App.css";

import Intro from "./intro/Intro";
import HeaderBar from "./header/HeaderBar";

function App() {
  return (
    <div className="main-canvas">
      <HeaderBar />
      <Intro />
    </div>
  );
}

export default App;
