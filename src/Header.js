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
                        <a href='https://github.com/nsedler'>
                            <img src={github} height='35px' alt="GitHub" />
                            </a>
                        </div>
                        <div className='header-img-linkedin'>
                        <a href='https://www.linkedin.com/in/nate-sedler-6abbb01b1/'>
                            <img src={linkedin} height='35px' alt="LinkedIn" />
                        </a>
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