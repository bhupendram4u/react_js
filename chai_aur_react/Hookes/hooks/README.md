# React Hooks Testing Application

This application demonstrates various React hooks with interactive examples. Each hook has its own folder and component for easy testing and learning.

## Available Hooks

### 1. useState
- Location: `src/useState/UseStateExample.jsx`
- Demonstrates: Basic state management, counter, text input

### 2. useEffect
- Location: `src/useEffect/UseEffectExample.jsx`
- Demonstrates: Component lifecycle effects, API simulation, dependency arrays

### 3. useMemo
- Location: `src/useMemo/UseMemoExample.jsx`
- Demonstrates: Memoization of expensive calculations

### 4. useRef
- Location: `src/useRef/UseRefExample.jsx`
- Demonstrates: DOM manipulation, persistent values without re-renders

### 5. useContext
- Location: `src/useContext/`
- Demonstrates: Context API usage, theme switching
- Files: `ThemeContext.jsx`, `UseContextExample.jsx`

### 6. useReducer
- Location: `src/useReducer/UseReducerExample.jsx`
- Demonstrates: Complex state logic with actions

### 7. useCallback
- Location: `src/useCallback/`
- Demonstrates: Memoization of functions to prevent unnecessary re-renders
- Files: `Xcallback.jsx`, `ChildComponent.jsx`

### 8. useLayoutEffect
- Location: `src/useLayoutEffect/UseLayoutEffectExample.jsx`
- Demonstrates: Synchronous DOM measurements

### 9. useImperativeHandle
- Location: `src/useImperativeHandle/UseImperativeHandleExample.jsx`
- Demonstrates: Customizing ref exposed by forwardRef

## Features

- **Tabbed Interface**: Switch between different hook examples using tabs
- **Interactive Examples**: Each hook has practical, interactive demonstrations
- **Separate Folders**: Each hook is organized in its own folder for clarity
- **Console Logging**: Many examples include console logs to show when effects run

## Running the Application

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5174`

## How to Add New Hooks

1. Create a new folder in `src/` named after the hook (e.g., `useCustomHook`)
2. Create a component file (e.g., `UseCustomHookExample.jsx`)
3. Import and add the component to the `tabs` array in `App.jsx`
4. Update this README

## Learning Resources

Each example includes comments explaining the hook's behavior and best practices.
