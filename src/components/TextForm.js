import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
       // console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = ()=> {
        // console.log("Lowercase was clicked");
         let newtext2 = text.toLowerCase();
         setText(newtext2);
         props.showAlert("Converted to Lower Case", "success");
     }
     const handleClearClick = ()=> {
        // console.log("Clear Text was clicked");
         let newtext2 = '';
         setText(newtext2);
         props.showAlert("Cleared Text", "success");
     }
    //  const handleHindiClick = ()=> {
    //     // console.log("Clear Text was clicked");
    //      let newtext2 = '';
    //      setText(newtext2);
    //      //props.showAlert("Not Yet functional , Work in progress", "Sorry");
    //  }

     const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
     }

     const handleExtraSpace = ()=> {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
     }
     
    const handleOnChange = (event)=> {
      //  console.log("On Change");
        setText(event.target.value);
    }


    const[text , setText] = useState('');
    // text = "new text" WRONG WAY TO UPDATE TEXT
    // setText = "New Text" Correct way to update text
  return (
    <>
         <div className='container my-2' style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white' , color :props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Upper Case</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To Lower Case</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            {/* <button className="btn btn-primary mx-2" onClick={handleHindiClick}>Convert to hindi script</button> */}
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            

        </div>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter ((element)=>{return element.length !==0 }).length} words , {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter ((element)=>{return element.length !==0 }).length } Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : "Enter something in the text box above to Preview here"}</p>
        </div>
    </>
  )
}
    