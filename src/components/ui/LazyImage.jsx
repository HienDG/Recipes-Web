import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

const LazyImage = ({ image, effect }) => {
  return (
    <div className='w-[200px] mx-auto flex justify-center items-center'>
      <LazyLoadImage
        src={image}
        alt={image}
        className='max-h-[160px] group-hover:scale-[1.1] transition duration-300'
        effect={effect}
      />
    </div>
  );
};

export default LazyImage;
