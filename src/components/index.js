import React, { useState, useEffect } from "react";
import Search from "./search/index";
import Filter from "./filter/index";
import Drinks from "./drinks/index";
import Api from "./data/api";
import sortResults from "./data/utils";


export default function App() {
  const [query, setQuery] = useState('Bourbon');
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isAlcoholic, setIsAlcoholic] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState('Choose one');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('Choose one')
  const [glasses, setGlasses] = useState([]);
  const [glass, setGlass] = useState('Choose one')

  function handleQueryChange(query) {
    setQuery(query);
  }

  function handleIsAlcoholicChange() {
    setIsAlcoholic(!isAlcoholic);
  }

  function handleIngredientChange(value) {
    setIngredient(value);
  }

  function handleCategoryChange(value) {
    setCategory(value);
  }

  function handleGlassChange(value) {
    setGlass(value);
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

  useEffect(() => {
    Api.getIngredientFilters()
      .then(data => {
        setIngredients(sortResults(data.drinks, "strIngredient1"))
      });
  }, [ingredient])

  useEffect(() => {
    Api.getCategoryFilters()
      .then(data => {
        setCategories(sortResults(data.drinks, "strCategory"))
      });
  }, [category])

  useEffect(() => {
    Api.getGlassFilters()
      .then(data => {
        setGlasses(sortResults(data.drinks, "strGlass"))
      });
  }, [glass])

  return (
    <section className="section">
      <div className="container is-fullhd">
        <div className="columns">
          <div className="column is-one-third has-text-left">
            <Filter
              isAlcoholic={isAlcoholic}
              onIsAlcoholicChange={handleIsAlcoholicChange}
              ingredients={ingredients}
              onIngredientChange={handleIngredientChange}
              glasses={glasses}
              onGlassChange={handleGlassChange}
              categories={categories}
              onCategoryChange={handleCategoryChange}
            />
          </div>
          <div className="column">
            <Search
              query={query}
              onQueryChange={handleQueryChange}
            />
            <Drinks
              drinks={drinks}
              error={error}
              loaded={loaded}
              isAlcoholic={isAlcoholic}
              ingredient={ingredient}
              category={category}
              glass={glass}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
