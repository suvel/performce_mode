import Emoji, { types } from "../Emoji";
import Label from "../Label";

function SaverMode() {
  return (
    <div className="saver_mode">
      <Emoji type={types.Saver_M} />
      <Label>Saver Mode</Label>
    </div>
  );
}

export default SaverMode;
