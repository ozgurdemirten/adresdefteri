import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listeleme } from './groupcompanyredSlice';



export default function Groupcompany(props) {
    
     
//const dispatch=useDispatch();
    const valuee=useSelector((state)=>state.counter.value);
    console.log("burasi value" ,valuee);
    const dispatch=useDispatch(); 
// const handlelisteleme=()=>{
//     dispatch(listeleme());
// }
//debugger;
//console.log(count)
const property=props.group;
//<span onChange={()=>dispatch(listeleme({property}))}>{value}</span>
//console.log(property);
//console.log(()=>dispatch[listeleme(2)]);
//const deger=()=>dispatch(listeleme({property}));

  return (
   <div style={{"height" : "16px", "width" : "100px"}}>

    


<select className="form-control form-control-sm" onClick={()=>dispatch(listeleme({property}))}>
  <option >{valuee.property}grup</option>
</select>



   </div>
  )
}
