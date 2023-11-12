import React, { useState } from 'react';
import Project from './Projects';

export default function ProjectList({ projects }) {

    const [visibleProjects, setVisibleProjects] = useState(2);

    const loadMoreProjects = () => {
        setVisibleProjects(visibleProjects + 2);
    };

    return (
        <div>
            <h1 className='sassy'>So what have I worked on?</h1>
            {projects.slice(0, visibleProjects).map((project, index) => (
                <Project key={index} {...project} />
            ))}
            {visibleProjects < projects.length && (
                <button onClick={loadMoreProjects}>See More</button>
            )}
        </div>
    );
}