
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './component/layout/Layout.jsx'
import About from './component/about/About.jsx';
import Home from './component/home/Home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}> {/* Layout component for common layout */}
         
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About/:id" element={<About />} />
          
        </Route>
      </Routes>
    </Router>
  );

}

export default App
