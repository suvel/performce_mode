import moon_to_sun from "../../../assets/img/moon-to-sun.gif";
import sun from "../../../assets/img/sun_bg.png";
import "./style.css";
import { useState, useEffect } from "react";
import Label from "../Label";

function HeavyWorkMode() {
  const [state, setState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setState((s) => !s);
    }, [4500]);
  }, []);

  return (
    <div className={`heavy_work_mode _${state}`}>
      {state ? (
        <img className={"symbol"} src={moon_to_sun} />
      ) : (
        <>
          <img className={"symbol"} src={sun} />
          <Label>Heavy worker Mode</Label>
        </>
      )}
    </div>
  );
}

export default HeavyWorkMode;
