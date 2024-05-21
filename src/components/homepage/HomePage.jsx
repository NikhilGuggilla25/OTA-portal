import React from 'react';
import './HomePage.css';
import Cards from '../cards/Cards';
import img2 from '../../assets/images/img2.jpg';
import html from "../../assets/logos/html.png"
import css from "../../assets/logos/css.png"
import js from "../../assets/logos/javascript.png"
import ts from "../../assets/logos/typescript.png"
import react from "../../assets/logos/react.png"
import angular from "../../assets/logos/angular.png"
import mongodb from "../../assets/logos/mongodb.png"
import flutter from "../../assets/logos/flutter.png"



const HomePage = () => {

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
            <section className='techs'>
                <h1>Our <span className="theme-text">Technologies</span></h1>
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

            {/* <section className='workflow'>
                <div className='steps'>
                    <span className='circle'>1</span>
                    <span className='circle'>2</span>
                    <span className='circle'>3</span>
                    <span className='circle'>4</span>
                </div>
            </section> */}
            
        </>
    )
}

export default HomePage
