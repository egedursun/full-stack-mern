
const Person = ({filteredPerson}) => {
    return (
        <li>{filteredPerson.name} {filteredPerson.number}</li>
    );
};

export default Person;