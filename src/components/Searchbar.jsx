import React, { useState } from "react";

const Searchbar = ({ handleSubmit }) => {
  const [query, setQuery] = useState("");
  function onSubmit(event) {
    event.preventDefault();
    handleSubmit(query);
  }
  return (
    <div>
      <header className="Searchbar">
        <form onSubmit={onSubmit} className="SearchForm">
          <button type="submit" class="SearchFormButton">
            <span className="SearchFormButtonLabel">Search</span>
          </button>

          <input
            onChange={(event) => setQuery(event.target.value)}
            className="SearchFormInput"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Находите картинки и фото."
          />
        </form>
      </header>
    </div>
  );
};

export default Searchbar;
