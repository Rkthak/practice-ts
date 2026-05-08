import { useReducer } from "react";

const Counter = () => {
  type State = {
    like: number;
  };
  type Action = { type: "LIKE" } | { type: "DISLIKE" } | { type: "TIP" };

  const reducerFxn = (state: State, action: Action): State => {
    switch (action.type) {
      case "LIKE":
        return { like: state.like + 1 };
      case "DISLIKE":
        return { like: state.like <= 0 ? state.like : state.like - 1 };
      case "TIP":
        return { like: state.like + 10 };
      default:
        return state;
    }
  };
  const InitialState: State = {
    like: 0,
  };
  const [state, dispatch] = useReducer(reducerFxn, InitialState);
  return (
    <>
      <h1>Like : {state.like}</h1>
      <button onClick={() => dispatch({ type: "LIKE" })}>👍</button> &nbsp;
      &nbsp;
      <button onClick={() => dispatch({ type: "DISLIKE" })}>👎</button> &nbsp;
      &nbsp;
      <button onClick={() => dispatch({ type: "TIP" })}>🩷</button>
    </>
  );
};

export default Counter;
