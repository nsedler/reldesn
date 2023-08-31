import React from 'react';
import PyLogo from './images/langs/python-logo.png';
import CppLogo from './images/langs/c-logo.png';
import HtmlLogo from './images/langs/pngegg.png';
import LaravelLogo from './images/langs/laravel-logo.png';
import JavaLogo from './images/langs/pngwing.com.png';


export default function AboutMe({ project }) {
    let imgMap = {
        'python': PyLogo,
        'cpp': CppLogo,
        'html': HtmlLogo,
        'laravel': LaravelLogo,
        'java': JavaLogo
    };
    return (
        <>

            <div className='info-card'>
                <div className='info-logo-container'>
                    <div id='project-logo'>
                        <img src={imgMap[project.image]} />
                    </div>
                    <div id='project-title'>
                        <a href={project.link}>{project.title}</a>
                    </div>
                </div>
                <div className='info-text-container'>
                    
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