import React, {useState} from 'react'
import '../App.css';

export default function TextForm(props) {
    const handleUpClick1 = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick1 = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange1 = (event)=>{
        setText(event.target.value) 
    }

    const handleCopy1 = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

 
    const handleExtraSpaces1 = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handlechar = () => {
        let newText = text.split(/[ a-zA-z]+/);
        setText(newText.join(""));
        props.showAlert("Extract Number!", "success");
    }

    const handlenumber = () => {
        let newText = text.split(/[0-9]+/);
        setText(newText.join(""));
        props.showAlert("Extract Character !", "success");
    }

    // const handleExtractNumber = () => {
    //     let newText = text.split(/[ ]+/);
    //     setText(newText.join(" "));
    //     props.showAlert("Extra spaces removed!", "success");
    // }
    
    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("Text Reversed!", "success")
      };


      function textToSpeech(){
        const Speech= new SpeechSynthesisUtterance();
        const message= document.getElementById("myBox").value;
        Speech.lang='eng';
        Speech.text= message;
        window.speechSynthesis.speak(Speech);
      }
    

    //this function converts the first letter of every word to uppercase the rest of letters are lower case
 const handleCapitalizeWordClick = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
  };


  let [count, setCount] = useState(0);
  let countChar = 0;
  
  const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount (countChar);
        // const result = countVowel(string);   
        props.showAlert("Count Vowels !", "success");
      }
    }
    // console.log("No. of Vowels are: " + countChar);
  };

    
    const [text, setText] = useState(''); 
    return (
        <>
        
        <div className="container" style={{color: props.mode==='dark'?'white':'rgb(213 88 14)'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange1} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleVoClick}>countVowel </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeWordClick}>Case Sencetive </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick1}>Convert to Uppercase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick1}>Convert to Lowercase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy1}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces1}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlechar}>Extract Number</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlenumber}>Extract character</button>
            
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverse}>Reverse Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={textToSpeech}>&#127908; Speak Text </button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#0  42743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <p style={{color: "red"}}>Count Vowels </p> 
            <p>{count}</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>

        </div>
        </>
    )
}
