import React from "react";
import Tilt from 'react-parallax-tilt';
import './logo.css';
import Brain from './Brain.png'


const Logo = () => {

    return (
        <div className="mx-10 flex w-full justify-start items-center ">
            <Tilt className="Tilt p-10 rounded-full border">
                <div className=" " >
                    <img alt='logo' src={Brain}/>
                </div>
            </Tilt>
        </div>
    )
}
export default Logo;