import { Component } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import css from './ContactForm/ContactForm.module.css'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

    deleteContact = e => {
    const index = this.state.contacts.indexOf(e.target);

    this.state.contacts.forEach((value, key) => {
      if (value.id == e.target.id) {
        this.state.contacts.splice(key, 1)
        this.setState(this.state.contacts)
      }
    });
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
          // addContact={this.handleAddContact}
        />
        <ul>
          <ContactList contactsList={this.state.contacts} deleteContact={this.deleteContact} />
          {/* {this.state.contacts.length !== 0 && <ContactList />} */}
        </ul>
      </div>
    );
  }
}
export default App;

