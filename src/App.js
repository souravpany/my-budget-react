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

function App() {

  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();

  const [entries, setEntries] = useState(initialEntries);

  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);



  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

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

  function addEntry(description, value, isExpense) {
    if (description.length === 0 && value.length === 0) {
      return;
    }

    const result = entries.concat({ id: entries.length + 1, description, value, isExpense });
    setEntries(result);
    resetEntry();
  }

  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result);
  }

  function editEntry(id) {
    if (id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index];
      setEntryId(id)
      setDescription(entry.description);
      setIsExpense(entry.isExpense);
      setValue(entry.value);
      setIsOpen(true);
      console.log(`Edit entry with id ${id}`);
    }
  }

  function resetEntry() {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  return (
    <div className="App">
      <Container>
        <MainHeader title='Budget' />

        <DisplayBalance size='small' label='Your Balance:' value={total} />

        <DisplayBalances totalExpense={expenseTotal} totalIncome={incomeTotal} />

        <MainHeader title='History' type='h3' />

        <EntryLines
          entries={entries}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />

        < MainHeader title='Add new trasaction' type='h3' />

        <NewEntryForm addEntry={addEntry}
          resetEntry={resetEntry}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense} />

        <ModelEdit
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense} />

      </Container>
    </div>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "1000",
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: "20",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "300",
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: "50",
    isExpense: true
  },
]
