import React, {useState} from 'react'

export default function TextForm(props) {
    const[text, settext] = useState("");
    const handleUpClick = ()=>{
        // console.log("Onclick");
        let newtext = text.toUpperCase();
        settext(newtext);
        // props.showAlert("Uppercase has been enabled")
    };
    const handleOnChange = e =>{
        // console.log("Onchange");
        settext(e.target.value)
    };
    
    const handlelowClick = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
        // props.showAlert("Lowercase has been enabled")
    }
    const handleclearClick = ()=>{
        let newtext = "";
        settext(newtext);
        // props.showAlert("Text has been cleared")
    }
    // settext("Correct way to set the new text") //This is the correct way to set the text
    return (
        <>
        <div className='beal' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="mytext" className="form-label"></label>
                <textarea className="form-control my-2" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white' : 'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className='btn btn-primary mx-2'onClick={handleUpClick}>Convert to upper case</button> 
                <button className='btn btn-primary mx-2'onClick={handlelowClick}>Convert to lower case</button>
                <button className='btn btn-primary mx-2'onClick={handleclearClick}>Clear text</button>
            </div>
            <div className='container my-3' >
                    <h1>Your Text Summary</h1>        
                    <p>{text.split(" ").length} words {text.length} characters </p>
                    <p>{0.008*text.split(" ").length} Minutes to read </p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter the text to preview "}</p>
            </div>
        </div>
    </>
  ) 
}
