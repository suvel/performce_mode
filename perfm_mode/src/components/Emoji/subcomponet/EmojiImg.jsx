import types from "../types";
import saver_emoji from "../../../../assets/img/saver_mode.png";
import heavy_wrk_emoji from "../../../../assets/img/heavy_work_mode.png";

function EmojiImg({ typ }) {
  const imgSymbolTypeMap = {
    [types.Saver_M]: saver_emoji,
    [types.Heavy_Work_M]: heavy_wrk_emoji,
  };

  function getSrc(type) {
    return imgSymbolTypeMap[type];
  }

  return <img className="emoji_symbol" src={getSrc(typ)} />;
}

export default EmojiImg;
