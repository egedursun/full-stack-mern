import Person from "./Person";
import personService from "../services/persons";
import {useEffect, useState} from "react";

const People = ({filteredList, setPersons, persons, setFilterWord, setFilteredList, setError}) => {

    const [content, setContent] = useState(0)

    const handleDeleteClicked = (id) => {

        if (window.confirm("Are you sure you want to delete the item?")) {
            personService
                .deleteItem(id)
                .then(content => {
                    console.log(content)
                    setContent(1)
                }).catch(() => {
                    setError("Information for item has already been removed from the server")

                    setTimeout(() => {
                        setError(null);

                    }, 2500)
                }
            )
        }
    }

    useEffect(() => {
        personService.getAll()
            .then(
                (content) => {
                    setPersons(content)
                    setFilterWord("")
                    setFilteredList(persons)
                }
            )
    }, [content])

    return (
        <div>
            <ul>
                {filteredList.map((filteredPerson) =>
                    <div>
                        <Person key={filteredPerson.id} filteredPerson={filteredPerson} handleDeleteClicked={() => handleDeleteClicked(filteredPerson.id)}/>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default People;