import React, { useState } from 'react'
import './App.css';
import def from "./def.jpg";
import sad from "./sad.gif";
import happy from "./happy.gif";
import black from "./black.jpg";


let cp=0,qty=0,sp=0;
let newOutput="";
function App() {
const [op,setOp]=useState("");


function clickHandler(e){

  e.preventDefault();
 if(cp && qty && sp)
 {
  cp=parseInt(cp);
  qty=parseInt(qty);
  sp=parseInt(sp);
  var buyqty=cp*qty;
  var sellqty=sp*qty;
 var diff=(sellqty-buyqty);
 var abs_diff=Math.abs(diff);
let left=document.querySelector(".left");
 var pc=((abs_diff/buyqty)*100).toFixed(2);
 if(diff<0)
 {
   newOutput= `You lost ${pc}%. Your total loss is ₹${abs_diff}.😞`;
  if(pc>50.00)
  {
   
    left.style.backgroundImage = `url(${sad})`;

  }
  else{
    left.style.backgroundImage = `url(${black})`;
  }

   setOp(newOutput);
 }
 else
 {
 newOutput= `You gained ${pc}%. Your total gain is ₹${abs_diff}.😀`;
 if(pc>50)
  {
    left.style.backgroundImage = `url(${happy})`;

  } 
  else{
    left.style.backgroundImage = `url(${black})`;
  }

 setOp(newOutput);

 }
}
else{
  newOutput= `Please give valid inputs.`;
  setOp(newOutput);
}
}

  return (
    <div className="App">
<div className="head">
  <h1>Stocks Analyzer</h1>
</div>

    <div className="content" >
      {/* Left */}
 <div className="left">

    <h3>Check Profit/Loss on your Stocks.</h3>
      <form className="inputParent">
        <div className="field">
    <input type="number" className="cp" 
    placeholder="Purchase Price"
    onChange={(e)=>{
      cp=e.target.value;
    }}
    required
    />
    <label >Purchase Price</label>
    </div>

    <div className="field">
    <input type="number" className="qty" 
  placeholder="Stock Quantity"
  required
  onChange={(e)=>{
      qty=e.target.value;
    }}
   
    />
  <label >Stock Quantity</label>
</div>

<div className="field">
    <input type="number" className="currentPrice"
     placeholder="Current Price"
     onChange={(e)=>{
      sp=e.target.value;
    }}
    required
    />
 <label >Current Price</label>
</div>
    
    <button 
    type="submit"
    onClick={(e)=>clickHandler(e)}
    >Check</button>
    </form>
    <div className="result">{op}</div>
    </div>
    {/* right */}
    <div className="right">
      <img src={def} alt="svg" className="svgImg"/>
    </div>
    </div>

    {/* Footer */}
    
 <div className="footer">
          <div className="links">
          <a className="linkedIn" href="https://linkedin.com/in/prashantworks47">LinkedIn</a>
          <a className="twitter" href="https://twitter.com/pareshaaaaan">Twitter</a>
          <a className="twitter" href="https://github.com/percius47">Github</a>
          
           </div>
          <small> Copyright. 2021 </small> 
        </div>
    </div>
  );
}

export default App;
