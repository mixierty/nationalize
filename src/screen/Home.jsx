import axios from "axios"
import { useEffect, useState } from "react"

const Home = () =>{
const [state , setState ] = useState()

let  [inp , setinp] = useState()
    let gg = async ()=>{
        if(inp != null){
              let ggData = await axios ({
            url: `https://api.nationalize.io/?name=${inp}`,
            method: "get" 
        })
        console.log("dfsfds"  , ggData);
        if(ggData.status == 200){
            setState(ggData.data)
        }
        }  else {
            alert("заполните поля!!!")
        }
      

    }  


    console.log(inp);


 
return(
    <div>
        <input onChange={(e)=>setinp(e.target.value)} type="text" />
        <button onClick={gg}>Search</button>
        {state!=null ? <>
     <h1>{state.name}</h1>   
        {state.country.map(i=><>
      <h6>{i.country_id    } -- {Math.round(i.probability*100) }%</h6> 
    
        </>)}
        </> : <></>}
    </div>

)
}



export default Home
 












 
 

