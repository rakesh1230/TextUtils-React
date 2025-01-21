import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');
    let handleUpcase = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.Showalert("Converted to uppercase", "success")
        
    }
    let handlelowercase = () => {
        let newText = text.toLowerCase();
        setText(newText) 
        props.Showalert("Converted to lowercase", "success")
    }
    let clearText = () => {
        let newText = ""
        setText(newText)
        props.Showalert("Text Cleared", "success")
    }
    let handleonChange = (event) =>{
        setText(event.target.value)
    }

    let extractEmail = () =>{
        const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
        let match = text.match(email)
        return match ? match.join(", ") : ""
    }
    let CopyText = () => {
        navigator.clipboard.writeText(text).then(() =>{
            props.Showalert("Coppied to clipboard", "success")
        }).catch(err => {
            console.log("error copy to clipboard" + err)
        })
    }
    return (
        <>
        <div className="container" style={{color: props.mode==="dark" ? 'white': 'black'}}>
            <div className="mb-3">
            <h1>{props.title}</h1>
            <textarea className="form-control my-2" style={{backgroundColor: props.mode==="dark" ? 'grey': 'white', color:props.mode==="dark" ? 'white': 'black'}} value={text} id="myBox" rows="8" onChange={handleonChange}></textarea>
            <button className="btn btn-primary mx-2" onClick={handleUpcase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handlelowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={CopyText}>Copy to clipboard</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark" ? 'white': 'black'}}>
            <h2>Your Text Summary</h2>
            <p><b>{text.trim() === "" ? 0:text.trim().split(/\s+/).length} word and {text.length} characters</b></p>
            <p><b>{text.trim() === ""?0: 0.008 * text.split(" ").length } Minutes read</b></p>
            <h2>Preview</h2>
            <p>{text.length >0? text:'Enter something in the text box above to preview it here'}</p>
            <p><b>{extractEmail()}</b></p>
        </div>
        </>
    )
}