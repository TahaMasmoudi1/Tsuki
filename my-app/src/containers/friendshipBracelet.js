import React from "react"
import { List,Card,Rate,Image,Button,message,Modal,Typography } from "antd"
import { useState,useEffect } from "react"
import {  HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { InputNumber } from 'antd';
import  Navbar from "./navbar"




function FriendshipBracelet(){
    
    const api_url="http://localhost:3000/accesoires"
    const [openDrawer1,setopenDrawer1]= useState(false);
    const [modal1Open, setModal1Open] = useState(false);
        const[items ,setItems]=useState([])
        const[fetchError,setFetcherror]=useState(null)
        const[ItemIndex,setItemIndex]=useState()
        const [XXLsize,setXXLsize]=useState(0)
    const [XLsize,setXLsize]=useState(0)
    const [Lsize,setLsize]=useState(0)
    const [Msize,setMsize]=useState(0)
    const [Ssize,setSsize]=useState(0)
    const [XSsize,setXSsize]=useState(0)

 

    
    var  XSinput=(value)=>{
      setXSsize(value)
    };
    var  Sinput=(value)=>{
      setSsize(value)
    };
    var  Minput=(value)=>{
      setMsize(value)
    };
    var  Linput=(value)=>{
      setLsize(value)
    };
    var XLinput=(value)=>{
      setXLsize(value)
    };
    var XXLinput=(value)=>{
      setXXLsize(value)
    };
    function CancelDrawer(){
   setopenDrawer1(false)
    }
   
    function AddToCart(props){
      if ((XSsize!==0 || Ssize!==0 || Msize!==0 || Lsize!==0 || XLsize!==0 || XXLsize!==0) ){
        message.success('Aded to cart Successfully!')
        cancel(true)
        const modalindex=ItemIndex
      }
      else{
        message.error("Please pick the size to add the item in your cart ")
      }
      
    }

    function click(index){
      setItemIndex(index)
      setModal1Open(true) 
    }
    function cancel (){
      setModal1Open(false)
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
    return(
    

    
        <div>
          
            <Modal data={items[ItemIndex]} width={900} className="cardmodal" footer={null} onCancel={cancel}  open={modal1Open}>
             <div className="modal-item-div">
    
      <div className="div-images">
              <Image.PreviewGroup >
                    
                       <Image
                              height={250}  
                              width={350}
                              src={items[ItemIndex]?.image} />
                        <Image
                              height={250} 
                              width={350} 
                              src={items[ItemIndex]?.image} />
                 </Image.PreviewGroup>
      </div>
      <div className="modal-item-container"> 
              <div className="modal-item-title">
                <h1>{items[ItemIndex]?.title}</h1>
               <HeartOutlined className="modal-heartIcon"/>
               </div>   
               <Typography id="reference" italic>Reference: 0{items[ItemIndex]?.id}</Typography>
         
              <h3 id="modal-price">{items[ItemIndex]?.price}</h3>
              <h3 id="modal-description">Description:</h3>
              <p id="description-text">{items[ItemIndex]?.description}</p>
              <h3 className="modal-size-color">Colors:</h3>
              <div className="div-radio">
            
              </div>
              <h3 className="modal-size-text">Sizes:</h3>
              <div className="size-div">
                <div className="size">   
                 <label className="size-label">XS</label>
                 <InputNumber className="input-size" min={0}  defaultValue={0} onChange={XSinput} />
                </div>
                <div className="size">   
                 <label className="size-label">S</label>
                 <InputNumber className="input-size" min={0}  defaultValue={0} onChange={Sinput} />
                </div>
                <div className="size">   
                 <label className="size-label">M</label>
                 <InputNumber className="input-size" min={0}  defaultValue={0} onChange={Minput} />
                </div>
                <div className="size">   
                 <label className="size-label">L</label>
                 <InputNumber className="input-size" min={0}  defaultValue={0} onChange={Linput} />
                </div>
                <div className="size">   
                 <label className="size-label">XL</label>
                 <InputNumber className="input-size" min={0}  defaultValue={0} onChange={XLinput} />
                </div>
                <div className="size">   
                 <label className="size-label">XXL</label>
                 <InputNumber className="input-size" min={0}  defaultValue={0} onChange={XXLinput} />
                </div>
              </div>
              <div className="addtocart"><Button onClick={()=>AddToCart()} type="primary">Add to cart <ShoppingCartOutlined id="shop-icon"/></Button></div>
              
              
             
             </div>
      </div>
                  </Modal>
        
         
         <div>
          <List className="list-card"  grid={{column:3}}  >
              <div className="div-card"  >
                {items.map((item,index)=>(
                  
              
                <Card data={item} className="card1"  onClick={()=>click(index)} key={item.id} hoverable={true} 
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
export default FriendshipBracelet;