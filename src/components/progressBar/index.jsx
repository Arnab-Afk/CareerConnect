import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircleProgess() {
  return (
    <VisibilitySensor>
      {({ isVisible }) => {
        const percentage = isVisible ? 60 : 0;
        return (
          <CircularProgressbarWithChildren
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={10}
          >
            <div className="text-progress">success</div>
          </CircularProgressbarWithChildren>
        );
      }}
    </VisibilitySensor>
  );
}

export default CircleProgess;
