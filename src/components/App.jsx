import { Component } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/ContactList';
// import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          // contacts={this.state.contacts}
          addContact={this.handleAddContact}
        />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ul>
          <ContactList contactsList={this.state.contacts} />
          {/* {this.state.contacts.length !== 0 && <ContactList />} */}
        </ul>
      </div>
    );
  }
}
export default App;
