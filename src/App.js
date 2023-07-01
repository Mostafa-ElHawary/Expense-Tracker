import AddTransaction from './Component/AddTransaction';
import './Component/App.css'
import Balance from './Component/Balance';
import Header from './Component/Header';
import IncomeExpense from './Component/IncomeExpense';
import TransactionList from './Component/TransactionList';
import { GlobalProvider } from './Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header/> 
      <div className='container'>
        <Balance />
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}                 

export default App;
