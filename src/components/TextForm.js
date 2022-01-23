import React,{useState} from 'react';
const [text,setText] = useState('Enter text here')
export default function TextForm(props) {
    return (
        <div>
            <div className="mb-4">
                <h2>{props.heading}</h2>
                <textarea className="form-control" id="textBox" rows="8"></textarea>
            </div>
            <div className="btn btn-primary">Convert to Upper Case</div>
        </div>
    )
}