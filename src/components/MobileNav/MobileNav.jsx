import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import '../../styles/_styles.scss';
import './_mobileNav.scss';

export default function MobileNav() {
  const user = useSelector((store) => store.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className={`dropdown-menu ${menuOpen ? 'open' : ''} jc-end`}>
        <MenuIcon
          fontSize="medium"
          className="dropdown-toggle"
          style={{ margin: `0.5em 0em 0em 0.5em` }}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <>
          <ul className="dropdown-list">
            <div>
              <div className="dropdown-list-icon-close">
                <CloseIcon
                  fontSize="xlarge"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              </div>
            </div>
            {user.id && (
              <>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/initial-intake">Add Device</Link>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
                <li>
                  <Link to="/devices">Reports</Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    onClick={() => dispatch({ type: 'LOGOUT' })}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </>
      </div>
    </>
  );
}
