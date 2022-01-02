import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setstate] = useState("");
  useEffect(() => {
    console.log(navigator.connection);
    var networkData = {};
    for (var key in navigator.connection) {
      if (typeof navigator.connection[key] !== "function") {
        networkData[key] = navigator.connection[key];
      }
    }
    const strConDetails = JSON.stringify({
      ...networkData,
      type: navigator.connection?.type,
    });
    setstate(strConDetails);
  }, []);

  return <div>{state}</div>;
}

export default App;
