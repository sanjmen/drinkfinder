export default function Modal(props) {
    const { closeModal, modalState, drink } = props;

    if (!modalState) {
        return null;
    }

    const ingredients = [];
    for (let step = 0; step < 20; step++) {
        let key = `strIngredient${step}`;
        if (drink[key]) {
            ingredients.push(<tr key={key}>
                <td>{step}</td>
                <td>{drink[key]}</td>
            </tr>)
        }
    }

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={closeModal} />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{drink.strDrink}</p>
                    <button className="delete" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                    <div className="content">
                        <figure className="image is-3by2">
                            <img src={`${drink.strDrinkThumb}`} alt={drink.strDrink}></img>
                        </figure>
                        <h4>Ingredients:</h4>
                        <table className="table is-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Ingredient</th>
                                </tr>
                            </thead>
                            <tbody>{ingredients}</tbody>
                        </table>
                        <h4>Instructions:</h4>
                        <p>{drink.strInstructions}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}