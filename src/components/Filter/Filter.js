import { useDispatch, useSelector } from "react-redux";
import { getValueFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/slice';

import css from './Filter.module.css';

export const Filter = () => {
    const filter = useSelector(getValueFilter)
    const dispatch = useDispatch();

    const onChangeFilter = (event) => {
        dispatch(setStatusFilter(event.target.value.toLowerCase()))
    }

    return (
        <label className={css.filterLable}>
            Find contacts by name
            <input className={css.filterInput} 
                type="text" 
                value={filter} 
                onChange={onChangeFilter} >
            </input>
        </label>
    )
}
