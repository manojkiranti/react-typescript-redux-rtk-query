
//types
import { useState } from "react";
import { NotificationItem } from "../Layout/Topbar";

//components
import { Scrollbar } from "./";
import { Dropdown } from "react-bootstrap";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

// notifiaction continer styles
const notificationContainerStyle = {
  maxHeight: '230px',
  display: 'none',
};

const notificationShowContainerStyle = {
  maxHeight: '230px',
};

interface NotificationDropdownProps {
  notifications: Array<NotificationItem>;
}

interface NotificationContainerStyle {
  maxHeight?: string;
  display?: string;
}

export const NotificationDropdown = (props: NotificationDropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [notificationContentStyle, setNotificationContentStyles] =
    useState<NotificationContainerStyle>(notificationContainerStyle);

  /*
   * toggle notification-dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setNotificationContentStyles(
      notificationContentStyle === notificationContainerStyle
        ? notificationShowContainerStyle
        : notificationContainerStyle
    );
  };

  /*
   * get redirect url for notification items
   */
  const getRedirectUrl = (item: NotificationItem) => {
    return `/notification/${item.id}`;
  };

  return (
    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle
        id="dropdown-notification"
        as="a"
        onClick={toggleDropdown}
        className={clsx('nav-link', 'position-relative', 'cursor-pointer', {
          show: dropdownOpen,
        })}>
        <FontAwesomeIcon icon={faBell} size="lg" />
        <span className="badge bg-danger rounded-circle noti-icon-badge">6</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-end dropdown-lg">
        <div onClick={toggleDropdown}>
          <div className="dropdown-item noti-title">
            <h5 className="m-0">
              <span className="float-end">
                <Link to="#" className="text-dark">
                  <small>Clear All</small>
                </Link>
              </span>
              Notification
            </h5>
          </div>
          <Scrollbar className="noti-scroll" style={notificationContentStyle}>
            {(props.notifications || []).map((item, i) => {
              return (
                <Link
                  to={getRedirectUrl(item)}
                  className="dropdown-item notify-item border-bottom"
                  key={i + '-noti'}>
                  <>

                    <p className="notify-details">
                      {item.text} <small className="text-muted">{item.subText}</small>
                    </p>
                  </>
                </Link>
              );
            })}
          </Scrollbar>

          <Link to="/" className="dropdown-item text-center text-primary notify-item notify-all">
            View All <i className="fe-arrow-right"></i>
          </Link>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};