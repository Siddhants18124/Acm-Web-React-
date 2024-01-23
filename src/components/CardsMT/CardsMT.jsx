import React from "react";
import "./CardsMT.css";
import Pic from "../../assets/images/pic.jpeg";

function Cards() {
  document.addEventListener("DOMContentLoaded", function () {
    const gap = 16;

    const carousel = document.getElementById("carousel"),
      content = document.getElementById("content"),
      next = document.getElementById("next"),
      prev = document.getElementById("prev");

    function next1() {
      carousel.scrollBy(width + gap, 0);
      if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
      }
      if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
      }
    }

    function prev1() {
      carousel.scrollBy(-(width + gap), 0);
      if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
      }
      if (!(content.scrollWidth - width - gap <= carousel.scrollLeft + width)) {
        next.style.display = "flex";
      }
    }

    let width = carousel.offsetWidth;
    window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

    next.addEventListener("click", next1);
    prev.addEventListener("click", prev1);
  });

  return (
    <div className="Container">
      <div className="head-1">
        <p className="disp-1">MEET OUR TEAM</p>
        <div className="line-mc"></div>
      </div>

      <div className="inline">
        <div className="cards-1">
          <div className="card-body">
            <div className="diver">
              <img srcSet={Pic} alt="profile" className="img-pf" />
              <h5 className="card-title">
                Lorem Ipsum
                <p>President</p>
              </h5>
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum totam iste quas fugit blanditiis. Beatae repellendus
              obcaecati voluptate perspiciatis reprehenderit repudiandae culpa
              incidunt, quos eos molestias perferendis expedita. Distinctio,
              aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, aliquid?
            </p>
            <div className="soci-1">
              <div class="twit">
                <a href="https://twitter.com/acm_bmu" target="_blank">
                  <img srcSet={Tweet} />
                </a>
              </div>
              <div class="insta">
                <a
                  href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                >
                  <img srcSet={Insta} />
                </a>
              </div>
              <div class="link">
                <a
                  href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                  target="_blank"
                >
                  <img srcSet={Linkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-1">
          <div className="card-body">
            <div className="diver">
              <img srcSet={Pic} alt="profile" className="img-pf" />
              <h5 className="card-title">
                Lorem Ipsum
                <p>President</p>
              </h5>
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum totam iste quas fugit blanditiis. Beatae repellendus
              obcaecati voluptate perspiciatis reprehenderit repudiandae culpa
              incidunt, quos eos molestias perferendis expedita. Distinctio,
              aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, aliquid?
            </p>

            <div className="soci-1">
              <div class="twit">
                <a href="https://twitter.com/acm_bmu" target="_blank">
                  <img srcSet={Tweet} />
                </a>
              </div>
              <div class="insta">
                <a
                  href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                >
                  <img srcSet={Insta} />
                </a>
              </div>
              <div class="link">
                <a
                  href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                  target="_blank"
                >
                  <img srcSet={Linkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-1">
          <div className="card-body">
            <div className="diver">
              <img srcSet={Pic} alt="profile" className="img-pf" />
              <h5 className="card-title">
                Lorem Ipsum
                <p>President</p>
              </h5>
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum totam iste quas fugit blanditiis. Beatae repellendus
              obcaecati voluptate perspiciatis reprehenderit repudiandae culpa
              incidunt, quos eos molestias perferendis expedita. Distinctio,
              aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, aliquid?
            </p>
            <div className="soci-1">
              <div class="twit">
                <a href="https://twitter.com/acm_bmu" target="_blank">
                  <img srcSet={Tweet} />
                </a>
              </div>
              <div class="insta">
                <a
                  href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                >
                  <img srcSet={Insta} />
                </a>
              </div>
              <div class="link">
                <a
                  href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                  target="_blank"
                >
                  <img srcSet={Linkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-1">
          <div className="card-body">
            <div className="diver">
              <img srcSet={Pic} alt="profile" className="img-pf" />
              <h5 className="card-title">
                Lorem Ipsum
                <p>President</p>
              </h5>
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum totam iste quas fugit blanditiis. Beatae repellendus
              obcaecati voluptate perspiciatis reprehenderit repudiandae culpa
              incidunt, quos eos molestias perferendis expedita. Distinctio,
              aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, aliquid?
            </p>
            <div className="soci-1">
              <div class="twit">
                <a href="https://twitter.com/acm_bmu" target="_blank">
                  <img srcSet={Tweet} />
                </a>
              </div>
              <div class="insta">
                <a
                  href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                  target="_blank"
                >
                  <img srcSet={Insta} />
                </a>
              </div>
              <div class="link">
                <a
                  href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                  target="_blank"
                >
                  <img srcSet={Linkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="wrapper">
        <div id="carousel">
          <div id="content">
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-car">
              <div className="cards-2">
                <div className="card-body-1">
                  <div className="res">
                    <img srcSet={Pic} alt="profile" className="img-pf" />
                    <h5 className="card-title-1">Lorem Ipsum</h5>
                    <p>BTECH CSE</p>
                  </div>
                  <div className="soci-1">
                    <div class="twit">
                      <a href="https://twitter.com/acm_bmu" target="_blank">
                        <img srcSet={Tweet} />
                      </a>
                    </div>
                    <div class="insta">
                      <a
                        href="https://www.instagram.com/acm_bmu/?igshid=MzRlODBiNWFlZA%3D%3D"
                        target="_blank"
                      >
                        <img srcSet={Insta} />
                      </a>
                    </div>
                    <div class="link">
                      <a
                        href="https://www.linkedin.com/company/bmu-acm-student-chapter/"
                        target="_blank"
                      >
                        <img srcSet={Linkedin} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button id="prev" onClick="prev1()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
              </svg>
            </button>
            <button id="next" onClick="next1()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
