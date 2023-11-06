import React from 'react';
import CHeader from './Header.js';
import AboutMe from './AboutMe.js';
import Footer from './LinkBar';

import Projects from './projects.json';

export default function HomePage() {
    const sortedProjects = Projects.sort((a, b) => a.rank - b.rank);
    return (
        <>
            <Footer />
            <CHeader />
            <div className='about-parent'>
                {
                    sortedProjects.map(e => (
                        <AboutMe project={e} />
                    ))
                }
            </div>
        </>
    );
}