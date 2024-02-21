"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function ScrollToTop(): React.JSX.Element {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

  // Check if user has already scroll in y-axis
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  // Scroll to top action
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <button className="fixed bottom-10 right-10 md:right-[100px] h-10 z-20 rounded-full">
          <FontAwesomeIcon
            icon={faCircleChevronUp}
            style={{ color: "#E8AA3D", fontSize: "48px" }}
            onClick={goToTop}
          />
          <h1 className="text-2xl text-transparent">Hey</h1>
        </button>
      )}
    </>
  );
}
