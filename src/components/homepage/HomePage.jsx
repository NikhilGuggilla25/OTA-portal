import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Cards from '../cards/Cards';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/eastfx-a0Artboard 1.png'
import img5 from '../../assets/images/eastfx-a0Artboard 2.png'
import img6 from '../../assets/images/eastfx-a0Artboard 3.png'
import img7 from '../../assets/images/eastfx-a0Artboard 4.png'
import img8 from '../../assets/images/eastfx-a0Artboard 5.png'
import img9 from '../../assets/images/eastfx-a0Artboard 6.png'
import img10 from '../../assets/images/eastfx-a0Artboard 7.png'
import img11 from '../../assets/images/eastfx-a0Artboard 8.png'
import img12 from '../../assets/images/eastfx-a0Artboard 9.png'
import img13 from '../../assets/images/eastfx-a0Artboard 10.png'
import img14 from '../../assets/images/eastfx-a0Artboard 11.png'
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
        "Our dedicated QA team rigorously tests products to ensure they meet the highest standards of quality, performance, and security, providing independencet QA services",
        "Our team of experts can develop cusotm software solutions tailored to your specific  business needs, handling the entire development lifecycle with expertise and precision",
        "Description for slide 3",
        "Description for slide 4"
    ];
    const services = ["Independent QaaS", "Custom Product Development", "Devops Cloud Migrations","Automation Testing"]

    let touchstartX = 0;
    let touchendX = 0;

    const handleGesture = () => {
        if (touchendX < touchstartX) {
            nextSlide();
        }
        if (touchendX > touchstartX) {
            prevSlide();
        }
    };


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
                <p>Introducing OTA Innovations, OTA stands for Over The Air, a self-funded product development company backed by a team of strong technical experts from diverse industries, headquartered in Hyderabad, India. 
We are dedicated to crafting innovative solutions and employing a flexible approach to solve problems, using limited resources in innovative ways. We take ownership right from ideation to execution, handling every step of the SDLC process with expertise and precision.

                </p>
            </section>

            <Cards/>

            <div className='sliders'>
                <h1 className="title">
                    Our <span className="theme-text">Offerings</span>
                </h1>
                <hr className="divider4" />
                <div className="slides" onTouchStart={(e) => touchstartX = e.changedTouches[0].screenX}
                    onTouchEnd={(e) => {
                        touchendX = e.changedTouches[0].screenX;
                        handleGesture();
                    }}>
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
                    {/* <div>
                        <h2 className='workflow-title1'>Consultation</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum labore culpa velit mollitia quia accusantium maiores nesciunt perspiciatis laboriosam ipsum.</p>
                        <h2 className='workflow-title2'>Proposal</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus amet placeat sed aspernatur nemo eligendi veniam quo doloremque explicabo?</p>
                        <h2 className='workflow-title1'>Developement</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis ipsum nesciunt, voluptatum totam illum aspernatur ipsam nihil perspiciatis !</p>
                        <h2 className='workflow-title2'>Deployment</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit fugiat mollitia culpa numquam earum voluptate animi. Aliquid corrupti vitae pariatur?</p>
                    </div> */}
                    <p>Get in touch with us to talk about your idea. To determine the extent, we will evaluate your needs and objectives.</p>
                    <p>We'll send you a comprehensive proposal that includes the project's budget, schedule and scope based on our conversation.</p>
                    <p>Our staff starts working on the proposal as soon as it is accepted, and we'll kepp you informed every step of the way.</p>
                    <p>To guarantee success, we deploy the system following extensive testing and offer training and continuing support</p>
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

            <section  className='faq'>
                <h1>Frequently asked <span className="theme-text">Questions</span></h1>
                <hr className="divider6"/>
                <div className='faq-row'>
                    <div className="faq-col">
                        <details>
                            <summary>What is OTA Innovations?</summary>
                            <p className='faq-ans'>OTA Innovations is a self-funded product development company backed by a team of strong technical experts from diverse industries. We specialize in crafting innovative solutions by employing a flexible approach and leveraging limited resources creatively.</p>
                        </details>
                        <details>
                            <summary>What Industries do you serve?</summary>
                            <p className='faq-ans'>Our expertise spans various industries, including IoT, Pharmaceuticals, and Business Marketing. We develop tailored solutions to address the unique challenges and opportunities in these sectors.</p>
                        </details>
                        <details>
                            <summary>What services do you offer?</summary>
                            <p className='faq-ans'>Our offerings include AI-Powered Ad Magic for personalized advertising, ArtScape for IoT-enabled sand art creation, ELabNotes for secure pharmaceutical data management, custom software development, independent quality assurance (QaaS), and comprehensive software trainings.</p>
                        </details>
                    </div>
                    <div className="faq-col">
                        <details>
                            <summary>How do you approach product development?</summary>
                            <p className='faq-ans'>We follow a comprehensive and iterative approach, starting with thorough research and ideation, followed by prototyping, agile development, rigorous quality assurance, and seamless product launch and support.</p>
                        </details>
                        <details>
                            <summary>What sets OTA Innovations apart?</summary>
                            <p className='faq-ans'>Our unique strengths include creative design, logical problem-solving, client-centric approach, independent QA services, deep market understanding, and end-to-end ownership of the product development lifecycle. We also position our products effectively through strategic marketing.</p>
                        </details>
                        <details>
                            <summary>Where is OTA Innovations located?</summary>
                            <p className='faq-ans'>Our headquarters are located in Hyderabad, India, with an additional office in Dubai, UAE.</p>
                        </details>
                    </div>
                </div>
            </section>
            
            
        </>
    )
}

export default HomePage
