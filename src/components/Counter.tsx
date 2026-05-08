import { useState } from "react";

const Counter = () => {
  const [like, setLike] = useState<number>(0);
  const [disLike, setDisLike] = useState<number>(0);
  const handelLike = () => {
    setLike(like + 1);
  };
  const handelDisLike = () => {
    setDisLike(disLike + 1);
  };
  return (
    <div>
      <button onClick={handelLike}>👍 {like} </button> &nbsp;
      <button onClick={handelDisLike}>👎 {disLike} </button>
    </div>
  );
};

export default Counter;
