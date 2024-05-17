import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="footer-col">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Products</h4>
                <ul>
                    <li><a href="#">Home Automation</a></li>
                    <li><a href="#">ArtScape</a></li>
                    <li><a href="#">ELab Notes</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Services</h4>
                <ul>
                    <li><a href="#">Independent QaaS</a></li>
                    <li><a href="#">Custom Product Development</a></li>
                    <li><a href="#">Devops Cloud Migrations</a></li>
                    <li><a href="#">Talent Hiring</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>QA Solutions</h4>
                <ul>
                    <li><a href="#">UI & API Testing</a></li>
                    <li><a href="#">Automation Testing</a></li>
                    <li><a href="#">Cross Platform Testing</a></li>
                    <li><a href="#">Performance Testing</a></li>
                    <li><a href="#">End-to-End Product Testing</a></li>
                </ul>
            </div>
            <div>
                <div className="footer-col">
                    <h4>Corporate Training</h4>
                    <ul>
                        <li><a href="#">Simulation Learnings</a></li>
                        <li><a href="#">Offline/Online Trainings</a></li>
                    </ul>
                </div>
                <div id='follow-us' className="footer-col">
                    <h4>follow us</h4>
                    <div className="links">
                        <a href="#"><i > </i></a>
                        <a href="#"><i > </i></a>
                        <a href="#"><i > </i></a>
                        <a href="#"><i > </i></a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
