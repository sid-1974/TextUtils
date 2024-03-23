import React,{useState} from 'react'

export default function TextForm(props) {

    const [Text, setText] = useState('');
    const handleUpclick =() =>{
        let newtext =Text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to Uppercase.","success")
    }
    const handleLowclick =() =>{
        let newtext =Text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to Lowercase.","success")
    }
    const handleClearclick =() =>{
        let newtext =''
        setText(newtext);
        props.showAlert("Text Cleared!","success")
    }
    const handlecopyclick =() =>{
        let copytext =document.getElementById('myBox')
        copytext.select()
        navigator.clipboard.writeText(copytext.value)
        props.showAlert("Copied to Clipboard!","success")
        document.getSelection().removeAllRanges();
    }
    const handlespaceclick =() =>{
        let spacetext = Text.split(/[ ]+/)
        setText(spacetext.join(" "))
        props.showAlert("Removed extra Spaces!","success")
    }
    const handleOnchange =(event) =>{
        
        setText(event.target.value)
        
    }
  

  return (
    <>
      <div className="container"  style={{color:props.mode ==='Light' ? '#343a40':'white'}}>
        <div className="mb-3">
            <h1 className='mb-4'>{props.heading} </h1>
            <textarea  className="form-control" id="myBox" style={{backgroundColor:props.mode ==='Light' ? 'white':'#343a40',color:props.mode ==='Light' ? '#343a40':'white'}} rows="8" value={Text} onChange={handleOnchange}></textarea>
            <button disabled={Text.length===0} className="btn btn-outline-success m-3"  onClick={handleUpclick} >Convert to uppercase</button>
            <button disabled={Text.length===0} className="btn btn-outline-success m-3" onClick={handleLowclick}>Convert to Lowercase</button>
            <button disabled={Text.length===0} className="btn btn-outline-success m-3" onClick={handleClearclick}>Clear Text</button>
            <button disabled={Text.length===0} className="btn btn-outline-success m-3" onClick={handlecopyclick}>Copy Text</button>
            <button disabled={Text.length===0} className="btn btn-outline-success m-3" onClick={handlespaceclick}>Remove Space</button>
        </div>
      </div>
      <div className="container my-2" style={{color:props.mode ==='Light' ? '#343a40':'white'}} >
        <h2>Your text summary</h2>
        <p>{Text.trim() === '' ? 0 :Text.split(/\s+/).filter(word => word !== '').length} words and {Text.length - (Text.split(' ').length - 1)} characters</p>
        <p>{0.008 * Text.split(' ').filter(word => word !== '').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Nothing to preveiw!"}</p>
      </div>
  </>
  )
}
