import React from 'react';
import './Cards.css';
import img2 from '../../assets/images/img2.jpg';

const Cards = () => {

    return (
        <>
            <div className="card-container">
                <h1 className="title">
                    Our <span className="theme-text">Products</span>
                </h1>
                <hr className="divider" />
                <div className="row">
                    <div className="card">
                        <img src={img2} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">Home Automation</h3>
                            <hr className="card-divider" />
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit...
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img2} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">Artscape</h3>
                            <hr className="card-divider" />
                            <p className="card-text">
                                An Innovative IOT product that combines technology and artistic expression, allowing users to create intricate sand art designs with precision and ease.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img2} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">ELab Notes</h3>
                            <hr className="card-divider" />
                            <p className="card-text">
                                A secure, cloud-based platform for the pharmaceutical industry to store and manage critical data and insights, ensuring data integrity and compliance.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img2} alt="" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">AI powered Ad Magic</h3>
                            <hr className="card-divider" />
                            <p className="card-text">
                                Our flagship product leverages AI and Machine learning for personalized ad creation, advance audience targeting, real-time campaign optimization and maximizing your marketing ROI.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
}

export default Cards
