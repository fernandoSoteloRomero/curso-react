import React from "react";
import "./TodoItem.css";
import { BsCheckSquareFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

export const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <>
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${completed && "Icon-check--active"}`}
          onClick={onComplete}
        >
          <BsCheckSquareFill />
        </span>
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
          {text}
        </p>

        <span className="Icon Icon-delete" onClick={onDelete}>
          <BsTrashFill />
        </span>
      </li>
    </>
  );
};
