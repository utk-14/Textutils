import React,{useState}from 'react'

export default function TextForm
(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked");
        setText("you have clicked on handleupclick")
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleDownClick=()=>{
        console.log("uppercase was clicked");
        setText("you have clicked on handleupclick")
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text,setText]=useState("Enter text here");
    // setText("har har mahadev");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'
  }}>

    <h1>{props.heading}</h1>
  
  <textarea className="form-control my-2" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'light'
  }} id="myBox" rows="15"></textarea>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
   <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'
  }}></div>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words, {text.length} chracters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </>
  )
}
