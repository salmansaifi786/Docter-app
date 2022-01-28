import React,{useState} from 'react';
export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        //   console.log("ds")  
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        //   console.log("ds")  
    }
    const handleChange=(event)=>{
        setText(event.target.value);
            
    }
    const handleClear=()=>{
        let newText="";
        setText(newText);
            
    }
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <div className="mb-4">
                <h2>{props.heading}</h2>
                <textarea className={`form-control container text-${props.mode==='light'?'dark':'light'}`} id="textBox" value={text} onChange={handleChange} rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        </div>
        <div className="container mb-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} letters</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"enter your text in the box to preview"}</p>
        </div> </div>
        </>
    )
}