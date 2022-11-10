import React from 'react'

import { Form } from 'semantic-ui-react';

import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

// custom hook
import useEntryDetails from '../hooks/useEntryDetails';


function NewEntryForm() {

    const { description,
        value,
        isExpense,
        setDescription,
        setValue,
        setIsExpense,
        onOkButtonClick
    } = useEntryDetails();

    function onCancelButtonClick() {
        setDescription('')
        setValue('')
        setIsExpense(true)
    }

    return (
        <Form unstackable>

            <EntryForm
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <ButtonSaveOrCancel onOkButtonClick={onOkButtonClick} onCancelButtonClick={onCancelButtonClick} />

        </Form>
    )
}

export default NewEntryForm