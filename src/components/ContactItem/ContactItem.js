import { FiPhoneCall } from 'react-icons/fi';

// import s from "./ContactItem.module.css";

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <>
    <a href="tel:{number}">
      <p>{name}</p>
      <p>{number}</p>
      <FiPhoneCall className="icon" />
    </a>
    <button
      type="button"
      onClick={() => onDeleteContact(id)}
      aria-label="delete contact"
    >
      Delete
    </button>
  </>
);

export default ContactItem;
