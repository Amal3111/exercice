import React from 'react'
import './display.css'
const Display=(props)=> {
  return (
    <div>
      {props.list.map((el,i) =>{
        return(
            <div key={i}>
                <input id='myinput' onChange={()=>props.ifChecked(el.id)} type="checkbox" checked={el.checked} />
                <label className={el.checked?'line':''} id="myinput">{el.name}</label>
            </div>
        )
      })}
    </div>
  )
}

export default Display
