import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../../context/ThemeContext'
import {useContext} from 'react'

const Header = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);

  return (
    <header className="fixed flex flex-row justify-between items-center w-full px-4 py-6 bg-skin-fill z-50 dark:bg-skin-dark-fill text-skin-inverted dark:text-skin-dark-base">
      <div className='text-5xl'>Groceries</div>
      <div className="cursor-pointer">
        {isDark ? <span onClick={() => setIsDark(false)}><FontAwesomeIcon icon={faMoon} size="xl" /></span> :
        <span onClick={() => setIsDark(true)}><FontAwesomeIcon icon={faSun} size="xl" /></span>}
      </div>
    </header>
  )
}

export default Header