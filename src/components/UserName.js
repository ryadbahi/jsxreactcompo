import React, { useState } from "react";

const UserName = ({ setName }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setError("Please enter your name or click 'Leave me alone'.");
    } else {
      setName(input.trim());
    }
  };

  const handleSkip = () => {
    setName(""); // Empty string = user skipped
  };

  return (
    <div className="text-center mb-5 ">
      <form onSubmit={handleSubmit}>
        <label>
          What's your name? &nbsp;
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
          />
        </label>

        <div className="d-inline-flex gap-2 ms-2 mt-2">
          <button type="submit" className="btn btn-success btn-sm">
            Submit
          </button>
          <button
            type="button"
            onClick={handleSkip}
            className="btn btn-outline-secondary btn-sm"
          >
            Leave me alone
          </button>
        </div>

        {error && <p className="text-danger mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default UserName;
