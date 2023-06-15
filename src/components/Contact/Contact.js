
import { useDispatch } from "react-redux";

import css from './Contact.module.css';
import { deleteContact } from "redux/operations";



export const Contact= ({contacts}) =>{ 
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contacts.id))

    return (
        <div className={css.contactListConteiner}>
            <p className={css.userName}>{contacts.name}: </p>
            <p>{contacts.phone}</p>
            <button className={css.listButton} type="button" onClick={handleDelete}> 
                <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m8 8 14 14M8 22 22 8" stroke="#000" strokeWidth="2"/>
                </svg>
            </button>
        </div>
    )
}