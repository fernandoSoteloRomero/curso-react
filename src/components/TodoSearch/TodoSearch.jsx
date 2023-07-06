import React, { useState } from "react";
import "./TodoSearch.css";
export const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <div className="input-icon">
        <i className="fa-solid fa-magnifying-glass icon"></i>
        <input
          placeholder="Cortar cebolla"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
    </>
  );
};
