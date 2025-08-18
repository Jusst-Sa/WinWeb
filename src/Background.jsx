import React, { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three"; // ensure three.js is available
import "./YourStyles.css";

export default function VantaBackground() {
  const ref = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: ref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          backgroundColor: 0x000000,
          color1: 0xffffff,
          color2: 0xff0000,
          birdSize: 0.5,
          wingSpan: 40,
          separation: 13,
          alignment: 18,
          cohesion: 14,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={ref} className="vanta-container" />;
}
