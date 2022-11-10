import React from 'react'
import { Grid, GridColumn, GridRow, Icon, Segment } from 'semantic-ui-react';

import { useDispatch } from 'react-redux';
import { removeEntryRedux } from '../redux/action/entries.actions';
import { openEditModal } from '../redux/action/modals.action';


function EntryLine({ id, description, value, isExpense = false }) {
    const dispatch = useDispatch();

    return (
        <>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign="right">
                    <GridRow>
                        <GridColumn width={10} textAlign="left">{description}</GridColumn>
                        <GridColumn width={3} textAlign="right">{value}</GridColumn>
                        <GridColumn width={3}>
                            <Icon name='edit' bordered onClick={() => dispatch(openEditModal(id))} />
                            <Icon name='trash' onClick={() => dispatch(removeEntryRedux({ id }))} />
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Segment>
        </>
    )
}

export default EntryLine