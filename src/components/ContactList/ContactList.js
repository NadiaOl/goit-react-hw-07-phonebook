
import { useDispatch, useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { getContacts, getError, getIsLoading, getValueFilter } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import css from './ContactList.module.css';

export const ContactList = () =>{ 
    const contacts = useSelector(getContacts);
    const filteredContactsList = useSelector(getValueFilter);
    const dispatch = useDispatch();
      const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filteredContactsList.toLowerCase())
    );

    const visibleContacts = filteredContactsList ? filteredContacts : contacts

    return (
        <div>
            {isLoading && <p>Loading tasks...</p>}
            {error && <p>{error}</p>}
            <ul className={css.contactLists}>
                {visibleContacts.map((contact) =>
                    <li className={css.contactListItem}
                        key={contact.id}>
                        <Contact contact={contact}/>
                    </li>
                )}
            </ul>
        </div>

    )
}