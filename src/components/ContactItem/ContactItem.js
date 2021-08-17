import { FiPhoneCall } from 'react-icons/fi';

import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <>
    <a className={s.link} href="tel:{number}">
      <p className={s.name}>{name}</p>
      <div className={s.wrapper}>
        <FiPhoneCall className={s.icon} />
        <p className={s.number}>{number}</p>
      </div>
    </a>
    <button
      className={s.button}
      type="button"
      onClick={() => onDeleteContact(id)}
      aria-label="delete contact"
    >
      Delete
    </button>
  </>
);

export default ContactItem;
