import { useState, useEffect } from "react";

import People from "./components/People";
import Form from "./components/Form";
import SearchFilter from "./components/SearchFilter";

const App = () => {

    const [persons, setPersons] = useState([
        {name : "Arto Hellas", phone: "5556667788"}
    ]);

    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [filtWord, setFiltWord] = useState("");
    const [filteredList, setFilteredList] = useState(persons);

    const addPerson = (event) => {
        event.preventDefault();

        if (persons.some(el => el.name === newName)){
            const alertMessage = `${newName} is already added to phonebook`;
            alert(alertMessage);
        }
        else {
            const newPersons = persons.concat(
                {name: newName, phone: newPhone}
            )

            setPersons(newPersons);
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
                return el.name.toLowerCase().includes(filtWord.toLowerCase())
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
            <People filteredList={filteredList}/>
      </div>
    );
}

export default App