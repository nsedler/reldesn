import React from 'react';
import selfie from './images/good_selfie.jpg';
import cincy from './images/cincy.jpg';

export default function CHeader() {
    return (
        <div className="header-parent" style={{ backgroundImage: `url(${cincy})` }}>
            <div className="text-parent">
                <div className='name-info'>
                    <div id="name">
                        Nathaniel Sedler
                    </div>
                    <div id="title">
                        Software Developer
                    </div>
                </div>
            </div>
            <div className="image-parent">
                <img className='selfie-container' src={selfie} alt="Cincinnati Skyline" />
            </div>
        </div>
    );
}