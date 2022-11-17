import React from 'react';
import styles from './Phonebook.module.css';

class ContactFilter extends React.Component {
  render() {
    return (
      <div>
        <label className={styles.contactLabel}>Find contacts by name:</label>
        <input
          className={styles.contactsInput}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default ContactFilter;
