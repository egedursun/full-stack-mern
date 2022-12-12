
const Person = ({filteredPerson}) => {
    return (
        <li>{filteredPerson.name} {filteredPerson.phone}</li>
    );
};

export default Person;