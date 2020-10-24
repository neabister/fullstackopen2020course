import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ nameFilter, setNameFilter ] = useState('')



  const addPerson = (event) => {
    event.preventDefault()
    console.log('add button clicked', event.target)
    if (persons.map(p => p.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`);
      return 
    } 
    
    console.log(persons)
    const personObject = {
      name: newName,
      number: newNumber,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameFilter = (event) => {
    console.log(event.target.value)
    setNameFilter(event.target.value)
  }

  const personFilter = person => person.name.toLowerCase().includes(nameFilter)


  return (
    <div>
      <h2>Phonebook</h2>
        <input
          value={nameFilter}
          onChange={handleNameFilter}
        />

      <h2>Add new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.filter(personFilter).map(person => 
          <Person key={person.name} person={person} />
      )}
      </div>
        
       
    
    </div>
  )

}

const Person = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}

export default App;
