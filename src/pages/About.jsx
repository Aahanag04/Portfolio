import { Link } from "react-router-dom";
import "../styles/about.css";

export default function About() {
  return (
    <main className="about">

      {/* ---------------- NAV ---------------- */}

      <header className="topbar">

        <div className="logo">
          <span>+</span>
          <span>AAHANA GUPTA</span>
        </div>

        <Link to="/" className="back">
          BACK TO WORLDS
        </Link>

      </header>

      {/* ---------------- HERO ---------------- */}

      <section className="heroGrid">

        <div className="heroLeft">

          <span className="pageNo">
            07.
          </span>

          <div className="heroLine"></div>

          <h1>

            I don't have
            <br />
            a niche.

          </h1>

          <h2>

            I build worlds.

          </h2>

          <div className="miniManifesto">

            <h4>
              CURIOSITY IS THE CORE.
            </h4>

            <p>
              I follow questions,
              not trends.

              <br /><br />

              I don't stop until
              the idea becomes real.

            </p>

          </div>

        </div>

        <div className="heroRight">

          <p>

            I turn abstract ideas,

            late night thoughts and

            random obsessions into

            brands, products, systems

            and experiences that

            didn't exist before.

          </p>

          <div className="circleNote">

            curiosity
            <br />
            over
            <br />
            everything.

          </div>

          <div className="orbit"></div>

        </div>

      </section>



      {/* ---------------- PROCESS ---------------- */}

      <section className="process">

        <div className="sectionTitle">

          THE WAY I WORK

        </div>

        <div className="processRow">

          <div className="processCard active">
            <span>01</span>
            <h3>QUESTION</h3>
            <p>
              It starts with something
              that doesn't make sense...
              yet.
            </p>
          </div>

          <div className="arrow">→</div>

          <div className="processCard">
            <span>02</span>
            <h3>OBSESSION</h3>
            <p>
              I think about it until
              it becomes impossible
              to ignore.
            </p>
          </div>

          <div className="arrow">→</div>

          <div className="processCard">
            <span>03</span>
            <h3>RESEARCH</h3>
            <p>
              Patterns.
              People.
              Possibilities.
            </p>
          </div>

          <div className="arrow">→</div>

          <div className="processCard">
            <span>04</span>
            <h3>WORLD</h3>
            <p>
              Identity.
              Product.
              Story.
            </p>
          </div>

          <div className="arrow">→</div>

          <div className="processCard">
            <span>05</span>
            <h3>SHIP</h3>
            <p>
              Launch.
              Learn.
              Repeat.
            </p>
          </div>

        </div>

      </section>



      {/* ---------------- WHAT I BUILD ---------------- */}

      <section className="obsessions">

        <div className="sectionTitle">

          WHAT WE COULD OBSESS OVER

        </div>

        <div className="obsessionGrid">

          <div>

            <h4>BRAND</h4>

            <p>
              Identity
              <br />
              Strategy
              <br />
              Positioning
              <br />
              Creative Direction
            </p>

          </div>

          <div>

            <h4>PRODUCT</h4>

            <p>
              UX
              <br />
              MVP
              <br />
              AI Products
            </p>

          </div>

          <div>

            <h4>AI</h4>

            <p>
              Automation
              <br />
              Workflows
              <br />
              Prompt Systems
            </p>

          </div>

          <div>

            <h4>CONTENT</h4>

            <p>
              Storytelling
              <br />
              Campaigns
              <br />
              UGC
            </p>

          </div>

          <div>

            <h4>EXPERIENCES</h4>

            <p>
              Communities
              <br />
              Systems
              <br />
              Products
            </p>

          </div>

        </div>

      </section>



      {/* ---------------- FOOT ---------------- */}

      <section className="bottomGrid">

        <div className="leftNote">

          <h2>

            NOT EVERY IDEA
            NEEDS
            PERMISSION.

          </h2>

          <p>

            Built from curiosity.

            <br />

            Not validation.

          </p>

        </div>

<div className="middle">

    <h4>

    </h4>

  </div>

        <div className="cta">

          <h2>

            LET'S BUILD
            <br />
            A WORLD.

          </h2>

          <Link
            to="/contact"
            className="talkButton"
          >

            START AN OBSESSION

          </Link>

        </div>

      </section>

    </main>
  );
}