import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <sidebar className='sidebar'>
    <nav>
      <div className='brand'>
        <Link to='/'>
            <i className='fa fa-paw fa-3x' />
            <span className="icon-text">paw</span>
        </Link>
      </div>
      <ul>
        <li className='user'>
          <Link to='/farmers' className='sideNav_link'>
            <i className="fa fa-user fa-3x" />
            <span className="icon-text">paw</span>
          </Link>
        </li>
        <li className='user'>
          <Link to='' className='sideNav_link'>
            <i className="fa fa-user fa-3x"></i>
            <span className="icon-text">paw</span>
          </Link>
        </li>
        <li className='user'>
          <Link to='' className='sideNav_link'>
            <i className="fa fa-user fa-3x"></i>
            <span className="icon-text">paw</span>
          </Link>
        </li>
        <li className='user'>
          <Link to='' className='sideNav_link'>
            <i className="fa fa-user fa-3x"></i>
            <span className="icon-text">paw</span>
          </Link>
        </li>
      </ul>
    </nav>
  </sidebar>
)

export default Sidebar;
