import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Home_v1 from "./pages/Home_v1";


import Home_v7 from "./pages/Home_v7";

import Joblist_v1 from "./pages/Joblist_v1";


import Jobsingle_v1 from "./pages/Jobsingle_v1";

import Employer_v7 from "./pages/Employer_v7";
import Employersingle_v1 from "./pages/Employersingle_v1";
import Employerdashboard from "./pages/Employerdashboard";
import Candidates_v1 from "./pages/Candidates_v1";

import SampleCV from "./pages/SampleCV";
import SampleCVdetails from "./pages/SampleCVdetails";
import SampleCVslidebar from "./pages/SampleCVslidebar";
import Candidatesingle_v1 from "./pages/Candidatesingle_v1";
import Candidatesingle_v2 from "./pages/Candidatesingle_v2";

import AboutUs from "./pages/AboutUs";
import Faqs from "./pages/Faqs";
import Termsofuse from "./pages/Termsofuse";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ContactUs from "./pages/ContactUs";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import Preloader from "./components/preloader";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home_v7 />  },
    
   
    
    { path: "/home_v7", element: <Home_v7 /> },
    
    
    
    { path: "/joblist_v1", element: <Joblist_v1 /> },

    {path :"/Jobsingle_v1",element:<Jobsingle_v1/>},
    { path: "/employers_v7", element: <Employer_v7 /> },
    { path: "/employersingle_v1", element: <Employersingle_v1 /> },
    

    { path: "/employerdashboard", element: <Employerdashboard /> },
    { path: "/candidates_v1", element: <Candidates_v1 /> },
   
    { path: "/samplecv", element: <SampleCV /> },
    { path: "/samplecvdetails", element: <SampleCVdetails /> },
    { path: "/samplecvslidebar", element: <SampleCVslidebar /> },
    { path: "/candidatesingle_v1", element: <Candidatesingle_v1 /> },

    { path: "/aboutus", element: <AboutUs /> },
    { path: "/faqs", element: <Faqs /> },
    { path: "/termsofuse", element: <Termsofuse /> },
    { path: "/pricing", element: <Pricing /> },
    { path: "/login", element: <Login /> },
    { path: "/createaccount", element: <CreateAccount /> },
    { path: "/contactus", element: <ContactUs /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {!loading ? (
        <Router>
          <Routes>
        
        {/* Add other routes as needed */}
      </Routes>

          <ScrollToTop />
          <App />
        </Router>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default AppWrapper;
