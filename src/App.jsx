import { useState } from 'react';
import { ThemeContextProvider } from './context/ThemeContext';
import { SnackbarContextProvider } from './context/SnackbarContext';
import ToggleColorMode from './components/ToggleColorMode';
import NavBar from './components/NavBar';
import DrawerComponent from './components/DrawerComponent';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = (newOpen) => {
    setDrawerOpen(newOpen);
  };

  return (
    <ThemeContextProvider>
      <SnackbarContextProvider>
        <>
          <ToggleColorMode />
          <NavBar toggleDrawer={handleDrawerToggle} />
          <DrawerComponent openDrawer={drawerOpen} toggleDrawer={handleDrawerToggle} />
        </>
      </SnackbarContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
