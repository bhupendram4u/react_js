import { ThemeProvider, useTheme } from './ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{
      padding: '20px',
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      border: '1px solid #ccc'
    }}>
      <h3>Current Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const UseContextExample = () => {
  return (
    <ThemeProvider>
      <div>
        <h2>useContext Hook Example</h2>
        <ThemedComponent />
        <ThemedComponent />
        <p>Both components share the same theme state via Context</p>
      </div>
    </ThemeProvider>
  );
};

export default UseContextExample;