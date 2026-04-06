import { useState } from 'react'
import './App.css'
import UseStateExample from './useState/UseStateExample'
import UseEffectExample from './useEffect/UseEffectExample'
import UseMemoExample from './useMemo/UseMemoExample'
import UseRefExample from './useRef/UseRefExample'
import UseContextExample from './useContext/UseContextExample'
import UseReducerExample from './useReducer/UseReducerExample'
import UseLayoutEffectExample from './useLayoutEffect/UseLayoutEffectExample'
import UseImperativeHandleExample from './useImperativeHandle/UseImperativeHandleExample'
import Xcallback from './useCallback/Xcallback'

function App() {
  const [activeTab, setActiveTab] = useState('useState')

  const tabs = [
    { id: 'useState', label: 'useState', component: UseStateExample },
    { id: 'useEffect', label: 'useEffect', component: UseEffectExample },
    { id: 'useMemo', label: 'useMemo', component: UseMemoExample },
    { id: 'useRef', label: 'useRef', component: UseRefExample },
    { id: 'useContext', label: 'useContext', component: UseContextExample },
    { id: 'useReducer', label: 'useReducer', component: UseReducerExample },
    { id: 'useCallback', label: 'useCallback', component: Xcallback },
    { id: 'useLayoutEffect', label: 'useLayoutEffect', component: UseLayoutEffectExample },
    { id: 'useImperativeHandle', label: 'useImperativeHandle', component: UseImperativeHandleExample },
  ]

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component

  return (
    <div className="app">
      <h1>React Hooks Testing</h1>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  )
}

export default App
