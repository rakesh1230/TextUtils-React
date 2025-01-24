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
            <h1 className="mb-4">{props.title}</h1>
            <textarea className="form-control my-2" style={{backgroundColor: props.mode==="dark" ? '#1e2773': 'white', color:props.mode==="dark" ? 'white': 'black'}} value={text} id="myBox" rows="8" onChange={handleonChange}></textarea>
            <button disabled={text.split(" ").filter((element)=> {return element.length !==0}).length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpcase}>Convert to Uppercase</button>
            <button disabled={text.split(" ").filter((element)=> {return element.length !==0}).length === 0} className="btn btn-primary mx-1 my-1" onClick={handlelowercase}>Convert to Lowercase</button>
            <button disabled={text.split(" ").filter((element)=> {return element.length !==0}).length === 0} className="btn btn-primary mx-1 my-1" onClick={CopyText}>Copy to clipboard</button>
            <button disabled={text.split(" ").filter((element)=> {return element.length !==0}).length === 0} className="btn btn-danger mx-1 my-1" onClick={clearText}>Clear</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark" ? 'white': 'black'}}>
            <h2>Your Text Summary</h2>
            <p><b>{ text.split(/\s/).filter((element)=> {return element.length !==0}).length } word and {text.length} characters</b></p>
            <p><b>{ 0.008 * text.split(" ").filter((element)=> {return element.length !== 0}).length} Minutes read</b></p>
            <h2>Preview</h2>
            <p>{text.length >0? text:'Nothing to preview!'}</p>
            <p><b>{extractEmail()}</b></p>
        </div>
        </>
    )
}