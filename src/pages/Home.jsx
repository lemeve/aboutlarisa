import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            REAL ESTATE · CAPITAL · TRANSACTIONS
          </p>

          <h1>
            Larisa works where
            <span> capital meets opportunity.</span>
          </h1>

          <p className="hero-text">
            Larisa is a Florida-licensed real estate broker, MBA, and
            engineer working across real estate, lending, private capital,
            M&A, and strategic transactions.
          </p>

          <div className="hero-actions">
            <Link to="/services" className="primary-button">
              Explore Services
            </Link>

            <Link to="/about" className="text-link">
              About Larisa →
            </Link>
          </div>
        </div>
      </section>

      <section className="intro section">
        <div className="section-label">
          <span>01</span>
          INTRODUCTION
        </div>

        <div className="intro-content">
          <h2>
            A multidisciplinary approach to
            <em> transactions.</em>
          </h2>

          <p>
            Larisa works with investors, developers, property owners,
            and business operators on opportunities involving capital
            formation, financing, acquisitions, dispositions, M&A,
            and exits.
          </p>

          <p>
            Her background in engineering, business, and real estate
            allows her to evaluate opportunities from both a
            quantitative and commercial perspective.
          </p>

          <Link to="/about" className="inline-link">
            Learn more about Larisa →
          </Link>
        </div>
      </section>

      <section className="home-services section">
        <div className="section-label">
          <span>02</span>
          SERVICES OVERVIEW
        </div>

        <div className="services-overview">
          <h2>
            Capital.
            <br />
            Real Estate.
            <br />
            <em>Transactions.</em>
          </h2>

          <div className="overview-list">
            <Link to="/services#lending">
              <span>01</span>
              <strong>Real Estate Lending</strong>
              <span>↗</span>
            </Link>

            <Link to="/services#fundraising">
              <span>02</span>
              <strong>Capital & Fundraising</strong>
              <span>↗</span>
            </Link>

            <Link to="/services#commercial-real-estate">
              <span>03</span>
              <strong>Commercial Real Estate</strong>
              <span>↗</span>
            </Link>

            <Link to="/services#ma">
              <span>04</span>
              <strong>Business Sales & M&A</strong>
              <span>↗</span>
            </Link>

            <Link to="/services#private-capital">
              <span>05</span>
              <strong>Private Capital</strong>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <p className="eyebrow">START A CONVERSATION</p>

        <h2>
          Have an opportunity
          <span> in mind?</span>
        </h2>

        <Link to="/contact" className="primary-button">
          Contact Larisa
        </Link>
      </section>
    </>
  );
};

export default Home;
