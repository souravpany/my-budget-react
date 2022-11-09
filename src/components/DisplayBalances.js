import React from 'react'
import DisplayBalance from './DisplayBalance'
import { Grid, GridColumn, GridRow, Segment } from 'semantic-ui-react';


function DisplayBalances({ totalExpense, totalIncome }) {
    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <GridRow>

                    <GridColumn>

                        <DisplayBalance size='tiny' label='Incoming:' value={totalIncome} color='green' />

                    </GridColumn>

                    <GridColumn>

                        <DisplayBalance size='tiny' label='Expenses:' value={totalExpense} color='red' />

                    </GridColumn>

                </GridRow>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances