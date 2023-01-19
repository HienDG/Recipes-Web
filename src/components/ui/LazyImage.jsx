import { memo } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

export const LazyLoadImg = ({ image, title, imageClass, effect }) => {
  return (
    <LazyLoadImage
      src={image}
      alt={title}
      className={imageClass}
      effect={effect}
      wrapperProps={{
        style: {
          display: "block",
          height: "100%",
          width: "100%",
        },
      }}
    />
  );
};

const LazyImage = ({ image, effect, wrapperClassName, imageClassName, title = "" }) => {
  const wrapperClass = wrapperClassName
    ? wrapperClassName
    : "w-full mx-auto flex justify-center items-center";
  const imageClass = imageClassName
    ? imageClassName
    : "max-h-[160px] group-hover:scale-[1.1] transition duration-300";
  return (
    <div className={wrapperClass}>
      <LazyLoadImg image={image} title={title} imageClass={imageClass} effect={effect} />
    </div>
  );
};

export default memo(LazyImage);
