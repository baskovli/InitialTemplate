import React from "react";
import clsx from "clsx";
import "./progress-bar.scss";

const ProgressBar = ({
  progress,
  size,
  completed,
  error
}: {
  progress: any;
  size: any;
  completed: any;
  error: any;
}) => {
  return (
    <div
      className={clsx("progress-bar", { completed, error: !!error })}
      style={{
        height: size
      }}
    >
      <div
        className="progress-bar_percentage"
        style={{
          width: `${progress * 100}%`
        }}
      />
    </div>
  );
};

export default ProgressBar;
