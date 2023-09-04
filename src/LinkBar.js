import React from 'react';
import GithubLogo from './images/github-mark-white.png';
import LinkedInLogo from './images/In-White-128@2x.png';
import MailLogo from './images/mail-32.png';
import ResumeLogo from './images/icons8-resume-90.png';


export default function Footer() {
    return (
        <>
            <div className='footer-parent'>

                <div className='card-container'>
                    <a href='https://github.com/nsedler' target='_blank'>
                        <div className='card-link'>
                            <div className='card-logo'>
                                <img src={GithubLogo} />
                            </div>
                            <div className='card-name'>
                                Github
                            </div>
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/nate-sedler-6abbb01b1/' target='_blank'>
                        <div className='card-link'>
                            <div className='card-logo'>
                                <img src={LinkedInLogo} />
                            </div>
                            <div className='card-name'>
                                LinkedIn
                            </div>
                        </div>
                    </a>
                    <a href='mailto:nsedler1@gmail.com' target='_blank'>
                        <div className='card-link'>
                            <div className='card-logo'>
                                <img src={MailLogo} />
                            </div>
                            <div className='card-name'>
                                nsedler1@gmail.com
                            </div>
                        </div>
                    </a>
                    <a href='/current_resume.pdf' target='_blank'>
                        <div className='card-link'>
                            <div className='card-logo'>
                                <img src={ResumeLogo} />
                            </div>
                            <div className='card-name'>
                                Resume
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
};