import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData';

import './Navbar.css';
import { IconContext } from 'react-icons';

import { restrict, isAuthorised } from '../../service/AuthService';

function Navbar(props) {
  const { accessRight } = props
  const [data] = useState(SidebarData());

  const hideItemsOperator = ['Drivers']
  const hideItemsOwner = ['Users']

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
          {!isAuthorised(accessRight) &&
          <Link to='/login' className='logout-btn'>
            <AiIcons.AiOutlineLogin />
          </Link>}

          {isAuthorised(accessRight) &&
          <Link to='/profile' className='profile-btn'>
            <FaIcons.FaUser />
          </Link>}

          {isAuthorised(accessRight) &&
          <Link to='/logout' className='logout-btn'>
            <AiIcons.AiOutlineLogout />
          </Link>}
        </div>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;