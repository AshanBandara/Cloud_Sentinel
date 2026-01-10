import "../styles/landing.css";

const Landing = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <div className="logo-icon">
              <img src="src\assets\logo.png" alt="Cloud Sentinel Logo" />
            </div>
            <span className="logotext">Cloud Sentinel</span>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#docs">Docs</a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="btn-login">Log in</button>
            <button className="btn-primary">Start Free</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>
                Serverless Security <br /> <span>Made Effortless</span>
              </h1>

              <p>
                Detect, monitor, and protect AWS Lambda functions from
                misconfigurations and security risks — in real time.
              </p>

              <button className="hero-btn">Get Started</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2024 Cloud Sentinel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
