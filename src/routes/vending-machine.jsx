import { Link } from "react-router-dom";
import './vending-machine.css';

export default function VendingMachine() {
  return (
    <div className='vending-machine'>
      <div className='vending-machine-msg'>
        HELLO. I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</div>
      <nav className='vending-machine-options'>
        <ul>
          <li>
            <Link to='/soda'>SODA</Link>
          </li>
          <li>
            <Link to='/chips'>CHIPS</Link>
          </li>
          <li>
            <Link to='/fresh-sardines'>FRESH SARDINES</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};