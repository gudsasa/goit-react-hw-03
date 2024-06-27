import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import initialContactLists from '../../contactList.json';
import css from './App.module.css';

export default function App() {
  const [contactLists, setContactList] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContactLists;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactLists));
  }, [contactLists]);

  const visibleContact = contactLists.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContactList((prevContact) =>
      prevContact.filter((contact) => contact.id !== contactId)
    );
  };

  const addContact = (newContact) => {
    setContactList((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <div className={css.phonebook}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contactLists={visibleContact} onDelete={deleteContact} />
    </div>
  );
}
