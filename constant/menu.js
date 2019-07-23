
export const sidebarMenu = [
  {
    linkAddress: 'admin-manager',
    linkName: 'Admin Manager',
    isDropdown: false,
    icon: 'pie-chart'
  },
  {
    linkAddress: 'Option1',
    linkName: 'Option1',
    isDropdown: false,
    icon: 'pie-chart'
  },
  {
    linkname: 'Option2',
    isDropdown: true,
    icon: 'pie-chart',
    children: [{
      linkAddress: 'Option2',
      linkName: 'Option2a',
      icon: 'pie-chart',
      isDropdown: false
    }]
  }
]