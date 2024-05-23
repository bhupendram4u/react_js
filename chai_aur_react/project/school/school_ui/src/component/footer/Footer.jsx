import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';



export default function Footer() {
  useEffect(() => {
    console.log('MyComponent rendered');
  }, []);
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
        <ul>
          <li>
            <NavLink
              to="/Home"
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              About
            </NavLink>
          </li>

        </ul>


      </div>
    </footer>
  )
}
