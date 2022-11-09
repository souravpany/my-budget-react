import React from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react';


function EntryForm({ description, value, isExpense, setDescription, setValue, setIsExpense }) {

    return (
        <>
            <Form.Group>
                <Form.Input
                    icon='tag'
                    label='Description'
                    width={12}
                    placeholder='new shinny thing'
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
                <Form.Input
                    icon='dollar'
                    label='Value'
                    width={4}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    placeholder='100.00'
                    iconPosition='left' />
            </Form.Group>

            <Segment compact>
                <Checkbox
                    toggle
                    label='is Expense'
                    checked={isExpense}
                    onChange={() => setIsExpense(oldState => !oldState)} />
            </Segment>
        </>
    )
}

export default EntryForm