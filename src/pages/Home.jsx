
import worlds from "../data/worlds";
import WorldCard from "../components/WorldCard";

export default function Home() {
  return (
    <main className="home">

      {/* NAVBAR */}

      <header>

        <div className="logo">
          +
          <span>AAHANA GUPTA</span>
        </div>

        <nav>
          <a href="#worlds">WORLDS</a>
          <a href="/about">ABOUT</a>
          <a href="/contact">CONTACT</a>
        </nav>

      </header>

      {/* HERO */}

      <section className="hero">

        <div>

          <h1>
            CHOOSE A WORLD.
          </h1>

          <p>
            Different worlds.
            <br />
            Different problems.
            <br />
            Same obsession—memory.
          </p>

        </div>

        <div className="heroInfo">

          <span>● 06 WORLDS ONLINE</span>

          <p>
            Select a world to enter.
            <br />
            Each one is a universe.
          </p>

        </div>

      </section>

      {/* WORLDS */}

      <section className="grid" id="worlds">

        {worlds.map((world) => (
          <WorldCard
            key={world.id}
            world={world}
          />
        ))}

      </section>

      {/* FOOTER */}

      <footer>

        <p>
          NOT A PORTFOLIO.
          <br />
          PROOF OF OBSESSION.
        </p>

        <p>
          © 2026 Aahana Gupta
        </p>

      </footer>

    </main>
  );
}