import "./App.css";
import Contacts from "./contacts.json";
import React, { useState } from 'react';


function App() {

  const [contacts, setContacts] = useState([Contacts[0], Contacts[1], Contacts[2], Contacts[3], Contacts[4]])


  return (
    <div className="App">
      <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
      </tr>
      {contacts.map((contact) => (
        <tr>
          <td> <img src={contact.pictureUrl} /> </td>
          <td> <h2>{contact.name}</h2></td>
          <td> <p>{contact.popularity}</p></td>
          <td> {contact.wonOscar && (<span>🏆</span>)}</td>
          <td> {contact.wonEmmy && (<span>🏆</span>)}</td>
        </tr>
          ))}
      </table>
    </div>
  )
  
}
export default App;

