import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useEffect, useState } from "react";

export default function App() {
    const [contacts, setContacts] = useState(() => {
        const saveContacts = localStorage.getItem("contacts");
        const contacts = JSON.parse(saveContacts);
        if (contacts) return contacts;
        return [
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
    });

    const [filter, setFilter] = useState("");

    useEffect(() => {
        window.localStorage.setItem("contacts", JSON.stringify(contacts));
    });

    function onFilter(filterString) {
        setFilter(filterString);
    }

    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

    function addContact(contact) {
        setContacts((prevContacts) => {
            return [...prevContacts, contact];
        });
    }

    function deleteContact(id) {
        setContacts(() => {
            return contacts.filter((contact) => contact.id !== id);
        });
    }

    return (
        <div className="container">
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact} />

            <SearchBox filter={filter} onFilter={onFilter} />

            <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </div>
    );
}
