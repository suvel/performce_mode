import Emoji, { types } from "../Emoji";
import Label from "../Label";

function HeavyWorkMode() {
  return (
    <div className="heavy_work_mode">
      <Emoji type={types.Heavy_Work_M} />
      <Label>Heavy Work Mode</Label>
    </div>
  );
}

export default HeavyWorkMode;
