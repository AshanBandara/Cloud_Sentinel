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
                                <div class="logo-icon">🛡️</div>
                                Cloud Sentinel
                            </div>
                            <p class="footer-description">
                                Serverless security made effortless. Protect your AWS Lambda functions with automated scanning, IAM analysis, and real-time alerts.
                            </p>
                            <div class="social-links">
                                <a href="#" class="social-link">𝕏</a>
                                <a href="#" class="social-link">in</a>
                                <a href="#" class="social-link">Git</a>
                            </div>
                        </div>

                        <div class="footer-column">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Roadmap</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>

                        <div class="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div class="footer-column">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Cookies</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <p>© 2025 Cloud Sentinel. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
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

