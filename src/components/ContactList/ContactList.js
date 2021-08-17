import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.item} key={id}>
        <ContactItem
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      </li>
    ))}
  </ul>
);

export default ContactList;
