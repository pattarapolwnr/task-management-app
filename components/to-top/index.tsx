"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
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
