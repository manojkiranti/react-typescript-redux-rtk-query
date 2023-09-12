import {
  LayoutTypes,
  LayoutWidth,
  MenuPositions,
  SideBarTheme,
  SideBarTypes,
  TopbarTheme,
} from "@/constant";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialLayoutState = {
  layoutType: LayoutTypes.LAYOUT_VERTICAL,
  layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID,
  menuPosition: MenuPositions.MENU_POSITION_FIXED,
  leftSideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT,
  leftSideBarType: SideBarTypes.LEFT_SIDEBAR_TYPE_DEFAULT,
  topbarTheme: TopbarTheme.TOPBAR_THEME_LIGHT,
  isOpenRightSideBar: false,
};
const layoutSlice = createSlice({
  name: "layout",
  initialState: initialLayoutState,
  reducers: {
    changeSidebarType: (state, action: PayloadAction<SideBarTypes>) => {
      state.leftSideBarType = action.payload;
    },
  },
});

export const { changeSidebarType } = layoutSlice.actions;
export default layoutSlice.reducer;
