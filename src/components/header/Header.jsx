import PropTypes from 'prop-types';

const Header = ({children}) => {
  return (
    <header className="fixed w-full bg-skin-fill z-50">
      <div className='text-skin-inverted text-center text-5xl py-6'>{children}
      </div>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired
}

export default Header