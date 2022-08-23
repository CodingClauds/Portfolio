import React from "react";
import "./Footer.scss";

export default function Footer({ myRefContact }) {
  return (
    <>
      <section className="contact" id="contact" ref={myRefContact}>
        <div className="container">
          <h2>Contact</h2>

          <form>
            <div className="form-grid">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="form-element"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="form-element"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Messsage"
                className="form-area"
              ></textarea>
            </div>
            <div className="right-align">
              <input type="submit" value="Send message" className="button" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
