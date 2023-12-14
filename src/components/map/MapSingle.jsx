import React, { useState } from "react";
import PropTypes from "prop-types";
import MapBox, { Marker, Popup, NavigationControl } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";
import "./style.scss";

MapSingle.propTypes = {};

function MapSingle({ marKers }) {
  const [popupOpen, setPopupOpen] = useState({});

  const [viewPort, setViewPort] = useState({
    longitude: -74.0004,
    latitude: 40.71,
    zoom: 14,
  });

  return (
    <div className="map-content">
      <MapBox
        mapLib={import("mapbox-gl")}
        initialViewState={{
          ...viewPort,
        }}
        mapboxAccessToken="pk.eyJ1IjoidGhlbWVzZmxhdCIsImEiOiJjbGt3NGxtYncwa2F2M21saHM3M21uM3h2In0.9NbzjykXil1nELxQ1V8rkA"
        style={{ width: "100%", height: 300 }}
        mapStyle="mapbox://styles/themesflat/cll6d64hy00m901pd1tbe65ra"
        scrollZoom={false}
      >
        {marKers.map((item) => {
          return (
            <div key={item.id}>
              <Marker
                longitude={item.longitude}
                latitude={item.latitude}
                anchor="center"
                closeOnClick={false}
                onClick={(e) => {
                  setPopupOpen((prevItem) => ({
                    ...prevItem,
                    [item.id]: !prevItem[item.id],
                  }));
                }}
              >
                <div className="marker marker-logo-cty">
                  <img
                    src={item.img}
                    alt="img"
                    style={{ width: "28px", height: "28px" }}
                  />
                </div>
              </Marker>
              {popupOpen[item.id] && (
                <Popup
                  key={item.id}
                  longitude={item.longitude}
                  latitude={item.latitude}
                  anchor="center"
                  onClose={() => setPopupOpen(false)}
                  closeOnClick={false}
                  closeButton={true}
                  offsetLeft={10}
                >
                  <div className="marker-popup">
                    <img src={item.img} alt="img" />
                    <div className="content">
                      <h4>{item.title}</h4>
                      <h3>
                        <Link to="/Jobsingle_v1">
                          {item.name}&nbsp;<span className="icon-bolt"></span>
                        </Link>
                      </h3>
                      <p>
                        <i className="icon-map-pin"></i>&nbsp;
                        {item.address}
                      </p>
                    </div>
                  </div>
                </Popup>
              )}
            </div>
          );
        })}

        <NavigationControl position="top-left" />
      </MapBox>
    </div>
  );
}

export default MapSingle;
