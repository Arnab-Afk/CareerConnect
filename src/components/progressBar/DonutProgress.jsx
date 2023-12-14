import React, { useState } from "react";
// import { Line } from "rc-progress";
import { useEffect } from "react";

function DonutProgress({ targetHeight, done }) {
  const [style, setStyle] = useState();

  useEffect(() => {
    const ProgressStar = () => {
      if (window.pageYOffset > targetHeight - 50) {
        const newStyle = {
          opacity: 1,
          width: `${done}%`,
        };

        setStyle(newStyle);
      }
    };

    window.addEventListener("scroll", ProgressStar);

    return () => window.removeEventListener("scroll", ProgressStar);
  }, [targetHeight]);

  return (
    <div className="donat-bg">
      <div className="custom-donat" style={style}>
        {/* {done}% */}
      </div>
    </div>
  );
}

export default DonutProgress;
