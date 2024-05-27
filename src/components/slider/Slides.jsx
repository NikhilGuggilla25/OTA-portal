import React, { useState, useEffect } from 'react';
import './Slides.css';
import img2 from '../../assets/images/img2.jpg';
import img1 from '../../assets/images/img1.jpg';

const Slides = () => {
    
    const images =[img2, img1, img2, img1]
    const descriptions = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi, excepturi repellendus doloremque fugit corporis!",
        "Description for slide 2",
        "Description for slide 3",
        "Description for slide 4"
    ];
    const services = ["Independent QaaS", "Custom Product Development", "Devops Cloud Migrations","Automation Testing"]

    const [slide, setSlide] = useState(0);
    const [description, setDescription] = useState(descriptions[0]);
    const [service, setService] = useState(services[0])

    const nextSlide = () => {
        setSlide(slide === images.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? images.length - 1 : slide - 1);
    };

    useEffect(() => {
        setDescription(descriptions[slide]);
        setService(services[slide])
    }, [slide]);


    return (
        <>
            <div className='sliders'>
                <h1 className="title">
                    Our <span className="theme-text">Services</span>
                </h1>
                <hr className="divider4" />
                <div className="slides">
                    {images.map((item, idx) => {
                        return (
                            <img
                                key={idx}
                                src={item}
                                alt={`Slide ${idx + 1}`}
                                className={slide === idx ? "slide" : "slide slide-hidden"}
                            />
                        );
                    })}   
                </div>
                <span className="indicators">
                    {images.map((_, idx) => {
                        return (
                            <button
                            key={idx}
                            className={
                                slide === idx ? "indicator" : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(idx)}
                            ></button>
                        );
                    })}
                </span>
                <div className='slider-content'>
                    <div className="slider-controls">
                        <button className="arrow arrow-left" onClick={prevSlide}>❮</button>
                        <h1 className='service-title'>{service}</h1>
                        <button className="arrow arrow-right" onClick={nextSlide}>❯</button>
                    </div>
                    <div className="description">{description}</div>
                </div>
            </div>


            <section className='workflow'>
                <h1>How we<span className="theme-text"> work</span></h1>
                <hr className="divider5" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum labore culpa velit mollitia quia accusantium maiores nesciunt perspiciatis laboriosam ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus amet placeat sed aspernatur nemo eligendi veniam quo doloremque explicabo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis ipsum nesciunt, voluptatum totam illum aspernatur ipsam nihil perspiciatis voluptates!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit fugiat mollitia culpa numquam earum voluptate animi. Aliquid corrupti vitae pariatur?</p>
            </section>
            
        </>
    )
}

export default Slides
