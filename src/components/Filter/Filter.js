import { GoSearch } from 'react-icons/go';

import s from './Filter.module.css';

const Filter = ({ name, onChange }) => (
  <>
    {/* <p>Find contacts by name</p> */}
    <label className={s.label}>
      <input
        className={s.input}
        placeholder="Enter to search..."
        type="text"
        name={name}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <GoSearch className={s.icon} />
    </label>
  </>
);

export default Filter;
