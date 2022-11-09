import React from 'react'

import { Form } from 'semantic-ui-react';

import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';


function NewEntryForm({ addEntry,
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense, resetEntry }) {

    function onOkButtonClick() {
        addEntry(description, value, isExpense)
    }

    function onCancelButtonClick() {
        resetEntry()
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