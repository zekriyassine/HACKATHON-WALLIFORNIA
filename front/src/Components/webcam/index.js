import React from 'react';
import Webcam from "react-webcam";

class WebcamCapture extends React.Component {
 

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <div>
                <Webcam
                    audio={false}
                    height={350}
                    ref={ (el) => {this.webcam = el} }
                    screenshotFormat="image/jpeg"
                    width={350}
                    videoConstraints={videoConstraints}
                />
            </div>
        );
    }
}

export default WebcamCapture;
