import { useState, useEffect } from "react";

import People from "./components/People";
import Form from "./components/Form";
import SearchFilter from "./components/SearchFilter";

import personService from "./services/persons"

const App = () => {

    const [persons, setPersons] = useState([]);

    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [filtWord, setFiltWord] = useState("");
    const [filteredList, setFilteredList] = useState(persons);

    useEffect(() => {
        personService.getAll()
            .then(content => {
                setPersons(content);
            })
    }, []);

    const addPerson = (event) => {
        event.preventDefault();

        if (persons.some(el => el.name === newName)){
            let res = persons.filter(el => {
                if(el.name === newName){
                    return el
                }
            })[0]

            const alertMessage = `${newName} is already added to phonebook, replace the old number with a new one?`;
            if (window.confirm(alertMessage)) {

                const updatedPerson = {name: res["name"], number: newPhone, id: res.id}

                personService.update(updatedPerson.id, updatedPerson)
                    .then(() => {

                        personService.getAll()
                            .then((result) => {
                                setPersons(result)
                                setNewName("")
                                setNewPhone("")
                            })
                    })
            }
        }
        else {
            const newPerson = {name: newName, number: newPhone, id: (persons.length + 1)}

            personService.create(newPerson)
                .then((result) => {
                    setPersons(persons.concat(result))
                    setNewName("")
                    setNewPhone("")
                })
        }

        setNewName("");
        setNewPhone("");
        setFiltWord("");
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value);
    }

    useEffect(() => {
        const filteredList = persons.filter(
            (el) => {
                if (el.name !== undefined){
                    return el.name.toLowerCase().includes(filtWord.toLowerCase())
                }
                else {
                    return false
                }
            }
        )

        setFilteredList(filteredList);
    }, [filtWord]);

    useEffect(() => {
        setFilteredList(persons);
    }, [persons]);


    const handleFilterChange = (event) => {
        setFiltWord(event.target.value);
    }

    return (
      <div>
            <h2>Phonebook</h2>
            <SearchFilter filtWord={filtWord}
                            handleFilterChange={handleFilterChange}/>
            <h3>add a new</h3>
            <Form   addPerson={addPerson}
                    newName={newName}
                    newPhone={newPhone}
                    handleNameChange={handleNameChange}
                    handlePhoneChange={handlePhoneChange}/>
            <h3>Numbers</h3>
            <People filteredList={filteredList} persons={persons} setPersons={setPersons} setFilterWord={setFiltWord} setFilteredList={setFilteredList}/>
      </div>
    );
}

export default App