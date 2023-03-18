import "./Footer.scss";
import githubIcon from "../../assets/images/social-icons/github-white.svg";
import linkedinIcon from "../../assets/images/social-icons/linkedin-white.svg";
import emailIcon from "../../assets/images/social-icons/email-white.png";
import resumeIcon from "../../assets/images/social-icons/resume.png";

export default function Footer({ myRefContact }) {
  const today = new Date().getFullYear();

  const downloadPDF = () => {
    fetch("resume-claudio-miranda.pdf").then((res) => {
      res.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume-claudio-miranda.pdf";
        alink.click();
      });
    });
  };

  return (
    <>
      <footer className="contact" id="contact" ref={myRefContact}>
        <div className="contact__container wrapper">
          <h2 className="contact__title">let's connect</h2>
          <div className="contact__social">
            <a
              className="contact__link"
              href="https://www.linkedin.com/in/miranda-claudio/"
            >
              <img
                className="contact__handle"
                src={linkedinIcon}
                alt="linkedin icon"
              />
            </a>
            <a className="contact__link" href="https://github.com/CodingClauds">
              <img
                className="contact__handle"
                src={githubIcon}
                alt="github icon"
              />
            </a>
            <a
              className="contact__link"
              href="mailto:claudio.000.miranda@gmail.com"
            >
              <img
                className="contact__handle"
                src={emailIcon}
                alt="email icon"
              />
            </a>
            <button className="contact__link" onClick={downloadPDF}>
              <img
                className="contact__handle"
                src={resumeIcon}
                alt="Resume Icon"
              />
            </button>
          </div>

          <div className="site-footer-divider"></div>

          <div className="contact__acknowledgements">
            <span className="contact__subtext">
              Made with ❤️ by Claudio Miranda{" - "}
              <span id="copyright-year">{today}</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
