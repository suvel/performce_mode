import { useState, useEffect } from "react";
import "./App.css";
import { getNetWorkDetails, getModeType } from "./functions";
import HeavyWorkMode from "./components/HeavyWorkMode";
import SaverMode from "./components/SaverMode";

function App() {
  const [conState, setConState] = useState("");
  const [toggle, setToggle] = useState(false);

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

  // function Mode({ type }) {
  //   if (type == "Saver MODE") return <SaverMode />;
  //   else if (type == "Heavy Work MODE") return <HeavyWorkMode />;
  //   else return "Unable to process...";
  // }

  function Mode({ t }) {
    if (t) return <SaverMode />;
    else return <HeavyWorkMode />;
  }

  return (
    <div className="app">
      {/* <Mode type={"Heavy Work MODE"} /> */}
      <button onClick={() => setToggle((s) => !s)}>Toggle</button>
      <Mode t={toggle} />
    </div>
  );
}

export default App;
