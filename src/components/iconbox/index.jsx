import React from 'react';
import PropTypes from 'prop-types';

import img from '../../assets/images/job/img-home-1.jpg'
import Couter from './Couter';
import { Link } from 'react-router-dom';

IconBox.propTypes = {
    
};

function IconBox(props) {
    return (
        <section className="wd-iconbox style-1">
            <div className="tf-container">
                <div className="row">
                    <div className="box">
                    <div className="column-6">
                        <div className="img-iconbox">
                        <img src={img} alt='img' />
                        </div>
                    </div>
                    <div className="column-6 background2">
                        <div className="group-iconbox">
                        <div className="title-iconbox">
                            <h1>What can I do with Jobtex?</h1>
                            <p>
                            Streamline your hiring process with strategic channels to
                            reach qualified candidates
                            </p>
                        </div>
                        <div className="text-iconbox wow fadeInRight">
                            
                            <div className="tf-iconbox style-1">
                            <div className="box-header">
                                <div className="icon">
                                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M6.15866 20.2094C7.94844 20.2094 9.39931 18.7652 9.39931 16.9836C9.39931 15.2021 7.94844 13.7578 6.15866 13.7578C4.36888 13.7578 2.91797 15.2021 2.91797 16.9836C2.91797 18.7652 4.36888 20.2094 6.15866 20.2094Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M10.1094 27.9033C10.8671 27.6129 11.3508 26.9033 11.3508 26.0968V25.371C11.3508 21.5 8.98078 20.2097 6.69134 20.2097H5.65946C3.37003 20.2097 1 21.5 1 25.371V26.0968C1 26.9033 1.4998 27.6129 2.24144 27.9033C3.1282 28.242 4.48249 28.5968 6.17538 28.5968C7.86827 28.5968 9.20649 28.242 10.1094 27.9033Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M21.0571 33.1127C22.8468 33.1127 24.2977 31.6685 24.2977 29.8869C24.2977 28.1054 22.8468 26.6611 21.0571 26.6611C19.2673 26.6611 17.8164 28.1054 17.8164 29.8869C17.8164 31.6685 19.2673 33.1127 21.0571 33.1127Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M24.9902 40.8059C25.748 40.5155 26.2317 39.8059 26.2317 38.9994V38.2736C26.2317 34.4026 23.8616 33.1123 21.5722 33.1123H20.5403C18.2509 33.1123 15.8809 34.4026 15.8809 38.2736V38.9994C15.8809 39.8059 16.3807 40.5155 17.1223 40.8059C18.0091 41.1446 19.3634 41.4994 21.0562 41.4994C22.7491 41.4994 24.0873 41.1446 24.9902 40.8059Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M21.0571 7.95161C22.8468 7.95161 24.2977 6.50737 24.2977 4.72581C24.2977 2.94424 22.8468 1.5 21.0571 1.5C19.2673 1.5 17.8164 2.94424 17.8164 4.72581C17.8164 6.50737 19.2673 7.95161 21.0571 7.95161Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M24.9902 15.6447C25.748 15.3544 26.2317 14.6447 26.2317 13.8383V13.1125C26.2317 9.24149 23.8616 7.95117 21.5722 7.95117H20.5403C18.2509 7.95117 15.8809 9.24149 15.8809 13.1125V13.8383C15.8809 14.6447 16.3807 15.3544 17.1223 15.6447C18.0091 15.9834 19.3634 16.3383 21.0562 16.3383C22.7491 16.3383 24.0873 15.9834 24.9902 15.6447Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M35.8247 20.2094C37.6145 20.2094 39.0653 18.7652 39.0653 16.9836C39.0653 15.2021 37.6145 13.7578 35.8247 13.7578C34.0349 13.7578 32.584 15.2021 32.584 16.9836C32.584 18.7652 34.0349 20.2094 35.8247 20.2094Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M39.7754 27.9033C40.5331 27.6129 41.0168 26.9033 41.0168 26.0968V25.371C41.0168 21.5 38.6468 20.2097 36.3574 20.2097H35.3255C33.036 20.2097 30.666 21.5 30.666 25.371V26.0968C30.666 26.9033 31.1658 27.6129 31.9075 27.9033C32.7942 28.242 34.1485 28.5968 35.8414 28.5968C37.5343 28.5968 38.8725 28.242 39.7754 27.9033Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path d="M34.2767 31.5645C32.8095 33.5483 30.9232 35.1935 28.7305 36.3548" stroke="#148160"
                                    strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.28711 11.4188C10.0445 9.27366 12.3178 7.59624 14.9297 6.54785" stroke="#148160"
                                    strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.3177 36.3548C11.125 35.1935 9.23866 33.5483 7.77148 31.5645" stroke="#148160"
                                    strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27.1191 6.54785C29.731 7.59624 32.0043 9.27366 33.7617 11.4188" stroke="#148160"
                                    strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                            </div>
                            <div className="box-content">
                                <h1 className="box-title">
                                <Link to="#">Reduce Hiring bias</Link>
                                </h1>
                                <p>
                                Structured digital interviews increase the predictive
                                validity of your hires by 65%.
                                </p>
                            </div>
                            </div>
                            
                            <div className="tf-iconbox style-1">
                            <div className="box-header">
                                <div className="icon">
                                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M6.24304 32.3201C8.06215 32.3201 9.53681 30.8522 9.53681 29.0414C9.53681 27.2306 8.06215 25.7627 6.24304 25.7627C4.42392 25.7627 2.94922 27.2306 2.94922 29.0414C2.94922 30.8522 4.42392 32.3201 6.24304 32.3201Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M10.2587 40.7947C11.0289 40.4997 11.5205 39.7784 11.5205 38.9587V37.5652C11.5205 33.6308 9.11161 32.3193 6.78464 32.3193H5.73585C3.40888 32.3193 1 33.6308 1 37.5652V38.9587C1 39.7784 1.50799 40.4997 2.2618 40.7947C3.16309 41.139 4.53958 41.4997 6.26023 41.4997C7.98087 41.4997 9.34102 41.139 10.2587 40.7947Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M35.0848 32.3201C36.9039 32.3201 38.3786 30.8522 38.3786 29.0414C38.3786 27.2306 36.9039 25.7627 35.0848 25.7627C33.2657 25.7627 31.791 27.2306 31.791 29.0414C31.791 30.8522 33.2657 32.3201 35.0848 32.3201Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M31.086 40.7947C30.3158 40.4997 29.8242 39.7784 29.8242 38.9587V37.5652C29.8242 33.6308 32.2331 32.3193 34.5601 32.3193H35.6089C37.9358 32.3193 40.3447 33.6308 40.3447 37.5652V38.9587C40.3447 39.7784 39.8367 40.4997 39.0829 40.7947C38.1816 41.139 36.8051 41.4997 35.0845 41.4997C33.3638 41.4997 31.9873 41.139 31.086 40.7947Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M20.6649 8.05738C22.484 8.05738 23.9587 6.58946 23.9587 4.77869C23.9587 2.96792 22.484 1.5 20.6649 1.5C18.8458 1.5 17.3711 2.96792 17.3711 4.77869C17.3711 6.58946 18.8458 8.05738 20.6649 8.05738Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M24.6786 16.533C25.4488 16.2379 25.9404 15.5166 25.9404 14.697V13.3035C25.9404 9.36909 23.5315 8.05762 21.2046 8.05762H20.1558C17.8288 8.05762 15.4199 9.36909 15.4199 13.3035V14.697C15.4199 15.5166 15.9279 16.2379 16.6817 16.533C17.583 16.8773 18.9595 17.2379 20.6801 17.2379C22.4008 17.2379 23.7609 16.8773 24.6786 16.533Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path d="M20.6641 28.2219V19.6973" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20.8611 28.4344L28.2353 32.6967" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20.5656 28.5L13.1914 32.7623" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                            </div>
                            <div className="box-content">
                                <h1 className="box-title">
                                <Link to="#">Save time & headspace</Link>
                                </h1>
                                <p>
                                Reduce your time-to-hire by up to 75% and free up
                                headspace for other HR priorities.
                                </p>
                            </div>
                            </div>
                            
                            <div className="tf-iconbox style-1">
                            <div className="box-header">
                                <div className="icon">
                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M24.6022 17.4097C26.8874 19.6775 26.8874 23.3718 24.6022 25.6396C22.317 27.9074 18.6241 27.9074 16.3389 25.6396C14.0537 23.3718 14.0537 19.6775 16.3389 17.4097C17.8563 15.8918 20.0135 15.398 21.9514 15.9101"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M29.4277 12.6188C34.3637 17.5385 34.3637 25.5123 29.4277 30.4319C24.4917 35.3516 16.4661 35.3516 11.5301 30.4319C6.59412 25.5123 6.59412 17.5385 11.5301 12.6188C15.7532 8.41242 22.2248 7.80889 27.106 10.8082"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M28.7514 3.96788C21.5302 0.602766 12.6636 1.88297 6.70384 7.80849C-0.901279 15.38 -0.901279 27.6517 6.70384 35.2232C14.309 42.7947 26.649 42.7947 34.2541 35.2232C40.9634 28.5295 41.7496 18.1782 36.6124 10.6432"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path d="M30.6152 11.4297L31.2368 10.8262" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M29.4279 12.6182L24.6016 17.4098" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24.6005 17.4102L20.2129 21.7811" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M31.2383 10.8267L33.2127 8.85156" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M29.428 12.6186L30.6163 11.4299" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M30.5254 10.7344L30.6169 11.4294" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M35.8086 6.27291V5.23047" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M32.6816 4.18744L35.8078 1.09668V5.22991" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M31.4021 5.48589L32.6818 4.18738" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M31.4022 5.48535L30.0859 6.78384L30.5247 10.7342" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M30.6152 11.43L35.277 11.9603L36.5933 10.6436" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M36.8507 6.27246H35.8086" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M36.5938 10.6435L40.9996 6.27246H36.8497" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M30.5254 10.7344L31.2384 10.8258" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </div>
                            </div>
                            <div className="box-content">
                                <h1 className="box-title">
                                <Link to="#">Minimize environmental impact</Link>
                                </h1>
                                <p>
                                Did you know? U.S. office workers use ~10,000 sheets of
                                paper every year.
                                </p>
                            </div>
                            </div>
                            
                            <div className="tf-iconbox style-1">
                            <div className="box-header">
                                <div className="icon">
                                <svg width="38" height="43" viewBox="0 0 38 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                    d="M18.7024 27.4841C20.2963 27.4841 21.5883 26.1988 21.5883 24.6132C21.5883 23.0276 20.2963 21.7422 18.7024 21.7422C17.1085 21.7422 15.8164 23.0276 15.8164 24.6132C15.8164 26.1988 17.1085 27.4841 18.7024 27.4841Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path d="M21.959 31.4189V41.0964" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.5098 41.0964V31.4189" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.77148 41.0964V31.4189" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                    d="M18.7358 27.5H17.2848C15.2856 27.5 12.9316 28.1936 12.9316 31.4194V36.2419C12.9316 37.2903 13.8023 38.1452 14.8664 38.1452H15.3501"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M10.6907 27.4841C12.2845 27.4841 13.5766 26.1988 13.5766 24.6132C13.5766 23.0276 12.2845 21.7422 10.6907 21.7422C9.09679 21.7422 7.80469 23.0276 7.80469 24.6132C7.80469 26.1988 9.09679 27.4841 10.6907 27.4841Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M10.9472 27.5H9.51231C7.52921 27.5 5.19141 28.1936 5.19141 31.4194V36.2419C5.19141 37.2903 6.04592 38.1452 7.11002 38.1452H7.5937"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path d="M29.6992 41.0964V31.4189" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                    d="M26.8118 27.4841C28.4056 27.4841 29.6977 26.1988 29.6977 24.6132C29.6977 23.0276 28.4056 21.7422 26.8118 21.7422C25.2179 21.7422 23.9258 23.0276 23.9258 24.6132C23.9258 26.1988 25.2179 27.4841 26.8118 27.4841Z"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M26.5215 27.5H27.9564C29.9395 27.5 32.2773 28.1936 32.2773 31.4194V36.2419C32.2773 37.2903 31.4228 38.1452 30.3587 38.1452H29.875"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path
                                    d="M18.7344 27.5H20.1854C22.1846 27.5 24.5386 28.1936 24.5386 31.4194V36.2419C24.5386 37.2903 23.6679 38.1452 22.6038 38.1452H22.1202"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                    <path d="M18.7344 41.0962V38.1445" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27.7642 10.7744L18.7355 19.1615L13.5762 15.2905" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.7344 3.67773V4.96806" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M26.475 5.75781L25.8301 6.87072" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M32.134 11.4189L31.0215 12.0641" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M34.2136 19.1611H32.9238" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.25781 19.1611H4.54763" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.33789 11.4189L6.45037 12.0641" stroke="#148160" strokeWidth="2"
                                    strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.9961 5.758L11.641 6.8709" stroke="#148160" strokeWidth="2" strokeMiterlimit="10"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                    d="M34.745 26.4677C35.8413 24.1612 36.4701 21.5805 36.4701 18.8386C36.4701 9.03216 28.5377 1.09668 18.735 1.09668C8.9324 1.09668 1 9.03216 1 18.8386C1 21.5644 1.61266 24.1451 2.72513 26.4677"
                                    stroke="#148160" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"
                                    strokeLinejoin="round" />
                                </svg>
                                </div>
                            </div>
                            <div className="box-content">
                                <h1 className="box-title">
                                <Link to="#">Save money</Link>
                                </h1>
                                <p>
                                Interview more candidates, more quickly – and still save
                                money.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <Couter />
            </div>
        </section>
    );
}

export default IconBox;