import { useState, useEffect } from "react";
import "./App.css";
import { getNetWorkDetails, getModeType } from "./functions";
import HeavyWorkMode from "./components/HeavyWorkMode";
import SaverMode from "./components/SaverMode";

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

  const modeType = getModeType(conState.type);

  function Mode({ type }) {
    if (type == "Saver MODE") return <SaverMode />;
    else if (type == "Heavy Work MODE") return <HeavyWorkMode />;
    else return "Unable to process...";
  }

  return (
    <div className="app">
      <Mode type={modeType} />
    </div>
  );
}

export default App;
