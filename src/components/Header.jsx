import React from "react";
import HeaderSearch from "./HeaderSearch";

const Header = ({ onSearch }) => {
  return (
    <header className="note-app__header">
      <img src="./logo.svg" alt="logo-img" width="60px" height="60px" />
      <h1>Notes</h1>
      <HeaderSearch onSearch={onSearch} />
    </header>
  );
};

export default Header;
