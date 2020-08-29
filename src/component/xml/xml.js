import React from 'react'

import Menu from '../menu/menu'
import './xml.css'
var format = require('xml-formatter');  

function handleXml(xml){
    var formattedXml = format(xml);
    return formattedXml
}
function handleClick(){
console.log(inp)
}
function xml (){
    const [inp,setInp] = React.useState('')
    
    function handleInput(e){
        
        setInp(e.target.value)
    }
return(
    
   <div>
<Menu/>
<div className="inline-div">
    <p align="center">Enter the text</p>
    <textarea cols="50" rows="50" className="inline-txtarea" onChange={handleInput}></textarea>
</div>
<div className="inline-div">
<button className="btn-1">Format</button>
<button className="btn-1">Resets </button>
</div>
<div className="inline-div rigt">
<p align="center">Result </p>
    <textarea cols="50" rows="50" className="inline-txtarea"></textarea>
</div>
   </div>
)
}
export default xml