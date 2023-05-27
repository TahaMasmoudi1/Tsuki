import { Avatar, Form, Input, Typography } from "antd";
import React from "react";
import './profile.css'
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'





function Profile(){
  const [value, setValue] = useState()

   
return(
  
    <Form>
      <Avatar className="avatari"  src="https://hamedia.b-cdn.net/catalog/product/cache/1/small_image/440x/17f82f742ffe127f42dca9de82fb58b1/0/0/0029355_1.jpg" size={150}>
                </Avatar>
      <div className="div-form-profile">
        <div className="element-form ">
    <Typography className="titles-profile"><h5>FullName:</h5></Typography>
    <Form.Item
    className="email"
        name="name"
        
        rules={[
          {
            
            message: 'This Name is not avaible',
          },
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input placeholder="Input your Name" />
      </Form.Item>
      </div>
      <div className="element-form ">
    <Typography className="titles-profile"><h5>Address:</h5></Typography>
    <Form.Item
    className="email"
        name="adresse"
        
        rules={[
          {
            
            message: 'This Name is not avaible',
          },
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input placeholder="Input your Name" />
      </Form.Item>
      </div>
      <div className="element-form ">
        <Typography className="titles-profile"><h5>Email:</h5></Typography>
    <Form.Item
    className="email"
        name="email"
        
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder="Input your E-mail"  />
      </Form.Item>
      </div>
    
      <div>
      <Typography className="phonenumber"><h5>PhoneNumber:</h5></Typography>
      <PhoneInput
      limitMaxLength
  defaultCountry="TN"
  className="Phone-input "
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
      </div>
      <div className="element-form-password ">
    <Typography className="titles-profile"><h5>Password:</h5></Typography>
    <Form.Item
    className="email"
        name="password"
        
        rules={[
          {
            type: 'password',
            message: 'The input is not valid Password!',
          },
          {
            required: true,
            message: 'Please input your Password',
          },
        ]}
      >
        <Input.Password placeholder="Input your Password" />
      </Form.Item>
      </div>
      
      </div>
    </Form>
    
    
)
}
export default Profile;