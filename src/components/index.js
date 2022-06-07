import React, { useState, useEffect } from "react";
import Search from "./search/index";

export default function App() {
  const [query, setQuery] = useState('Bourbon');

  function handleQueryChange(query) {
    setQuery(query);
  }

  return (
    <section class="section">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column">
            <Search
              query={query}
              onQueryChange={handleQueryChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
