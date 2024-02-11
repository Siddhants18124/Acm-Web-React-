import React from "react";
import "./contact.css";
import assets from "../../assets/assets";

function Contact() {
  return (
    <>
      <main data-aos="fade-up">
        <div className="contact" id="contactus">
          <div className="ballOne">
            <img srcSet={assets.sphereTopOne} />
          </div>
          <div className="ballTwo">
            <img srcSet={assets.sphereTopOne} />
          </div>
          <div className="Aone">
            <div className="Aoneone">
              <h1>ACM.BMU</h1>
              <h1>STUDENT&nbsp;CHAPTER</h1>
            </div>
            <div className="Aonetwo">
              <img srcSet={assets.vectorTwo} />
            </div>
          </div>
          <div className="Atwo">
            <h1>CONNECT&nbsp;WITH&nbsp;US!</h1>
            <div className="lineFour"></div>
            <form name="Contact" method="POST" netlify >
              <input type="text" placeholder="NAME" name="name" className="input" />
              <br />
              <input
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                className="input"
              />
              <br />
              <input
                type="text"
                placeholder="MESSAGE"
                name="message"
                className="input message"
              />
              <br />
              <button type="submit" className="button subbtn">
                SEND
              </button>
            </form>
            <div className="vectorThree">
              <img srcSet={assets.vectorThree} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Contact;
