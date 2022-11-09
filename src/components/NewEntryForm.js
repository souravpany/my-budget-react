import React from 'react'

import { Form } from 'semantic-ui-react';

import ButtonSaveOrCancel from './ButtonSaveOrCancel';


function NewEntryForm() {
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input icon='tag' label='Description' width={12} placeholder='new shinny thing'></Form.Input>
                <Form.Input icon='dollar' label='Value' width={4} placeholder='100.00' iconPosition='left'></Form.Input>
            </Form.Group>

            <ButtonSaveOrCancel />

        </Form>
    )
}

export default NewEntryForm