import { ThemeContextProvider } from './context/ThemeContext';
import { SnackbarContextProvider } from './context/SnackbarContext';
import ToggleColorMode from './components/ToggleColorMode';

function App() {


  return (
    <ThemeContextProvider>
      <SnackbarContextProvider>
      <>
        <ToggleColorMode/>
        <h> sea of dice</h>
      </>
      </SnackbarContextProvider>
    </ThemeContextProvider>
  )
}

export default App
