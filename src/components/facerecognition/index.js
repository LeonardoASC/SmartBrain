import React from "react";
import './facerecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="flex w-full justify-center items-center my-4">
            <div className="relative">
                {imageUrl && (
                    <img
                        key={imageUrl}
                        id="inputimage"
                        alt="Detected face"
                        src={imageUrl}
                        width='500px'
                        height='auto'
                    />
                )}
                {imageUrl && (
                    <div
                        className="bounding-box"
                        style={{
                            top: box.topRow,
                            right: box.rightCol,
                            bottom: box.bottomRow,
                            left: box.leftCol,
                            position: 'absolute'
                        }}
                    ></div>
                )}
            </div>
        </div>
    );
};

export default FaceRecognition;
