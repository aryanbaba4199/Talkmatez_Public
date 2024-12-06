import React from "react";

const Form = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="subscribe">
        <p>Inquiry</p>
        <input
          placeholder="Your name"
          className="subscribe-input"
          name="email"
          type="email"
        />
        
        {" "}
        <br />
        <div className="submit-btn">SUBMIT</div>
      </div>
    </div>
  );
};

export default Form;
