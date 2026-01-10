

import "../styles/landing.css";

const Landing = () => {
    return (
        <div>
            <header> 

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

                <section className="section-3">
                </section>

                {/* Section 4 - Cloud Sentinel Has You Covered */}
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                    </svg>
                                </div>
                                <div className="timeline-content">
                                    <h3>Micro-Telemetry Agent</h3>
                                    <p>
                                        Lightweight wrapper deployed as a Lambda layer that captures granular runtime telemetry 
                                        with less than 15ms overhead. Monitors system calls, network activity, file access, 
                                        and process execution in real-time.
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                </div>
                                <div className="timeline-content">
                                    <h3>Behavioral Baseline Engine</h3>
                                    <p>
                                        AI-powered machine learning establishes normal behavioral patterns for each function. 
                                        Uses Isolation Forest algorithm to create statistical baselines without requiring 
                                        labeled training data.
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                        <line x1="12" y1="9" x2="12" y2="13"></line>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                </div>
                                <div className="timeline-content">
                                    <h3>Real-Time Anomaly Detection</h3>
                                    <p>
                                        Compares live execution behavior against established baselines with millisecond latency. 
                                        Detects supply chain attacks, data exfiltration, cryptomining, and privilege escalation 
                                        before the function terminates.
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                    </svg>
                                </div>
                                <div className="timeline-content">
                                    <h3>Automated Response Module</h3>
                                    <p>
                                        Takes immediate action on high-confidence threats. Automatically quarantines suspicious 
                                        functions, disables network access, and notifies security teams through Slack, email, 
                                        or webhooks.
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

                <section className="pricing">
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
                                <div className="logo-icon">🛡️</div>
                                Cloud Sentinel
                            </div>
                            <p className="footer-description">
                                Serverless security made effortless. Protect your AWS Lambda functions with automated scanning, IAM analysis, and real-time alerts.
                            </p>
                            <div className="social-links">
                                <a href="#" className="social-link">𝕏</a>
                                <a href="#" className="social-link">in</a>
                                <a href="#" className="social-link">Git</a>
                            </div>
                        </div>

                        <div className="footer-column">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Roadmap</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Legal</h4>
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