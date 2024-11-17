import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import GroceryContextProvider from './context/GroceryContextProvider';
import GroceryList from './components/groceryList/GroceryList';

function App() {

  return (
    <GroceryContextProvider>
      <div className="dark">
        <main className="bg-skin-secondary dark:bg-skin-dark-secondary">
          <Header>Grocery<br/>List</Header>
          <GroceryList />
          <Footer />
        </main>
      </div>
    </GroceryContextProvider>
  )
}

export default App
