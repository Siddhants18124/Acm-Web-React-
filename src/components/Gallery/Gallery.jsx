import React from "react";
import "./Gallery.css";
import assets from "../../assets/assets";

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

            <p id="galleryPara2">
              DEEP&nbsp;DIVE&nbsp;INTO THE TECH GALLERY&nbsp;OF&nbsp;BMU&nbsp;!
            </p>
          </div>
          <img srcSet={assets.Gallery1} class="galleryImg1" />
        </div>

        <div class="grid">
          <div class="image-grid">
            <img srcSet={assets.Pic2} alt="Image 2" />
            <img srcSet={assets.Pic1} alt="Image 1" />
            <img srcSet={assets.Pic3} alt="Image 3" />
            <img srcSet={assets.Pic4} alt="Image 4" />
            <img srcSet={assets.Pic1} alt="Image 5" />
            <img srcSet={assets.Pic2} alt="Image 6" />
            <img srcSet={assets.Pic3} alt="Image 7" />
            <img srcSet={assets.Pic4} alt="Image 8" />
            <img srcSet={assets.Pic1} alt="Image 9" />
            <img srcSet={assets.Pic2} alt="Image 10" />
            <img srcSet={assets.Pic3} alt="Image 11" />
            <img srcSet={assets.Pic4} alt="Image 12" />
            <img srcSet={assets.Pic1} alt="Image 13" />
            <img srcSet={assets.Pic2} alt="Image 14" />
            <img srcSet={assets.Pic3} alt="Image 15" />
            <img srcSet={assets.Pic4} alt="Image 16" />
            <img srcSet={assets.Pic1} alt="Image 17" />
            <img srcSet={assets.Pic2} alt="Image 18" />
            <img srcSet={assets.Pic3} alt="Image 19" />
            <img srcSet={assets.Pic4} alt="Image 20" />
            <img srcSet={assets.Pic1} alt="Image 21" />
            <img srcSet={assets.Pic2} alt="Image 22" />
            <img srcSet={assets.Pic3} alt="Image 23" />
            <img srcSet={assets.Pic4} alt="Image 24" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Gallery;
