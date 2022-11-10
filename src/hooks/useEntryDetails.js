import { useEffect, useState } from 'react';


import { useDispatch } from 'react-redux';
import { addEntryRedux, updateEntryRedux } from '../redux/action/entries.actions';


// for random ID generation
import { v4 as uuidv4 } from 'uuid';
import { closeEditModal } from '../redux/action/modals.action';

function useEntryDetails(desc = "", val = "", isExp = true) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        setDescription(desc);
        setValue(val);
        setIsExpense(isExp);
    }, [desc, val, isExp])

    function updateEntry(id) {
        dispatch(updateEntryRedux(
            id,
            {
                description,
                value,
                isExpense
            }
        ));

        dispatch(closeEditModal());
        resetValue();
    }

    function onOkButtonClick() {
        dispatch(addEntryRedux({
            id: uuidv4(),
            description,
            value,
            isExpense
        }));
        resetValue();
    }

    function resetValue() {
        setDescription('')
        setValue('')
        setIsExpense(true)
    }

    return {
        description,
        value,
        isExpense,
        setDescription,
        setValue,
        setIsExpense,
        onOkButtonClick,
        updateEntry
    }

}

export default useEntryDetails