// import { FiPhoneCall } from 'react-icons/fi';

// import s from "./Filter.module.css";

const Filter = ({ name, onChange }) => (
  <>
    <p>Find contacts by name</p>
    <input
      placeholder="Elon Reeve Musk"
      type="text"
      name={name}
      onChange={onChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
    />
  </>
);

export default Filter;
