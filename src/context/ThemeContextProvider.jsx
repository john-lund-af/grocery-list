import ThemeContext from "./ThemeContext";
import PropTypes from 'prop-types';
import {useState} from 'react';

function ThemeContextProvider({children}) {
  const [isDark, setIsDark] = useState(false);

  return <ThemeContext.Provider value={{isDark, setIsDark}}>{children}</ThemeContext.Provider>
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node
}

export default ThemeContextProvider;
