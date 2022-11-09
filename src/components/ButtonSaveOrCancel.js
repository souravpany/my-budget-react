import React from 'react'
import { Button } from 'semantic-ui-react';


function ButtonSaveOrCancel({ onOkButtonClick, onCancelButtonClick }) {
    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button onClick={() => onCancelButtonClick()}>Cancel</Button>
            <Button.Or />
            <Button primary onClick={() => onOkButtonClick()}>Ok</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancel