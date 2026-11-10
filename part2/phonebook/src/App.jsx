import { useState, useEffect } from "react";
import phonebookService from "./services/phonebook";
import People from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [query, setQuery] = useState('');
  const [notification, setNotification] = useState(null);

  const displayNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialData => {
        setPersons(initialData);
      })
      .catch(() => {
        displayNotification('error', 'There was an error fetching all contacts, please try again.');
      });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const personsToShow = query
    ? persons.filter(person =>
        person.name.toLowerCase().includes(query.toLowerCase())
      )
    : persons;

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(person => person.name === newName);

    if (!existingPerson) {
      const newPerson = {
        name: newName,
        number: newNumber
      };
      phonebookService
        .create(newPerson)
        .then(newData => {
          setPersons(persons.concat(newData));
          setNewName('');
          setNewNumber('');
          displayNotification('success', `Added ${newData.name}`);
        })
        .catch(() => {
          displayNotification('error', 'There was an error adding the contact, please try again.');
        });
    } else {
      if (window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      )) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        phonebookService
          .update(updatedPerson)
          .then(response => {
            setPersons(persons.map(p => p.id === response.id ? response : p));
            setNewName('');
            setNewNumber('');
            displayNotification('success', `Updated info for ${response.name}`);
          })
          .catch(() => {
            displayNotification('error', `Information of ${updatedPerson.name} has already been removed from the server.`);
          });
      }
    }
  };

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      phonebookService
        .deleteContact(id)
        .then((deletedUser) => {
          setPersons(persons.filter(person => person.id !== deletedUser.id));
          displayNotification('success', `Deleted ${deletedUser.name}`);
        })
        .catch(() => {
          displayNotification('error', 'There was an error deleting the contact, please try again.');
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification {...notification} />
      <Filter query={query} onChange={handleQueryChange} />

      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        onSubmit={handleFormSubmission}
      />

      <h2>Numbers</h2>
      <People people={personsToShow} handleDelete={handleDelete}/>
    </div>
  );
};

export default App;