import React, { useState } from "react";

const Counter = () => {
  const [input, setInput] = useState("");
  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Print</button>
      </form>
    </div>
  );
};

export default Counter;
