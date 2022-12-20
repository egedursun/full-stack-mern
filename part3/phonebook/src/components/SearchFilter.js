
const SearchFilter = ({filtWord, handleFilterChange}) => {

    return (
        <div>
            <input value={filtWord} onChange={handleFilterChange}/>
        </div>
    );
}

export default SearchFilter;