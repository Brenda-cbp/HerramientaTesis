import React from 'react'
import "./circle.css"
// props, 
function Circle(props) {
  return (
    <div>
      <div className="circle" style={{width: props.size, 
  height:props.size, backgroundColor:props.color}}>
        <p className="text1" style={{fontSize: props.fontSize, paddingTop: props.paddingTop }} >{props.text1}</p>
        <h1 style={{fontSize: props.fontSizeData}}>{props.data} </h1>
        <p className="text2" style={{fontSize: props.fontSize}} > {props.text2} </p>
        <p className="text3" style={{fontSize: props.fontSize}}>{props.text3} </p>
      </div>
    </div>
  )
}

export default Circle