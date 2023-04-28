import { Children, createContext, useContext, useEffect, useState } from "react"
import { Button, ConfigProvider, List, Rate, Typography } from "antd"
import {Card,Image,Modal,Form,Radio} from "antd"
import '../containers/product.css'
import Cardpage from "./card-page"
import { Route,Routes,useNavigate} from "react-router-dom"
import {  HeartOutlined } from "@ant-design/icons"
import { InputNumber } from 'antd';
import { cartContext } from "./card-modal"




function Products (props ){
 
  const [modal1Open, setModal1Open] = useState(false);

  const api_url="http://localhost:3000/products"
  const radioStyle = {
    color: 'red'
  };
    const[items ,setItems]=useState([])

    const[fetchError,setFetcherror]=useState(null)
    const navigate=useNavigate()
    const[title,setTitle]=useState('')

    function click(){
      setModal1Open(true) 
    }
    function cancel (){
      setModal1Open(false)
    }
    const addtoModal=(items)=>{
      const newProduct={
         ...items,count:1
      }
      setItems([...items,newProduct])
    }
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
   const Globalstate=useContext(cartContext)
   console.log(Globalstate)

   return(
  
    
    <div >
      
        <Modal data={items} width={1200} className="cardmodal" footer={null} onCancel={cancel}  open={modal1Open}>
         <h1>{title}</h1>
              </Modal>
    
      
     <div>
      <List className="list-card"  grid={{column:3}}  >
          <div className="div-card"  >
            {items.map(item=>(
              
          
            <Card data={item} className="card1"  onClick={click} key={item.id} hoverable={true} 
             cover={<div id="/product-card" >
              <Rate className="rate" allowHalf defaultValue={0} 
              character={<HeartOutlined/>}/>
             <div className="cardtitle" >{item.title}</div></div>}
              title={<Image preview={false}  className="image-card" src={item.image}/>  }> 
            <Card.Meta className="cardmeta" 
              
            description={<p className="price" >{item.price}</p>}>
              </Card.Meta> 
               </Card>  ))}
          
            </div>
       </List>
       </div>
       </div>
   )
    }
export default Products