import { Component } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/ContactList';
// import Filter from './Filter/Filter';
import css from './ContactForm/ContactForm.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = e => {
    const index = this.state.contacts.indexOf(e.target);
    console.log(index)

    this.state.contacts.forEach((value, key) => {
      if (value.id === e.target.id) {
        this.state.contacts.splice(key, 1);
        this.setState(this.state.contacts);
      }
    });
  };

  // filterContacts = e => {
  //   // console.log(e.target.value);
  //   // this.setState({ filter: e.target.value });
  //   // this.state.contacts.includes(e.target.value)
  //   this.filterContacts = this.state.contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(e.target.value);
  //   });
  // };
  //   console.log(this.state.contacts.name.includes(this.state.filter))
  // };

  render() {
    return (
      <div className={css.phonebook}>
        <h1 className={css.form__title}>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.handleAddContact}
        />
        <h2>Contacts</h2>
        {/* <Filter
          contactsList={this.state.contacts}
          filter={this.state.filter}
          // addContact={this.handleAddContact}
          filterContacts={this.filterContacts}
        /> */}
        <ul>
          <ContactList
            contactsList={this.state.contacts}
            deleteContact={this.deleteContact}
          />
          {/* {this.state.contacts.length !== 0 && <ContactList />} */}
        </ul>
      </div>
    );
  }
}
export default App;