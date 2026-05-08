import { useState } from "react";

const Counter = () => {
  const [reactions, setReactions] = useState({
    like: 0,
    disLike: 0,
  });
  const handelLike = () => {
    setReactions({ ...reactions, like: reactions.like + 1 });
  };
  const handelDisLike = () => {
    setReactions({ ...reactions, disLike: reactions.disLike + 1 });
  };
  return (
    <div>
      <button onClick={handelLike}>👍 {reactions.like} </button> &nbsp;
      <button onClick={handelDisLike}>👎 {reactions.disLike} </button>
    </div>
  );
};

export default Counter;
