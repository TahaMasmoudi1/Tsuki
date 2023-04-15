import './navbar.css'
import ReactDOM, { useEffect }  from 'react';
import 'antd/dist/reset.css';
import React, { useState } from 'react';
import { Menu, Space, } from 'antd';
import logo from './taha.png'
import { Input ,Button } from 'antd';
import {FacebookFilled } from '@ant-design/icons'
import{SkinTwoTone} from '@ant-design/icons'
import{SmileTwoTone} from '@ant-design/icons'
import {InstagramFilled } from '@ant-design/icons'
import {UserOutlined} from '@ant-design/icons'
import {ShoppingCartOutlined } from '@ant-design/icons'
import {HeartFilled} from '@ant-design/icons'
import {ShoppingTwoTone} from '@ant-design/icons'

import Stickers from './Stickers';
import Accessoires from './Accesoiries'
import Tshirt from './tshirts'
import Hoodie from './hoodies'
import {Route,Routes,useNavigate ,} from "react-router-dom"
import Account from './account';
import Coupon from './coupon';
import Order from './order';
import Wish from './wish';
import Shop from './shop';
import Home from './home';
import Connexion from './connexion';
import Signup from './signup';




const { Search } = Input;
function Navbar(){
  const navigate=useNavigate()


  window.addEventListener("scroll",function(){
    var header = document.querySelector("header")
  header.classList.toggle("sticky",window.scrollY>0) })
  function Menu1(){
    return(
      <Space style={{display:"flex-row",height:"100%",width:"100%"}}>
        <Menu 
       
        onClick={({key})=>
        navigate(key)
      }
        style={{ position:"sticky"  ,height:"100px", display:"flex",justifyContent:"space-between", alignItems:"center" ,backgroundColor:"white"}}
        mode="horizontal"
         items={[
          
          { icon:<img src={logo} style={{width:"auto",height:"100px" ,marginTop:"15px",flexGrow:"4"}} />,key:"/home" },
          
         
          {label: <span style={{fontSize:"28px",fontFamily:"bonzai"}}>Clothes</span> ,key:"clothes",icon:<SkinTwoTone/>,children:[
            {label:"T-shirts",key:"/tshirt"},
            {label:"Hoodies",key:"/hoodie"}
          ]},
          {label:<span style={{fontSize:"28px",fontFamily:"bonzai"}}>Accessoires</span>,key:"/accessoires", icon:<ShoppingTwoTone  />},
          {label:<span style={{fontSize:"28px",fontFamily:"bonzai"}}>Stickers</span>,key:"/stickers",icon:<SmileTwoTone/>},
          {label:(
            <Search placeholder="Search Here ..."  enterButton style={{marginTop:"8px",width:"400px"}} />

          ),key:"search"},
          
          
          {
            icon:<HeartFilled style={{padding:"-50px"}} />,key:"/wish"
          },
          {
            icon:<ShoppingCartOutlined style={{}}/>,
            key:"/shop"
          },
          {icon:
            <a style={{}}><FacebookFilled /></a>
          ,key:"facebook"},
          {icon:
            <a style={{}}><InstagramFilled /></a>
          ,key:"instagram"},
          {
            icon:<UserOutlined style={{}} />,children:[ 
            {label:"My Account" ,key:"/account"},
            {label: <Button  > Sign up</Button> , key:"/sign-up"},
            {label:<Button type="primary" >Connexion</Button>, key:"/connexion"},
            {label:<hr></hr>},
            {label:"My Orders" ,key:"/orders"},
            {label:"My Coupons" ,key:"/coupons"}]
          }]}>
           
            

        </Menu>
        
        </Space>
    )
    
  }
 
    return(
     
    
      <div > 

     <header style={{display:"flex",position:"", transition:"3s" , zIndex:"10000"}}>
      
         <Menu1/> 
      
     
        
      </header>
        
      <div style={{display:"flex" ,position:"",}}>
          <Content />
          </div>
        
          </div>
    
    
    
    
    
    )
    
    function Content () {
      return(
        <Routes>
          
          <Route path="/connexion" element={<Connexion/>} ></Route>
         <Route path="/sign-up" element={<Signup/>} ></Route>
         <Route path="/wish"element={<Wish/>} ></Route>
         <Route path="/shop" element={<Shop/>} ></Route>
         <Route path="/home" element={<Home/>} ></Route>
         <Route path="/orders" element={<Order/>} ></Route>
         <Route path="/coupons" element={<Coupon/>} ></Route>
         <Route path="/account" element={<Account/>} ></Route>
          <Route path="/stickers"element={<Stickers/>}></Route>
          <Route path="/hoodie" element={<Hoodie/>}></Route>
          <Route path="/tshirt" element={<Tshirt/>}></Route>
          <Route path="/accessoires" element={<Accessoires/>}></Route>

          </Routes>
      )
      
    }
    
}
export default Navbar;
