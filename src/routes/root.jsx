import { Link, Outlet } from "react-router-dom";
import './root.css';

export default function Root() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-logo'>VM</div>
        <ul className='navbar-links'>
          <li>
            <Link to={'/vending-machine'}>Vending Machine</Link>
          </li>
          <li>
            <Link to={'/soda'}>Soda</Link>
          </li>
          <li>
            <Link to={'/chips'}>Chips</Link>
          </li>
          <li>
            <Link to={'/fresh-sardines'}>Fresh Sardines</Link>
          </li>
        </ul>
      </nav>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  )
}