import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Project({ image, title, description, link, stack, media }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className='project-parent-container'>
                <h1 className='project-title'><a href={link}>{title}</a></h1>
                <div className='project-slider'>
                    <Slider {...settings}>
                        {media.map((item, index) => (
                            <div key={index}>
                                {item.type === 'image' && (
                                    <img src={item.url} height='175px' alt={`${title} Image ${index + 1}`} />
                                )}
                                {item.type === 'video' && (
                                    <video height="175px" controls>
                                        <source src={item.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        ))}

                    </Slider>
                </div>
                <h3 className='project-description'>{description}</h3>
                <p className='project-stack'>{stack}</p>

            </div>
        </>
    );
}