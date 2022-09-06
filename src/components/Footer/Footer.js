import "./Footer.scss";
import github from "../../assets/images/social-icons/github-white.svg";
import linkedin from "../../assets/images/social-icons/linkedin-white.svg";
import email from "../../assets/images/social-icons/email-white.png";

export default function Footer({ myRefContact }) {
  return (
    <>
      <section className="contact" id="contact" ref={myRefContact}>
        <div className="contact__container wrapper">
          <h2 className="contact__title">let's connect</h2>
          <div className="contact__social">
            <a href="https://www.linkedin.com/in/miranda-claudio/">
              <img
                className="contact__handle"
                src={linkedin}
                alt="linkedin icon"
              />
            </a>
            <a href="https://github.com/CodingClauds">
              <img className="contact__handle" src={github} alt="github icon" />
            </a>
            <a
              className="contact__email"
              href="mailto:claudio.000.miranda@gmail.com"
            >
              <img className="contact__handle" src={email} alt="email icon" />
            </a>
          </div>

          <div className="site-footer-divider"></div>

          <div className="contact__acknowledgements">
            <span className="contact__copyright">
              Claudio Miranda © All Rights Reserved 2022.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
