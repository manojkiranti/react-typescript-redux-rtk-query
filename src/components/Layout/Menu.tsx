import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

//utils
import { findAllParent, findMenuItem } from "@/utils";

//constant
import { MenuItemTypes } from "@/constant";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "react-bootstrap";
/**
 * Renders the application menu
 */
interface AppMenuProps {
  menuItems: MenuItemTypes[];
}

interface SubMenus {
  item: MenuItemTypes;
  linkClassName?: string;
  subMenuClassNames?: string;
  activeMenuItems?: Array<string>;
  toggleMenu?: (item: any, status: boolean) => void;
  className?: string;
}

const MenuItemWithChildren = ({ item, linkClassName, subMenuClassNames, activeMenuItems, toggleMenu }: SubMenus) => {
  const [open, setOpen] = useState<boolean>(activeMenuItems!.includes(item.key));

  useEffect(() => {
    setOpen(activeMenuItems!.includes(item.key));
  }, [activeMenuItems, item]);

  const toggleMenuItem = (e: any) => {
    e.preventDefault();
    const status = !open;
    setOpen(status);
    if (toggleMenu) toggleMenu(item, status);
    return false;
  };

  return (
    <li className={clsx({ 'menuitem-active': open })}>
      <Link
        to="#"
        onClick={toggleMenuItem}
        data-menu-key={item.key}
        aria-expanded={open}
        className={clsx('side-sub-nav-link', linkClassName, {
          'menuitem-active': activeMenuItems!.includes(item.key) ? 'active' : '',
        })}>
        {item.icon && <FontAwesomeIcon icon={item.icon} />}
        {!item.badge ? (
          <span className="menu-arrow"></span>
        ) : (
          <span className={`badge bg-${item.badge.variant} float-end`}>{item.badge.text}</span>
        )}
        <span> {item.label} </span>
      </Link>
      <Collapse in={open}>
        <div>
          <ul className={clsx(subMenuClassNames)}>
            {(item.children || []).map((child, i) => {
              return (
                <React.Fragment key={i}>
                  {child.children ? (
                    <>
                      {/* parent */}
                      <MenuItemWithChildren
                        item={child}
                        linkClassName={activeMenuItems!.includes(child.key) ? 'active' : ''}
                        activeMenuItems={activeMenuItems}
                        subMenuClassNames="side-nav-third-level"
                        toggleMenu={toggleMenu}
                      />
                    </>
                  ) : (
                    <>
                      {/* child */}
                      <MenuItem
                        item={child}
                        className={
                          activeMenuItems!.includes(child.key) ? 'menuitem-active' : ''
                        }
                        linkClassName={activeMenuItems!.includes(child.key) ? 'active' : ''}
                      />
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </Collapse>
    </li>
  );
};

const MenuItem = ({ item, className, linkClassName }: SubMenus) => {
  return (
    <li className={clsx('side-nav-item', className)}>
      <MenuItemLink item={item} className={linkClassName} />
    </li>
  );
};

const MenuItemLink = ({ item, className }: SubMenus) => {
  return (
    <Link
      to={item.url!}
      target={item.target}
      className={clsx('side-nav-link-ref', className)}
      data-menu-key={item.key}>
      {item.icon && <FontAwesomeIcon icon={item.icon} />}
      {item.badge && <span className={`badge bg-${item.badge.variant} float-end`}>{item.badge.text}</span>}
      <span> {item.label} </span>
    </Link>
  );
};

export const AppMenu = ({ menuItems }: AppMenuProps) => {
  const location = useLocation();
  const menuRef = useRef<any>(null);
  const [activeMenuItems, setActiveMenuItems] = useState<Array<string>>([]);
  /*
  * toggle the menus
  */
  const toggleMenu = (menuItem: MenuItemTypes, show: boolean) => {
    if (show) setActiveMenuItems([menuItem['key'], ...findAllParent(menuItems, menuItem)]);
  };

  /**
  * activate the menuitems
  */
  const activeMenu = useCallback(() => {
    const div = document.getElementById('side-menu');
    let matchingMenuItem = null;
    if (div) {
      const items: any = div.getElementsByClassName('side-nav-link-ref');
      for (let i = 0; i < items.length; ++i) {
        if (location.pathname === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }

      if (matchingMenuItem) {
        const mid = matchingMenuItem.getAttribute('data-menu-key');
        const activeMt = findMenuItem(menuItems, mid);
        if (activeMt) {
          setActiveMenuItems([activeMt['key'], ...findAllParent(menuItems, activeMt)]);
        }
      }
    }
  }, [location, menuItems])

  useEffect(() => {
    activeMenu();
  }, [activeMenu]);

  return (
    <>
      <ul className="side-menu" ref={menuRef} id="side-menu">
        {(menuItems || []).map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              {item.isTitle ? (
                <li
                  className={clsx('menu-title', {
                    'mt-2': idx !== 0,
                  })}>
                  {item.label}
                </li>
              ) : (
                <>
                  {item.children ? (
                    <MenuItemWithChildren
                      item={item}
                      toggleMenu={toggleMenu}
                      subMenuClassNames="nav-second-level"
                      activeMenuItems={activeMenuItems}
                    />
                  ) : (
                    <MenuItem
                      item={item}
                      className={activeMenuItems!.includes(item.key) ? 'menuitem-active' : ''}
                    />
                  )}
                </>
              )}
            </React.Fragment>
          )
        })}
      </ul>
    </>
  )
}