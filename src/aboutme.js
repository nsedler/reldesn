import React from 'react';
import PyLogo from './images/python-logo.png';

export default function AboutMe() {
    return (
        <>
            <div className='about-parent'>
                <div className='info-card'>
                    <div className='info-logo-container'>
                        <img src={PyLogo} height="128px"/>
                    </div>
                    <div className='info-text-container'>
                        <div id='project-title'>
                            <a href='/'>Eddie Bot</a>
                        </div>
                        <div id='project-description'>
                            A discord bot made in java and re-written in rust.
                        </div>
                        <div id='project-stack'>
                            Java, JDA (Java Discord API), Herkou
                        </div>
                    </div>
                </div>
                <div className='info-card'>
                    <div className='info-logo-container'>
                        <img src={PyLogo} height="128px"/>
                    </div>
                    <div className='info-text-container'>
                        <div id='project-title'>
                            <a href='/'>Eddie Bot</a>
                        </div>
                        <div id='project-description'>
                            A discord bot made in java and re-written in rust.
                        </div>
                        <div id='project-stack'>
                            Java, JDA (Java Discord API), Herkou
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}