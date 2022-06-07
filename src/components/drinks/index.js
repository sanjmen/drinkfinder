import React, { Fragment, useState } from "react";
import Modal from "../modal/index";

function Drink(props) {
    const [modalState, setModalState] = useState(false);
    const drink = props.drink;

    function toggleModal() {
        setModalState(!modalState);
    }

    return (
        <div className="card p-2 my-2">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-128x128">
                            <img src={`${drink.strDrinkThumb}/preview`} alt={drink.strDrink}></img>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">Name: <a className="is-primary" onClick={toggleModal}>{drink.strDrink}</a></p>
                        <table className="table is-bordered">
                            <thead>
                                <tr>
                                    <th>Alcoholic</th>
                                    <th>Category</th>
                                    <th>Glass</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{drink.strAlcoholic}</td>
                                    <td>{drink.strCategory}</td>
                                    <td>{drink.strGlass}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal
                closeModal={toggleModal}
                modalState={modalState}
                drink={drink}
            ></Modal>
        </div>
    );
}

function NoResults() {
    return (
        <h4>No Results. Try another search.</h4>
    )
}

export default function Drinks(props) {
    const { error, loaded, drinks, isAlcoholic } = props;
    const items = [];

    if (drinks) {
        drinks.forEach((drink) => {
            // Alcoholic/Non alcoholic filter
            if (drink.strAlcoholic.includes('Non') === isAlcoholic) {
                return;
            }

            items.push(
                <Drink
                    drink={drink}
                    key={drink.idDrink}
                />
            );
        });
    } else {
        items.push(<NoResults key="no-results" />)
    }

    return (
        <div className="drinks box">
            {error ? (
                <p>{error.message}</p>
            ) : !loaded ? (
                <p>Loading ...</p>
            ) : (
                <Fragment>{items}</Fragment>
            )
            }
        </div>
    );
}