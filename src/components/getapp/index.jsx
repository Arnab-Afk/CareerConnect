import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

GetApp.propTypes = {
    
};

function GetApp(props) {
    const {className} = props
    return (
        <section className={`get-app-sc ${className}`}>
            <div className="tf-container">
            <div className="row align-item-center">
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.3s">
                <div className="wd-get-app">
                    <div className="thumb ani4">
                    <img src={require ('../../assets/images/review/phone.png')} alt="images" />
                    </div>
                </div>
                </div>
                <div className="col-lg-6 wow fadeInRight">
                <div className="wd-get-app">
                    <div className="content">
                    <h4>Download The App</h4>
                    <p>Structured digital interviews increase the predictive <br /> validity of your hires by 65%.</p>
                    <div className="group-btn">
                        <Link to="#"><img src={require ('../../assets/images/review/btn2.png')} alt="images" /></Link>
                        <Link to="#"><img src={require ('../../assets/images/review/btn1.png')} alt="images" /></Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default GetApp;