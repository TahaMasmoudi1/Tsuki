import { FacebookFilled, GoogleOutlined, TwitterOutlined } from '@ant-design/icons'
import './login.css'
import{Button, Divider, Form ,Input, Typography,message} from 'antd'
function Connexion(){
    const login=()=>{
     message.success('Login Successful!')
    }
    return(
        
         <Form className='login' onFinish={login}>
          <div className='loginform'>
            <Typography.Title style={{fontFamily:"bonzai",display:"flex",justifyContent:"center"}}>Welcome</Typography.Title>
          <Form.Item label="Email"name={"myEmail"} rules={[{required:true,type:"email",message:"Please enter valid email"}]}>
            <Input placeholder="Enter your email"/>
          </Form.Item>
          <Form.Item style={{textDecoration: "none"}} label="Password"name={"myPassword"} rules={[{ required:true,message:"Please enter your password" }]}>
            <Input.Password placeholder="Enter your password"/>
          </Form.Item>
          <Button type='primary' htmlType='submit' block>Login</Button>
          <Divider style={{borderColor:"black"}}>or Login with</Divider>
          <div className='social'>
            <GoogleOutlined style={{color:"red" ,cursor:"pointer"}} onClick={login}/>
            <FacebookFilled style={{color:"blue" ,cursor:"pointer"}}  onClick={login}/>
            <TwitterOutlined style={{color:"cyan" ,cursor:"pointer"}}  onClick={login}/>
          </div>
          </div>
         </Form>
        
        
    )
}
export default Connexion