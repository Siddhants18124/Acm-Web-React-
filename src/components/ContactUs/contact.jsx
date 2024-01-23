import React from "react";
import "./contact.css";
import vectorTwo from "../../assets/images/vectorTwo.png";
import sphereTopOne from "../../assets/images/sphereTopOne.png";
import vectorThree from "../../assets/images/vectorThree.png";

function Contact() {
  return (
    <>
      <main>
        <div className="contact" id="contactus">
          <div className="ballOne">
            <img srcSet={sphereTopOne} />
          </div>
          <div className="ballTwo">
            <img srcSet={sphereTopOne} />
          </div>
          <div className="Aone">
            <div className="Aoneone">
              <h1>ACM.BMU</h1>
              <h1>STUDENT&nbsp;CHAPTER</h1>
            </div>
            <div className="Aonetwo">
              <img srcSet={vectorTwo} />
            </div>
          </div>
          <div className="Atwo">
            <h1>CONNECT&nbsp;WITH&nbsp;US!</h1>
            <div className="lineFour"></div>
            <form action="#">
              <input type="text" placeholder="NAME" className="input" />
              <br />
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="input"
              />
              <br />
              <input
                type="text"
                placeholder="MESSAGE"
                className="input message"
              />
              <br />
              <button type="submit" className="button subbtn">
                SEND
              </button>
            </form>
            <div className="vectorThree">
              <img srcSet={vectorThree} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Contact;
