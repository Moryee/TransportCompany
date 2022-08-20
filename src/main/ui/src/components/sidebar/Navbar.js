import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
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
        {data.map((item, index) => {
          if (hideItemsOperator.includes(item.title) && !restrict(accessRight, 'operator')) { return null }
          if (hideItemsOwner.includes(item.title) && !restrict(accessRight, 'owner')) { return null }
          return (
            <Link to={item.path} className={item.cname}>
              {/* {item.icon} */}
              {item.title.toUpperCase()}
            </Link>
          );
        })}
        <div className='profile'>
          <Link to='/profile' className='profile-btn'>
            <FaIcons.FaUser />
          </Link>
          <Link to='/logout' className='logout-btn'>
            <AiIcons.AiOutlineLogout />
          </Link>
        </div>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;