import React from 'react';
import PyLogo from './images/python-logo.png';

import Projects from './projects.json';

export default function AboutMe({ project }) {
    return (
        <>

            <div className='info-card'>
                <div className='info-logo-container'>
                    <img src={PyLogo} height="128px" />
                </div>
                <div className='info-text-container'>
                    <div id='project-title'>
                        <a href='/'>{project.title}</a>
                    </div>
                    <div id='project-description'>
                        {project.description}
                    </div>
                    <div id='project-stack'>
                        {project.stack}
                    </div>
                </div>
            </div>
        </>
    );
}