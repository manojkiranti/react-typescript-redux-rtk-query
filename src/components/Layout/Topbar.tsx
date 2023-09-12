
import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

//actions


//store
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faPowerOff, faBars } from "@fortawesome/free-solid-svg-icons";

import { NotificationDropdown, ProfileDropdown, TopbarSearch } from "../Elements";
import { PROFILE_IMG, SideBarTypes } from "@/constant";
import { changeSidebarType } from "@/store/slices/layoutSlice";

export interface NotificationItem {
  id: number;
  text: string;
  subText: string;
  icon?: string;
  avatar?: string;
  bgColor?: string;
}

// get the notifications
const Notifications: NotificationItem[] = [
  {
    id: 1,
    text: 'Cristina Pride',
    subText: 'Hi, How are you? What about our next meeting',
  },
  {
    id: 2,
    text: 'Caleb Flakelar commented on Admin',
    subText: '1 min ago',
    bgColor: 'primary',
  },
  {
    id: 3,
    text: 'Karen Robinson',
    subText: 'Wow ! this admin looks good and awesome design',
  },
  {
    id: 4,
    text: 'New user registered.',
    subText: '5 hours ago',
    bgColor: 'warning',
  },
  {
    id: 5,
    text: 'Caleb Flakelar commented on Admin',
    subText: '1 min ago',
    bgColor: 'info',
  },
  {
    id: 6,
    text: 'Carlos Crouch liked Admin',
    subText: '13 days ago',
    bgColor: 'secondary',
  },
];

// get the profilemenu
const ProfileMenus = [
  {
    label: 'My Account',
    icon: faUser,
    redirectTo: '/',
  },
  {
    label: 'Lock Screen',
    icon: faLock,
    redirectTo: '/auth/lock-screen',
  },
  {
    label: 'Logout',
    icon: faPowerOff,
    redirectTo: '/auth/logout',
  },
];
type TopbarProps = {
  hideLogo?: boolean;
  navCssClasses?: string;
  openLeftMenuCallBack?: () => void;
  topbarDark?: boolean;
}
export const Topbar = ({ hideLogo, navCssClasses, openLeftMenuCallBack, }: TopbarProps) => {
  const { layoutType, leftSideBarType } = useAppSelector((state) => state.layout)
  const dispatch = useAppDispatch();
  const [isopen, setIsopen] = useState<boolean>(false);

  const navbarCssClasses: string = navCssClasses || '';
  const containerCssClasses: string = !hideLogo ? 'container-fluid' : '';

  /**
   * Toggle the leftmenu when having mobile screen
   */
  const handleLeftMenuCallBack = () => {

  }

  /**
   * Toggles the left sidebar width
   */
  const toggleLeftSidebarWidth = () => {
    if (leftSideBarType === 'default' || leftSideBarType === 'compact')
      dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED));
    if (leftSideBarType === 'condensed') dispatch(changeSidebarType(SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT));
  }
  return (
    <>
      <div className={`navbar-custom ${navbarCssClasses}`}>
        <div className={containerCssClasses}>
          {!hideLogo && (
            <div className="logo-box">
              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  SM
                </span>
                <span className="logo-lg">

                  Logo LG
                </span>
              </Link>
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  SM
                </span>
                <span className="logo-lg">

                  Logo LG
                </span>
              </Link>
            </div>
          )}
          <ul className="list-unstyled topnav-menu float-end mb-0">
            <li className="d-none d-lg-block">

              <TopbarSearch />
            </li>
            <li className="dropdown notification-list topbar-dropdown">
              <NotificationDropdown notifications={Notifications} />
            </li>
            <li className="dropdown notification-list topbar-dropdown">
              <ProfileDropdown profilePic={PROFILE_IMG} menuItems={ProfileMenus} username={'Ananya Pandey'} />
            </li>
          </ul>
          <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
              <button
                className="button-menu-mobile d-none d-lg-block"
                onClick={toggleLeftSidebarWidth}>
                <FontAwesomeIcon icon={faBars} />
                <i className="fe-menu"></i>
              </button>
            </li>

            <li>
              <button className="button-menu-mobile d-lg-none d-bolck" onClick={handleLeftMenuCallBack}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </li>

            {/* Mobile menu toggle (Horizontal Layout) */}
            <li>
              <Link
                to="#"
                className={clsx('navbar-toggle nav-link', {
                  open: isopen,
                })}
                onClick={handleLeftMenuCallBack}>
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}