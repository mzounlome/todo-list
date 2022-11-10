import { SearchBar, SearchBarDiv, SearchButton } from "./Input-styles";

import React from "react";

const Input = ({ setCurrentTask, currentTask, createTask }) => {
  return (
    <SearchBarDiv>
      <SearchBar
        onChange={(e) => setCurrentTask(e.target.value)}
        placeholder="add details"
        type="search"
        value={currentTask}
      ></SearchBar>
      <SearchButton onClick={createTask} disabled={!currentTask}>
        Add
      </SearchButton>
    </SearchBarDiv>
  );
};

export default Input;
