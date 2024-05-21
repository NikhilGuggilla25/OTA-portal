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
                        <img src={img2} alt="Web Development Illustration" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">Home Automation</h3>
                            <hr className="card-divider" />
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit...
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img2} alt="App Development Illustration" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">Artscape</h3>
                            <hr className="card-divider" />
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit...
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img2} alt="Digital Marketing Illustration" className="card-img-top" />
                        <div className="card-body">
                            <h3 className="card-title">ELab Notes</h3>
                            <hr className="card-divider" />
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
}

export default Cards
