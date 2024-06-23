import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/_styles.scss';
import './_mobileNav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutButton } from '../components';

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
          style={{ margin: `0.5em 0.75em 0em 0.5em` }}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <>
          <ul className="dropdown-list">
            <div className="test">
              <div className="dropdown-list-icon-close">
                <CloseIcon onClick={() => setMenuOpen(!menuOpen)} />
              </div>
            </div>
            {user.id && (
              <>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/info">Info Page</Link>
                </li>
                <li>
                  <Link onClick={() => dispatch({ type: 'LOGOUT' })}>
                    Logout{' '}
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