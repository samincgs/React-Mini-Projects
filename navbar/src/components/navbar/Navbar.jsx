import { useState } from 'react';
import navbarLogo from '../../assets/navbarlogo.svg';
import { pageLinks, socialLinks } from '../../data.jsx';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={navbarLogo} alt='navbar logo' className='logo' />
        <button type='button' className='btn-link' onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>

      <div
        className={
          showLinks ? 'links-container show-container' : 'links-container'
        }
      >
        <ul className='links'>
          {pageLinks.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
