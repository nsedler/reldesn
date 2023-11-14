import React, { useState } from 'react';
import bobs from './images/bobs.jpg';

export default function AboutMe() {

    const [showBio, setShowBio] = useState(true);

    const toggleContent = () => {
        setShowBio(!showBio);
    };

    return (
        <>
            <div className='about-parent'>
                <div className='bobs-card-master-parent'>
                    <div className='bobs-hello'>
                        Hello!
                    </div>
                    <div className='bobs-card-parent'>
                        <div className='bob-img-parent'>
                            <img src={bobs} height='240px' />
                        </div>
                        <div className='bob-caption-parent'>
                            Halloween as Bob the Builder
                        </div>
                    </div>
                </div>

                <div className='introduction-parent-container'>
                    <p>My name is Nathaniel, but you can call me Nate.</p>
                    <p>I'm a recent Cincinnati State graduate looking for his next
                        adventure!</p>
                </div>

                <div className='about-me-info-parent-container'>
                    <button
                        className={`tldr-button ${showBio ? 'checked' : ''}`}
                        onClick={toggleContent}
                    >
                        {showBio ? 'Show TLDR' : 'Hide TLDR'}
                    </button>
                    {showBio ? (
                        <div className='aboutme-bio'>
                            <p>
                                At 13 I started tinkering wsith web development,
                                making sites about athletes for my friends. That
                                has sparked a life-long passion with programming.
                                I have since branched out from web-dev and have
                                experience in topics such as data science, software
                                development, and even micro-controllers!
                            </p>
                        </div>
                    ) : (
                        <div className='aboutme-tldr'>
                            <p>
                                tldr of skills / buzzwords:
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>C</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>C#</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>C++</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>Java</span>, <br />
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>Javascript</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>Typescript</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>HTML</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>CSS</span>, <br />
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>Python</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>Arduino</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>ReactJS</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>NodeJS</span>, <br />
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>Django</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>PHP</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>Laravel</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>OOP</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>Visual Basic</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>SQL</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>nosql</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>API’s</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>Fullstack Development</span>,
                                <span style={{ color: '#E46A4E', textDecoration: 'underline' }}>Assembly</span>
                            </p>

                        </div>
                    )}
                </div>
            </div>
        </>
    );
}