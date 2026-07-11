import { Link } from "react-router-dom";
import "../styles/ijazat.css";

export default function Ijazat() {
  return (
    <main className="ij">

      <header className="topbar">

        <div className="logo">
          <span>+</span>
          <span>AAHANA GUPTA</span>
        </div>

        <Link to="/" className="back">
          BACK TO WORLDS
        </Link>

      </header>

      {/* HERO */}

<section className="hero">

    <div className="heroBG">

        IJ

    </div>

    <div className="heroContent">

        <span className="heroNumber">

            02

        </span>

        <h1>

            IJAZAT

        </h1>

        <h2>

            Permission became
            <br />
            a jewellery brand.

        </h2>

        <p>

            A curated jewellery label exploring
            permission, confidence and identity.

        </p>

    </div>

</section>


      {/* BRAND WORLD */}

      <section
        id="brand"
        className="section"
      >

        <h3>BRAND WORLD</h3>

        <div className="brandGrid">

          <img src="/ijazat/brand2.png" />

          <img src="/ijazat/brand1.png" />

          <img src="/ijazat/logo.png" />

          <img src="/ijazat/brand4.png" />

          <img src="/ijazat/campaign1.png" />

        </div>

      </section>


      {/* VISUAL IDENTITY */}

      <section className="section">

        <h3>VISUAL IDENTITY</h3>

        <div className="identity">

          <div className="card">

            <img src="/ijazat/logo.png" />

            <span>LOGO</span>

          </div>

          <div className="card wide">

            <img src="/ijazat/colorp.png" />

            <span>
              TYPOGRAPHY + COLOUR PALETTE
            </span>

          </div>

          <div className="card">

            <img src="/ijazat/packaging.png" />

            <span>PACKAGING</span>

          </div>

        </div>

      </section>


      {/* CAMPAIGN */}

      <section className="section">

        <h3>CAMPAIGN</h3>

        <div className="campaign">

          <img src="/ijazat/campaign1.png" />

          <img src="/ijazat/campaign2.png" />

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