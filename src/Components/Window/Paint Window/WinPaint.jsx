import { useRef } from "react";
import "./WinPaint.css";
import closeIcon from "../../../assets/close-window.png";
import minimizeIcon from "../../../assets/minimize-window.png";
import Draggable from "react-draggable";
import PaintingWindow from "./Paint/PaintingWindow.jsx";
import { motion } from "motion/react";

function WinPaint() {
  const nodeRef = useRef(null);

  return (
    <>
      <div className="winwin">
        <Draggable nodeRef={nodeRef} handle=".drag-handle">
          <div className="window" ref={nodeRef}>
            <div className="content">
              <div className="content-head drag-handle">
                <p className="head-text">Draw me something {`><`}</p>
                <motion.div 
                whileTap={{ scale: 0.95 }}
                >
                  <button
                    className="header-icon"
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    {" "}
                    <img
                      src={minimizeIcon}
                      className="close-icon"
                      alt=""
                    />{" "}
                  </button>
                </motion.div>

                <motion.div
                whileTap={{ scale: 0.95 }}
                >
                  <button
                    className="header-icon"
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    {" "}
                    <img src={closeIcon} className="close-icon" alt="" />{" "}
                  </button>
                </motion.div>
              </div>
              <div className="content-show">
                <div className="draw-window">
                  <PaintingWindow />
                </div>
                <div className="menu-bar"></div>
              </div>
              <motion.div className="send-div" whileTap={{ scale: 0.98 }}>
                <button className='send-button'>Send</button>
              </motion.div>
            </div>
          </div>
        </Draggable>
      </div>
    </>
  );
}

export default WinPaint;
