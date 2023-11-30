import { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../../data.jsx';
import logo from '../../assets/navbarlogo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <button type='button' className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div>
          <div
            className='links-container'
            style={{
              height: showLinks
                ? `${linksRef.current.getBoundingClientRect().height}px`
                : `0px`,
            }}
          >
            <ul className='links' ref={linksRef}>
              {links.map((link) => {
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
        <div className='social-container'>
          <ul className='social-icons'>
            {social.map((socialLinks) => {
              const { id, url, icon } = socialLinks;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
