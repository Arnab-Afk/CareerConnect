import React, { useState } from "react";
import { Line } from "rc-progress";
import { useEffect } from "react";

function StarProgress({ targetHeight, percent: _percent }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const ProgressStar = () => {
      if (window.pageYOffset > targetHeight) {
        setPercent(_percent);
      }
    };

    window.addEventListener("scroll", ProgressStar);

    return () => window.removeEventListener("scroll", ProgressStar);
  }, [targetHeight]);

  return (
    <Line
      prefixCls="star-progress"
      percent={percent}
      strokeWidth={2}
      trailWidth={2}
      strokeColor="#14a077"
      strokeLinecap="square"
      trailColor="#e5e5e5"
    />
  );
}

export default StarProgress;
