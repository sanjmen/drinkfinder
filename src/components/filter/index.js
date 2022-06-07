import "./style.scss";

function Checkbox(props) {
    const { label, checked, handleChange } = props;

    return (
        <div className="field">
            <div className="control">
                <label className="checkbox is-size-4">{label}
                    <input
                        className="custom-checkbox"
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </div>
    );
}

function Select(props) {
    const { id, name, label, options, attr, handleChange } = props;

    const selectOptions = [];
    options.forEach((option) => {
        selectOptions.push(
            <option key={option[attr]} value={option[attr]}>{option[attr]}</option>
        );
    });

    return (
        <div className="field">
            <label className="label">{label}
                <div className="control">
                    <div className="select is-medium is-fullwidth">
                        <select name={name} id={id} onChange={handleChange}>
                            <option key="choose" value="Choose one">Choose one</option>
                            {selectOptions}
                        </select>
                    </div>
                </div>
            </label>
        </div>
    );
}

export default function Filter(props) {

    function handleIngredientChange(e) {
        props.onIngredientChange(e.target.value);
    }

    function handleCategoryChange(e) {
        props.onCategoryChange(e.target.value);
    }

    function handleGlassChange(e) {
        props.onGlassChange(e.target.value);
    }

    function handleIsAlcoholicChange(e) {
        props.onIsAlcoholicChange(e.target.checked);
    }

    return (
        <form className="box">
            <Checkbox label="Alcoholic: " checked={props.isAlcoholic} handleChange={handleIsAlcoholicChange} />
            <Select id='ingredients' name='ingredients' label="Ingredient: " options={props.ingredients} attr="strIngredient1" handleChange={handleIngredientChange} />
            <Select id='categories' name='categories' label="Category: " options={props.categories} attr="strCategory" handleChange={handleCategoryChange} />
            <Select id='glasses' name='glasses' label="Glass: " options={props.glasses} attr="strGlass" handleChange={handleGlassChange} />
        </form>
    );
}