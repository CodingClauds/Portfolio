import "./Roadmap.scss";

export default function Roadmap() {
  return (
    <>
      <div className="timeline-container" id="roadmap">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div id="content">
                  <ul className="timeline">
                    <li className="event" data-date="January 2015">
                      <h3>Up and Onward</h3>
                      <p>
                        Started my career in industry working for Magna
                        International. Having worked my way up from
                        apprenticeship to licensed journeyman. Spent 5 years in
                        heavy stamping for class-B products.
                      </p>
                      <br />
                      <p>
                        Moved into a different division within the company,
                        trying to find my place in tech. Working directly in
                        automation as a tier one supplier.
                      </p>
                    </li>

                    <li className="event" data-date="November 2021">
                      <h3>Grind Time</h3>
                      <p>
                        Took a step back after working now 7 years in
                        manufacturing and decided to make major changes in my
                        lifestyle. Decided to take some time to pursue coding in
                        a more active approach. Having never been exposed to CS
                        background.
                      </p>
                    </li>
                    <li className="event" data-date="April 2022">
                      <h3>Fail Hard & Learn Fast</h3>
                      <p>
                        The most influential thing I learned in my
                        apprenticeship were to make plenty of mistakes and learn
                        from them. Not to bask in worry, or get too hung up over
                        it. Take it as fuel for progression.
                      </p>
                      <br />
                      <h3>Treat Everyday with Opportunity</h3>
                      <p>
                        After months of self learning and becoming familiar with
                        the basics of web development. I then went on to pursue
                        BrainStations' boot-camp and graduated 12 weeks later.
                      </p>
                    </li>
                    <li className="event" data-date="November 2022">
                      <h3>Exposure</h3>
                      <p>
                        Post-bootcamp, I realized that meeting people in
                        industry would be essential to my success. I started off
                        by going to TechTo events and then further volunteering
                        at WebSubmit in Lisbon for the week.
                      </p>
                    </li>
                    <li className="event" data-date="December 2022">
                      <h3>Breaking into Tech</h3>
                      <p>
                        Currently in the process of taking interviews, and
                        searching for companies that align with my values and
                        interests.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
