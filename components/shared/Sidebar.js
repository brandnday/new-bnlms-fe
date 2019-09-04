import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'next/link'
import { sidebarMenu } from '../../constant/menu'
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
export default class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    return (

      <Sider collapsed={this.props.collapsed} >
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          {sidebarMenu.map((menu, indexA) => (
            menu.isDropdown ?
              <SubMenu
                key={`sidebar${indexA}`}
                title={
                  <span>
                    <Icon type={menu.icon} />
                    <span>User</span>
                  </span>
                }
              >
                {menu.children.map((childmenu, indexB) => (
                  <Menu.Item
                    key={`sidebar${indexA}-${indexB}`}>
                    <Icon type={childmenu.icon} />
                    <span>{childmenu.linkName}</span>
                    <Link href={`/${childmenu.linkAddress}`}><a><span>{childmenu.linkName}</span></a></Link>
                  </Menu.Item>))
                }
              </SubMenu> : <Menu.Item key={`key${indexA}`}>
                <Icon type={menu.icon} />
                <span>{menu.linkName}</span>
                <Link href={`/${menu.linkAddress}`}><a><span>{menu.linkName}</span></a></Link>
              </Menu.Item>))}
        </Menu>
      </Sider>
    )
  }
}