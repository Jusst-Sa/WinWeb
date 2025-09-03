import { useRef, useState } from "react";
import "./WinMusica.css";
import AudioPlayer from "react-h5-audio-player";
import { playlists } from "./musicFiles/Songs";
import "react-h5-audio-player/lib/styles.css";
import closeIcon from "../../../assets/close-window.png";
import minimizeIcon from "../../../assets/minimize-window.png";
import Draggable from "react-draggable";
import Marquee from "react-fast-marquee";
// import CollectionSongs from "./musicFiles/CollectionSongs";
import { motion } from "motion/react";

function WinMusica() {
  const nodeRef = useRef(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  // const playerRef = useRef();
  // const [volume, setVolume] = useState(0.5);

  // let songs;
  const songs = playlists.map((song) => {
    return song.src;
  });

  console.log(songs);
  // const song = playlist.path
  // console.log(playlist[0].src)

  return (
    <>
      <div className="winwin">
        <Draggable nodeRef={nodeRef} handle=".drag-handle">
          <div className="window" ref={nodeRef}>
            <div className="content">
              <div className="content-head drag-handle">
                <p className="head-text">El Music Player {`><`}</p>
                <motion.div whileTap={{ scale: 0.95 }}>
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

                <motion.div whileTap={{ scale: 0.95 }}>
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
              <div className="musica-content">
                <AudioPlayer
                  layout="stacked"
                  autoPlayAfterSrcChange
                  onClickNext={() =>
                    setSelectedIndex((i) => (i + 1) % songs.length)
                  }
                  onClickPrevious={() =>
                    setSelectedIndex((i) => (i - 1 + songs.length) % songs.length)
                  }
                  showJumpControls={false}
                  customAdditionalControls={[]}
                  showSkipControls
                  // volume={volume}
                  src={songs[selectedIndex]}
                />
              </div>
              <div className="songs-playlist">
                {/* <CollectionSongs/> */}
                {playlists.map((song, index) => {
                  const isSelected = selectedIndex == index;
                  return (
                    <>
                      <motion.div
                        key={index}
                        whileTap={{ scale: 0.95 }}
                        onTap={() => setSelectedIndex(index)}
                        // onHoverStart={()=> setSelected(true)}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={isSelected ? 'each-song-selected' : 'each-song-unset'}>
                          <Marquee
                            key={isSelected ? 'selected' : 'not-selected'}
                            checkOverflow={isSelected ? true : false}
                            play={isSelected ? true : false}
                          >
                            {song.title}
                          </Marquee>
                        </div>
                      </motion.div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </Draggable>
      </div>
    </>
  );
}

export default WinMusica;
