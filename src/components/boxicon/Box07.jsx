import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

Box07.propTypes = {};

function Box07(props) {
  return (
    <section className="review-job-section-four">
      <Tabs className="tf-tab">
        <div className="tf-container">
          <div className="row aln-center-mb">
            <div className="col-lg-6">
              <div className="wd-review-job thumb-style3">
                <div className="group-heading">
                  <h4>What can I do with Jobtex?</h4>
                  <p>
                    Streamline your hiring process with strategic channels to{" "}
                    <br /> reach qualified candidates
                  </p>
                </div>
                <div className="thumb">
                  <img
                    src={require("../../assets/images/review/map.png")}
                    alt="images"
                  />
                  <TabList className="group-tab menu-tab">
                    <Tab className="user-tag tag1" data-pin="1">
                      <img
                        src={require("../../assets/images/review/user1.jpg")}
                        alt="images"
                      />
                    </Tab>
                    <Tab className="user-tag tag2" data-pin="2">
                      <img
                        src={require("../../assets/images/review/user2.jpg")}
                        alt="images"
                      />
                    </Tab>
                    <Tab className="user-tag tag3" data-pin="3">
                      <img
                        src={require("../../assets/images/review/user3.jpg")}
                        alt="images"
                      />
                    </Tab>
                    <Tab className="user-tag tag4" data-pin="4">
                      <img
                        src={require("../../assets/images/review/user4.jpg")}
                        alt="images"
                      />
                    </Tab>
                    <Tab className="user-tag tag6" data-pin="5">
                      <img
                        src={require("../../assets/images/review/user6.jpg")}
                        alt="images"
                      />
                    </Tab>
                    <Tab className="user-tag tag7" data-pin="6">
                      <img
                        src={require("../../assets/images/review/user7.jpg")}
                        alt="images"
                      />
                    </Tab>
                  </TabList>
                </div>
              </div>
            </div>
            <div className="col-lg-6 content-tab wow fadeInRight">
              <TabPanel
                className="wd-review-job mgl-100 animation-tab"
                data-pin="1"
              >
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                    >
                      <path
                        d="M6.65866 19.7309C8.44844 19.7309 9.89931 18.2867 9.89931 16.5051C9.89931 14.7235 8.44844 13.2793 6.65866 13.2793C4.86888 13.2793 3.41797 14.7235 3.41797 16.5051C3.41797 18.2867 4.86888 19.7309 6.65866 19.7309Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6094 27.4248C11.3671 27.1344 11.8508 26.4248 11.8508 25.6183V24.8925C11.8508 21.0215 9.48078 19.7312 7.19134 19.7312H6.15946C3.87003 19.7312 1.5 21.0215 1.5 24.8925V25.6183C1.5 26.4248 1.9998 27.1344 2.74144 27.4248C3.6282 27.7635 4.98249 28.1183 6.67538 28.1183C8.36827 28.1183 9.70649 27.7635 10.6094 27.4248Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.5571 32.6342C23.3468 32.6342 24.7977 31.19 24.7977 29.4084C24.7977 27.6269 23.3468 26.1826 21.5571 26.1826C19.7673 26.1826 18.3164 27.6269 18.3164 29.4084C18.3164 31.19 19.7673 32.6342 21.5571 32.6342Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4902 40.3273C26.248 40.037 26.7317 39.3273 26.7317 38.5209V37.7951C26.7317 33.9241 24.3616 32.6338 22.0722 32.6338H21.0403C18.7509 32.6338 16.3809 33.9241 16.3809 37.7951V38.5209C16.3809 39.3273 16.8807 40.037 17.6223 40.3273C18.5091 40.666 19.8634 41.0209 21.5562 41.0209C23.2491 41.0209 24.5873 40.666 25.4902 40.3273Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.5571 7.4731C23.3468 7.4731 24.7977 6.02885 24.7977 4.24729C24.7977 2.46573 23.3468 1.02148 21.5571 1.02148C19.7673 1.02148 18.3164 2.46573 18.3164 4.24729C18.3164 6.02885 19.7673 7.4731 21.5571 7.4731Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4902 15.1662C26.248 14.8759 26.7317 14.1662 26.7317 13.3598V12.6339C26.7317 8.76298 24.3616 7.47266 22.0722 7.47266H21.0403C18.7509 7.47266 16.3809 8.76298 16.3809 12.6339V13.3598C16.3809 14.1662 16.8807 14.8759 17.6223 15.1662C18.5091 15.5049 19.8634 15.8598 21.5562 15.8598C23.2491 15.8598 24.5873 15.5049 25.4902 15.1662Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.3247 19.7309C38.1145 19.7309 39.5653 18.2867 39.5653 16.5051C39.5653 14.7235 38.1145 13.2793 36.3247 13.2793C34.5349 13.2793 33.084 14.7235 33.084 16.5051C33.084 18.2867 34.5349 19.7309 36.3247 19.7309Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40.2754 27.4248C41.0331 27.1344 41.5168 26.4248 41.5168 25.6183V24.8925C41.5168 21.0215 39.1468 19.7312 36.8574 19.7312H35.8255C33.536 19.7312 31.166 21.0215 31.166 24.8925V25.6183C31.166 26.4248 31.6658 27.1344 32.4075 27.4248C33.2942 27.7635 34.6485 28.1183 36.3414 28.1183C38.0343 28.1183 39.3725 27.7635 40.2754 27.4248Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.7767 31.0859C33.3095 33.0698 31.4232 34.715 29.2305 35.8763"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.78711 10.9403C10.5445 8.79514 12.8178 7.11772 15.4297 6.06934"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8177 35.8763C11.625 34.715 9.73866 33.0698 8.27148 31.0859"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.6191 6.06934C30.231 7.11772 32.5043 8.79514 34.2617 10.9403"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Access To Millions Of Candidates</h6>
                    <p>
                      Reach 80M+ unique, diverse U.S. job seekers annually, when
                      you post your jobs through the large number of targeted
                      talent acquisition CareerBuilder channels.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="43"
                      viewBox="0 0 42 43"
                      fill="none"
                    >
                      <path
                        d="M6.74304 31.8416C8.56215 31.8416 10.0368 30.3736 10.0368 28.5629C10.0368 26.7521 8.56215 25.2842 6.74304 25.2842C4.92392 25.2842 3.44922 26.7521 3.44922 28.5629C3.44922 30.3736 4.92392 31.8416 6.74304 31.8416Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.7587 40.3162C11.5289 40.0212 12.0205 39.2998 12.0205 38.4802V37.0867C12.0205 33.1523 9.61161 31.8408 7.28464 31.8408H6.23585C3.90888 31.8408 1.5 33.1523 1.5 37.0867V38.4802C1.5 39.2998 2.00799 40.0212 2.7618 40.3162C3.66309 40.6605 5.03958 41.0211 6.76023 41.0211C8.48087 41.0211 9.84102 40.6605 10.7587 40.3162Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.5848 31.8416C37.4039 31.8416 38.8786 30.3736 38.8786 28.5629C38.8786 26.7521 37.4039 25.2842 35.5848 25.2842C33.7657 25.2842 32.291 26.7521 32.291 28.5629C32.291 30.3736 33.7657 31.8416 35.5848 31.8416Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.586 40.3162C30.8158 40.0212 30.3242 39.2998 30.3242 38.4802V37.0867C30.3242 33.1523 32.7331 31.8408 35.0601 31.8408H36.1089C38.4358 31.8408 40.8447 33.1523 40.8447 37.0867V38.4802C40.8447 39.2998 40.3367 40.0212 39.5829 40.3162C38.6816 40.6605 37.3051 41.0211 35.5845 41.0211C33.8638 41.0211 32.4873 40.6605 31.586 40.3162Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.1649 7.57886C22.984 7.57886 24.4587 6.11094 24.4587 4.30017C24.4587 2.4894 22.984 1.02148 21.1649 1.02148C19.3458 1.02148 17.8711 2.4894 17.8711 4.30017C17.8711 6.11094 19.3458 7.57886 21.1649 7.57886Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1786 16.0545C25.9488 15.7594 26.4404 15.0381 26.4404 14.2184V12.825C26.4404 8.89058 24.0315 7.5791 21.7046 7.5791H20.6558C18.3288 7.5791 15.9199 8.89058 15.9199 12.825V14.2184C15.9199 15.0381 16.4279 15.7594 17.1817 16.0545C18.083 16.3988 19.4595 16.7594 21.1801 16.7594C22.9008 16.7594 24.2609 16.3988 25.1786 16.0545Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.1641 27.7433V19.2188"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.3611 27.9559L28.7353 32.2182"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.0656 28.0215L13.6914 32.2838"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Automate Candidate Engagement</h6>
                    <p>
                      Use CareerBuilder's AI data to get exclusive insights into
                      your ideal candidate that can help you get the attention
                      of the top candidates.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="42"
                      viewBox="0 0 43 42"
                      fill="none"
                    >
                      <path
                        d="M25.1022 17.3345C27.3874 19.6023 27.3874 23.2966 25.1022 25.5644C22.817 27.8322 19.1241 27.8322 16.8389 25.5644C14.5537 23.2966 14.5537 19.6023 16.8389 17.3345C18.3563 15.8166 20.5135 15.3228 22.4514 15.8349"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9277 12.5436C34.8637 17.4633 34.8637 25.4371 29.9277 30.3567C24.9917 35.2764 16.9661 35.2764 12.0301 30.3567C7.09412 25.4371 7.09412 17.4633 12.0301 12.5436C16.2532 8.33722 22.7248 7.7337 27.606 10.733"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.2514 3.8927C22.0302 0.527586 13.1636 1.80779 7.20384 7.73331C-0.401279 15.3048 -0.401279 27.5765 7.20384 35.148C14.809 42.7195 27.149 42.7195 34.7541 35.148C41.4634 28.4543 42.2496 18.103 37.1124 10.568"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.1152 11.3545L31.7368 10.751"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9279 12.543L25.1016 17.3346"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1005 17.335L20.7129 21.706"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.7383 10.7515L33.7127 8.77637"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.928 12.5434L31.1163 11.3547"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0254 10.6592L31.1169 11.3542"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.3086 6.19772V5.15527"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.1816 4.11225L36.3078 1.02148V5.15471"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.9021 5.41069L33.1818 4.11218"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.9022 5.41016L30.5859 6.70865L31.0247 10.659"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.1152 11.3548L35.777 11.8851L37.0933 10.5684"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.3507 6.19727H36.3086"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.0938 10.5683L41.4996 6.19727H37.3497"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0254 10.6592L31.7384 10.7506"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>
                      Boost Performance with an Outsourced Talent Acquisition
                      Team
                    </h6>
                    <p>
                      Use our proven process to quickly drive the qualified,
                      targeted profiles into your sourcing pipeline and receive
                      qualified applicants in real-time.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="43"
                      viewBox="0 0 38 43"
                      fill="none"
                    >
                      <path
                        d="M19.2024 27.4089C20.7963 27.4089 22.0883 26.1236 22.0883 24.538C22.0883 22.9524 20.7963 21.667 19.2024 21.667C17.6085 21.667 16.3164 22.9524 16.3164 24.538C16.3164 26.1236 17.6085 27.4089 19.2024 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.459 31.3438V41.0212"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0098 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.27148 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2358 27.4248H17.7848C15.7856 27.4248 13.4316 28.1184 13.4316 31.3442V36.1668C13.4316 37.2151 14.3023 38.07 15.3664 38.07H15.8501"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.1907 27.4089C12.7845 27.4089 14.0766 26.1236 14.0766 24.538C14.0766 22.9524 12.7845 21.667 11.1907 21.667C9.59679 21.667 8.30469 22.9524 8.30469 24.538C8.30469 26.1236 9.59679 27.4089 11.1907 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4472 27.4248H10.0123C8.02921 27.4248 5.69141 28.1184 5.69141 31.3442V36.1668C5.69141 37.2151 6.54592 38.07 7.61002 38.07H8.0937"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M30.1992 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.3118 27.4089C28.9056 27.4089 30.1977 26.1236 30.1977 24.538C30.1977 22.9524 28.9056 21.667 27.3118 21.667C25.7179 21.667 24.4258 22.9524 24.4258 24.538C24.4258 26.1236 25.7179 27.4089 27.3118 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.0215 27.4248H28.4564C30.4395 27.4248 32.7773 28.1184 32.7773 31.3442V36.1668C32.7773 37.2151 31.9228 38.07 30.8587 38.07H30.375"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 27.4248H20.6854C22.6846 27.4248 25.0386 28.1184 25.0386 31.3442V36.1668C25.0386 37.2151 24.1679 38.07 23.1038 38.07H22.6202"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 41.021V38.0693"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.2642 10.6992L19.2355 19.0863L14.0762 15.2153"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 3.60254V4.89286"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.975 5.68262L26.3301 6.79552"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M32.634 11.3438L31.5215 11.9889"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.7136 19.0859H33.4238"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.75781 19.0859H5.04763"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.83789 11.3438L6.95037 11.9889"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4961 5.68277L12.141 6.79568"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.245 26.3925C36.3413 24.086 36.9701 21.5054 36.9701 18.7634C36.9701 8.95697 29.0377 1.02148 19.235 1.02148C9.4324 1.02148 1.5 8.95697 1.5 18.7634C1.5 21.4892 2.11266 24.0699 3.22513 26.3925"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Pipeline Management on Your Terms</h6>
                    <p>
                      Take full control of how you manage job postings,
                      candidate pools and outreach campaigns. Choose to use the
                      CareerBuilder platform or your own and utilize the
                      analytics and labor market data to build out your
                      candidate pipelines and pools.
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel
                className="wd-review-job mgl-100 animation-tab"
                data-pin="1"
              >
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                    >
                      <path
                        d="M6.65866 19.7309C8.44844 19.7309 9.89931 18.2867 9.89931 16.5051C9.89931 14.7235 8.44844 13.2793 6.65866 13.2793C4.86888 13.2793 3.41797 14.7235 3.41797 16.5051C3.41797 18.2867 4.86888 19.7309 6.65866 19.7309Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6094 27.4248C11.3671 27.1344 11.8508 26.4248 11.8508 25.6183V24.8925C11.8508 21.0215 9.48078 19.7312 7.19134 19.7312H6.15946C3.87003 19.7312 1.5 21.0215 1.5 24.8925V25.6183C1.5 26.4248 1.9998 27.1344 2.74144 27.4248C3.6282 27.7635 4.98249 28.1183 6.67538 28.1183C8.36827 28.1183 9.70649 27.7635 10.6094 27.4248Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.5571 32.6342C23.3468 32.6342 24.7977 31.19 24.7977 29.4084C24.7977 27.6269 23.3468 26.1826 21.5571 26.1826C19.7673 26.1826 18.3164 27.6269 18.3164 29.4084C18.3164 31.19 19.7673 32.6342 21.5571 32.6342Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4902 40.3273C26.248 40.037 26.7317 39.3273 26.7317 38.5209V37.7951C26.7317 33.9241 24.3616 32.6338 22.0722 32.6338H21.0403C18.7509 32.6338 16.3809 33.9241 16.3809 37.7951V38.5209C16.3809 39.3273 16.8807 40.037 17.6223 40.3273C18.5091 40.666 19.8634 41.0209 21.5562 41.0209C23.2491 41.0209 24.5873 40.666 25.4902 40.3273Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.5571 7.4731C23.3468 7.4731 24.7977 6.02885 24.7977 4.24729C24.7977 2.46573 23.3468 1.02148 21.5571 1.02148C19.7673 1.02148 18.3164 2.46573 18.3164 4.24729C18.3164 6.02885 19.7673 7.4731 21.5571 7.4731Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4902 15.1662C26.248 14.8759 26.7317 14.1662 26.7317 13.3598V12.6339C26.7317 8.76298 24.3616 7.47266 22.0722 7.47266H21.0403C18.7509 7.47266 16.3809 8.76298 16.3809 12.6339V13.3598C16.3809 14.1662 16.8807 14.8759 17.6223 15.1662C18.5091 15.5049 19.8634 15.8598 21.5562 15.8598C23.2491 15.8598 24.5873 15.5049 25.4902 15.1662Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.3247 19.7309C38.1145 19.7309 39.5653 18.2867 39.5653 16.5051C39.5653 14.7235 38.1145 13.2793 36.3247 13.2793C34.5349 13.2793 33.084 14.7235 33.084 16.5051C33.084 18.2867 34.5349 19.7309 36.3247 19.7309Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40.2754 27.4248C41.0331 27.1344 41.5168 26.4248 41.5168 25.6183V24.8925C41.5168 21.0215 39.1468 19.7312 36.8574 19.7312H35.8255C33.536 19.7312 31.166 21.0215 31.166 24.8925V25.6183C31.166 26.4248 31.6658 27.1344 32.4075 27.4248C33.2942 27.7635 34.6485 28.1183 36.3414 28.1183C38.0343 28.1183 39.3725 27.7635 40.2754 27.4248Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.7767 31.0859C33.3095 33.0698 31.4232 34.715 29.2305 35.8763"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.78711 10.9403C10.5445 8.79514 12.8178 7.11772 15.4297 6.06934"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8177 35.8763C11.625 34.715 9.73866 33.0698 8.27148 31.0859"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.6191 6.06934C30.231 7.11772 32.5043 8.79514 34.2617 10.9403"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Access To Millions Of Candidates</h6>
                    <p>
                      Reach 80M+ unique, diverse U.S. job seekers annually, when
                      you post your jobs through the large number of targeted
                      talent acquisition CareerBuilder channels.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="43"
                      viewBox="0 0 42 43"
                      fill="none"
                    >
                      <path
                        d="M6.74304 31.8416C8.56215 31.8416 10.0368 30.3736 10.0368 28.5629C10.0368 26.7521 8.56215 25.2842 6.74304 25.2842C4.92392 25.2842 3.44922 26.7521 3.44922 28.5629C3.44922 30.3736 4.92392 31.8416 6.74304 31.8416Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.7587 40.3162C11.5289 40.0212 12.0205 39.2998 12.0205 38.4802V37.0867C12.0205 33.1523 9.61161 31.8408 7.28464 31.8408H6.23585C3.90888 31.8408 1.5 33.1523 1.5 37.0867V38.4802C1.5 39.2998 2.00799 40.0212 2.7618 40.3162C3.66309 40.6605 5.03958 41.0211 6.76023 41.0211C8.48087 41.0211 9.84102 40.6605 10.7587 40.3162Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.5848 31.8416C37.4039 31.8416 38.8786 30.3736 38.8786 28.5629C38.8786 26.7521 37.4039 25.2842 35.5848 25.2842C33.7657 25.2842 32.291 26.7521 32.291 28.5629C32.291 30.3736 33.7657 31.8416 35.5848 31.8416Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.586 40.3162C30.8158 40.0212 30.3242 39.2998 30.3242 38.4802V37.0867C30.3242 33.1523 32.7331 31.8408 35.0601 31.8408H36.1089C38.4358 31.8408 40.8447 33.1523 40.8447 37.0867V38.4802C40.8447 39.2998 40.3367 40.0212 39.5829 40.3162C38.6816 40.6605 37.3051 41.0211 35.5845 41.0211C33.8638 41.0211 32.4873 40.6605 31.586 40.3162Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.1649 7.57886C22.984 7.57886 24.4587 6.11094 24.4587 4.30017C24.4587 2.4894 22.984 1.02148 21.1649 1.02148C19.3458 1.02148 17.8711 2.4894 17.8711 4.30017C17.8711 6.11094 19.3458 7.57886 21.1649 7.57886Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1786 16.0545C25.9488 15.7594 26.4404 15.0381 26.4404 14.2184V12.825C26.4404 8.89058 24.0315 7.5791 21.7046 7.5791H20.6558C18.3288 7.5791 15.9199 8.89058 15.9199 12.825V14.2184C15.9199 15.0381 16.4279 15.7594 17.1817 16.0545C18.083 16.3988 19.4595 16.7594 21.1801 16.7594C22.9008 16.7594 24.2609 16.3988 25.1786 16.0545Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.1641 27.7433V19.2188"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.3611 27.9559L28.7353 32.2182"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.0656 28.0215L13.6914 32.2838"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Automate Candidate Engagement</h6>
                    <p>
                      Use CareerBuilder's AI data to get exclusive insights into
                      your ideal candidate that can help you get the attention
                      of the top candidates.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="42"
                      viewBox="0 0 43 42"
                      fill="none"
                    >
                      <path
                        d="M25.1022 17.3345C27.3874 19.6023 27.3874 23.2966 25.1022 25.5644C22.817 27.8322 19.1241 27.8322 16.8389 25.5644C14.5537 23.2966 14.5537 19.6023 16.8389 17.3345C18.3563 15.8166 20.5135 15.3228 22.4514 15.8349"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9277 12.5436C34.8637 17.4633 34.8637 25.4371 29.9277 30.3567C24.9917 35.2764 16.9661 35.2764 12.0301 30.3567C7.09412 25.4371 7.09412 17.4633 12.0301 12.5436C16.2532 8.33722 22.7248 7.7337 27.606 10.733"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.2514 3.8927C22.0302 0.527586 13.1636 1.80779 7.20384 7.73331C-0.401279 15.3048 -0.401279 27.5765 7.20384 35.148C14.809 42.7195 27.149 42.7195 34.7541 35.148C41.4634 28.4543 42.2496 18.103 37.1124 10.568"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.1152 11.3545L31.7368 10.751"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9279 12.543L25.1016 17.3346"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1005 17.335L20.7129 21.706"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.7383 10.7515L33.7127 8.77637"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.928 12.5434L31.1163 11.3547"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0254 10.6592L31.1169 11.3542"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.3086 6.19772V5.15527"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.1816 4.11225L36.3078 1.02148V5.15471"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.9021 5.41069L33.1818 4.11218"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.9022 5.41016L30.5859 6.70865L31.0247 10.659"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.1152 11.3548L35.777 11.8851L37.0933 10.5684"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.3507 6.19727H36.3086"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.0938 10.5683L41.4996 6.19727H37.3497"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0254 10.6592L31.7384 10.7506"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>
                      Boost Performance with an Outsourced Talent Acquisition
                      Team
                    </h6>
                    <p>
                      Use our proven process to quickly drive the qualified,
                      targeted profiles into your sourcing pipeline and receive
                      qualified applicants in real-time.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="43"
                      viewBox="0 0 38 43"
                      fill="none"
                    >
                      <path
                        d="M19.2024 27.4089C20.7963 27.4089 22.0883 26.1236 22.0883 24.538C22.0883 22.9524 20.7963 21.667 19.2024 21.667C17.6085 21.667 16.3164 22.9524 16.3164 24.538C16.3164 26.1236 17.6085 27.4089 19.2024 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.459 31.3438V41.0212"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0098 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.27148 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2358 27.4248H17.7848C15.7856 27.4248 13.4316 28.1184 13.4316 31.3442V36.1668C13.4316 37.2151 14.3023 38.07 15.3664 38.07H15.8501"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.1907 27.4089C12.7845 27.4089 14.0766 26.1236 14.0766 24.538C14.0766 22.9524 12.7845 21.667 11.1907 21.667C9.59679 21.667 8.30469 22.9524 8.30469 24.538C8.30469 26.1236 9.59679 27.4089 11.1907 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4472 27.4248H10.0123C8.02921 27.4248 5.69141 28.1184 5.69141 31.3442V36.1668C5.69141 37.2151 6.54592 38.07 7.61002 38.07H8.0937"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M30.1992 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.3118 27.4089C28.9056 27.4089 30.1977 26.1236 30.1977 24.538C30.1977 22.9524 28.9056 21.667 27.3118 21.667C25.7179 21.667 24.4258 22.9524 24.4258 24.538C24.4258 26.1236 25.7179 27.4089 27.3118 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.0215 27.4248H28.4564C30.4395 27.4248 32.7773 28.1184 32.7773 31.3442V36.1668C32.7773 37.2151 31.9228 38.07 30.8587 38.07H30.375"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 27.4248H20.6854C22.6846 27.4248 25.0386 28.1184 25.0386 31.3442V36.1668C25.0386 37.2151 24.1679 38.07 23.1038 38.07H22.6202"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 41.021V38.0693"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.2642 10.6992L19.2355 19.0863L14.0762 15.2153"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 3.60254V4.89286"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.975 5.68262L26.3301 6.79552"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M32.634 11.3438L31.5215 11.9889"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.7136 19.0859H33.4238"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.75781 19.0859H5.04763"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.83789 11.3438L6.95037 11.9889"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4961 5.68277L12.141 6.79568"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.245 26.3925C36.3413 24.086 36.9701 21.5054 36.9701 18.7634C36.9701 8.95697 29.0377 1.02148 19.235 1.02148C9.4324 1.02148 1.5 8.95697 1.5 18.7634C1.5 21.4892 2.11266 24.0699 3.22513 26.3925"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Pipeline Management on Your Terms</h6>
                    <p>
                      Take full control of how you manage job postings,
                      candidate pools and outreach campaigns. Choose to use the
                      CareerBuilder platform or your own and utilize the
                      analytics and labor market data to build out your
                      candidate pipelines and pools.
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel
                className="wd-review-job mgl-100 animation-tab"
                data-pin="1"
              >
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                    >
                      <path
                        d="M6.65866 19.7309C8.44844 19.7309 9.89931 18.2867 9.89931 16.5051C9.89931 14.7235 8.44844 13.2793 6.65866 13.2793C4.86888 13.2793 3.41797 14.7235 3.41797 16.5051C3.41797 18.2867 4.86888 19.7309 6.65866 19.7309Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6094 27.4248C11.3671 27.1344 11.8508 26.4248 11.8508 25.6183V24.8925C11.8508 21.0215 9.48078 19.7312 7.19134 19.7312H6.15946C3.87003 19.7312 1.5 21.0215 1.5 24.8925V25.6183C1.5 26.4248 1.9998 27.1344 2.74144 27.4248C3.6282 27.7635 4.98249 28.1183 6.67538 28.1183C8.36827 28.1183 9.70649 27.7635 10.6094 27.4248Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.5571 32.6342C23.3468 32.6342 24.7977 31.19 24.7977 29.4084C24.7977 27.6269 23.3468 26.1826 21.5571 26.1826C19.7673 26.1826 18.3164 27.6269 18.3164 29.4084C18.3164 31.19 19.7673 32.6342 21.5571 32.6342Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4902 40.3273C26.248 40.037 26.7317 39.3273 26.7317 38.5209V37.7951C26.7317 33.9241 24.3616 32.6338 22.0722 32.6338H21.0403C18.7509 32.6338 16.3809 33.9241 16.3809 37.7951V38.5209C16.3809 39.3273 16.8807 40.037 17.6223 40.3273C18.5091 40.666 19.8634 41.0209 21.5562 41.0209C23.2491 41.0209 24.5873 40.666 25.4902 40.3273Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.5571 7.4731C23.3468 7.4731 24.7977 6.02885 24.7977 4.24729C24.7977 2.46573 23.3468 1.02148 21.5571 1.02148C19.7673 1.02148 18.3164 2.46573 18.3164 4.24729C18.3164 6.02885 19.7673 7.4731 21.5571 7.4731Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4902 15.1662C26.248 14.8759 26.7317 14.1662 26.7317 13.3598V12.6339C26.7317 8.76298 24.3616 7.47266 22.0722 7.47266H21.0403C18.7509 7.47266 16.3809 8.76298 16.3809 12.6339V13.3598C16.3809 14.1662 16.8807 14.8759 17.6223 15.1662C18.5091 15.5049 19.8634 15.8598 21.5562 15.8598C23.2491 15.8598 24.5873 15.5049 25.4902 15.1662Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.3247 19.7309C38.1145 19.7309 39.5653 18.2867 39.5653 16.5051C39.5653 14.7235 38.1145 13.2793 36.3247 13.2793C34.5349 13.2793 33.084 14.7235 33.084 16.5051C33.084 18.2867 34.5349 19.7309 36.3247 19.7309Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40.2754 27.4248C41.0331 27.1344 41.5168 26.4248 41.5168 25.6183V24.8925C41.5168 21.0215 39.1468 19.7312 36.8574 19.7312H35.8255C33.536 19.7312 31.166 21.0215 31.166 24.8925V25.6183C31.166 26.4248 31.6658 27.1344 32.4075 27.4248C33.2942 27.7635 34.6485 28.1183 36.3414 28.1183C38.0343 28.1183 39.3725 27.7635 40.2754 27.4248Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.7767 31.0859C33.3095 33.0698 31.4232 34.715 29.2305 35.8763"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.78711 10.9403C10.5445 8.79514 12.8178 7.11772 15.4297 6.06934"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8177 35.8763C11.625 34.715 9.73866 33.0698 8.27148 31.0859"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.6191 6.06934C30.231 7.11772 32.5043 8.79514 34.2617 10.9403"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Access To Millions Of Candidates</h6>
                    <p>
                      Reach 80M+ unique, diverse U.S. job seekers annually, when
                      you post your jobs through the large number of targeted
                      talent acquisition CareerBuilder channels.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="43"
                      viewBox="0 0 42 43"
                      fill="none"
                    >
                      <path
                        d="M6.74304 31.8416C8.56215 31.8416 10.0368 30.3736 10.0368 28.5629C10.0368 26.7521 8.56215 25.2842 6.74304 25.2842C4.92392 25.2842 3.44922 26.7521 3.44922 28.5629C3.44922 30.3736 4.92392 31.8416 6.74304 31.8416Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.7587 40.3162C11.5289 40.0212 12.0205 39.2998 12.0205 38.4802V37.0867C12.0205 33.1523 9.61161 31.8408 7.28464 31.8408H6.23585C3.90888 31.8408 1.5 33.1523 1.5 37.0867V38.4802C1.5 39.2998 2.00799 40.0212 2.7618 40.3162C3.66309 40.6605 5.03958 41.0211 6.76023 41.0211C8.48087 41.0211 9.84102 40.6605 10.7587 40.3162Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.5848 31.8416C37.4039 31.8416 38.8786 30.3736 38.8786 28.5629C38.8786 26.7521 37.4039 25.2842 35.5848 25.2842C33.7657 25.2842 32.291 26.7521 32.291 28.5629C32.291 30.3736 33.7657 31.8416 35.5848 31.8416Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.586 40.3162C30.8158 40.0212 30.3242 39.2998 30.3242 38.4802V37.0867C30.3242 33.1523 32.7331 31.8408 35.0601 31.8408H36.1089C38.4358 31.8408 40.8447 33.1523 40.8447 37.0867V38.4802C40.8447 39.2998 40.3367 40.0212 39.5829 40.3162C38.6816 40.6605 37.3051 41.0211 35.5845 41.0211C33.8638 41.0211 32.4873 40.6605 31.586 40.3162Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.1649 7.57886C22.984 7.57886 24.4587 6.11094 24.4587 4.30017C24.4587 2.4894 22.984 1.02148 21.1649 1.02148C19.3458 1.02148 17.8711 2.4894 17.8711 4.30017C17.8711 6.11094 19.3458 7.57886 21.1649 7.57886Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1786 16.0545C25.9488 15.7594 26.4404 15.0381 26.4404 14.2184V12.825C26.4404 8.89058 24.0315 7.5791 21.7046 7.5791H20.6558C18.3288 7.5791 15.9199 8.89058 15.9199 12.825V14.2184C15.9199 15.0381 16.4279 15.7594 17.1817 16.0545C18.083 16.3988 19.4595 16.7594 21.1801 16.7594C22.9008 16.7594 24.2609 16.3988 25.1786 16.0545Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.1641 27.7433V19.2188"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.3611 27.9559L28.7353 32.2182"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.0656 28.0215L13.6914 32.2838"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Automate Candidate Engagement</h6>
                    <p>
                      Use CareerBuilder's AI data to get exclusive insights into
                      your ideal candidate that can help you get the attention
                      of the top candidates.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="42"
                      viewBox="0 0 43 42"
                      fill="none"
                    >
                      <path
                        d="M25.1022 17.3345C27.3874 19.6023 27.3874 23.2966 25.1022 25.5644C22.817 27.8322 19.1241 27.8322 16.8389 25.5644C14.5537 23.2966 14.5537 19.6023 16.8389 17.3345C18.3563 15.8166 20.5135 15.3228 22.4514 15.8349"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9277 12.5436C34.8637 17.4633 34.8637 25.4371 29.9277 30.3567C24.9917 35.2764 16.9661 35.2764 12.0301 30.3567C7.09412 25.4371 7.09412 17.4633 12.0301 12.5436C16.2532 8.33722 22.7248 7.7337 27.606 10.733"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.2514 3.8927C22.0302 0.527586 13.1636 1.80779 7.20384 7.73331C-0.401279 15.3048 -0.401279 27.5765 7.20384 35.148C14.809 42.7195 27.149 42.7195 34.7541 35.148C41.4634 28.4543 42.2496 18.103 37.1124 10.568"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.1152 11.3545L31.7368 10.751"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9279 12.543L25.1016 17.3346"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1005 17.335L20.7129 21.706"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.7383 10.7515L33.7127 8.77637"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.928 12.5434L31.1163 11.3547"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0254 10.6592L31.1169 11.3542"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.3086 6.19772V5.15527"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.1816 4.11225L36.3078 1.02148V5.15471"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.9021 5.41069L33.1818 4.11218"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.9022 5.41016L30.5859 6.70865L31.0247 10.659"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.1152 11.3548L35.777 11.8851L37.0933 10.5684"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.3507 6.19727H36.3086"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.0938 10.5683L41.4996 6.19727H37.3497"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0254 10.6592L31.7384 10.7506"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>
                      Boost Performance with an Outsourced Talent Acquisition
                      Team
                    </h6>
                    <p>
                      Use our proven process to quickly drive the qualified,
                      targeted profiles into your sourcing pipeline and receive
                      qualified applicants in real-time.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="43"
                      viewBox="0 0 38 43"
                      fill="none"
                    >
                      <path
                        d="M19.2024 27.4089C20.7963 27.4089 22.0883 26.1236 22.0883 24.538C22.0883 22.9524 20.7963 21.667 19.2024 21.667C17.6085 21.667 16.3164 22.9524 16.3164 24.538C16.3164 26.1236 17.6085 27.4089 19.2024 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.459 31.3438V41.0212"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0098 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.27148 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2358 27.4248H17.7848C15.7856 27.4248 13.4316 28.1184 13.4316 31.3442V36.1668C13.4316 37.2151 14.3023 38.07 15.3664 38.07H15.8501"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.1907 27.4089C12.7845 27.4089 14.0766 26.1236 14.0766 24.538C14.0766 22.9524 12.7845 21.667 11.1907 21.667C9.59679 21.667 8.30469 22.9524 8.30469 24.538C8.30469 26.1236 9.59679 27.4089 11.1907 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4472 27.4248H10.0123C8.02921 27.4248 5.69141 28.1184 5.69141 31.3442V36.1668C5.69141 37.2151 6.54592 38.07 7.61002 38.07H8.0937"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M30.1992 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.3118 27.4089C28.9056 27.4089 30.1977 26.1236 30.1977 24.538C30.1977 22.9524 28.9056 21.667 27.3118 21.667C25.7179 21.667 24.4258 22.9524 24.4258 24.538C24.4258 26.1236 25.7179 27.4089 27.3118 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.0215 27.4248H28.4564C30.4395 27.4248 32.7773 28.1184 32.7773 31.3442V36.1668C32.7773 37.2151 31.9228 38.07 30.8587 38.07H30.375"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 27.4248H20.6854C22.6846 27.4248 25.0386 28.1184 25.0386 31.3442V36.1668C25.0386 37.2151 24.1679 38.07 23.1038 38.07H22.6202"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 41.021V38.0693"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.2642 10.6992L19.2355 19.0863L14.0762 15.2153"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 3.60254V4.89286"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.975 5.68262L26.3301 6.79552"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M32.634 11.3438L31.5215 11.9889"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.7136 19.0859H33.4238"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.75781 19.0859H5.04763"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.83789 11.3438L6.95037 11.9889"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4961 5.68277L12.141 6.79568"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.245 26.3925C36.3413 24.086 36.9701 21.5054 36.9701 18.7634C36.9701 8.95697 29.0377 1.02148 19.235 1.02148C9.4324 1.02148 1.5 8.95697 1.5 18.7634C1.5 21.4892 2.11266 24.0699 3.22513 26.3925"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Pipeline Management on Your Terms</h6>
                    <p>
                      Take full control of how you manage job postings,
                      candidate pools and outreach campaigns. Choose to use the
                      CareerBuilder platform or your own and utilize the
                      analytics and labor market data to build out your
                      candidate pipelines and pools.
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel
                className="wd-review-job mgl-100 animation-tab"
                data-pin="1"
              >
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                    >
                      <path
                        d="M6.65866 19.7309C8.44844 19.7309 9.89931 18.2867 9.89931 16.5051C9.89931 14.7235 8.44844 13.2793 6.65866 13.2793C4.86888 13.2793 3.41797 14.7235 3.41797 16.5051C3.41797 18.2867 4.86888 19.7309 6.65866 19.7309Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6094 27.4248C11.3671 27.1344 11.8508 26.4248 11.8508 25.6183V24.8925C11.8508 21.0215 9.48078 19.7312 7.19134 19.7312H6.15946C3.87003 19.7312 1.5 21.0215 1.5 24.8925V25.6183C1.5 26.4248 1.9998 27.1344 2.74144 27.4248C3.6282 27.7635 4.98249 28.1183 6.67538 28.1183C8.36827 28.1183 9.70649 27.7635 10.6094 27.4248Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.5571 32.6342C23.3468 32.6342 24.7977 31.19 24.7977 29.4084C24.7977 27.6269 23.3468 26.1826 21.5571 26.1826C19.7673 26.1826 18.3164 27.6269 18.3164 29.4084C18.3164 31.19 19.7673 32.6342 21.5571 32.6342Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4902 40.3273C26.248 40.037 26.7317 39.3273 26.7317 38.5209V37.7951C26.7317 33.9241 24.3616 32.6338 22.0722 32.6338H21.0403C18.7509 32.6338 16.3809 33.9241 16.3809 37.7951V38.5209C16.3809 39.3273 16.8807 40.037 17.6223 40.3273C18.5091 40.666 19.8634 41.0209 21.5562 41.0209C23.2491 41.0209 24.5873 40.666 25.4902 40.3273Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.5571 7.4731C23.3468 7.4731 24.7977 6.02885 24.7977 4.24729C24.7977 2.46573 23.3468 1.02148 21.5571 1.02148C19.7673 1.02148 18.3164 2.46573 18.3164 4.24729C18.3164 6.02885 19.7673 7.4731 21.5571 7.4731Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4902 15.1662C26.248 14.8759 26.7317 14.1662 26.7317 13.3598V12.6339C26.7317 8.76298 24.3616 7.47266 22.0722 7.47266H21.0403C18.7509 7.47266 16.3809 8.76298 16.3809 12.6339V13.3598C16.3809 14.1662 16.8807 14.8759 17.6223 15.1662C18.5091 15.5049 19.8634 15.8598 21.5562 15.8598C23.2491 15.8598 24.5873 15.5049 25.4902 15.1662Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.3247 19.7309C38.1145 19.7309 39.5653 18.2867 39.5653 16.5051C39.5653 14.7235 38.1145 13.2793 36.3247 13.2793C34.5349 13.2793 33.084 14.7235 33.084 16.5051C33.084 18.2867 34.5349 19.7309 36.3247 19.7309Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40.2754 27.4248C41.0331 27.1344 41.5168 26.4248 41.5168 25.6183V24.8925C41.5168 21.0215 39.1468 19.7312 36.8574 19.7312H35.8255C33.536 19.7312 31.166 21.0215 31.166 24.8925V25.6183C31.166 26.4248 31.6658 27.1344 32.4075 27.4248C33.2942 27.7635 34.6485 28.1183 36.3414 28.1183C38.0343 28.1183 39.3725 27.7635 40.2754 27.4248Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.7767 31.0859C33.3095 33.0698 31.4232 34.715 29.2305 35.8763"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.78711 10.9403C10.5445 8.79514 12.8178 7.11772 15.4297 6.06934"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8177 35.8763C11.625 34.715 9.73866 33.0698 8.27148 31.0859"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.6191 6.06934C30.231 7.11772 32.5043 8.79514 34.2617 10.9403"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Access To Millions Of Candidates</h6>
                    <p>
                      Reach 80M+ unique, diverse U.S. job seekers annually, when
                      you post your jobs through the large number of targeted
                      talent acquisition CareerBuilder channels.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="43"
                      viewBox="0 0 42 43"
                      fill="none"
                    >
                      <path
                        d="M6.74304 31.8416C8.56215 31.8416 10.0368 30.3736 10.0368 28.5629C10.0368 26.7521 8.56215 25.2842 6.74304 25.2842C4.92392 25.2842 3.44922 26.7521 3.44922 28.5629C3.44922 30.3736 4.92392 31.8416 6.74304 31.8416Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.7587 40.3162C11.5289 40.0212 12.0205 39.2998 12.0205 38.4802V37.0867C12.0205 33.1523 9.61161 31.8408 7.28464 31.8408H6.23585C3.90888 31.8408 1.5 33.1523 1.5 37.0867V38.4802C1.5 39.2998 2.00799 40.0212 2.7618 40.3162C3.66309 40.6605 5.03958 41.0211 6.76023 41.0211C8.48087 41.0211 9.84102 40.6605 10.7587 40.3162Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.5848 31.8416C37.4039 31.8416 38.8786 30.3736 38.8786 28.5629C38.8786 26.7521 37.4039 25.2842 35.5848 25.2842C33.7657 25.2842 32.291 26.7521 32.291 28.5629C32.291 30.3736 33.7657 31.8416 35.5848 31.8416Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.586 40.3162C30.8158 40.0212 30.3242 39.2998 30.3242 38.4802V37.0867C30.3242 33.1523 32.7331 31.8408 35.0601 31.8408H36.1089C38.4358 31.8408 40.8447 33.1523 40.8447 37.0867V38.4802C40.8447 39.2998 40.3367 40.0212 39.5829 40.3162C38.6816 40.6605 37.3051 41.0211 35.5845 41.0211C33.8638 41.0211 32.4873 40.6605 31.586 40.3162Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.1649 7.57886C22.984 7.57886 24.4587 6.11094 24.4587 4.30017C24.4587 2.4894 22.984 1.02148 21.1649 1.02148C19.3458 1.02148 17.8711 2.4894 17.8711 4.30017C17.8711 6.11094 19.3458 7.57886 21.1649 7.57886Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1786 16.0545C25.9488 15.7594 26.4404 15.0381 26.4404 14.2184V12.825C26.4404 8.89058 24.0315 7.5791 21.7046 7.5791H20.6558C18.3288 7.5791 15.9199 8.89058 15.9199 12.825V14.2184C15.9199 15.0381 16.4279 15.7594 17.1817 16.0545C18.083 16.3988 19.4595 16.7594 21.1801 16.7594C22.9008 16.7594 24.2609 16.3988 25.1786 16.0545Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.1641 27.7433V19.2188"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.3611 27.9559L28.7353 32.2182"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.0656 28.0215L13.6914 32.2838"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Automate Candidate Engagement</h6>
                    <p>
                      Use CareerBuilder's AI data to get exclusive insights into
                      your ideal candidate that can help you get the attention
                      of the top candidates.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="42"
                      viewBox="0 0 43 42"
                      fill="none"
                    >
                      <path
                        d="M25.1022 17.3345C27.3874 19.6023 27.3874 23.2966 25.1022 25.5644C22.817 27.8322 19.1241 27.8322 16.8389 25.5644C14.5537 23.2966 14.5537 19.6023 16.8389 17.3345C18.3563 15.8166 20.5135 15.3228 22.4514 15.8349"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9277 12.5436C34.8637 17.4633 34.8637 25.4371 29.9277 30.3567C24.9917 35.2764 16.9661 35.2764 12.0301 30.3567C7.09412 25.4371 7.09412 17.4633 12.0301 12.5436C16.2532 8.33722 22.7248 7.7337 27.606 10.733"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.2514 3.8927C22.0302 0.527586 13.1636 1.80779 7.20384 7.73331C-0.401279 15.3048 -0.401279 27.5765 7.20384 35.148C14.809 42.7195 27.149 42.7195 34.7541 35.148C41.4634 28.4543 42.2496 18.103 37.1124 10.568"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.1152 11.3545L31.7368 10.751"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9279 12.543L25.1016 17.3346"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1005 17.335L20.7129 21.706"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.7383 10.7515L33.7127 8.77637"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.928 12.5434L31.1163 11.3547"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0254 10.6592L31.1169 11.3542"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.3086 6.19772V5.15527"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.1816 4.11225L36.3078 1.02148V5.15471"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.9021 5.41069L33.1818 4.11218"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.9022 5.41016L30.5859 6.70865L31.0247 10.659"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.1152 11.3548L35.777 11.8851L37.0933 10.5684"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.3507 6.19727H36.3086"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.0938 10.5683L41.4996 6.19727H37.3497"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0254 10.6592L31.7384 10.7506"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>
                      Boost Performance with an Outsourced Talent Acquisition
                      Team
                    </h6>
                    <p>
                      Use our proven process to quickly drive the qualified,
                      targeted profiles into your sourcing pipeline and receive
                      qualified applicants in real-time.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="43"
                      viewBox="0 0 38 43"
                      fill="none"
                    >
                      <path
                        d="M19.2024 27.4089C20.7963 27.4089 22.0883 26.1236 22.0883 24.538C22.0883 22.9524 20.7963 21.667 19.2024 21.667C17.6085 21.667 16.3164 22.9524 16.3164 24.538C16.3164 26.1236 17.6085 27.4089 19.2024 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.459 31.3438V41.0212"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0098 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.27148 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2358 27.4248H17.7848C15.7856 27.4248 13.4316 28.1184 13.4316 31.3442V36.1668C13.4316 37.2151 14.3023 38.07 15.3664 38.07H15.8501"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.1907 27.4089C12.7845 27.4089 14.0766 26.1236 14.0766 24.538C14.0766 22.9524 12.7845 21.667 11.1907 21.667C9.59679 21.667 8.30469 22.9524 8.30469 24.538C8.30469 26.1236 9.59679 27.4089 11.1907 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4472 27.4248H10.0123C8.02921 27.4248 5.69141 28.1184 5.69141 31.3442V36.1668C5.69141 37.2151 6.54592 38.07 7.61002 38.07H8.0937"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M30.1992 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.3118 27.4089C28.9056 27.4089 30.1977 26.1236 30.1977 24.538C30.1977 22.9524 28.9056 21.667 27.3118 21.667C25.7179 21.667 24.4258 22.9524 24.4258 24.538C24.4258 26.1236 25.7179 27.4089 27.3118 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.0215 27.4248H28.4564C30.4395 27.4248 32.7773 28.1184 32.7773 31.3442V36.1668C32.7773 37.2151 31.9228 38.07 30.8587 38.07H30.375"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 27.4248H20.6854C22.6846 27.4248 25.0386 28.1184 25.0386 31.3442V36.1668C25.0386 37.2151 24.1679 38.07 23.1038 38.07H22.6202"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 41.021V38.0693"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.2642 10.6992L19.2355 19.0863L14.0762 15.2153"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 3.60254V4.89286"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.975 5.68262L26.3301 6.79552"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M32.634 11.3438L31.5215 11.9889"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.7136 19.0859H33.4238"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.75781 19.0859H5.04763"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.83789 11.3438L6.95037 11.9889"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4961 5.68277L12.141 6.79568"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.245 26.3925C36.3413 24.086 36.9701 21.5054 36.9701 18.7634C36.9701 8.95697 29.0377 1.02148 19.235 1.02148C9.4324 1.02148 1.5 8.95697 1.5 18.7634C1.5 21.4892 2.11266 24.0699 3.22513 26.3925"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Pipeline Management on Your Terms</h6>
                    <p>
                      Take full control of how you manage job postings,
                      candidate pools and outreach campaigns. Choose to use the
                      CareerBuilder platform or your own and utilize the
                      analytics and labor market data to build out your
                      candidate pipelines and pools.
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel
                className="wd-review-job mgl-100 animation-tab"
                data-pin="1"
              >
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                    >
                      <path
                        d="M6.65866 19.7309C8.44844 19.7309 9.89931 18.2867 9.89931 16.5051C9.89931 14.7235 8.44844 13.2793 6.65866 13.2793C4.86888 13.2793 3.41797 14.7235 3.41797 16.5051C3.41797 18.2867 4.86888 19.7309 6.65866 19.7309Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6094 27.4248C11.3671 27.1344 11.8508 26.4248 11.8508 25.6183V24.8925C11.8508 21.0215 9.48078 19.7312 7.19134 19.7312H6.15946C3.87003 19.7312 1.5 21.0215 1.5 24.8925V25.6183C1.5 26.4248 1.9998 27.1344 2.74144 27.4248C3.6282 27.7635 4.98249 28.1183 6.67538 28.1183C8.36827 28.1183 9.70649 27.7635 10.6094 27.4248Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.5571 32.6342C23.3468 32.6342 24.7977 31.19 24.7977 29.4084C24.7977 27.6269 23.3468 26.1826 21.5571 26.1826C19.7673 26.1826 18.3164 27.6269 18.3164 29.4084C18.3164 31.19 19.7673 32.6342 21.5571 32.6342Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4902 40.3273C26.248 40.037 26.7317 39.3273 26.7317 38.5209V37.7951C26.7317 33.9241 24.3616 32.6338 22.0722 32.6338H21.0403C18.7509 32.6338 16.3809 33.9241 16.3809 37.7951V38.5209C16.3809 39.3273 16.8807 40.037 17.6223 40.3273C18.5091 40.666 19.8634 41.0209 21.5562 41.0209C23.2491 41.0209 24.5873 40.666 25.4902 40.3273Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.5571 7.4731C23.3468 7.4731 24.7977 6.02885 24.7977 4.24729C24.7977 2.46573 23.3468 1.02148 21.5571 1.02148C19.7673 1.02148 18.3164 2.46573 18.3164 4.24729C18.3164 6.02885 19.7673 7.4731 21.5571 7.4731Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4902 15.1662C26.248 14.8759 26.7317 14.1662 26.7317 13.3598V12.6339C26.7317 8.76298 24.3616 7.47266 22.0722 7.47266H21.0403C18.7509 7.47266 16.3809 8.76298 16.3809 12.6339V13.3598C16.3809 14.1662 16.8807 14.8759 17.6223 15.1662C18.5091 15.5049 19.8634 15.8598 21.5562 15.8598C23.2491 15.8598 24.5873 15.5049 25.4902 15.1662Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.3247 19.7309C38.1145 19.7309 39.5653 18.2867 39.5653 16.5051C39.5653 14.7235 38.1145 13.2793 36.3247 13.2793C34.5349 13.2793 33.084 14.7235 33.084 16.5051C33.084 18.2867 34.5349 19.7309 36.3247 19.7309Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40.2754 27.4248C41.0331 27.1344 41.5168 26.4248 41.5168 25.6183V24.8925C41.5168 21.0215 39.1468 19.7312 36.8574 19.7312H35.8255C33.536 19.7312 31.166 21.0215 31.166 24.8925V25.6183C31.166 26.4248 31.6658 27.1344 32.4075 27.4248C33.2942 27.7635 34.6485 28.1183 36.3414 28.1183C38.0343 28.1183 39.3725 27.7635 40.2754 27.4248Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.7767 31.0859C33.3095 33.0698 31.4232 34.715 29.2305 35.8763"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.78711 10.9403C10.5445 8.79514 12.8178 7.11772 15.4297 6.06934"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8177 35.8763C11.625 34.715 9.73866 33.0698 8.27148 31.0859"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.6191 6.06934C30.231 7.11772 32.5043 8.79514 34.2617 10.9403"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Access To Millions Of Candidates</h6>
                    <p>
                      Reach 80M+ unique, diverse U.S. job seekers annually, when
                      you post your jobs through the large number of targeted
                      talent acquisition CareerBuilder channels.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="43"
                      viewBox="0 0 42 43"
                      fill="none"
                    >
                      <path
                        d="M6.74304 31.8416C8.56215 31.8416 10.0368 30.3736 10.0368 28.5629C10.0368 26.7521 8.56215 25.2842 6.74304 25.2842C4.92392 25.2842 3.44922 26.7521 3.44922 28.5629C3.44922 30.3736 4.92392 31.8416 6.74304 31.8416Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.7587 40.3162C11.5289 40.0212 12.0205 39.2998 12.0205 38.4802V37.0867C12.0205 33.1523 9.61161 31.8408 7.28464 31.8408H6.23585C3.90888 31.8408 1.5 33.1523 1.5 37.0867V38.4802C1.5 39.2998 2.00799 40.0212 2.7618 40.3162C3.66309 40.6605 5.03958 41.0211 6.76023 41.0211C8.48087 41.0211 9.84102 40.6605 10.7587 40.3162Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.5848 31.8416C37.4039 31.8416 38.8786 30.3736 38.8786 28.5629C38.8786 26.7521 37.4039 25.2842 35.5848 25.2842C33.7657 25.2842 32.291 26.7521 32.291 28.5629C32.291 30.3736 33.7657 31.8416 35.5848 31.8416Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.586 40.3162C30.8158 40.0212 30.3242 39.2998 30.3242 38.4802V37.0867C30.3242 33.1523 32.7331 31.8408 35.0601 31.8408H36.1089C38.4358 31.8408 40.8447 33.1523 40.8447 37.0867V38.4802C40.8447 39.2998 40.3367 40.0212 39.5829 40.3162C38.6816 40.6605 37.3051 41.0211 35.5845 41.0211C33.8638 41.0211 32.4873 40.6605 31.586 40.3162Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.1649 7.57886C22.984 7.57886 24.4587 6.11094 24.4587 4.30017C24.4587 2.4894 22.984 1.02148 21.1649 1.02148C19.3458 1.02148 17.8711 2.4894 17.8711 4.30017C17.8711 6.11094 19.3458 7.57886 21.1649 7.57886Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1786 16.0545C25.9488 15.7594 26.4404 15.0381 26.4404 14.2184V12.825C26.4404 8.89058 24.0315 7.5791 21.7046 7.5791H20.6558C18.3288 7.5791 15.9199 8.89058 15.9199 12.825V14.2184C15.9199 15.0381 16.4279 15.7594 17.1817 16.0545C18.083 16.3988 19.4595 16.7594 21.1801 16.7594C22.9008 16.7594 24.2609 16.3988 25.1786 16.0545Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.1641 27.7433V19.2188"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.3611 27.9559L28.7353 32.2182"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.0656 28.0215L13.6914 32.2838"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Automate Candidate Engagement</h6>
                    <p>
                      Use CareerBuilder's AI data to get exclusive insights into
                      your ideal candidate that can help you get the attention
                      of the top candidates.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="42"
                      viewBox="0 0 43 42"
                      fill="none"
                    >
                      <path
                        d="M25.1022 17.3345C27.3874 19.6023 27.3874 23.2966 25.1022 25.5644C22.817 27.8322 19.1241 27.8322 16.8389 25.5644C14.5537 23.2966 14.5537 19.6023 16.8389 17.3345C18.3563 15.8166 20.5135 15.3228 22.4514 15.8349"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9277 12.5436C34.8637 17.4633 34.8637 25.4371 29.9277 30.3567C24.9917 35.2764 16.9661 35.2764 12.0301 30.3567C7.09412 25.4371 7.09412 17.4633 12.0301 12.5436C16.2532 8.33722 22.7248 7.7337 27.606 10.733"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.2514 3.8927C22.0302 0.527586 13.1636 1.80779 7.20384 7.73331C-0.401279 15.3048 -0.401279 27.5765 7.20384 35.148C14.809 42.7195 27.149 42.7195 34.7541 35.148C41.4634 28.4543 42.2496 18.103 37.1124 10.568"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.1152 11.3545L31.7368 10.751"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9279 12.543L25.1016 17.3346"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1005 17.335L20.7129 21.706"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.7383 10.7515L33.7127 8.77637"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.928 12.5434L31.1163 11.3547"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0254 10.6592L31.1169 11.3542"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.3086 6.19772V5.15527"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.1816 4.11225L36.3078 1.02148V5.15471"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.9021 5.41069L33.1818 4.11218"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.9022 5.41016L30.5859 6.70865L31.0247 10.659"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.1152 11.3548L35.777 11.8851L37.0933 10.5684"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.3507 6.19727H36.3086"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.0938 10.5683L41.4996 6.19727H37.3497"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0254 10.6592L31.7384 10.7506"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>
                      Boost Performance with an Outsourced Talent Acquisition
                      Team
                    </h6>
                    <p>
                      Use our proven process to quickly drive the qualified,
                      targeted profiles into your sourcing pipeline and receive
                      qualified applicants in real-time.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="43"
                      viewBox="0 0 38 43"
                      fill="none"
                    >
                      <path
                        d="M19.2024 27.4089C20.7963 27.4089 22.0883 26.1236 22.0883 24.538C22.0883 22.9524 20.7963 21.667 19.2024 21.667C17.6085 21.667 16.3164 22.9524 16.3164 24.538C16.3164 26.1236 17.6085 27.4089 19.2024 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.459 31.3438V41.0212"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0098 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.27148 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2358 27.4248H17.7848C15.7856 27.4248 13.4316 28.1184 13.4316 31.3442V36.1668C13.4316 37.2151 14.3023 38.07 15.3664 38.07H15.8501"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.1907 27.4089C12.7845 27.4089 14.0766 26.1236 14.0766 24.538C14.0766 22.9524 12.7845 21.667 11.1907 21.667C9.59679 21.667 8.30469 22.9524 8.30469 24.538C8.30469 26.1236 9.59679 27.4089 11.1907 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4472 27.4248H10.0123C8.02921 27.4248 5.69141 28.1184 5.69141 31.3442V36.1668C5.69141 37.2151 6.54592 38.07 7.61002 38.07H8.0937"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M30.1992 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.3118 27.4089C28.9056 27.4089 30.1977 26.1236 30.1977 24.538C30.1977 22.9524 28.9056 21.667 27.3118 21.667C25.7179 21.667 24.4258 22.9524 24.4258 24.538C24.4258 26.1236 25.7179 27.4089 27.3118 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.0215 27.4248H28.4564C30.4395 27.4248 32.7773 28.1184 32.7773 31.3442V36.1668C32.7773 37.2151 31.9228 38.07 30.8587 38.07H30.375"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 27.4248H20.6854C22.6846 27.4248 25.0386 28.1184 25.0386 31.3442V36.1668C25.0386 37.2151 24.1679 38.07 23.1038 38.07H22.6202"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 41.021V38.0693"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.2642 10.6992L19.2355 19.0863L14.0762 15.2153"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 3.60254V4.89286"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.975 5.68262L26.3301 6.79552"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M32.634 11.3438L31.5215 11.9889"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.7136 19.0859H33.4238"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.75781 19.0859H5.04763"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.83789 11.3438L6.95037 11.9889"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4961 5.68277L12.141 6.79568"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.245 26.3925C36.3413 24.086 36.9701 21.5054 36.9701 18.7634C36.9701 8.95697 29.0377 1.02148 19.235 1.02148C9.4324 1.02148 1.5 8.95697 1.5 18.7634C1.5 21.4892 2.11266 24.0699 3.22513 26.3925"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Pipeline Management on Your Terms</h6>
                    <p>
                      Take full control of how you manage job postings,
                      candidate pools and outreach campaigns. Choose to use the
                      CareerBuilder platform or your own and utilize the
                      analytics and labor market data to build out your
                      candidate pipelines and pools.
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel
                className="wd-review-job mgl-100 animation-tab"
                data-pin="1"
              >
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                    >
                      <path
                        d="M6.65866 19.7309C8.44844 19.7309 9.89931 18.2867 9.89931 16.5051C9.89931 14.7235 8.44844 13.2793 6.65866 13.2793C4.86888 13.2793 3.41797 14.7235 3.41797 16.5051C3.41797 18.2867 4.86888 19.7309 6.65866 19.7309Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6094 27.4248C11.3671 27.1344 11.8508 26.4248 11.8508 25.6183V24.8925C11.8508 21.0215 9.48078 19.7312 7.19134 19.7312H6.15946C3.87003 19.7312 1.5 21.0215 1.5 24.8925V25.6183C1.5 26.4248 1.9998 27.1344 2.74144 27.4248C3.6282 27.7635 4.98249 28.1183 6.67538 28.1183C8.36827 28.1183 9.70649 27.7635 10.6094 27.4248Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.5571 32.6342C23.3468 32.6342 24.7977 31.19 24.7977 29.4084C24.7977 27.6269 23.3468 26.1826 21.5571 26.1826C19.7673 26.1826 18.3164 27.6269 18.3164 29.4084C18.3164 31.19 19.7673 32.6342 21.5571 32.6342Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4902 40.3273C26.248 40.037 26.7317 39.3273 26.7317 38.5209V37.7951C26.7317 33.9241 24.3616 32.6338 22.0722 32.6338H21.0403C18.7509 32.6338 16.3809 33.9241 16.3809 37.7951V38.5209C16.3809 39.3273 16.8807 40.037 17.6223 40.3273C18.5091 40.666 19.8634 41.0209 21.5562 41.0209C23.2491 41.0209 24.5873 40.666 25.4902 40.3273Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.5571 7.4731C23.3468 7.4731 24.7977 6.02885 24.7977 4.24729C24.7977 2.46573 23.3468 1.02148 21.5571 1.02148C19.7673 1.02148 18.3164 2.46573 18.3164 4.24729C18.3164 6.02885 19.7673 7.4731 21.5571 7.4731Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.4902 15.1662C26.248 14.8759 26.7317 14.1662 26.7317 13.3598V12.6339C26.7317 8.76298 24.3616 7.47266 22.0722 7.47266H21.0403C18.7509 7.47266 16.3809 8.76298 16.3809 12.6339V13.3598C16.3809 14.1662 16.8807 14.8759 17.6223 15.1662C18.5091 15.5049 19.8634 15.8598 21.5562 15.8598C23.2491 15.8598 24.5873 15.5049 25.4902 15.1662Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.3247 19.7309C38.1145 19.7309 39.5653 18.2867 39.5653 16.5051C39.5653 14.7235 38.1145 13.2793 36.3247 13.2793C34.5349 13.2793 33.084 14.7235 33.084 16.5051C33.084 18.2867 34.5349 19.7309 36.3247 19.7309Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40.2754 27.4248C41.0331 27.1344 41.5168 26.4248 41.5168 25.6183V24.8925C41.5168 21.0215 39.1468 19.7312 36.8574 19.7312H35.8255C33.536 19.7312 31.166 21.0215 31.166 24.8925V25.6183C31.166 26.4248 31.6658 27.1344 32.4075 27.4248C33.2942 27.7635 34.6485 28.1183 36.3414 28.1183C38.0343 28.1183 39.3725 27.7635 40.2754 27.4248Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.7767 31.0859C33.3095 33.0698 31.4232 34.715 29.2305 35.8763"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.78711 10.9403C10.5445 8.79514 12.8178 7.11772 15.4297 6.06934"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.8177 35.8763C11.625 34.715 9.73866 33.0698 8.27148 31.0859"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.6191 6.06934C30.231 7.11772 32.5043 8.79514 34.2617 10.9403"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Access To Millions Of Candidates</h6>
                    <p>
                      Reach 80M+ unique, diverse U.S. job seekers annually, when
                      you post your jobs through the large number of targeted
                      talent acquisition CareerBuilder channels.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="43"
                      viewBox="0 0 42 43"
                      fill="none"
                    >
                      <path
                        d="M6.74304 31.8416C8.56215 31.8416 10.0368 30.3736 10.0368 28.5629C10.0368 26.7521 8.56215 25.2842 6.74304 25.2842C4.92392 25.2842 3.44922 26.7521 3.44922 28.5629C3.44922 30.3736 4.92392 31.8416 6.74304 31.8416Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.7587 40.3162C11.5289 40.0212 12.0205 39.2998 12.0205 38.4802V37.0867C12.0205 33.1523 9.61161 31.8408 7.28464 31.8408H6.23585C3.90888 31.8408 1.5 33.1523 1.5 37.0867V38.4802C1.5 39.2998 2.00799 40.0212 2.7618 40.3162C3.66309 40.6605 5.03958 41.0211 6.76023 41.0211C8.48087 41.0211 9.84102 40.6605 10.7587 40.3162Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.5848 31.8416C37.4039 31.8416 38.8786 30.3736 38.8786 28.5629C38.8786 26.7521 37.4039 25.2842 35.5848 25.2842C33.7657 25.2842 32.291 26.7521 32.291 28.5629C32.291 30.3736 33.7657 31.8416 35.5848 31.8416Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.586 40.3162C30.8158 40.0212 30.3242 39.2998 30.3242 38.4802V37.0867C30.3242 33.1523 32.7331 31.8408 35.0601 31.8408H36.1089C38.4358 31.8408 40.8447 33.1523 40.8447 37.0867V38.4802C40.8447 39.2998 40.3367 40.0212 39.5829 40.3162C38.6816 40.6605 37.3051 41.0211 35.5845 41.0211C33.8638 41.0211 32.4873 40.6605 31.586 40.3162Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.1649 7.57886C22.984 7.57886 24.4587 6.11094 24.4587 4.30017C24.4587 2.4894 22.984 1.02148 21.1649 1.02148C19.3458 1.02148 17.8711 2.4894 17.8711 4.30017C17.8711 6.11094 19.3458 7.57886 21.1649 7.57886Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1786 16.0545C25.9488 15.7594 26.4404 15.0381 26.4404 14.2184V12.825C26.4404 8.89058 24.0315 7.5791 21.7046 7.5791H20.6558C18.3288 7.5791 15.9199 8.89058 15.9199 12.825V14.2184C15.9199 15.0381 16.4279 15.7594 17.1817 16.0545C18.083 16.3988 19.4595 16.7594 21.1801 16.7594C22.9008 16.7594 24.2609 16.3988 25.1786 16.0545Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.1641 27.7433V19.2188"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.3611 27.9559L28.7353 32.2182"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.0656 28.0215L13.6914 32.2838"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Automate Candidate Engagement</h6>
                    <p>
                      Use CareerBuilder's AI data to get exclusive insights into
                      your ideal candidate that can help you get the attention
                      of the top candidates.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="42"
                      viewBox="0 0 43 42"
                      fill="none"
                    >
                      <path
                        d="M25.1022 17.3345C27.3874 19.6023 27.3874 23.2966 25.1022 25.5644C22.817 27.8322 19.1241 27.8322 16.8389 25.5644C14.5537 23.2966 14.5537 19.6023 16.8389 17.3345C18.3563 15.8166 20.5135 15.3228 22.4514 15.8349"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9277 12.5436C34.8637 17.4633 34.8637 25.4371 29.9277 30.3567C24.9917 35.2764 16.9661 35.2764 12.0301 30.3567C7.09412 25.4371 7.09412 17.4633 12.0301 12.5436C16.2532 8.33722 22.7248 7.7337 27.606 10.733"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.2514 3.8927C22.0302 0.527586 13.1636 1.80779 7.20384 7.73331C-0.401279 15.3048 -0.401279 27.5765 7.20384 35.148C14.809 42.7195 27.149 42.7195 34.7541 35.148C41.4634 28.4543 42.2496 18.103 37.1124 10.568"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.1152 11.3545L31.7368 10.751"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.9279 12.543L25.1016 17.3346"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.1005 17.335L20.7129 21.706"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.7383 10.7515L33.7127 8.77637"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M29.928 12.5434L31.1163 11.3547"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0254 10.6592L31.1169 11.3542"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M36.3086 6.19772V5.15527"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.1816 4.11225L36.3078 1.02148V5.15471"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.9021 5.41069L33.1818 4.11218"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.9022 5.41016L30.5859 6.70865L31.0247 10.659"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.1152 11.3548L35.777 11.8851L37.0933 10.5684"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.3507 6.19727H36.3086"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37.0938 10.5683L41.4996 6.19727H37.3497"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.0254 10.6592L31.7384 10.7506"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>
                      Boost Performance with an Outsourced Talent Acquisition
                      Team
                    </h6>
                    <p>
                      Use our proven process to quickly drive the qualified,
                      targeted profiles into your sourcing pipeline and receive
                      qualified applicants in real-time.
                    </p>
                  </div>
                </div>
                <div className="icon-review">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="43"
                      viewBox="0 0 38 43"
                      fill="none"
                    >
                      <path
                        d="M19.2024 27.4089C20.7963 27.4089 22.0883 26.1236 22.0883 24.538C22.0883 22.9524 20.7963 21.667 19.2024 21.667C17.6085 21.667 16.3164 22.9524 16.3164 24.538C16.3164 26.1236 17.6085 27.4089 19.2024 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.459 31.3438V41.0212"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0098 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.27148 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2358 27.4248H17.7848C15.7856 27.4248 13.4316 28.1184 13.4316 31.3442V36.1668C13.4316 37.2151 14.3023 38.07 15.3664 38.07H15.8501"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.1907 27.4089C12.7845 27.4089 14.0766 26.1236 14.0766 24.538C14.0766 22.9524 12.7845 21.667 11.1907 21.667C9.59679 21.667 8.30469 22.9524 8.30469 24.538C8.30469 26.1236 9.59679 27.4089 11.1907 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4472 27.4248H10.0123C8.02921 27.4248 5.69141 28.1184 5.69141 31.3442V36.1668C5.69141 37.2151 6.54592 38.07 7.61002 38.07H8.0937"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M30.1992 41.0212V31.3438"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.3118 27.4089C28.9056 27.4089 30.1977 26.1236 30.1977 24.538C30.1977 22.9524 28.9056 21.667 27.3118 21.667C25.7179 21.667 24.4258 22.9524 24.4258 24.538C24.4258 26.1236 25.7179 27.4089 27.3118 27.4089Z"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M27.0215 27.4248H28.4564C30.4395 27.4248 32.7773 28.1184 32.7773 31.3442V36.1668C32.7773 37.2151 31.9228 38.07 30.8587 38.07H30.375"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 27.4248H20.6854C22.6846 27.4248 25.0386 28.1184 25.0386 31.3442V36.1668C25.0386 37.2151 24.1679 38.07 23.1038 38.07H22.6202"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 41.021V38.0693"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.2642 10.6992L19.2355 19.0863L14.0762 15.2153"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2344 3.60254V4.89286"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M26.975 5.68262L26.3301 6.79552"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M32.634 11.3438L31.5215 11.9889"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.7136 19.0859H33.4238"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.75781 19.0859H5.04763"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.83789 11.3438L6.95037 11.9889"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4961 5.68277L12.141 6.79568"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35.245 26.3925C36.3413 24.086 36.9701 21.5054 36.9701 18.7634C36.9701 8.95697 29.0377 1.02148 19.235 1.02148C9.4324 1.02148 1.5 8.95697 1.5 18.7634C1.5 21.4892 2.11266 24.0699 3.22513 26.3925"
                        stroke="#148160"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Pipeline Management on Your Terms</h6>
                    <p>
                      Take full control of how you manage job postings,
                      candidate pools and outreach campaigns. Choose to use the
                      CareerBuilder platform or your own and utilize the
                      analytics and labor market data to build out your
                      candidate pipelines and pools.
                    </p>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </Tabs>
    </section>
  );
}

export default Box07;
