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

export default function Filter(props) {

    function handleIsAlcoholicChange(e) {
        props.onIsAlcoholicChange(e.target.checked);
    }

    return (
        <form className="box">
            <Checkbox label="Alcoholic: " checked={props.isAlcoholic} handleChange={handleIsAlcoholicChange} />
        </form>
    );
}