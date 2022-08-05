import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, renderMatches } from 'react-router-dom';
import SidebarData from './SidebarData';

import './Navbar.css';
import { IconContext } from 'react-icons';

import { restrict } from '../../service/AuthService';

function Navbar(props) {
  const { accessRight } = props
  const [data] = useState(SidebarData());

  const hideItemsOperator = ['Foremans', 'Workers']
  const hideItemsOwner = ['Keys']

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className={'nav-menu'}>
        <div className='nav-profile'>
          <Link to='/profile' className='nav-profile-btn'>
            <FaIcons.FaUser />
            <span>Profile</span>
          </Link>
          <Link to='/logout' className='nav-logout'>
            <AiIcons.AiOutlineLogout />
          </Link>
        </div>
        <ul className='nav-menu-items'>
          {data.map((item, index) => {
            if (hideItemsOperator.includes(item.title) && !restrict(accessRight, 'operator')) { return null }
            if (hideItemsOwner.includes(item.title) && !restrict(accessRight, 'owner')) { return null }
            return (
              <li key={index} className={item.cname}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;