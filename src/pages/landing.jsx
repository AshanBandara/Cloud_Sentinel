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

                                <section className="section 3">
                </section>

                <section className="section 4">
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
};

export default Landing;
