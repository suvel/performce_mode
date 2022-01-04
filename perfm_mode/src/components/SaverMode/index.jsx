import sun_to_moon from "../../../assets/img/sun-to-moon.gif";
import moon from "../../../assets/img/moon_bg.png";
import "./style.css";
import { useState, useEffect } from "react";
import Label from "../Label";

function SaverMode() {
  const [state, setState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log(999999);
      setState((s) => !s);
    }, [4000]);
  }, []);

  return (
    <div className={`saver_mode _${state}`}>
      {state ? (
        <img className={"symbol"} src={sun_to_moon} />
      ) : (
        <>
          <img className={"symbol"} src={moon} />
          <Label>Saver Mode</Label>
        </>
      )}
    </div>
  );
}

export default SaverMode;
