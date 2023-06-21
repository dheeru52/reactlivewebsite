import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick =()=>{
    // console.log("Upper case was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to UpperCase", "success")
  }
  
  const handleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to LowerCase", "success")
  }
  
  
  const handleClearClick =()=>{
    let newText ="" ;
    setText(newText)
    props.showAlert("text Cleared", "success")
  }
  
  const handleCopy =() => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied", "success")
  }
  
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces Removed", "success")
  }
  
  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value)
  }


  const [text, setText] = useState("");
  // text = "new text"; // wrong way to change the state
  // setText("new text"); // correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} id="myBox" rows="5" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}>

        </textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
             <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to Lowerecase</button>
             <button className="btn btn-secondary mx-1" onClick={handleClearClick}>Clear Text</button>
             <button className="btn btn-danger mx-1" onClick={handleCopy}>Copy Text</button>
             <button className="btn btn-danger mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2"  style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}  Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something  in the  textbox above to preview it here"}</p>

         </div>
    </>
  );
}
