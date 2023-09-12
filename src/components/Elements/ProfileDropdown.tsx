import React, { useState } from 'react';

import clsx from 'clsx';
import { Dropdown } from 'react-bootstrap';

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


interface ProfileMenuItem {
  label: string;
  icon: IconProp;
  redirectTo: string;
}

interface ProfileDropdownProps {
  menuItems: Array<ProfileMenuItem>;
  profilePic?: string;
  username: string;
}

export const ProfileDropdown = (props: ProfileDropdownProps) => {
  const profilePic = props.profilePic || null;
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /*
   * toggle profile dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle
        id="dropdown-profile"
        as="a"
        onClick={toggleDropdown}
        className={clsx('nav-link', 'nav-user', 'me-0', 'cursor-pointer', { show: dropdownOpen })}
      >
        <img src={profilePic!} className="rounded-circle" alt="" />
        <span className="pro-user-name ms-2">
          {props.username} <FontAwesomeIcon icon={faAngleDown} size='1x' />
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-end profile-dropdown">
        <div onClick={toggleDropdown}>
          <div className="dropdown-header noti-title">
            <h6 className="text-overflow m-0">Welcome !</h6>
          </div>
          {(props.menuItems || []).map((item, i) => {
            return (
              <React.Fragment key={i}>
                {i === props.menuItems.length - 1 && <div className="dropdown-divider"></div>}
                <Link
                  to={item.redirectTo}
                  className="dropdown-item notify-item"
                  key={i + '-profile-menu'}>
                  <FontAwesomeIcon icon={item.icon} className="me-1" />
                  <span>{item.label}</span>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}