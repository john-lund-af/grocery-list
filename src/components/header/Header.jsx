import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className="fixed flex flex-row justify-between items-center w-full px-4 py-6 bg-skin-fill z-50 dark:bg-skin-dark-fill text-skin-inverted dark:text-skin-dark-base">
      <div className='text-5xl'>Groceries</div>
      <div>
        <span><FontAwesomeIcon icon={faMoon} size="xl" /></span>
        <span><FontAwesomeIcon icon={faSun} size="xl" /></span>
      </div>
    </header>
  )
}

export default Header