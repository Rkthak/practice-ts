import React, { useState } from "react";

const Counter = () => {
  const [loginMessage, setLogginMessage] = useState<React.ReactNode>(null);
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

  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLogginMessage(
      <span className="text-gray-500">
        Welcome 🙋! Logged as{" "}
        <span className="text-green-500 font-bold">{userName}</span>
      </span>,
    );
  };

  return (
    <div className="container p-4 m-auto">
      <h1 className="text-green-700 text-2xl font-bold mb-2">🟢 Login</h1>{" "}
      {loginMessage}
      <form
        onSubmit={handleFormSubmit}
        className="border-2 p-4 border-gray-400 rounded mt-3"
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abc123@xyz.com"
          value={input.email}
          onChange={handleInputChange}
          required
          className="p-2 border-2 w-full rounded mb-5 text-gray-500 font-medium focus:border-green-500 outline-none"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password 🫣"
          value={input.password}
          onChange={handleInputChange}
          required
          className="p-2 border-2 w-full rounded mb-8 text-gray-500 font-medium focus:border-green-500 outline-none"
        />

        <button className="bg-green-700 py-1 px-8 rounded cursor-pointer text-white font-semibold">
          Login
        </button>
      </form>
    </div>
  );
};

export default Counter;
