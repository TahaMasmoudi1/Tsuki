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
import Accessoires from './Accesoiries'
import Tshirt from './tshirts'
import Hoodie from './hoodies'
import { BrowserRouter as Switch,Router,Route,Routes,useNavigate ,Link} from "react-router-dom"
import Account from './account';
import Coupon from './coupon';
import Order from './order';
import Home from './home';
import Signup from './signup';
import Cardpage from './card-page';
import {  GoogleOutlined, TwitterOutlined } from '@ant-design/icons'
import './login.css'
import{ Divider, Form , Typography,message} from 'antd'
import { DisabledContextProvider } from 'antd/es/config-provider/DisabledContext';

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
            <Link to="/accesoires"></Link>
            Accessoires
            </span>
            ,key:"/accessoires"
            , icon:<ShoppingTwoTone  />},
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
            {label:"My Account" ,key:"/account"},
            {label: <Button    > Sign up</Button> , },
            {label:<Button onClick={handleOpen} type="primary" >Connexion</Button>, },
            {label:<hr></hr>},
            {label:"My Orders" ,key:"/orders"},
            {label:"My Coupons" ,key:"/coupons"}]
          }]}>
           
           
        </Menu>
        <Wish></Wish>
        <Modal  style={{top:"150px"}}
        key={DisabledContextProvider}
        open={modal1Open }
         footer={null} 
         onCancel={handleCancel}
       
      >
         <div className='login'>
          <div className='loginform'>
          <Form hideRequiredMark onFinish={login}>
            <Typography.Title style={{ color:"white",fontFamily:"bonzai",display:"flex",justifyContent:"center"}}><span>Welcome</span></Typography.Title>
          <Form.Item style={{textDecoration:"none"}} className='email'  label={<span style={{color:"white" ,fontFamily:"bonzai",fontSize:"35px" ,marginRight:"-6px",marginTop:"-9px"}}>Email:</span>} name={"myEmail"} rules={[{required:true,type:"email",message:"Please enter valid email"}]}>
            <Input placeholder="Enter your email"/>
          </Form.Item>
          <Form.Item style={{fontFamily:"bonzai"}} label={<div style={{textDecoration:"none",color:"white" ,fontFamily:"bonzai",fontSize:"35px",marginRight:"-6px",marginTop:"-9px"}}>Password:</div>} name={"myPassword"} rules={[{ required:true ,message:"Please enter your password" }]}>
            <Input.Password placeholder="Enter your password"/>
          </Form.Item>
          <Button type='primary' htmlType='submit' block>Login</Button>
          <Divider style={{borderColor:"white"}}><span style={{ fontSize:"30px",fontFamily:"bonzai" ,color:"white"}}>or Login with</span></Divider>
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




const  Wish=()=>{
    const[items ,setItems]=useState([])
    const api_url="http://localhost:3000/products"
    const[fetchError,setFetcherror]=useState(null)

    useEffect(()=>{
        const Fetchitems=async()=>{
             try{
              const response= await fetch(api_url);
              if(!response.ok) throw Error("did not recived expected data")
              const listitems= await response.json();
              console.log(listitems)
              setItems(listitems);
             setFetcherror(null)
             
        }catch(err){setFetcherror(err.message)}}
          
            (async()=> await Fetchitems())(); 
    }
   ,[] )
         
    const columns=[
        {
            id:"1",
            title:"Image",
            dataIndex:"image",
            render: theimageurl =><img style={{width:"70px",height:"90px"}} alt={theimageurl} src={theimageurl}/>
        },
        {
            id:"1",
            title:"Name",
            dataIndex:"title"
        },
        {
            id:"2",
            title:"Price",
            dataIndex:"price"
        },
        {
            id:"3",
            title:"Quantity",
            dataIndex:"stock"
        },
        {
            id:"4",
            title:"Action",
            dataindex:""
        }

    ]
         return(
        <div>
            <Drawer visible={true} style={{}} closable={true} onClose={handleCancel2} open={modal2Open}>
            
            <Table columns={columns}
            dataSource={items}>

            </Table>
            </Drawer>
        </div>)
    
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
                <Route path="/card-page" element={<Cardpage/>}/>

         <Route path="/sign-up" element={<Signup/>} ></Route>
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
