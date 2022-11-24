import React from 'react';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

export default function Contact({ contact, deleteContact }) {
  const { id, name, number } = contact;

  return (
    <li className={styles.contactList} id={id}>
      {name}: {number}
      <button
        className={styles.buttonContact}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

Contact.prototypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
