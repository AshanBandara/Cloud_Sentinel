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
                </section>
                
            </main>
            <footer>
                <p>© 2024 Cloud Sentinel. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;