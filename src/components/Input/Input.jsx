import { SearchBar, SearchBarDiv, SearchButton } from "./Input-styles";

import React from "react";

const Input = () => {
  return (
    <SearchBarDiv>
      <SearchBar placeholder="add details" type="search"></SearchBar>
      <SearchButton>Add</SearchButton>
    </SearchBarDiv>
  );
};

export default Input;
