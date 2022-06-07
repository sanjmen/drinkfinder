import React, { useState, useEffect } from "react";
import Search from "./search/index";
import Drinks from "./drinks/index";
import Api from "./data/api";

export default function App() {
  const [query, setQuery] = useState('Bourbon');
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  function handleQueryChange(query) {
    setQuery(query);
  }

  useEffect(() => {
    if (query.length >= 1) {
      Api.getByName(query)
        .then(data => {
          setDrinks(data.drinks);
          setLoaded(true);
        })
        .catch(e => {
          setError(e);
          setLoaded(true);
          setDrinks([])
        });
    }
  }, [query]);

  return (
    <section className="section">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column">
            <Search
              query={query}
              onQueryChange={handleQueryChange}
            />
            <Drinks
              drinks={drinks}
              error={error}
              loaded={loaded}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
