import { Link } from "react-router-dom";
import "../styles/mindset.css";

export default function Mindset() {

  return (

    <main className="mind">

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

            04

          </div>

          <h1>

            MINDSET

          </h1>

          <h2>

            YOUR TRAUMA HAS TASTE.

          </h2>

          <p>

            An emotional exhibition.

            <br />

            Not a mental health app.

            <br />

            Not a journal.

            <br />

            This is where your

            inner world goes on display.

          </p>

        </div>

        <div className="heroImage">

          <img
            src="/mindset/hero.png"
            alt=""
          />

        </div>

      </section>



      {/* MANIFESTO */}



      <section className="section">

        <h3>

          MANIFESTO

        </h3>

        <img

          src="/mindset/manifesto.png"

          className="full"

          alt=""

        />

      </section>




      {/* MOODBOARD */}



      <section className="section">

        <h3>

          MOODBOARD

        </h3>

        <img

          src="/mindset/moodboard.png"

          className="full"

          alt=""

        />

      </section>





      {/* EMOTIONAL SKINS */}



      <section className="section">

        <h3>

          EMOTIONAL SKINS

        </h3>

        <img

          src="/mindset/skins.png"

          className="full"

          alt=""

        />

      </section>





      {/* BUILDING */}



      <section className="build">

        <div>

          <h3>

            BUILDING NOW

          </h3>

          <ul>

            <li>✓ Brand</li>

            <li>✓ Product</li>

            <li>✓ UX</li>

            <li>✓ AI</li>

            <li>○ Development</li>

          </ul>

        </div>



        <div className="coming">

          COMING SOON.

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