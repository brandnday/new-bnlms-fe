
export const sidebarMenu = [
  {
    linkAddress: 'dashboard',
    linkName: 'Dashboard',
    isDropdown: false,
    icon: 'home',
    owner: 'OPERATOR'
  },
  {
    linkAddress: 'admin-manager',
    linkName: 'Admin Manager',
    isDropdown: false,
    icon: 'team',
    owner: 'SADMIN'
  },
  {
    linkAddress: 'church-manager',
    linkName: 'Church Manager',
    isDropdown: false,
    icon: 'home',
    owner: 'SADMIN'
  },
  {
    linkAddress: 'attendance-manager',
    linkName: 'Attendance Manager',
    isDropdown: false,
    icon: 'check-square',
    owner: 'OPERATOR'
  },
  {
    linkAddress: 'children-manager',
    linkName: 'Children Manager',
    isDropdown: false,
    icon: 'user',
    owner: 'OPERATOR'
  },
  {
    linkAddress: 'service-manager',
    linkName: 'Service Manager',
    isDropdown: false,
    icon: 'user',
    owner: 'ADMIN'
  },
  {
    linkAddress: 'term-manager',
    linkName: 'Term Manager',
    isDropdown: false,
    icon: 'user',
    owner: 'ADMIN'
  },
  {
    linkAddress: 'report',
    linkName: 'Report',
    isDropdown: false,
    icon: 'file-text',
    owner: 'OPERATOR'
  },
  {
    linkAddress: 'notification',
    linkName: 'Notification Manager',
    isDropdown: false,
    icon: 'file-text',
    owner: 'SADMIN'
  },
  {
    linkAddress: 'logout',
    linkName: 'Log Out',
    isDropdown: false,
    icon: 'user',
    owner: 'OPERATOR'
  }
]


export const PRIVILEDGES = {
  SADMIN: ["SADMIN", "ADMIN", "OPERATOR"],
  ADMIN: ["OPERATOR", "ADMIN"],
  OPERATOR: ["OPERATOR"]
};