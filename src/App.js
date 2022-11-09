import './App.css';
import { Button, Container, Form, Grid, GridColumn, GridRow, Header, Icon, Segment, Statistic } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container>
        <Header as="h1">Budget</Header>
        <Statistic size='small'>
          <Statistic.Label>Your Balance:</Statistic.Label>
          <Statistic.Value>2,550.53</Statistic.Value>
        </Statistic>
        <Segment textAlign='center'>
          <Grid columns={2} divided>
            <GridRow>
              <GridColumn>
                <Statistic size='tiny' color='green'>
                  <Statistic.Label>Incoming:</Statistic.Label>
                  <Statistic.Value>1,045.50</Statistic.Value>
                </Statistic>
              </GridColumn>
              <GridColumn>
                <Statistic size='tiny' color='red'>
                  <Statistic.Label>Expenses:</Statistic.Label>
                  <Statistic.Value>623.50</Statistic.Value>
                </Statistic>
              </GridColumn>
            </GridRow>
          </Grid>
        </Segment>


        <Header as='h3'>History</Header>

        <Segment color='red'>
          <Grid columns={3} textAlign="right">
            <GridRow>
              <GridColumn width={10} textAlign="left">Something</GridColumn>
              <GridColumn width={3} textAlign="right">$10,00</GridColumn>
              <GridColumn width={3}>
                <Icon name='edit' bordered />
                <Icon name='trash' />
              </GridColumn>
            </GridRow>
          </Grid>
        </Segment>

        <Segment color='green'>
          <Grid columns={3} textAlign="right">
            <GridRow>
              <GridColumn width={10} textAlign="left">Something else</GridColumn>
              <GridColumn width={3} textAlign="right">$100,00</GridColumn>
              <GridColumn width={3}>
                <Icon name='edit' bordered />
                <Icon name='trash' />
              </GridColumn>
            </GridRow>
          </Grid>
        </Segment>

        <Segment color='red'>
          <Grid columns={3} textAlign="right">
            <GridRow>
              <GridColumn width={10} textAlign="left">Something</GridColumn>
              <GridColumn width={3} textAlign="right">$20,00</GridColumn>
              <GridColumn width={3}>
                <Icon name='edit' bordered />
                <Icon name='trash' />
              </GridColumn>
            </GridRow>
          </Grid>
        </Segment>

        <Header as='h3'>Add new trasaction</Header>

        <Form unstackable>
          <Form.Group>
            <Form.Input icon='tag' label='Description' width={12} placeholder='new shinny thing'></Form.Input>
            <Form.Input icon='dollar' label='Value' width={4} placeholder='100.00' iconPosition='left'></Form.Input>
          </Form.Group>

          <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>Ok</Button>
          </Button.Group>

        </Form>

      </Container>
    </div>
  );
}

export default App;
