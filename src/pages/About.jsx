const About = () => {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">ABOUT LARISA</p>

        <h1>
          Real estate.
          <br />
          Business.
          <br />
          <em>Capital.</em>
        </h1>
      </section>

      <section className="about-profile section">
        <div className="section-label">
          <span>01</span>
          PROFILE
        </div>

        <div className="about-profile-content">
          <h2>
            A background built around
            <em> solving complex problems.</em>
          </h2>

          <p>
            Larisa is a Florida-licensed real estate broker with an
            MBA and a background in engineering. Her professional
            work spans real estate, lending, capital formation,
            commercial transactions, private capital, and M&A.
          </p>

          <p>
            Her engineering background brings a quantitative and
            analytical perspective to evaluating assets, businesses,
            financial structures, and investment opportunities.
          </p>

          <p>
            Her MBA provides a broader commercial perspective —
            considering not only the underlying asset or business,
            but also capital structure, strategy, market positioning,
            and transaction objectives.
          </p>
        </div>
      </section>

      <section className="credentials section">
        <div className="section-label">
          <span>02</span>
          BACKGROUND
        </div>

        <div className="credential-grid">
          <div>
            <span>01</span>
            <h3>Florida Real Estate Broker</h3>
            <p>
              Licensed real estate professional focused on
              commercial and investment transactions.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Master of Business Administration</h3>
            <p>
              Business and financial perspective applied to
              investment and transaction decisions.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Engineering</h3>
            <p>
              Analytical and technical foundation for evaluating
              complex opportunities and problems.
            </p>
          </div>
        </div>
      </section>

      <section className="about-statement">
        <p className="eyebrow">THE FOCUS</p>

        <h2>
          Where capital,
          <span> assets, and strategy intersect.</span>
        </h2>

        <p>
          Larisa's work is centered around helping clients move
          opportunities forward — from initial evaluation and
          capital strategy through transaction execution and,
          when appropriate, an eventual exit.
        </p>
      </section>
    </>
  );
};

export default About;
