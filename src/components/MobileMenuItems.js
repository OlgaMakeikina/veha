import { useState } from "react";
import { Link } from "react-router-dom";
import MobileDropdown from "./MobileDropdown";

const MobileMenuItems = ({ items, depthLevel, showMenu, setShowMenu }) => {
  const [dropdown, setDropdown] = useState(false);

  const closeDropdown = () => {
    setDropdown(false);
    showMenu && setShowMenu(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  return (
    <li className="menu-items" onClick={closeDropdown}>
      {items.submenu ? (
        <>
          <div
            id="mobile_submenu_open_close"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}>
          <div id="list">
                <span>{items.title}</span>
          </div>
       
       <div>
          <button id="arrow-button" onClick={toggleDropdown}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </button>
       </div>
 
          </div>
          <MobileDropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url} onClick={closeDropdown}>
          {items.title}
        </Link>
      )}
    </li>
  );
};

export default MobileMenuItems;