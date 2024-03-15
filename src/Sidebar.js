import React from 'react'
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck, // Not used, but kept for reference
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, setOpenSidebar }) {
  const handleCloseSidebar = () => {
    setOpenSidebar(false); // Update state to close sidebar
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <span className="icon close_icon" title="Close Sidebar" onClick={handleCloseSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/product">
            <BsFillArchiveFill className="icon" /> Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/order">
            <BsFillGrid3X3GapFill className="icon" /> Orders
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
