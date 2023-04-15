import { useEffect, useState } from "react"
import { List, Rate, Typography } from "antd"
import {Card,Image} from "antd"
import '../containers/product.css'
import {  HeartOutlined } from "@ant-design/icons"

function Stickers(){
  
    
    
    function Stickers (){
      const api_url="http://localhost:3000/stickers"
        const[items ,setItems]=useState([])
        const[fetchError,setFetcherror]=useState(null)
        
    
    
        useEffect(()=>{
            const fetchitems=async()=>{
                 try{
                  const response= await fetch(api_url);
                  if(!response.ok) throw Error("did not recived expected data")
                  const listitems= await response.json();
                  console.log(listitems)
                  setItems(listitems);
                 setFetcherror(null)
                 
            }catch(err){setFetcherror(err.message)}}
              
                (async()=> await fetchitems())(); 
        }
       ,[] )
       return <div>
        
          <List items={items} grid={{column:3}} style={{display:"flex",flexWrap:"wrap"}} >
              
              <div  style={{display:"flex",flexWrap:"wrap",margin:"10px"}}>
                {items.map(item=>(<Card 
                style={{width:"300px",height:"550px",margin:"10px",alignItems:"center", }} 
                 key={item.id} 
                 cover={<div><Rate allowHalf defaultValue={0} character={<HeartOutlined/>} style={{color:"red" ,display:"flex",justifyContent:"center"}}/><div style={{fontFamily:"bonzai",fontSize:"27px",display:"flex",justifyContent:"center"}}>{item.title}</div></div>}
                  title={<Image className="image-card" src={item.image}/>  }> 
                <Card.Meta style={{height:"25px" ,}}  
                description={<p style={{ marginTop:"-10px",fontFamily:"bonzai",fontSize:"20px", color:"rgb(60,120,232)",display:"flex",justifyContent:"center"}}>{item.price}</p>}>
                  </Card.Meta>   
                   </Card>           ))}
              
                </div>
    
         
           </List>
             
            
        
        </div>
    
    }
    




    return(
        <div>
            <Stickers/>
        </div>
    )

    
}
export default  Stickers;