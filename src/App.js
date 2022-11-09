import './App.css';
import { Container } from 'semantic-ui-react';

// components
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <div className="App">
      <Container>
        <MainHeader title='Budget' />

        <DisplayBalance size='small' label='Your Balance:' value='2,550.53' />

        <DisplayBalances />

        <MainHeader title='History' type='h3' />

        <EntryLine description='income' value='$10.00' />

        <EntryLine description='expense' value='$10.00' isExpense />

        <MainHeader title='Add new trasaction' type='h3' />

        <NewEntryForm />

      </Container>
    </div>
  );
}

export default App;
