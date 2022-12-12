import Person from "./Person";

const People = ({filteredList}) => {
    console.log(filteredList);
    return (
        <div>
            <ul>
                {filteredList.map((filteredPerson) =>
                    <Person key={filteredPerson.id} filteredPerson={filteredPerson}/>
                )}
            </ul>
        </div>
    );
};

export default People;