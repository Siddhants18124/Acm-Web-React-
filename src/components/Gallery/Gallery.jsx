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
              <img srcSet={assets.pic18} />
              <div className="tooltip">SIH 2023</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic19} />
              <div className="tooltip">FLUTTER</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic28} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic17} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic5} />
              <div className="tooltip">WEB 3</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic25} />
              <div className="tooltip">DEVOPS</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic26} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic27} />
              <div className="tooltip">OPEN SOURCE</div>
            </div>

            <div className="image-container">
              <img srcSet={assets.pic20} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic21} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic4} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic23} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic24} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic22} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic3} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic11} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic12} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic13} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic14} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic15} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic16} />
              <div className="tooltip">WORKSHOP</div>
            </div>

            <div className="image-container">
              <img srcSet={assets.Pic2} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic6} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic7} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic8} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic9} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.pic10} />
              <div className="tooltip">WORKSHOP</div>
            </div>
            <div className="image-container">
              <img srcSet={assets.Pic1} alt="Image 2" title="Image 2" />
              <div className="tooltip">WORKSHOP</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Gallery;
