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

                                <section className="section 3">
                </section>

                <section className="section 4">
                </section>

                <section className="pricing">
                    <div className="pricingcontainer">
                        <div className="pricingheader">
                            <span className="pricingbadge">Pricing</span>
                            <h2>Simple, Transparent Pricing</h2>
                        </div>

                        <div className="pricinggrid">
                            {/* Developer Plan */}
                            <div className="pricingcard">
                                <div className="pricingtier">Developer</div>
                                <p className="pricingdescription">Perfect for side projects</p>
                                <div className="pricingprice">$0</div>
                                <p className="pricingperiod">Forever free</p>
                                <button className="pricingbtn pricingbtnsecondary">
                                    Start Free
                                </button>
                                <ul className="pricingfeatures">
                                    <li>Up to 10 functions</li>
                                    <li>Single AWS account</li>
                                    <li>Email alerts</li>
                                    <li>7-day history</li>
                                </ul>
                            </div>

                            {/* Team Plan - Featured */}
                            <div className="pricingcard pricingcardfeatured">
                                <div className="pricingpopularbadge">Popular</div>
                                <div className="pricingtier">Team</div>
                                <p className="pricingdescription">For growing teams</p>
                                <div className="pricingprice">$99</div>
                                <p className="pricingperiod">per month</p>
                                <button className="pricingbtn pricingbtnprimary">
                                    Get Started
                                </button>
                                <ul className="pricingfeatures">
                                    <li>Up to 100 functions</li>
                                    <li>Multi-account support</li>
                                    <li>Slack & PagerDuty integration</li>
                                    <li>90-day history</li>
                                    <li>Priority support</li>
                                </ul>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="pricingcard">
                                <div className="pricingtier">Enterprise</div>
                                <p className="pricingdescription">For large organizations</p>
                                <div className="pricingprice">Custom</div>
                                <p className="pricingperiod">Contact us</p>
                                <button className="pricingbtn pricingbtnsecondary">
                                    Contact Sales
                                </button>
                                <ul className="pricingfeatures">
                                    <li>Unlimited functions</li>
                                    <li>SSO & SAML</li>
                                    <li>Custom integrations</li>
                                    <li>Unlimited history</li>
                                    <li>Dedicated support</li>
                                    <li>On-premise deployment option</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>

            <footer>
                <div className="container">
                    <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                        <div className="logo-icon">🛡️</div>
                        <span>Cloud Sentinel</span>
                        </div>
                        <p className="footer-description">
                        Serverless security made effortless. Protect your AWS Lambda functions with automated scanning, IAM analysis, and real-time alerts.
                        </p>
                        <div className="social-links">
                        <a href="#" className="social-link">𝕏</a>
                        <a href="#" className="social-link">in</a>
                        <a href="https://github.com/AshanBandara/Cloud_Sentinel.git" className="social-link">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>PRODUCT</h4>
                        <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Roadmap</a></li>
                        <li><a href="#">Docs</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>COMPANY</h4>
                        <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>LEGAL</h4>
                        <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Cookies</a></li>
                        </ul>
                    </div>
                    </div>

                    <div className="footer-bottom">
                    <p>© 2025 Cloud Sentinel. All rights reserved.</p>
                    </div>
                </div>
                </footer>
        </div>
    );
};            
    

export default Landing;

