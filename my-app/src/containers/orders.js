import React from "react";
import './order.css'
import { useState ,useEffect} from "react";
import { Table,Drawer } from "antd";



function Orders({} ){
    const api_url="http://localhost:3000/products"
    const[items ,setItems]=useState([])
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
            id:"4",
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
       

    ]
    
    return(
        <div className="order-content">
          <h2 className="order-title">Orders:</h2>,
          
          
             
            <div >
                
                <Table  className="order-table"   columns={columns}
                dataSource={items} pagination={{pageSize:3}}>
    
                </Table>
               
            </div>
        
    
          
        </div>
    )
}
export default Orders;