import PropTypes from 'prop-types';

const Header = ({children}) => {
  return (
    <header className="fixed w-full bg-skin-fill z-50 dark:bg-skin-dark-fill">
      <div className='text-skin-inverted dark:text-skin-dark-base text-center text-5xl py-6'>{children}
      </div>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired
}

export default Header