import React, { useState } from 'react';
import Project from './Projects';

export default function ProjectList({ projects }) {

    const [visibleProjects, setVisibleProjects] = useState(2);

    const loadMoreProjects = () => {
        setVisibleProjects(visibleProjects + 2);
    };

    return (
        <div className='project-list-parent'>
            <h1 className='sassy'>So what have I worked on?</h1>
            {projects.slice(0, visibleProjects).map((project, index) => (
                <Project key={index} {...project} />
            ))}
            {visibleProjects < projects.length && (
                <button className='seemore-button' onClick={loadMoreProjects}>see more...</button>
            )}
        </div>
    );
}