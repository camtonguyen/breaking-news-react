import React from "react";

import { FormField, FormInput } from './header.styles';

const Search = ({ searchTerm, handleChange }) => {
    return (
      <FormField>
        <FormInput
          type="text"
          placeholder="Search title..."
          defaultValue={searchTerm}
          onChange={handleChange}
        />
      </FormField>
    )
}

export default Search;