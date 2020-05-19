import React from "react";

const Search = ({ searchTerm, handleChange }) => {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          className="mr-sm-2"
          defaultValue={searchTerm}
          onChange={handleChange}
        />
      </form>
    )
}

export default Search;