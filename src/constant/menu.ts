import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCalendar, faHome } from "@fortawesome/free-solid-svg-icons";

export interface MenuItemTypes {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: IconProp;
  url?: string;
  badge?: {
    variant: string;
    text: string;
  };
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
}
export const MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    isTitle: false,
    icon: faHome,
    badge: { variant: "success", text: "02" },
    url: "/app",
  },
  { key: "app", label: "Apps", isTitle: true },
  {
    key: "apps-calendar",
    label: "Calendar",
    isTitle: false,
    icon: faCalendar,
    url: "/apps/calendar",
  },
  {
    key: "apps-tasks",
    label: "Tasks",
    isTitle: false,
    icon: faCalendar,
    children: [
      {
        key: "task-list",
        label: "List",
        url: "/apps/tasks/list",
        parentKey: "apps-tasks",
      },
      {
        key: "task-kanban",
        label: "Kanban Board",
        url: "/apps/tasks/kanban",
        parentKey: "apps-tasks",
      },
    ],
  },
];
