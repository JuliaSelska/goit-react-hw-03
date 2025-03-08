const SearchBox = ({ filter, onFilterChange }) => {
    return (
        <div>
            <label>
                Find contacts by name:
                <input
                    type="text"
                    value={filter}
                    onChange={(event) => {
                        console.log("Filter input changed:", event.target.value);
                        onFilterChange(event.target.value);
                    }}
                />
            </label>
        </div>
    );
};

export default SearchBox;
