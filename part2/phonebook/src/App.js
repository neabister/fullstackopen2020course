import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')


  const addName = (event) => {
    event.preventDefault()
    console.log('add button clicked', event.target)
    if (persons.map(p => p.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`);
      return 
    }
    
    console.log(persons)
    const nameObject = {
      name: newName,
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <Person key={person.name} person={person} />
      )}
      </div>
        
       
    
    </div>
  )

}

const Person = ({ person }) => {
  return (
    <li>{person.name}</li>
  )
}

export default App;

