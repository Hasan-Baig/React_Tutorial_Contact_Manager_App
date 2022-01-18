import React, { useState, useEffect } from "react";
// import { v4 as uuid } from 'uuid';
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  // useState React Hook
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
    // setContacts([...contacts, { id: v4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  //retrieve and place in contact list from storage after refresh
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  //store in local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

return (
  <div className="ui container">
    <Header />
    {/* Pass data from parent to child via props*/}
    <AddContact addContactHandler={addContactHandler} />
    <ContactList contacts={contacts} getContactId={removeContactHandler} />
  </div>
);
}

export default App;