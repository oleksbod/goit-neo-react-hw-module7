import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import Notification from './Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import { selectContacts, selectError, selectLoading } from '../redux/contactsSlice';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="main">
      <h1>Phonebook</h1>

      <ContactForm />

      <SearchBox />

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && contacts.length > 0 && <ContactList />}

      {!loading && !error && contacts.length === 0 && <Notification />}
    </div>
  );
}

export default App;
