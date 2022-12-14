
const Person = ({filteredPerson, handleDeleteClicked}) => {
    return (
        <li>
            <span>
                {filteredPerson.name + " "}
                {filteredPerson.number + " "}
                <button onClick={handleDeleteClicked}>delete</button>
            </span>
        </li>
    );
};

export default Person;