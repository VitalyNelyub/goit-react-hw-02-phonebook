import { Component } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import css from './ContactForm/ContactForm.module.css';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    filtredContact: [],
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = e => {
    const index = this.state.contacts.indexOf(e.target);
    console.log(index);

    this.state.contacts.forEach((value, key) => {
      if (value.id === e.target.id) {
        this.state.contacts.splice(key, 1);
        this.setState(this.state.contacts);
      }
    });
  };

  handleFilterContacts = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = () => {
    const filtredContact = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
    this.setState({ filtredContact });
  };

  render() {
    return (
      <div className={css.phonebook}>
        <h1 className={css.form__title}>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.handleAddContact}
        />
        <h2>Contacts</h2>
        <Filter
          contactsList={this.state.contacts}
          handleFilterContacts={this.handleFilterContacts}
          filterContacts={this.filterContacts}
        />
        <ul>
          <ContactList
            contactsList={this.state.contacts}
            filterContacts={this.filterContacts}
            filtredContact={this.state.filtredContact}
            deleteContact={this.deleteContact}
            filter={this.state.filter}
            
          />
        </ul>
      </div>
    );
  }
}
export default App;
