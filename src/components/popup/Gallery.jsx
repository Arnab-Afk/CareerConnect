import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import img1 from "../../assets/images/review/thumbv4.jpg";
import img2 from "../../assets/images/review/thumbv1.jpg";
import img3 from "../../assets/images/review/thumbv2.jpg";

import React from "react";
import { useState } from "react";

const photos = [
  { src: img1, width: 800, height: 450 },
  { src: img2, width: 800, height: 450 },
  { src: img3, width: 800, height: 450 },
];

function Gallery() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}

export default Gallery;
