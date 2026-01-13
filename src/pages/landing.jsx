import "../styles/landing.css";

const Landing = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <div className="logo-icon">
              <img src="/images/logo.png" alt="Cloud Sentinel Logo" />
            </div>
            <span className="logotext">Cloud Sentinel</span>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#how-it-works">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
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

        {/* Section 3 - Placeholder */}
        <section className="section-3">
          {/* Stats Section */}
          <section className="stats-section">
              <div className="stats-container">
                  <div className="stat-item">
                      <h3>0s</h3>
                      <p>Latency Added</p>
                  </div>
                  <div className="stat-item">
                      <h3>500+</h3>
                      <p>Tests Done</p>
                  </div>
                  <div className="stat-item">
                      <h3>100%</h3>
                      <p>AWS Coverage</p>
                  </div>
                  <div className="stat-item">
                      <h3>24/7</h3>
                      <p>Real-time Monitoring</p>
                  </div>
              </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
              <div className="features-container">
                  <div className="features-content">
                      {/* Left Side - Text */}
                      <div className="features-left">
                          <p className="features-tag">THE PROBLEM</p>
                          <h2>Why Serverless Security Is Hard</h2>
                          <p>Traditional security tools struggle with the ephemeral nature of serverless functions. Legacy agents don't work where there are no servers to manage.</p>
                          <a href="#" className="read-more">Read our Research</a>
                      </div>

                      {/* Right Side - Cards Grid */}
                      <div className="features-grid">
                          {/* Card 1 */}
                          <div className="feature-card">
                              <div className="feature-icon red">
                                  <svg className="icon red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                              </div>
                              <h3>Ephemeral Infrastructure</h3>
                              <p>Functions scale to zero and live for milliseconds, making them impossible to monitor with traditional agent-based security.</p>
                          </div>

                          {/* Card 2 */}
                          <div className="feature-card">
                              <div className="feature-icon orange">
                                  <svg className="icon orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                  </svg>
                              </div>
                              <h3>IAM Permission Sprawl</h3>
                              <p>Managing least-privilege access across hundreds of micro-functions is complex, leading to dangerous over-provisioning.</p>
                          </div>

                          {/* Card 3 */}
                          <div className="feature-card">
                              <div className="feature-icon yellow">
                                  <svg className="icon yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                              </div>
                              <h3>Fragmented Visibility</h3>
                              <p>Lack of a single pane of glass for security posture across multiple regions and accounts creates blind spots.</p>
                          </div>

                          {/* Card 4 */}
                          <div className="feature-card">
                              <div className="feature-icon purple">
                                  <svg className="icon purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                  </svg>
                              </div>
                              <h3>Code Vulnerabilities</h3>
                              <p>Dependencies and third-party libraries introduce vulnerabilities that are hard to track in a distributed architecture.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </section>

        {/* Section 4 */}
        <section className="section-4" id="how-it-works">
          <div className="how-it-works">
            <div className="section-header">
              <div className="section-badge">OUR SOLUTION</div>
              <h2 className="section-title">Cloud Sentinel Has You Covered</h2>
              <p className="section-description">
                A complete security suite designed specifically for AWS Lambda.
                Comprehensive protection from code to runtime.
              </p>
            </div>

            <div className="timeline">
              {/* Timeline Item 1 */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="timeline-content">
                  <h3>Micro-Telemetry Agent</h3>
                  <p>
                    Lightweight wrapper deployed as a Lambda layer that captures
                    granular runtime telemetry with less than 15ms overhead.
                    Monitors system calls, network activity, file access, and
                    process execution in real-time.
                  </p>
                  <ul className="timeline-features">
                    <li>✓ System call monitoring</li>
                    <li>✓ Network activity tracking</li>
                    <li>✓ File access logging</li>
                    <li>✓ Sub-15ms overhead</li>
                  </ul>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div className="timeline-content">
                  <h3>Behavioral Baseline Engine</h3>
                  <p>
                    AI-powered machine learning establishes normal behavioral
                    patterns for each function. Uses Isolation Forest algorithm
                    to create statistical baselines without requiring labeled
                    training data.
                  </p>
                  <ul className="timeline-features">
                    <li>✓ Unsupervised learning</li>
                    <li>✓ Automatic baseline creation</li>
                    <li>✓ Continuous model updates</li>
                    <li>✓ Per-function profiling</li>
                  </ul>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div className="timeline-content">
                  <h3>Real-Time Anomaly Detection</h3>
                  <p>
                    Compares live execution behavior against established
                    baselines with millisecond latency. Detects supply chain
                    attacks, data exfiltration, cryptomining, and privilege
                    escalation before the function terminates.
                  </p>
                  <ul className="timeline-features">
                    <li>✓ Real-time inference</li>
                    <li>✓ Multi-threat detection</li>
                    <li>✓ Confidence scoring</li>
                    <li>✓ Threat classification</li>
                  </ul>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div className="timeline-content">
                  <h3>Automated Response Module</h3>
                  <p>
                    Takes immediate action on high-confidence threats.
                    Automatically quarantines suspicious functions, disables
                    network access, and notifies security teams through Slack,
                    email, or webhooks.
                  </p>
                  <ul className="timeline-features">
                    <li>✓ Instant quarantine</li>
                    <li>✓ Network isolation</li>
                    <li>✓ Multi-channel alerts</li>
                    <li>✓ Forensic capture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - FIXED CLASS NAMES */}
        <section className="pricing" id="pricing">
          <div className="pricing-container">
            <div className="pricing-header">
              <span className="pricing-badge">Pricing</span>
              <h2>Simple, Transparent Pricing</h2>
            </div>

            <div className="pricing-grid">
              {/* Developer Plan */}
              <div className="pricing-card">
                <div className="pricing-tier">Developer</div>
                <p className="pricing-description">Perfect for side projects</p>
                <div className="pricing-price">$0</div>
                <p className="pricing-period">Forever free</p>
                <button className="pricing-btn pricing-btn-secondary">
                  Start Free
                </button>
                <ul className="pricing-features">
                  <li>Up to 10 functions</li>
                  <li>Single AWS account</li>
                  <li>Email alerts</li>
                  <li>7-day history</li>
                </ul>
              </div>

              {/* Team Plan - Featured */}
              <div className="pricing-card pricing-card-featured">
                <div className="pricing-popular-badge">Popular</div>
                <div className="pricing-tier">Team</div>
                <p className="pricing-description">For growing teams</p>
                <div className="pricing-price">$99</div>
                <p className="pricing-period">per month</p>
                <button className="pricing-btn pricing-btn-primary">
                  Get Started
                </button>
                <ul className="pricing-features">
                  <li>Up to 100 functions</li>
                  <li>Multi-account support</li>
                  <li>Slack & PagerDuty integration</li>
                  <li>90-day history</li>
                  <li>Priority support</li>
                </ul>
              </div>

              {/* Enterprise Plan */}
              <div className="pricing-card">
                <div className="pricing-tier">Enterprise</div>
                <p className="pricing-description">For large organizations</p>
                <div className="pricing-price">Custom</div>
                <p className="pricing-period">Contact us</p>
                <button className="pricing-btn pricing-btn-secondary">
                  Contact Sales
                </button>
                <ul className="pricing-features">
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
                <div className="logo-icon">
                  <img src="/images/logo.png" alt="Cloud Sentinel Logo" />
                </div>
                <span>Cloud Sentinel</span>
              </div>
              <p className="footer-description">
                Serverless security made effortless. Protect your AWS Lambda
                functions with automated scanning, IAM analysis, and real-time
                alerts.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  𝕏
                </a>
                <a href="#" className="social-link">
                  in
                </a>
                <a
                  href="https://github.com/AshanBandara/Cloud_Sentinel.git"
                  className="social-link"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4>PRODUCT</h4>
              <ul>
                <li>
                  <a href="#how-it-works">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>COMPANY</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>LEGAL</h4>
              <ul>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Cookies</a>
                </li>
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
