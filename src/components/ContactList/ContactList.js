
import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";
import { getContacts, getValueFilter } from "redux/selectors";

import css from './ContactList.module.css';

export const ContactList = () =>{ 
    const contacts = useSelector(getContacts);
    const filteredContactsList = useSelector(getValueFilter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filteredContactsList.toLowerCase())
    );

    const visibleContacts = filteredContactsList ? filteredContacts : contacts

    return (
        <ul className={css.contactLists}>
            {visibleContacts.map((contact) =>
                <li className={css.contactListItem}
                    key={contact.id}>
                        <Contact contact={contact}/>
                </li>
            )}
        </ul>
    )
}