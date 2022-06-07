import React, { useState } from "react";

function Drink(props) {
    const drink = props.drink;

    return (
        <tr>
            <td>
                <figure className="image is-128x128">
                    <img src={`${drink.strDrinkThumb}/preview`} alt={drink.strDrink}></img>
                </figure>
            </td>
            <td>{drink.strDrink}</td>
            <td>{drink.strAlcoholic}</td>
            <td>{drink.strCategory}</td>
            <td>{drink.strGlass}</td>
        </tr>
    );
}

function NoResults() {
    return (
        <tr>
            <td>No Results. Try another search.</td>
        </tr>
    )
}

export default function Drinks(props) {
    const { error, loaded, drinks } = props;
    const rows = [];

    if (drinks) {
        drinks.forEach((drink) => {
            rows.push(
                <Drink
                    drink={drink}
                    key={drink.idDrink}
                />
            );
        });
    } else {
        rows.push(<NoResults key="no-results" />)
    }

    return (
        <div className="drinks box">
            {error ? (
                <p>{error.message}</p>
            ) : !loaded ? (
                <p>Loading ...</p>
            ) : (
                <table className="table is-fullwidth is-hoverable">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Alcoholic</th>
                            <th>Category</th>
                            <th>Glass</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            )}
        </div>
    );
}