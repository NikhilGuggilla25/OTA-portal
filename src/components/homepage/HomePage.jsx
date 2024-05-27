import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Cards from '../cards/Cards';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import html from "../../assets/logos/html.png"
import css from "../../assets/logos/css.png"
import js from "../../assets/logos/javascript.png"
import ts from "../../assets/logos/typescript.png"
import react from "../../assets/logos/react.png"
import angular from "../../assets/logos/angular.png"
import mongodb from "../../assets/logos/mongodb.png"
import flutter from "../../assets/logos/flutter.png"



const HomePage = () => {

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

    const logos = [html, css, js, ts, react, angular, mongodb, flutter];

    return (
        <>
            <section className='homepage'>
                <div className='text-content'>
                    <h3>Empowering Tomorrow By Cultivating Innovation</h3>
                    <p>we tailor cutting-edge software solutions to your unique needs.</p>
                    <button className='connect'>Let's Connect</button>
                </div>
                <img src={img2} alt="Graphic illustrating innovation" className='homepage-image' />
            </section>
            <section className='aboutus'>
                <h1>About <span className="theme-text">Us</span></h1>
                <hr className="divider1" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita similique inventore iusto consectetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </section>

            <Cards/>

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


            <section className='workflow-sec'>
                <h1>How we<span className="theme-text"> work</span></h1>
                <hr className="divider5" />

                <div className='workflow'>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum labore culpa velit mollitia quia accusantium maiores nesciunt perspiciatis laboriosam ipsum.</p>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus amet placeat sed aspernatur nemo eligendi veniam quo doloremque explicabo?</p>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis ipsum nesciunt, voluptatum totam illum aspernatur ipsam nihil perspiciatis !</p>
    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit fugiat mollitia culpa numquam earum voluptate animi. Aliquid corrupti vitae pariatur?</p>
                </div>
            </section>

            <section className='techs'>
                <h1>Technologies <span className="theme-text">we serve</span></h1>
                <hr className="divider3" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, qui.</p>
                <div className='logos'>
                    <div className='logos-slide'>
                        {logos.map((logo, index) => (
                            <img src={logo} alt="" key={index} />
                        ))}
                    </div>
                    <div className='logos-slide'>
                        {logos.map((logo, index) => (
                            <img src={logo} alt="" key={index + logos.length} />
                        ))}
                    </div>
                </div>
            </section>
            
            
        </>
    )
}

export default HomePage
