import React from "react";
import "./TodoCounter.css";
export const TodoCounter = ({ total, completed }) => {
  return (
    <h1>
      {total != completed
        ? `Has completado ${completed} de ${total} TODOS`
        : `Felicidades completaste todas las tareas`}
    </h1>
  );
};
