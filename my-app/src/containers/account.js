import React from "react"
import Card from "antd/es/card/Card"
import { Avatar, Image, Typography, theme } from "antd"
import './account.css'
import { CodeSandboxOutlined, EnvironmentFilled, HeatMapOutlined, LaptopOutlined, LogoutOutlined, PhoneFilled, UserOutlined } from "@ant-design/icons"
import { MailOutlined, SettingOutlined,AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Orders from "./orders"
import Profile from "./profile"





function Account(){
     function getItem(label, key, icon, children, type) {
          return {
            key,
            icon,
            children,
            label,
            type,
          };
        }
     const items = [
          getItem('Profile', 'sub4', <UserOutlined /> ),
          getItem('Notifications', 'sub1', <MailOutlined />),
          getItem('Orders', 'sub2', <CodeSandboxOutlined />  ),
          getItem(<span style={{color:"red"}}>Logout</span>, 'sub3', <LogoutOutlined /> ,),

        ];
    return(
     <div className="account-container">
     <div className="dashbord">
     <div className="card-account">
         <Card className="account-card">
            
                <Avatar className="avatar"  src="https://hamedia.b-cdn.net/catalog/product/cache/1/small_image/440x/17f82f742ffe127f42dca9de82fb58b1/0/0/0029355_1.jpg" size={120}>
                </Avatar>
                <Typography.Title ><span className="card-title">Taha Masmoudi</span></Typography.Title>
                <Typography.Text>
                     <p id="order">Orders:</p>
                  <p id="phone"><PhoneFilled/> 44499654</p>
                  <p id="position"><EnvironmentFilled/> Avenue 2 Mars,Sfax,Tunisia</p>
                  <p id="mail"><MailOutlined/> masmouditaha63@gmail.com</p>
                  </Typography.Text>
         </Card>
         </div>,
         <div className="menu-account-div">
         <Menu className="menu-account"
         style={{
           width: 290,
         }}
         mode="vertical"
         items={items}
       />
       </div>
       </div>
       <div className="account-content" >
          <Profile/>
       </div>
       </div>
       
    )
}
export default Account