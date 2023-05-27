import './navbar.css'
import ReactDOM, { useEffect }  from 'react';
import 'antd/dist/reset.css';
import React, { useState } from 'react';
import { Menu, Space,Modal } from 'antd';
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
import { Drawer, Table } from "antd"
import {Image} from "antd"
import Stickers from './Stickers';
import Accessoires from './friendshipBracelet'
import Tshirt from './tshirts'
import Hoodie from './hoodies'
import { BrowserRouter as Switch,Router,Route,Routes,useNavigate ,Link} from "react-router-dom"
import Account from './account';
import Home from './home';
import {  GoogleOutlined, TwitterOutlined } from '@ant-design/icons'
import './login.css'
import{ Divider, Form , Typography,message} from 'antd'
import { DisabledContextProvider } from 'antd/es/config-provider/DisabledContext';
import Products from './product';
import FriendshipBracelet from "./friendshipBracelet"

const { Search } = Input;
function Navbar(){
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open,setModal2Open]=useState(false)
  const [modal3Open, setModal3Open] = useState(false);

  const handleOpen=(e)=>{
         setModal1Open(true)
         e.preventDefault();
  }

  const handleCancel = (event) => {
    setModal1Open(false)
    event.preventDefault();
  }
  const login=()=>{
    message.success('Login Successful!')
    setModal1Open(false)
    }
    
    const handleCancel2 = (event) => {
      setModal2Open(false)
      event.preventDefault();
    }
    const openModal3=()=>{
      setModal3Open(true)
      
}
const closemodal3=(e)=>{
  setModal3Open(false)
}
const SignUp =()=>{
 setModal3Open(false)
 message.success('Account Aded Successfully!')

}


  window.addEventListener("scroll",function(){
    var header = document.querySelector("header")
  header.classList.toggle("sticky",window.scrollY>0) })
  function Menu1(){
    return(

      <Space >
        <Menu className='menu'
        mode="horizontal"
         items={[
          
          {   icon:<img src={logo} className='logo'/>, key:"/home" },
          
         
          {label: <span className='menu-label'> Clothes</span> ,key:"clothes",icon:<SkinTwoTone/>,children:[
            {label:<span><Link to="/tshirt"></Link>T-shirts</span>,key:"/tshirt"},
            {label:<span><Link to="/hoodie"></Link>Hoodies</span>,key:"/hoodie"}
          ]},
          {label:
          <span className='menu-label'>
            Accessoires
            </span>
            ,key:"/accessoires"
            , icon:<ShoppingTwoTone  />,children:[
              {label:<span><Link to="/friendship-bracelet"></Link>Friendship Bracelet</span>},
              {label:<span><Link to="/jewelry"></Link>Jewelry</span>}

            ]},
          {
            label:<span className='menu-label'> <Link to="/stickers"></Link> Stickers</span>,key:"/stickers"
            ,icon:<SmileTwoTone/>
          },
          {
            label:(<Search placeholder="Search Here ..."  enterButton className='searchbar'/>),
            key:"search"
          },
          {
            icon:<div> <HeartFilled/></div>,key:"/wish"
          },
          {
            icon: <div  onClick={()=>setModal2Open(true)}  ><ShoppingCartOutlined className='shop'  ></ShoppingCartOutlined></div>,
            key:"/shop"
          },
          {
            icon:<UserOutlined  style={{}} />,children:[ 
            {label:<Button > <Link to="/account"></Link> My Account</Button> , },
            {label: <Button onClick={openModal3}> Sign up</Button> , },
            {label:<Button onClick={handleOpen} type="primary" >Connexion</Button>, },
          ]
          }]}>
           
           
        </Menu>
        <Modal  style={{top:"150px"}}
        key={DisabledContextProvider}
        open={modal1Open }
         footer={null} 
         onCancel={handleCancel}
       
      >
         <div className='login'>
          <div className='loginform'>
          <Form hideRequiredMark onFinish={login}>
            <Typography.Title style={{ color:"black",fontFamily:"bonzai",display:"flex",justifyContent:"center"}}><span>Welcome To Tsuki</span></Typography.Title>
          <Form.Item style={{textDecoration:"none"}} className='email'  label={<span style={{color:"black" ,fontFamily:"bonzai",fontSize:"35px" ,marginRight:"-6px",marginTop:"-9px"}}>Email:</span>} name={"myEmail"} rules={[{required:true,type:"email",message:"Please enter valid email"}]}>
            <Input placeholder="Enter your email"/>
          </Form.Item>
          <Form.Item style={{fontFamily:"bonzai"}} label={<div style={{textDecoration:"none",color:"black" ,fontFamily:"bonzai",fontSize:"35px",marginRight:"-6px",marginTop:"-9px"}}>Password:</div>} name={"myPassword"} rules={[{ required:true ,message:"Please enter your password" }]}>
            <Input.Password placeholder="Enter your password"/>
          </Form.Item>
          <Button   type='primary' htmlType='submit' block><span style={{fontFamily:"bonzai",fontSize:"25px" ,marginTop:"-9px"}}>Login</span></Button>
          <Divider style={{borderColor:"black"}}><span style={{ fontSize:"30px",fontFamily:"bonzai" ,color:"black"}}>or Login with</span></Divider>
          <div className='social'>
            <GoogleOutlined style={{color:"red" ,cursor:"pointer"}} onClick={login}/>
            <FacebookFilled style={{color:"blue" ,cursor:"pointer"}}  onClick={login}/>
            <TwitterOutlined style={{color:"cyan" ,cursor:"pointer"}}  onClick={login}/>
          </div>
          </Form>
          </div>
          </div>
      </Modal>

      <Modal key={DisabledContextProvider} footer={null}  onCancel={closemodal3} open={modal3Open} >
   <div className='signup-div'> 
   <div className='div-form'>
    <Form hideRequiredMark onFinish={SignUp}> 
    <Typography.Title style={{ color:"black",fontFamily:"bonzai",display:"flex",justifyContent:"center"}}><span>Welcome To Tsuki</span></Typography.Title>
    <Form.Item  className='email'  label={<span style={{color:"black" ,fontFamily:"bonzai",fontSize:"35px" ,marginRight:"-6px",marginTop:"-9px"}}>Username:</span>} name={"myName"} rules={[{required:true,message:"Please enter Your Name"}]}>
            <Input placeholder="Enter your Name"/>
          </Form.Item>
    <Form.Item  className='email'  label={<span style={{color:"black" ,fontFamily:"bonzai",fontSize:"35px" ,marginRight:"-6px",marginTop:"-9px"}}>Email:</span>} name={"myEmail"} rules={[{required:true,type:"email",message:"Please enter valid email"}]}>
            <Input placeholder="Enter your Email"/>
          </Form.Item>
          <Form.Item style={{fontFamily:"bonzai"}} label={<div style={{textDecoration:"none",color:"black" ,fontFamily:"bonzai",fontSize:"35px",marginRight:"-6px",marginTop:"-9px"}}>Password:</div>} name={"myPassword"} rules={[{ required:true ,message:"Please enter your password" }]}>
            <Input.Password placeholder="Enter your Password"/>
          </Form.Item>
          <Button className='signUp-button' type='primary' htmlType='submit' block><span className='sign-up-span' >Sign Up</span></Button>
          <Divider style={{borderColor:"black"}}><span style={{ fontSize:"30px",fontFamily:"bonzai" ,color:"black"}}>or Login with</span></Divider>
          <div className='social'>
            <GoogleOutlined style={{color:"red" ,cursor:"pointer"}} onClick={login}/>
            <FacebookFilled style={{color:"blue" ,cursor:"pointer"}}  onClick={login}/>
            <TwitterOutlined style={{color:"cyan" ,cursor:"pointer"}}  onClick={login}/>
          </div>

    </Form>
    </div>
   </div>

</Modal>
        
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
           <Route path="/home" element={<Home/>} ></Route>
         <Route path="/account" element={<Account/>} ></Route>
         <Route path="/stickers"element={<Stickers/>}></Route>
          <Route path="/hoodie" element={<Hoodie/>}></Route>
          <Route path="/tshirt" element={<Tshirt/>}></Route>
          <Route path="/friendship-bracelet" element={<FriendshipBracelet/>}></Route>
          </Routes>
          
          
      )
      
    }
    
    
}
export default Navbar;
