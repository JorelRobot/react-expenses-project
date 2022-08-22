//import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  let expenses = [
    { title: 'Car Insurance', date: new Date(2021, 2, 28), amount: 294.67 },
    { title: 'New TV', date: new Date(2021, 8, 15), amount: 799.49 },
    { title: 'New Desk', date: new Date(2021, 11, 3), amount: 450 }
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses}/>
    </div>

    /*/
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    //*/
  );
}

export default App;
