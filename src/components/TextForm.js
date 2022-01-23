import React,{useState} from 'react';
export default function TextForm(props) {
    const [text,setText] = useState('Enter text here');
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
    return (
        <>
        <div className='container'>
            <div className="mb-4">
                <h2>{props.heading}</h2>
                <textarea className="form-control" id="textBox" value={text} onChange={handleChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Upper Case</button>
        </div>
        <div className="container mb-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} letters</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}