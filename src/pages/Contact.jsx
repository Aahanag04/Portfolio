import { Link } from "react-router-dom";
import "../styles/contact.css";

export default function Contact() {

  return (

    <main className="contact">

      {/* ---------------- NAV ---------------- */}

      <header className="topbar">

        <div className="logo">

          <span>+</span>

          <span>AAHANA GUPTA</span>

        </div>

        <Link
          to="/"
          className="back"
        >

          BACK TO WORLDS

        </Link>

      </header>



      {/* ---------------- HERO ---------------- */}

      <section className="contactHero">

        <div className="heroLeft">

          <span className="pageNo">

            08.

          </span>

          <div className="heroLine"></div>

          <h1>

            Let's build

            <br />

            <span>

              something

            </span>

            <br />

            real.

          </h1>

          <p>

            If you have an idea,

            a problem,

            or just a random thought—

            <br /><br />

            I'd love to hear it.

            <br />

            Let's turn it into

            a world.

          </p>

        </div>



        <div className="heroRight">

          <div className="circleNote">

            curiosity

            <br />

            starts

            <br />

            conversations.

          </div>

          <div className="orbit"></div>

        </div>

      </section>



      {/* ---------------- CONTACT ---------------- */}

      <section className="contactGrid">

        <div className="left">

          <h3>

            GET IN TOUCH

          </h3>

          <div className="contactItem">

            <span className="label">

              LOCATION

            </span>

            <p>

              India

            </p>

          </div>

          <div className="contactItem">

            <span className="label">

              AVAILABILITY

            </span>

            <p>

              Open for collaborations

            </p>

          </div>

          <div className="contactItem">

            <span className="label">

              RESPONSE TIME

            </span>

            <p>

              Within 24–48 hours

            </p>

          </div>

        </div>



        <div className="right">

          <h3>

            LET'S CONNECT

          </h3>

          <a

            href="mailto:aahanagupta283@gmail.com"

            className="connectLink"

          >

            <div>

              <small>

                EMAIL

              </small>

              <p>

                aahanagupta283@gmail.com

              </p>

            </div>

            <span>

              ↗

            </span>

          </a>



          <a

            href="https://linkedin.com/in/aahanagupta04"

            target="_blank"

            rel="noreferrer"

            className="connectLink"

          >

            <div>

              <small>

                LINKEDIN

              </small>

              <p>

                Let's build worlds together.

              </p>

            </div>

            <span>

              ↗

            </span>

          </a>



          <div className="signature">

            say hi.

          </div>

        </div>

      </section>



      {/* ---------------- FOOTER ---------------- */}

      <footer>

        <p>

          © 2026 AAHANA GUPTA

        </p>

        <p>

          BUILDING WORLDS,

          NOT FOLLOWING THEM.

        </p>

      </footer>

    </main>

  );

}