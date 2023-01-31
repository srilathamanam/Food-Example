import React from "react";
import SiteFooter from "./SiteFooter";
import './LoadingSpinner.css';

/** Loading message used by components that fetch API data. */

function LoadingSpinner() {
  return (
      <>
        <div className="LoadingSpinner">
            Loading ...
        </div>
        <SiteFooter />
    </>
  );
}

export default LoadingSpinner;