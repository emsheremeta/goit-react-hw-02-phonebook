import React from 'react';
import ContactFilter from './ContactFilter';
import Form from './Form';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import styles from './Phonebook.module.css';

export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  onSubmit = data => {
    console.log(data);
    const { name, number } = data;
    console.log(
      this.state.contacts.filter(contact => contact.name === name).length
    );

    if (
      this.state.contacts.filter(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      ).length === 0
    ) {
      const id = nanoid();
      const contact = {
        id: id,
        name: name,
        number: number,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    } else {
      alert('This contact already exist');
    }
  };

  onDelete = event => {
    const id = event.target.parentElement.id;
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  render() {
    return (
      <div>
        <h1 className={styles.text}>Phonebook</h1>

        <Form onSubmit={this.onSubmit}></Form>

        <h2 className={styles.contactsText}>Contacts</h2>

        <ContactFilter
          filter={this.state.filter}
          onChange={this.onChange}
        ></ContactFilter>
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.onDelete}
        ></ContactList>
      </div>
    );
  }
}
