import { Component } from 'react';

class ContactList extends Component {
  render() {
    return this.props.contactsList.map(contact => (
      <li key={contact.id}>
        <p>{contact.name}:</p>
        <span>{contact.number}</span>
      </li>
    ));

  }
}

export default ContactList;
