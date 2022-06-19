import { useCallback, useState, useMemo } from "react";

import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import main1 from "../images/image-product-1.jpg";
import main2 from "../images/image-product-2.jpg";
import main3 from "../images/image-product-3.jpg";
import main4 from "../images/image-product-4.jpg";

export const Gallery = () => {
  const [mainImage, setMainImage] = useState<string>(main1);

  const handleClick = useCallback(
    (selection: string) => {
      setMainImage(selection);
    },
    [setMainImage]
  );

  const selectedThumbnailStyle = useMemo(() => {
    return { opacity: ".4", border: "3px solid #fbb" };
  }, []);

  return (
    <div id="gallery">
      <img src={mainImage} className="main-image" />
      <button
        className="thumbnail"
        onClick={() => handleClick(main1)}
        style={mainImage === main1 ? selectedThumbnailStyle : undefined}
      >
        <img src={thumbnail1} />
      </button>
      <button
        className="thumbnail"
        onClick={() => handleClick(main2)}
        style={mainImage === main2 ? selectedThumbnailStyle : undefined}
      >
        <img src={thumbnail2} />
      </button>
      <button
        className="thumbnail"
        onClick={() => handleClick(main3)}
        style={mainImage === main3 ? selectedThumbnailStyle : undefined}
      >
        <img src={thumbnail3} />
      </button>
      <button
        className="thumbnail"
        onClick={() => handleClick(main4)}
        style={mainImage === main4 ? selectedThumbnailStyle : undefined}
      >
        <img src={thumbnail4} />
      </button>
    </div>
  );
};
