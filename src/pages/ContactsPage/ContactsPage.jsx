import css from './ContactsPage.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);

    return (
    <>
        <title>Your contacts</title>
        <p className={css.list}>Add contact</p>
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactForm />
        <p className={css.list}>Your contacts</p>
        <ContactList />
    </>
    );
}
