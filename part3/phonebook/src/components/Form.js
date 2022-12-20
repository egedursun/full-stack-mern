
const Form = ({addPerson, newName, newPhone,
                  handleNameChange, handlePhoneChange}) => {

    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={newPhone} onChange={handlePhoneChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
}

export default Form;