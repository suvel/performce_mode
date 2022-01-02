import EmojiContainer from "./subcomponet/EmojiContainer";
import EmojiImg from "./subcomponet/EmojiImg";
import types from "./types";

function Emoji({ type }) {
  return (
    <EmojiContainer>
      <EmojiImg typ={type} />
    </EmojiContainer>
  );
}

export { types };
export default Emoji;
