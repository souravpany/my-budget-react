import './App.css';
import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';

// components
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModelEdit from './components/ModelEdit';

//redux hooks
import { useSelector } from 'react-redux';

function App() {

  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);

  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  // pre-populate modal data
  const [modalEntry, setModalEntry] = useState();


  useEffect(() => {

    const index = entries.findIndex(entry => entry.id === id)
    setModalEntry(entries[index])

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id])

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    entries.map(entry => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      }
      return (totalIncome += Number(entry.value))
    })

    setTotal(totalIncome - totalExpense);
    setExpenseTotal(totalExpense);
    setIncomeTotal(totalIncome);

  }, [entries])

  return (
    <div className="App">
      <Container>
        <MainHeader title='Budget' />

        <DisplayBalance size='small' label='Your Balance:' value={total} />

        <DisplayBalances totalExpense={expenseTotal} totalIncome={incomeTotal} />

        <MainHeader title='History' type='h3' />

        <EntryLines entries={entries} />

        < MainHeader title='Add new trasaction' type='h3' />

        <NewEntryForm />

        <ModelEdit isOpen={isOpen} {...modalEntry} />

      </Container>
    </div>
  );
}

export default App;