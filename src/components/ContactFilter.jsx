import React from 'react';
import styles from './Phonebook.module.css';
import PropTypes from 'prop-types';

export default function ContactFilter({ filter, onChange }) {
  return (
    <div>
      <label className={styles.contactLabel}>Find contacts by name:</label>
      <input
        className={styles.contactsInput}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
}

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
