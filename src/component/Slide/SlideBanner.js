import { React, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Image } from "antd";
const SlideBanner = () => {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isInfo, setIsInfo] = useState("");
  const [showImage, setShowImage] = useState();
  const slideImages = [
    {
      id: 1,
      url: "https://i.pinimg.com/564x/f0/64/d7/f064d73ebec1795cde17035f3004ca09.jpg",
      caption: "Slide 1",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/564x/b3/de/49/b3de49b30fb0210bec05aa1ad73cf832.jpg",
      caption: "Slide 2",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/c5/11/90/c511903110a2e174bd5319419d916bf1.jpg",
      caption: "Slide 3",
    },
  ];
  const preViewImage = (id) => {
    const item = slideImages?.find((x) => x.id === id);
    setShowImage(item);
    setVisible(true);
  };

  const properties = {
    duration: 5000,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: (e) => (
      <div className={active === false ? "dot-child" : "active"}></div>
    ),
    onChange: (e, index) => {
      setIsInfo(slideImages[index].caption);
    },
  };
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((slideImage) => (
          <>
            <div className="each-slide" key={slideImage.id}>
              <div
                onClick={() => {
                  preViewImage(slideImage.id);
                }}
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  height: "500px",
                }}
              ></div>
            </div>
          </>
        ))}
      </Slide>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => {
              setVisible(vis);
            },
          }}
        >
          <Image key={showImage?.id} src={showImage?.url} alt="post-image" />;
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default SlideBanner;
