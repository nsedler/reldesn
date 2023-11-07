import React from 'react';
import selfie from './images/good_selfie.jpg';
import github from './images/github-mark-white.png';
import linkedin from './images/In-White-128@2x.png';

export default function CHeader() {
    return (
        <div className="header-parent">
            <div className='header-name'>
                Sedler<br></br>Nate
            </div>
            <div className='header-headshot-parent'>
                <div className='header-img-container'>
                    <div className='header-social-img-container'>
                        <div className='header-img-github'>
                            <img src={github} height='35px' alt="GitHub" />
                        </div>
                        <div className='header-img-linkedin'>
                            <img src={linkedin} height='35px' alt="LinkedIn" />
                        </div>
                    </div>
                    <div className='header-headshot'>
                        <img src={selfie} alt='personal headshot' height="315px" />
                    </div>
                </div>
            </div>
            <div className='header-title-parent'>
                Web Dev<br />
                Software Dev<br />
                Tech Enthusiast<br />
            </div>
        </div>

    );
}