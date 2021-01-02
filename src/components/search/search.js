// NPM
import React from "react";

function Search() {
  const style = {
    cursor: "pointer",
    color: "black",
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
            <div className="input-field col s12 center">
              <a
                style={style}
                id=""
                onClick=""
                href="!"
                className="material-icons prefix"
              >
                search
              </a>
              <input
                onKeyDown=""
                type="text"
                id="autocomplete-input"
                className="autocomplete"
                name="searchBar"
              />
              <label htmlFor="autocomplete-input">What are you looking for?</label>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <p className="grey-text">Top Search</p>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Search;
