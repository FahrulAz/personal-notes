import React from "react";

const HeaderSearch = ({ onSearch }) => {

  const onSearchChange = (searchText) => {
    onSearch(searchText.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search notes..."
        onChange={onSearchChange}
        className="note-search"
      />
    </>
  );
}

export default HeaderSearch;