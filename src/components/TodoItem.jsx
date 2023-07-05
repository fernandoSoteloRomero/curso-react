import React from "react";
import "./TodoItem.css";
export const TodoItem = ({ text, completed }) => {
  return (
    <>
      <li>
        <span>V</span>
        <span>{text}</span>
        <button className="btn-item">X</button>
      </li>
    </>
  );
};
