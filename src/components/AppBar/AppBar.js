import { useSelector } from 'react-redux';
import {ContactForm} from '../ContactForm/ContactForm';
import {ContactList} from '../ContactList/ContactList';
import {Filter} from '../Filter/Filter'
import css from './AppBar.module.css';
import { selectIsLoading } from 'redux/selectors';
import { CircleLoader  } from "react-spinners";

export const AppBar = () => {
      const isLoading = useSelector(selectIsLoading);
  return (
    <div className={css.phonebook}>

      <h2 className={css.phonebookTitle}>Phonebook</h2>
                        
      <ContactForm />
      <Filter />
      <h3 className={css.phonebookSubTitle}>{isLoading ? <CircleLoader  color="#b61a77"
        size={20}/> : <p>Contacts</p>}</h3>
      <ContactList />
    </div>
  )
}
