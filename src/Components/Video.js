import React from 'react';
import './Video.css'
import ReactDOM from 'react-dom';

function Video(props) {
    const handleClick = (e)=>{
        e.preventDefault();
        e.target.muted = !e.target.muted
    }
    const handelScroll=(e)=>{
    let next = ReactDOM.findDOMNode(e.target).parentNode.nextSibling
    if(next){
        next.scrollIntoView()
        e.target.muted = false;
    }
    }
  return (
    <video src={props.src} className="videos-styling" onEnded={handelScroll} loop onClick={handleClick} ></video>
  )
     
  
}

export default Video;
