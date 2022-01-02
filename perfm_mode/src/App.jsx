import { useState, useEffect } from "react";
import "./App.css";
import { getNetWorkDetails, getPerformanceType } from "./functions";
import Emoji, { types as EmojiTyp } from "./components/Emoji";

function App() {
  const [conState, setConState] = useState("");

  function setNetWorkState(state) {
    setConState(state);
  }

  function updateNetworkState() {
    const ntwState = getNetWorkDetails();
    setNetWorkState(ntwState);
  }

  useEffect(() => {
    updateNetworkState();
  }, []);

  const performanceType = getPerformanceType(conState.type);

  return (
    <div>
      {performanceType}
      <Emoji type={EmojiTyp.Saver_M} />
    </div>
  );
}

export default App;
