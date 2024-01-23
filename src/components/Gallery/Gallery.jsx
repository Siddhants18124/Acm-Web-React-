import React from "react";
import "./Gallery.css";
import Pic1 from "../../assets/images/pic1.jpg";
import Pic2 from "../../assets/images/pic2.jpg";
import Pic3 from "../../assets/images/pic3.jpg";
import Pic4 from "../../assets/images/pic4.jpg";
import Pic5 from "../../assets/images/Gallery1.png";

function Gallery() {
  return (
    <>
      <main>
        <div class="prt1">
          <div class="paras">
            <p id="galleryPara1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Lorem ipsum dolor sit amet.
            </p>

            <p id="galleryPara2">DEEP DIVE INTO THE TECH GALLERY OF BMU</p>
          </div>
          <img srcSet={Pic5} class="galleryImg1" />
        </div>

        <div class="grid">
          <div class="image-grid">
            <img srcSet={Pic1} alt="Image 1" />
            <img srcSet={Pic2} alt="Image 2" />
            <img srcSet={Pic3} alt="Image 3" />
            <img srcSet={Pic4} alt="Image 4" />
            <img srcSet={Pic1} alt="Image 5" />
            <img srcSet={Pic2} alt="Image 6" />
            <img srcSet={Pic3} alt="Image 7" />
            <img srcSet={Pic4} alt="Image 8" />
            <img srcSet={Pic1} alt="Image 9" />
            <img srcSet={Pic2} alt="Image 10" />
            <img srcSet={Pic3} alt="Image 11" />
            <img srcSet={Pic4} alt="Image 12" />
            <img srcSet={Pic1} alt="Image 13" />
            <img srcSet={Pic2} alt="Image 14" />
            <img srcSet={Pic3} alt="Image 15" />
            <img srcSet={Pic4} alt="Image 16" />
            <img srcSet={Pic1} alt="Image 17" />
            <img srcSet={Pic2} alt="Image 18" />
            <img srcSet={Pic3} alt="Image 19" />
            <img srcSet={Pic4} alt="Image 20" />
            <img srcSet={Pic1} alt="Image 21" />
            <img srcSet={Pic2} alt="Image 22" />
            <img srcSet={Pic3} alt="Image 23" />
            <img srcSet={Pic4} alt="Image 24" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Gallery;
