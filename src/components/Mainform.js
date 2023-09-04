import React, {useState} from 'react'
import PropTypes from 'prop-types' 


export default function Mainform(props) {
    const handleupClick = ()=> {
        // console.log("handle clicked");
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length === 0){
            props.showAlert('input field cannot be empty', 'danger')
        } else {
            props.showAlert('Text has been Capitalized Successfully', 'success')
        }
    }

    const handledownClick = ()=> {
        // console.log("handle clicked");
        let newText = text.toLowerCase();
        setText(newText);
        if(text.length === 0){
            props.showAlert('input field cannot be empty', 'danger')
        } else {
            props.showAlert('Text has been Lower cased Successfully', 'success')
        }
    }

    const clearText = ()=> {
        // console.log("handle clicked");
        let newText = '';
        setText(newText);
        if(text.length === 0){
            props.showAlert('input field cannot be empty', 'danger')
        } else {
            props.showAlert('Cleared Successfully', 'success')

        }
        
    }

    const copyText = async () => {
        await navigator.clipboard.writeText(text);
        if(text.length === 0){
            props.showAlert('input field cannot be empty', 'danger')
        } else {
            props.showAlert('Coppied Successfully', 'success')
        }
    }
    
    const spliText = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))  
        if(text.length === 0){
            props.showAlert('input field cannot be empty', 'danger')
        } else {
            props.showAlert('Extra spaces removed', 'success')
        }
    } 

    const handleOnChange = (event)=> {
        // console.log("handle clicked");
        setText(event.target.value)
    }

    const [text , setText] = useState( "" );
  return (
    <>
        <div className='container'>
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.formHeading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="Mybox" rows="8"></textarea>
                {/* <div className="row"> */}
                    <button className="btn btn-primary mt-2 me-3" onClick={handleupClick}>Convert to Uppercase</button> 
                    <button className="btn btn-primary mt-2 me-3" onClick={handledownClick}>Convert to lowercase</button>
                    <button className="btn btn-primary mt-2 me-3" onClick={clearText}>Clear text</button>
                    <button className="btn btn-primary mt-2 me-3" onClick={spliText}>Remove Extra Spaces</button>
                {/* </div> */}
            </div>  
        </div>
        <div className="container">
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Number of words and Characters</h2>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").length} Words and {text.length} Characters</p>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>you can read {text.split(" ").length} words in {0.008 * text.split(" ").length} Minutes or less or more</p>
            <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview Text</h3>
            <div className="resulttxtarea">
                <i className="fa fa-clipboard" onClick={copyText} aria-hidden="true"></i>
                <p className='p-5 rounded bg-light'>{text.length>0?text: "Enter your text to preview here"}</p>
            </div>
        </div>
    </>
  )
}

Mainform.propTypes = {
    formHeading: PropTypes.string.isRequired
}
Mainform.defaultProps = {
    formHeading: 'Form heading',
}
