import React from 'react'
import Groupcompany from './Groupcompany'

function Companygroup(props) {
  return (
    <div> {props.sirket} <Groupcompany group={props.grup}/> 
    
    </div>
  )
}

export default Companygroup