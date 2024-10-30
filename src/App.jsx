import './App.css'
import Footer from './components/footer/Footer';
import FloatingActionButton from './components/FloatingActionButton/FloatingActionButton';
import Header from './components/header/Header';
import GroceryContextProvider from './context/GroceryContextProvider';
import GroceryList from './components/groceryList/GroceryList';

function App() {

  return (
    <GroceryContextProvider>
      <Header>Grocery<br/>List</Header>
      <GroceryList />
      <FloatingActionButton />
      <Footer />
    </GroceryContextProvider>
  )
}

export default App
