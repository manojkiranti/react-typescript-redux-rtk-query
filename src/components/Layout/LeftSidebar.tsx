import { useEffect, useRef } from "react";
import { Scrollbar } from "../Elements";
import { AppMenu } from "./Menu";
import { getMenuItems } from "@/utils";

const SideBarContent = () => {
  return (
    <>

      <div id="sidebar-menu">
        <AppMenu menuItems={getMenuItems()} />
      </div>

      <div className="clearfix" />
    </>
  );
};


interface LeftSidebarProps {
  isCondensed: boolean;
}
export const LeftSidebar = ({ isCondensed }: LeftSidebarProps) => {
  const menuNodeRef = useRef<any>(null)

  /**
     * Handle the click anywhere in doc
     */
  const handleOtherClick = (e: any) => {
    if (menuNodeRef && menuNodeRef.current && menuNodeRef.current.contains(e.target)) return;
    // else hide the menubar
    if (document.body) {
      document.body.classList.remove('sidebar-enable');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOtherClick, false);

    return () => {
      document.removeEventListener('mousedown', handleOtherClick, false);
    };
  }, []);

  return (
    <>
      <div className="left-side-menu" ref={menuNodeRef}>
        {!isCondensed && (
          <Scrollbar style={{ maxHeight: '100%' }} scrollbarMaxSize={320}>
            <SideBarContent />
          </Scrollbar>
        )}
        {isCondensed && <SideBarContent />}
      </div>
    </>
  )
}