import React, { useState } from "react";

const Counter = () => {
  const [loginMessage, setLogginMessage] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.target se name aur value nikaalte hain
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };
  const userName = input.email
    .split("@")[0]
    .replace(input.email.charAt(0), input.email.charAt(0).toUpperCase());

  const message: string = `Welcome 🙋! Logged as  ${userName}`;
  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLogginMessage(message);
  };

  return (
    <div>
      <h1>🟢 Login</h1> <span> {loginMessage} </span> <br />
      <br />
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abc123@xyz.com"
          value={input.email}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password 🫣"
          value={input.password}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Counter;
