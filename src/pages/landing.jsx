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