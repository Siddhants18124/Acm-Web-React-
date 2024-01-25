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
              Get ready to witness the vibrant community of our technological
              journey, where every pixel tells a story of innovation,
              collaboration, and the boundless possibilities that unfold within
              the realm of ACM at BMU.
            </p>

            <p id="galleryPara2">
              DEEP&nbsp;DIVE&nbsp;INTO THE TECH GALLERY&nbsp;OF&nbsp;BMU&nbsp;!
            </p>
          </div>
          <img srcSet={assets.Gallery1} class="galleryImg1" />
        </div>
        <div className="grid">
          <div className="image-grid">
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">Image 2</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} />
              <div className="tooltip">Image 1</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic2} alt="Image 2" title="Image 2" />
              <div className="tooltip">Image 2</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Gallery;
