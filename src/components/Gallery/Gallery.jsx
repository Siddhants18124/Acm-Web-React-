import React, { useState } from "react";
import "./Gallery.css";
import assets from "../../assets/assets";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const imageInfo = [
    { src: assets.hack1, tooltip: "HACKBMU", category: "category1" },
    { src: assets.hack2, tooltip: "HACKBMU", category: "category1" },
    { src: assets.hack3, tooltip: "HACKBMU", category: "category1" },
    { src: assets.hack4, tooltip: "HACKBMU", category: "category1" },
    { src: assets.hack5, tooltip: "HACKBMU", category: "category1" },
    { src: assets.hack6, tooltip: "HACKBMU", category: "category1" },
    { src: assets.hack7, tooltip: "HACKBMU", category: "category1" },
    { src: assets.hack8, tooltip: "HACKBMU", category: "category1" },
    { src: assets.hack9, tooltip: "HACKBMU", category: "category1" },
    { src: assets.hack10, tooltip: "HACKBMU", category: "category1" },
    { src: assets.hack11, tooltip: "HACKBMU", category: "category1" },
    { src: assets.f1, tooltip: "FLUTTER", category: "category2" },
    { src: assets.f2, tooltip: "FLUTTER", category: "category2" },
    { src: assets.f3, tooltip: "FLUTTER", category: "category2" },
    { src: assets.f4, tooltip: "FLUTTER", category: "category2" },
    { src: assets.f5, tooltip: "FLUTTER", category: "category2" },
    { src: assets.f6, tooltip: "FLUTTER", category: "category2" },
    { src: assets.f7, tooltip: "FLUTTER", category: "category2" },
    { src: assets.f8, tooltip: "FLUTTER", category: "category2" },
    { src: assets.f9, tooltip: "FLUTTER", category: "category2" },
    { src: assets.f10, tooltip: "FLUTTER", category: "category2" },
    { src: assets.f11, tooltip: "FLUTTER", category: "category2" },
    { src: assets.h1, tooltip: "HACKTOBERFEST", category: "category3" },
    { src: assets.h2, tooltip: "HACKTOBERFEST", category: "category3" },
    { src: assets.h3, tooltip: "HACKTOBERFEST", category: "category3" },
    { src: assets.h4, tooltip: "HACKTOBERFEST", category: "category3" },
    { src: assets.h5, tooltip: "HACKTOBERFEST", category: "category3" },
    { src: assets.h6, tooltip: "HACKTOBERFEST", category: "category3" },
    { src: assets.h7, tooltip: "HACKTOBERFEST", category: "category3" },
    { src: assets.w1, tooltip: "WEBFORGE", category: "category4" },
    { src: assets.w2, tooltip: "WEBFORGE", category: "category4" },
    { src: assets.w3, tooltip: "WEBFORGE", category: "category4" },
    { src: assets.w4, tooltip: "WEBFORGE", category: "category4" },
    { src: assets.w5, tooltip: "WEBFORGE", category: "category4" },
    { src: assets.w6, tooltip: "WEBFORGE", category: "category4" },
    { src: assets.w7, tooltip: "WEBFORGE", category: "category4" },
    { src: assets.w8, tooltip: "WEBFORGE", category: "category4" },
    { src: assets.w9, tooltip: "WEBFORGE", category: "category4" },
    { src: assets.w10, tooltip: "WEBFORGE", category: "category4" },
    { src: assets.s1, tooltip: "SIH", category: "category5" },
    { src: assets.s2, tooltip: "SIH", category: "category5" },
    { src: assets.s3, tooltip: "SIH", category: "category5" },
    { src: assets.s4, tooltip: "SIH", category: "category5" },
    { src: assets.s5, tooltip: "SIH", category: "category5" },
    { src: assets.s6, tooltip: "SIH", category: "category5" },
    { src: assets.s7, tooltip: "SIH", category: "category5" },
    { src: assets.s8, tooltip: "SIH", category: "category5" },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const filteredImages =
    selectedCategory === "all"
      ? imageInfo
      : imageInfo.filter((image) => image.category === selectedCategory);
  return (
    <>
      <main>
        <div className="prt1">
          <div className="paras">
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
          <img srcSet={assets.Gallery1} className="galleryImg1" />
        </div>
        <div className="category-buttons">
          <button
            className={selectedCategory === "all" ? "selected" : ""}
            onClick={() => handleCategoryChange("all")}
          >
            ALL
          </button>
          <button
            className={selectedCategory === "category1" ? "selected" : ""}
            onClick={() => handleCategoryChange("category1")}
          >
            HACKBMU
          </button>
          <button
            className={selectedCategory === "category2" ? "selected" : ""}
            onClick={() => handleCategoryChange("category2")}
          >
            FLUTTER
          </button>
          <button
            className={selectedCategory === "category3" ? "selected" : ""}
            onClick={() => handleCategoryChange("category3")}
          >
            HACKTOBERFEST
          </button>
          <button
            className={selectedCategory === "category4" ? "selected" : ""}
            onClick={() => handleCategoryChange("category4")}
          >
            WEBFORGE
          </button>
          <button
            className={selectedCategory === "category5" ? "selected" : ""}
            onClick={() => handleCategoryChange("category5")}
          >
            SIH
          </button>
        </div>
        <div className="grid">
          <div className="image-grid">
            {filteredImages.map((image, index) => (
              <div className="image-container" key={index}>
                <img
                  srcSet={image.src}
                  alt={`Image ${index + 1}`}
                  title={`Image ${index + 1}`}
                />
                <div className="tooltip">{image.tooltip}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Gallery;
