import React, { useEffect, useRef, useState } from 'react';
import AudioFile from "./Audio.mp3"
import AudioImage from "./AudioImage.png"

const Task = () => {
    const [play, setPlay] = useState(false);
    const eleRef = useRef();
    let audioRef = useRef();
    
    useEffect(() => {
        eleRef.current.style.color = "crimson";
        eleRef.current.innerText = "Pachabottesina";
    }, []);

    let playORpause = () => {
        if (play) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlay(!play);
    };

    return (
        <div>
            <h1 ref={eleRef}>Click the image to play/pause</h1>
            <img 
                src={AudioImage} 
                alt="Audio Placeholder" 
                onClick={playORpause} 
                style={{ width: "200px", cursor: "pointer" }}
            />
            <audio src={AudioFile} ref={audioRef}></audio>
        </div>
    );
};

export default Task;