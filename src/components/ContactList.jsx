import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      {contacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={onDelete}
          ></Contact>
        );
      })}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
