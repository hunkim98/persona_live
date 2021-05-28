import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";

const RouteChangeTracker = () => {
  const location = useLocation();
  useEffect(() => {
    let host = window.location.hostname;
    if (host !== "localhost") {
      const path = location.pathname + location.search;
      ReactGA.set({ page: path });
      ReactGA.pageview(path);
    }
  }, [location]);
  return <div></div>;
};

export default RouteChangeTracker;
