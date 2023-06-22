import React, { Component } from 'react'
import './Portfolio.css';
import AOS from 'aos'
import 'aos/dist/aos.css';

export default class Portfolio extends Component {
    componentDidMount() {
        AOS.init();
    }
    render() {
        return (
            <>
                <div>
                    <div className="header-banner section1">
                        <div className="paralex">
                            <div className="parallax-container">
                                <div className="parallax"><img src="./images/technology-1.jpg" alt="bg" style={{ transform: 'translate3d(-50%, 0px, 0px)', opacity: '1' }} /></div>
                                <div className="stellarnav">
                                    <ul>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#skill">Skills</a></li>
                                        <li><a href="#experience">Experience</a></li>
                                        <li><a href="#education">Education</a></li>
                                    </ul>
                                </div>
                                <nav className="navigation fixed">
                                    <div className="nav-wrapper">
                                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                                            <li><a href="#about">About</a></li>
                                            <li><a href="#skill">Skills</a></li>
                                            <li><a href="#experience">Experience</a></li>
                                            <li><a href="#education">Education</a></li>
                                            <li><a href="/projects">Projects</a></li>
                                        </ul>
                                    </div>
                                </nav>
                                <nav className="navigation">
                                    <div className="nav-wrapper">
                                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                                            <li><a href="#about">About</a></li>
                                            <li><a href="#skill">Skills</a></li>
                                            <li><a href="#experience">Experience</a></li>
                                            <li><a href="#education">Education</a></li>
                                            <li><a href="/projects">Projects</a></li>
                                        </ul>
                                    </div>
                                </nav>
                                <div className="section">
                                    <div className="row container" id="mee">
                                        <div className="row">
                                            <div className="col s12 m4"></div>
                                            <div className="col s12 m4">
                                                <div>
                                                    <h5 className="center-align"><span className="btn-floating btn-large pulse"><img src="./images/BilalHussain.png" className="circle responsive-img" width="200" alt="BilalHussain" /></span></h5>
                                                </div>
                                                <div>
                                                    <h3 className="center-align">Bilal Hussain K</h3>
                                                </div>
                                                <div className="row">
                                                    <div className="col m6 s12">
                                                        <h5 className="center-align"><a href="#contact" className="waves-effect waves-light btn-small">Hire Me</a> </h5>
                                                    </div>
                                                    <div className="col m6 s12">
                                                        <h5 className="center-align"><span className="waves-effect waves-light btn-small"><a href="https://drive.google.com/file/d/152vRrSHuQyFaw39UVOYE1Bwm5TiY5gGR/view?usp=drivesdk" className="nothing"> Download CV</a></span></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col s12 m4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="social-icons section2">
                        <div className="container social-ic">
                            <div>
                                <h5 className="center-align"><a href="https://www.instagram.com/bilal_hussain_070/" target="_blank" rel="noopener noreferrer"> <i className="fa gs fa-instagram" aria-hidden="true"></i></a><a href="https://github.com/Bilalb786" target="_blank" rel="noopener noreferrer"> <i className="fa gs fa-github" aria-hidden="true"></i></a><a href="https://github.com/Bilalb786" target="_blank" rel="noopener noreferrer"> </a><a href="https://www.linkedin.com/in/bilal-hussain" target="_blank" rel="noopener noreferrer"> <i className="fa gs fa-linkedin" aria-hidden="true"></i></a><a href="https://www.linkedin.com/in/bilal-hussain" target="_blank" rel="noopener noreferrer"> </a></h5>
                            </div>
                        </div>
                    </div>
                    <div id="about"></div>
                    <div className="about-info section3">
                        <div className="container z-depth-3">
                            <div className="row">
                                <div className="col m6 s12">
                                    <h4>Summary</h4>
                                    <div className="objective">
                                        <p className="summary">Professional developer with about 2 years of experience in analysing &amp; As an BCA graduate with total experience 
                                        3 years and relavent 2 years of work experience in software testing with knowledge in object- orientedprogramming, debugging code and designing test cases 
                                        seeks to join thegrowing organizations. Am quick learner and be successful working in bothteam and self-directed settings.</p>
                                    </div>
                                </div>
                                <div className="col m6 s12">
                                    <h4>Basic Information</h4>
                                    <div className="personal">
                                        <table className="striped">
                                            <tbody>
                                                <tr>
                                                    <td className="bold">Name</td>
                                                    <td>Bilal Hussain K</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">Email</td>
                                                    <td>bilalhussain@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">Phone</td>
                                                    <td>+91 63802 61891</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">Address</td>
                                                    <td>#B14, Tholkappiyar st, Pammal</td>
                                                </tr>
                                                <tr>
                                                    <td className="bold">Languages</td>
                                                    <td>Tamil, English</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="skill"></div>
                    <div className="personal-skills section4" style={{ overflow: 'hidden' }}>
                        <div className="skill-heading space">
                            <h5 className="center-align abt">Professional Skills</h5>
                        </div>
                        <div className="container z-depth-3 ">
                            <div className="row" style={{ padding: '20px' }}>
                                <div className="pgs">
                                    <div className="col m6 s12 aos-init" data-aos-duration="2000" data-aos="fade-right">
                                        <div className="col m10 s12">
                                            <h6 className="progress-name">Manual Testing</h6>
                                        </div>
                                        <div className="col m11 s12">
                                            <div className="progress">
                                                <div className="determinate" style={{ width: '90%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pgs">
                                    <div className="col m6 s12 aos-init" data-aos-duration="2000" data-aos="fade-left">
                                        <div className="col m10 s12">
                                            <h6 className="progress-name">HTML / CSS &amp; Bootstrap / JS </h6>
                                        </div>
                                        <div className="col m11 s12">
                                            <div className="progress">
                                                <div className="determinate" style={{ width: '90%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pgs">
                                    <div className="col m6 s12 aos-init" data-aos-duration="2000" data-aos="fade-right">
                                        <div className="col m10 s12">
                                            <h6 className="progress-name">Java</h6>
                                        </div>
                                        <div className="col m11 s12">
                                            <div className="progress">
                                                <div className="determinate" style={{ width: '70%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pgs">
                                    <div className="col m6 s12 aos-init" data-aos-duration="2000" data-aos="fade-left">
                                        <div className="col m10 s12">
                                            <h6 className="progress-name">ReactJs</h6>
                                        </div>
                                        <div className="col m11 s12">
                                            <div className="progress">
                                                <div className="determinate" style={{ width: '50%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pgs">
                                    <div className="col m6 s12 aos-init" data-aos-duration="2000" data-aos="fade-right">
                                        <div className="col m10 s12">
                                            <h6 className="progress-name">Selenium WebDriver</h6>
                                        </div>
                                        <div className="col m11 s12">
                                            <div className="progress">
                                                <div className="determinate" style={{ width: '70%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pgs">
                                    <div className="col m6 s12 aos-init" data-aos-duration="2000" data-aos="fade-left">
                                        <div className="col m10 s12">
                                            <h6 className="progress-name">BDD Cucumber and TestNG Frameworks</h6>
                                        </div>
                                        <div className="col m11 s12">
                                            <div className="progress">
                                                <div className="determinate" style={{ width: '60%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pgs">
                                    <div className="col m3 s12 aos-init" data-aos-duration="2000" data-aos="fade-right"></div>
                                    <div className="col m6 s12 aos-init" data-aos-duration="2000" data-aos="fade-up">
                                        <div className="col m10 s12">
                                            <h6 className="progress-name">Katalon Studio</h6>
                                        </div>
                                        <div className="col m11 s12">
                                            <div className="progress">
                                                <div className="determinate" style={{ width: '60%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col m3 s12 aos-init" data-aos-duration="2000" data-aos="fade-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="skill"></div>
                    <div className="personal-skills section4" style={{ overflow: 'hidden' }}>
                        <div className="skill-heading space">
                            <h5 className="center-align abt">Personal Skills</h5>
                        </div>
                        <div className="container z-depth-3 ">
                            <div className="row aos-init" data-aos-duration="2000" data-aos="zoom-in" style={{ padding: '20px' }}>
                                <div id="skills">
                                    <ul>
                                        <li>Empathic Listener, Written And Verbal Communication Skills.</li>
                                        <li>Creative Thinker And Problem Solver.</li>
                                        <li>Team Player, Highly Motivated And Self-Manageable.</li>
                                        <li>Adaptability And Ability To Stay Composed When Faced With Unexpected Challenges</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="experience"></div>
                    <div className="experience section6" style={{ overflow: 'hidden' }}></div>
                        <div className="skill-heading space">
                            <h5 className="center-align abt">Work Experience</h5>
                        </div>
                        <div className="container ">
                            <div className="row d-flex">
                                <div className="col m3 s12 z-depth-3 exp-left-exp aos-init" data-aos-duration="2000" data-aos="fade-right">
                                    <h6>Oct 2021 - Present</h6>
                                    <h5>Jr. Automation Software Tester <br /><br />Flyers Soft</h5>
                                </div>
                                <div className="col m9 s12 z-depth-3 exp-right aos-init" data-aos-duration="2000" data-aos="fade-left">
                                    <div className="list">
                                        <ul>
                                            <li>Having exposure in Finance Domain. Involved in Test Case Writing & Test Execution.</li>
                                            <li>Selected and implemented appropriate automation tools and designed andmaintained automation frameworks.</li>
                                            <li>Experience in Data Driven Framework, Sound Knowledge in using POM design patterns in automation frameworks.</li>
                                            <li>Hands on basics in Selenium and Katalon studio. Good knowledge in writing x-path and other locators.</li>
                                            <li>Involved in Defect Tracking Process (Bug Life Cycle) & Bug Report Preparation. Selected and implemented 
                                                appropriate automation tools and designed andmaintained automation frameworks. </li>
                                            <li>Involved in Functional, Integration, Regression and Retest. Worked on various Agile projects & aware of all agile ceremonies.</li>
                                            <li>Good Knowledge in maintaining Automation Code in cloud repositories using GIT.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="experience"></div>
                    <div className="experience section6" style={{ overflow: 'hidden' }}>
                        <div className="skill-heading space">
                            <h5 className="center-align abt">Projects</h5>
                        </div>
                            <div className="row d-flex">
                                <div className="col m3 s12 z-depth-3 exp-left-exp aos-init" data-aos-duration="2000" data-aos="fade-right">
                                    <h6> 2022 - Present</h6>
                                    <h5>Project: Omnex Health Care</h5>
                                </div>
                                <div className="col m9 s12 z-depth-3 exp-right aos-init" data-aos-duration="2000" data-aos="fade-left">
                                    <div className="list">
                                        <ul>
                                            <li>The Scope of the project is to maintain and manage the Hospital Management activities effectively. The Project isto test and functionality changes 
                                                developed for the Pulse Application that deals with Health Care and Hospice software.</li>
                                            <li>Involved in writing automation test scripts using Selenium Web driver. Involved in executing Test Scripts using TestNG framework.</li>
                                            <li>Build and analyze Summary of performance Test Analysis report. Identifying the Test Scenarios and writing test cases according to functional specification.</li>
                                            <li>Performing Functional & other System Testing to check the application stability.
                                                Monitor the server-side performance of the application during execution using Dynatrace and mention the bottlenecks that occurred in the report.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex">
                                <div className="col m3 s12 z-depth-3 exp-left-exp aos-init" data-aos-duration="2000" data-aos="fade-right">
                                    <h6>Nov 2021 - Feb 2022</h6>
                                    <h5>Jr. Web Developer <br /><br />Edenred</h5>
                                </div>
                                <div className="col m9 s12 z-depth-3 exp-right aos-init" data-aos-duration="2000" data-aos="fade-left">
                                    <div className="list">
                                        <ul>
                                            <li>This Software is a financial application which is used tomanage information about the Financial Transaction 
                                                between the individual person or the company to the thirdparty.</li>
                                            <li>Analyzing the SRS & understanding the Test Plans. Identifying the Test Scenarios and writing test cases.</li>
                                            <li>Reviewing the Test Cases. Performing Functional Testing according to functional specifications. Involved in Defect Tracking Process</li>
                                            <li>Logging Defects in Defect Tracking Tool & get it fixed. Performing Sanity, Regression & Retest according to the need.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="education"></div>
                    <div className="education section7" style={{ overflow: 'hidden' }}>
                        <div className="skill-heading space">
                            <h5 className="center-align abt">Education</h5>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col m3 s12 z-depth-3 exp-left aos-init" data-aos-duration="2000" data-aos="fade-right">
                                    <h6>June 2020 - April 2022</h6>
                                    <h5>BCA</h5>
                                </div>
                                <div className="col m9 s12 z-depth-3 right-side exp-right aos-init" data-aos-duration="2000" data-aos="fade-left">
                                    <h5>TamilNadu Open University, <br /> Saidapet</h5>
                                    <p>With 72.2 %</p>
                                </div>
                            </div>
                        </div>
                        <div className="container ">
                            <div className="row">
                                <div className="col m3 s12 exp-left z-depth-3 aos-init" data-aos-duration="2000" data-aos="fade-right">
                                    <h6>June 2018 - May 2020</h6>
                                    <h5>Diploma In EEE</h5>
                                </div>
                                <div className="col m9 s12 z-depth-3 right-side exp-right aos-init" data-aos-duration="2000" data-aos="fade-left">
                                    <h5>IRT Polytechnic Collage, <br /> Chrompet</h5>
                                    <p>With 80 %</p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col m3 s12 exp-left z-depth-3 aos-init" data-aos-duration="2000" data-aos="fade-right">
                                    <h6>June 2017 - May 2018</h6>
                                    <h5>XII</h5>
                                </div>
                                <div className="col m9 s12 right-side z-depth-3 exp-right aos-init" data-aos-duration="2000" data-aos="fade-left">
                                    <h5>Chrompet Boys Higher Secondary School, <br /> Chrompet</h5>
                                    <p>With 68 %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="footer">
                        <div className="container">
                            <div>
                                <h5 className="center-align"><a href="https://www.instagram.com/bilal_hussain_070/" target="_blank" rel="noopener noreferrer" className="instagram">  <i className="fa sg fa-instagram" aria-hidden="true"></i></a><a href="https://github.com/Bilalb786" target="_blank" rel="noopener noreferrer" className="github"> <i className="fa sg fa-github" aria-hidden="true"></i></a><a href="https://www.linkedin.com/in/bilal-hussain" target="_blank" rel="noopener noreferrer" className="github"> <i className="fa sg fa-linkedin" aria-hidden="true"></i></a></h5>
                            </div>
                        </div>
                    </div>
                    <div className="footer section9"></div>
                </div>
            </>
        )
    }
}