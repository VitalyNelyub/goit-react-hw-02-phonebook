import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {

  state = {
    name: '',
    id: '',
  };


addContactBtn = (event) => {
  event.preventDefault();
  // console.log(this.state.name)
  // console.log(this.state.id)
  const { name, id } = this.state;
  // console.log({ name, id })
  const newContact = { name, id };
  // console.log(newContact)
  this.props.addContact(newContact);
  this.setState({ name: '', id: '' });
};

  handleAddContactName = e => {
    // console.log(props);
    // console.log(e.target.value);
    this.setState({ name: e.target.value, id: nanoid() });
    
  };

  render() {
    return (
      <form onSubmit={this.addContactBtn}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleAddContactName}
            value={this.state.name}
          />
        </label>
        {/* <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label> */}
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
