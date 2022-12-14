import Person from "./Person";
import personService from "../services/persons";
import {useEffect, useState} from "react";

const People = ({filteredList, setPersons, persons, setFilterWord, setFilteredList}) => {

    const [content, setContent] = useState(0)

    const handleDeleteClicked = (id) => {

        if (window.confirm("Are you sure you want to delete the item?")) {
            personService
                .deleteItem(id)
                .then(content => {
                    console.log(content)
                    setContent(1)
                })
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
                    <Person key={filteredPerson.id} filteredPerson={filteredPerson} handleDeleteClicked={() => handleDeleteClicked(filteredPerson.id)}/>
                )}
            </ul>
        </div>
    );
};

export default People;