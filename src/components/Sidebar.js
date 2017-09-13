import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <sidebar className='sidebar'>
    <nav>
      <div className='brand'>
        <Link to='/'>
          <i className='fa fa-paw' />
        </Link>
      </div>
      <ul>
        <li>
          <Link to='/farmers' className='sideNav_link'>
            <i className="fa fa-user"></i>
          </Link>
        </li>
      </ul>
    </nav>
  </sidebar>
)

export default Sidebar;
