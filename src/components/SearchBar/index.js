import React, { useState, useEffect } from "react";

import { Styled } from "./style";
import { IconButton } from "@material-ui/core";
import { ReactComponent as SearchIcon } from "../../assets/icons/bx-search.svg";
import FilteredSongs from "../FilteredSongs";
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Styled.SearchBar>
      <div className="search">
        <div className="search-field">
          <input
            type="text"
            placeholder="Search using song title, lyrics, artist.."
            autoComplete="off"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="search-button">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      </div>

      <div className="results">
        {searchValue && <FilteredSongs search={searchValue} />}
      </div>
    </Styled.SearchBar>
  );
};

export default SearchBar;
