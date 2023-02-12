import React from "react";
import Leading from "../components/Leading";
import img from '../assets/hero.jpg';

const Gallery = () => {
    return (
        <>
            <Leading />
            <div className="mx-20 my-10">
                <div className="grid grid-cols-4 gap-3">
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                    <img src={img} />
                </div>
            </div>
        </>
    );
}

export default Gallery;