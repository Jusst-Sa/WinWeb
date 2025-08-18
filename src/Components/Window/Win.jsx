import { useRef } from "react";
import "./Win.css";
import closeIcon from '../../assets/close-window.png'
import minimizeIcon from '../../assets/minimize-window.png'
import Draggable from "react-draggable";
import PaintingWindow from "./Paint/PaintingWindow";

function Win() {
  const nodeRef = useRef(null);

  return (
    <>
      <div className="winwin">
        <Draggable nodeRef={nodeRef} handle=".drag-handle">
          <div className="window" ref={nodeRef}>
            <div className="content">
                <div className="content-head drag-handle">
                    <p className="head-text">Draw me something {`><`}</p>
                    <img src={minimizeIcon} className='close-icon' alt="" /> 
                    <img src={closeIcon} className='close-icon' alt="" /> 
                                      
                </div>
                <div className="content-show" >
                    <div className="draw-window">
                      <PaintingWindow/>
                    </div>
                    <div className="menu-bar"></div>
                </div>
                <div className="send-div">
                <button className="send-button">Send</button>
                </div>
            </div>
          </div>
        </Draggable>
      </div>
    </>
  );
}

export default Win;
