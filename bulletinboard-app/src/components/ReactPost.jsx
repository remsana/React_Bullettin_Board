import React from "react";
import PostLiked from "./PostLiked";
import { useState } from "react";

export default function ReactPost({ question, answer, id }) {
   //Using state to toggle the value between true and false 
  const [buttonClick, setButtonClick] = useState(false);

  //function to toggle
  const btnClick = () => {
    setButtonClick(!buttonClick);
  };

  return (
    <div className="queAndAns">
      <h3 className="question">
        {" "}
        {id}. {question}
      </h3>
      <h4 className="answer">Svar: {answer}</h4>
      <button onClick={btnClick} className={buttonClick ? "disappear" : "appear"}>Like</button>
      {buttonClick && <PostLiked />}
    </div>
  );
}
