import React from 'react'
import DisplayBalance from './DisplayBalance'
import { Grid, GridColumn, GridRow, Segment } from 'semantic-ui-react';


function DisplayBalances() {
    return (
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <GridRow>

                    <GridColumn>

                        <DisplayBalance size='tiny' label='Incoming:' value='1,045.50' color='green' />

                    </GridColumn>

                    <GridColumn>

                        <DisplayBalance size='tiny' label='Expenses:' value='623.50' color='red' />

                    </GridColumn>

                </GridRow>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances