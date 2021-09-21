import "./App.css";
import totalContacts from "./contacts.json";
import React, { useState } from 'react';


function App() {

  const [contacts, setContacts] = useState([totalContacts[0], totalContacts[1], totalContacts[2], totalContacts[3], totalContacts[4]])
  
  let remainingContacts = totalContacts.filter((contact) =>  !contacts.includes(contact) )
  
  
  const addRandomContact = () => {
    let newRandomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];

    setContacts([...contacts, newRandomContact])
  }


  const sortByName = () => {
    let copyArr = [...contacts]

    copyArr.sort(function(a, b) {
      return a.name.localeCompare(b.name)
    })
    setContacts(copyArr)
  }

  const sortByPopularity = () => {
    let copyArr = [...contacts]

    copyArr.sort(function(a, b) {
       return b.popularity - a.popularity
    })
    setContacts(copyArr)
  }

  const deleteContact = contactId => {
    let copyArr = [...contacts]

    let filteredContacts = copyArr.filter((contact) => contact.id !== contactId )

    setContacts(filteredContacts)
  }



  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={addRandomContact}> Add Random Contact</button>
      <button onClick={sortByName}> Sort by name</button>
      <button onClick={sortByPopularity}> Sort by popularity</button>

      <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
        <th>Actions</th>
      </tr>
      {contacts.map((contact) => (
        <tr>
          <td> <img src={contact.pictureUrl} /> </td>
          <td> <h2>{contact.name}</h2></td>
          <td> <p>{contact.popularity}</p></td>
          <td> {contact.wonOscar && (<span>🏆</span>)}</td>
          <td> {contact.wonEmmy && (<span>🏆</span>)}</td>
          <td> <button onClick={() => deleteContact(contact.id)}>Delete</button></td>
        </tr>
          ))}
      </table>
    </div>
  )
}

export default App;

