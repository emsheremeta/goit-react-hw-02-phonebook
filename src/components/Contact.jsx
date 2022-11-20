import React from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

class Contact extends React.Component {
  onDelete = event => {
    const id = event.target.parentElement.id;
    this.props.onDelete(id);
  };
  render() {
    const { id, name, number } = this.props.contact;

    return (
      <li className={styles.contactList} id={id}>
        {name}: {number}
        <button className={styles.buttonContact} onClick={this.onDelete}>
          Delete
        </button>
      </li>
    );
  }
}

export default Contact;

Contact.prototypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
