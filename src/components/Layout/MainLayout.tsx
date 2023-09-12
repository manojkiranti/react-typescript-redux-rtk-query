import { useEffect, useState } from "react";
import { Topbar } from "./Topbar";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { changeBodyAttribute } from "@/utils";
import { LayoutTypes, SideBarTypes } from "@/constant";
import { LeftSidebar } from "./LeftSidebar";
import Footer from "./Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  const dispatch = useAppDispatch();
  const { layoutWidth, menuPosition, leftSideBarTheme, leftSideBarType, topbarTheme, isOpenRightSideBar } = useAppSelector((state) => state.layout);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  /*
  default layout
  */
  useEffect(() => {
    changeBodyAttribute('data-layout-mode', LayoutTypes.LAYOUT_VERTICAL)
  }, []);

  useEffect(() => {
    changeBodyAttribute('data-layout-width', layoutWidth);
  }, [dispatch, layoutWidth]);

  useEffect(() => {
    changeBodyAttribute('data-layout-menu-position', menuPosition);
  }, [menuPosition]);

  useEffect(() => {
    changeBodyAttribute('data-sidebar-color', leftSideBarTheme);
  }, [leftSideBarTheme]);

  useEffect(() => {
    changeBodyAttribute('data-sidebar-size', leftSideBarType);
  }, [leftSideBarType]);

  useEffect(() => {
    changeBodyAttribute('data-topbar-color', topbarTheme);
  }, [topbarTheme]);

  const openMenu = () => {
    setIsMenuOpened((prevState) => !prevState);

    if (document.body) {
      if (isMenuOpened) {
        document.body.classList.remove('sidebar-enable');
      } else {
        document.body.classList.add('sidebar-enable');
      }
    }
  };
  const isCondensed: boolean = leftSideBarType === SideBarTypes.LEFT_SIDEBAR_TYPE_CONDENSED;
  return (
    <>
      <div id="wrapper">
        <Topbar openLeftMenuCallBack={openMenu} hideLogo={false} />
        <LeftSidebar isCondensed={isCondensed} />
        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              {children}
            </div>
          </div>
          <Footer />
        </div>

      </div>

    </>
  )
} 