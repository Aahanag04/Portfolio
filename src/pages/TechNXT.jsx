import { Link } from "react-router-dom";
import "../styles/technxt.css";

export default function TechNXT() {

  return (

    <main className="tech">

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


      {/* HERO */}


      <section className="hero">

        <div className="heroText">

          <div className="number">

            03

          </div>

          <h1>

            TECHNXT

          </h1>

          <h2>

            ONE AI.

            <br />

            FIVE DEPARTMENTS.

          </h2>

          <p>

            An AI operating system designed
            for a telecom import-export
            business.

          </p>

        </div>

        <div className="heroImage">

          <img
            src="/technxt/hero.png"
            alt=""
          />

        </div>

      </section>



      {/* AI ECOSYSTEM */}


      <section className="section">

        <h3>

          THE AI ECOSYSTEM

        </h3>

        <div className="ecosystem">

          <div className="left">

            <p>

              One intelligent system.

              <br />

              <br />

              Five specialised departments.

              <br />

              <br />

              All working together.

            </p>

          </div>


          <div className="cards">


            <div className="ecoCard">

              <h4>SALES</h4>

              <p>

                Researches leads,

                starts WhatsApp

                conversations,

                qualifies prospects.

              </p>

            </div>



            <div className="ecoCard">

              <h4>MARKETING</h4>

              <p>

                Creates content,

                campaign plans,

                reports,

                analytics.

              </p>

            </div>



            <div className="ecoCard">

              <h4>SUPPORT</h4>

              <p>

                Answers queries,

                searches KB,

                drafts replies.

              </p>

            </div>



            <div className="ecoCard">

              <h4>

                EXECUTIVE

                ASSISTANT

              </h4>

              <p>

                Calendar,

                email,

                reminders,

                meetings.

              </p>

            </div>



            <div className="ecoCard">

              <h4>

                OPERATIONS

              </h4>

              <p>

                Documentation,

                logistics,

                tracking,

                coordination.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* WORKFLOW */}


      <section className="section">

        <h3>

          AI WORKFLOW

        </h3>

        <div className="workflow">

          <img src="/technxt/workflow1.png"/>

          <img src="/technxt/workflow2.png"/>

          <img src="/technxt/workflow3.png"/>

          <img src="/technxt/workflow4.png"/>

        </div>

      </section>



      {/* STATS */}


      <section className="stats">

        <div>

          <h1>01</h1>

          <span>

            AI SYSTEM

          </span>

        </div>


        <div>

          <h1>05</h1>

          <span>

            DEPARTMENTS

          </span>

        </div>


        <div>

          <h1>24/7</h1>

          <span>

            AUTONOMOUS

          </span>

        </div>


        <div>

          <h1>100%</h1>

          <span>

            CUSTOM BUILT

          </span>

        </div>

      </section>



      <footer>

        <Link to="/">

          — BACK TO WORLDS —

        </Link>

      </footer>

    </main>

  );

}