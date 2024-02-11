import React from "react";
import "./contact.css";
import assets from "../../assets/assets";
import { useState } from "react";

function Contact() {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');

  console.log(name, email, message);

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

            <form name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <input type="text" placeholder="NAME" name="name" className="input" value={name} onChange={(e)=>setName(e.target.value)} />
              </p>
              <br />
              <p>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  className="input"
                  value={email} onChange={(e)=>setEmail(e.target.value)}
                />
              </p>
              <br />
              <p>
                <input
                  type="text"
                  placeholder="MESSAGE"
                  name="message"
                  className="input message"
                  value={message} onChange={(e)=>setMessage(e.target.value)}
                />
              </p>
              <br />
                <div data-netlify-recaptcha="true" ></div>
              <p>
              <button type="submit" className="button subbtn">
                SEND
              </button>
              </p>
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
