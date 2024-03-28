import React, { useState } from "react";
import "./Gallery.css";
import assets from "../../assets/assets";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const imageInfo = [
    { src: assets.pic5, tooltip: "SIH 2023", category: "category1" },
    { src: assets.pic6, tooltip: "FLUTTER", category: "category2" },
    { src: assets.pic7, tooltip: "WORKSHOP", category: "category3" },
    { src: assets.pic8, tooltip: "WORKSHOP", category: "category3" },
    { src: assets.pic9, tooltip: "SIH 2023", category: "category1" },
    { src: assets.pic10, tooltip: "FLUTTER", category: "category2" },
    { src: assets.pic11, tooltip: "WORKSHOP", category: "category3" },
    { src: assets.pic12, tooltip: "WORKSHOP", category: "category3" },
    { src: assets.pic13, tooltip: "SIH 2023", category: "category1" },
    { src: assets.pic14, tooltip: "FLUTTER", category: "category2" },
    { src: assets.pic15, tooltip: "WORKSHOP", category: "category3" },
    { src: assets.pic16, tooltip: "WORKSHOP", category: "category3" },
    { src: assets.pic17, tooltip: "SIH 2023", category: "category1" },
    { src: assets.pic18, tooltip: "FLUTTER", category: "category2" },
    { src: assets.pic19, tooltip: "WORKSHOP", category: "category3" },
    { src: assets.pic20, tooltip: "WORKSHOP", category: "category3" },
    { src: assets.pic21, tooltip: "SIH 2023", category: "category1" },
    { src: assets.pic22, tooltip: "FLUTTER", category: "category2" },
    { src: assets.pic23, tooltip: "WORKSHOP", category: "category4" },
    { src: assets.pic24, tooltip: "WORKSHOP", category: "category3" },
    { src: assets.pic25, tooltip: "SIH 2023", category: "category4" },
    { src: assets.pic26, tooltip: "FLUTTER", category: "category5" },
    { src: assets.pic27, tooltip: "WORKSHOP", category: "category5" },
    { src: assets.pic28, tooltip: "WORKSHOP", category: "category4" },
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
            All
          </button>
          <button
            className={selectedCategory === "category1" ? "selected" : ""}
            onClick={() => handleCategoryChange("category1")}
          >
            Category 1
          </button>
          <button
            className={selectedCategory === "category2" ? "selected" : ""}
            onClick={() => handleCategoryChange("category2")}
          >
            Category 2
          </button>
          <button
            className={selectedCategory === "category3" ? "selected" : ""}
            onClick={() => handleCategoryChange("category3")}
          >
            Category 3
          </button>
          <button
            className={selectedCategory === "category4" ? "selected" : ""}
            onClick={() => handleCategoryChange("category4")}
          >
            Category 4
          </button>
          <button
            className={selectedCategory === "category5" ? "selected" : ""}
            onClick={() => handleCategoryChange("category5")}
          >
            Category 5
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
