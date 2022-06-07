export default function Search(props) {
    function handleQueryChange(e) {
        props.onQueryChange(e.target.value);
    }

    return (
        <form className="box">
            <div class="field has-addons">
                <div class="control">
                    <button className="button is-static is-medium">
                        Name:
                    </button>
                </div>
                <input
                    className="input is-medium"
                    type="text"
                    placeholder="Search cocktails by name: try Gin, Alice, Adam..."
                    value={props.query}
                    onChange={handleQueryChange}
                />
            </div>
        </form>
    );

}