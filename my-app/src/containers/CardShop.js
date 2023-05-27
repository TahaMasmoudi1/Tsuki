import React, { useState } from "react";
import { Drawer,Table } from "antd";
import Products from "./product";
function Shop(ItemIndex,items, modal2Open,handleCancel2){
    const  Wish=()=>{
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
                <Drawer visible={true} style={{}} closable={true}  onClose={handleCancel2()} open={modal2Open}>
                
                <Table columns={columns}
                dataSource={items[ItemIndex]}>
    
                </Table>
                </Drawer>
            </div>)
        
    }
    
     




}
export default Shop;