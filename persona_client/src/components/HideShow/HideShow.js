import React, { useEffect, useRef, useState } from "react";

function HideShow(initialState) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialState);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return { ref, isComponentVisible, setIsComponentVisible };
}

export default HideShow;
