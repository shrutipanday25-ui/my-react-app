import { useState, useRef, useEffect } from "react";

function ImageSlider() {
  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    sliderRef.current.focus();
  };

  const previousImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
    sliderRef.current.focus();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    const slider = sliderRef.current;

    slider.addEventListener("keydown", handleKeyDown);

    return () => {
      slider.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div
      ref={sliderRef}
      tabIndex="0"
      style={{
        width: "600px",
        margin: "50px auto",
        textAlign: "center"
      }}
    >
      <h1>Image Slider</h1>

      <img
        src={images[currentIndex]}
        alt="Slider"
        width="600"
        height="400"
      />

      <div>
        <button onClick={previousImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}

export default ImageSlider;