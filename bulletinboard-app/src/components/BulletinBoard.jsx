import React from "react";
import ReactPost from "./ReactPost";

export default function BulletinBoard({ list }) {
  return (
    <div>
       {list.map(({ question, answer, id }, i) => (
        <ReactPost question={question} answer={answer} id={id} key={i}/>
      ))}
    </div>
  );
}
