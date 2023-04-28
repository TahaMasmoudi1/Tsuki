import { useEffect, useState } from "react"
import { List, Rate, Typography } from "antd"
import {Card,Image} from "antd"
import '../containers/product.css'
import {  HeartOutlined } from "@ant-design/icons"
import './product.css'

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
        <List className="list-card"  data={items} grid={{column:3}}  >
          <div className="div-card"  >
            {items.map(item=>(<Card className="card1"   key={item.id} hoverable={true} 
             cover={<div  id="/product-card" >
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
    
    }
    




    return(
        <div>
            <Stickers/>
        </div>
    )

    
}
export default  Stickers;