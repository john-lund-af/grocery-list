import PropTypes from 'prop-types';

const Header = ({children}) => {
  return (
    <header className="bg-skin-fill">
      <div className='text-skin-inverted text-center text-5xl py-6 leading-12'>{children}
      </div>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired
}

export default Header