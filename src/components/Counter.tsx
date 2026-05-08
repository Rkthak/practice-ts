import { useState } from "react";

const Counter = () => {
  const [like, setLike] = useState<number>(0);
  const handelLike = () => {
    setLike(like + 1);
  };
  const handelDisLike = () => {
    setLike(like <= 0 ? 0 : like - 1);
  };
  return (
    <div>
      <h1>Like : {like}</h1> <button onClick={handelLike}>👍</button> &nbsp;{" "}
      <button onClick={handelDisLike}>👎</button>
    </div>
  );
};

export default Counter;
