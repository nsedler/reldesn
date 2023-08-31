import React from 'react';
import GithubLogo from './images/github-mark-white.png';


export default function Footer() {
    return (
        <>
            <div className='footer-parent'>
                <div className='card-container'>
                    <div className='card-link'>
                        <div className='card-logo'>
                            <img src={GithubLogo} />
                        </div>
                        <div className='card-name'>
                            Github
                        </div>
                    </div>
                    <div className='card-link'>
                        <div className='card-logo'>
                            <img src={GithubLogo} />
                        </div>
                        <div className='card-name'>
                            LinkedIn
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};