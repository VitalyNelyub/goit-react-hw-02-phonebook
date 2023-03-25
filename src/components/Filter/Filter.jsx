import { Component } from 'react';
import css from '../Filter/Filter.module.css';

class Filter extends Component {
  state = {
    filter:''
  }

  filterContact = () => {
    this.setState({filter:this.target.value})
    console.log(this.target.value)
  }
  render() {
    console.log(this.contactsList)
    return (
      <div className={css.filter}>
        <label className={css.filter__title}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            className={css.filter__input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
            onChange={this.props.filterContact}
            value={this.state.filter}
          />
        </label>
      </div>
    );
  }
}

export default Filter;
