import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import GroceryContextProvider from './context/GroceryContextProvider';
import GroceryList from './components/groceryList/GroceryList';
import ThemeContext from './context/ThemeContext';
import {useContext} from 'react';

function App() {
  const {isDark} = useContext(ThemeContext);

  return (
    <GroceryContextProvider>
      <div className={isDark ? 'dark' : ''}>
        <main className="bg-skin-secondary dark:bg-skin-dark-secondary">
          <Header />
          <GroceryList />
          <Footer />
        </main>
      </div>
    </GroceryContextProvider>
  )
}

export default App
