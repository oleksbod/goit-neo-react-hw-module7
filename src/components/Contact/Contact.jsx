import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { BsPersonFill, BsTelephoneFill } from 'react-icons/bs';
import { deleteContact } from '../../redux/contactsOps';

function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.data}>
        <div className={css.dataItem}>
          <BsPersonFill className={css.dataItemNameIcon} />

          <span className={css.name}>{name}</span>
        </div>

        <div className={css.dataItem}>
          <BsTelephoneFill className={css.dataItemNumberIcon} />

          <span className={css.name}>{number}</span>
        </div>
      </div>

      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
