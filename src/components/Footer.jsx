import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link to="/" className="logo">
            ABOUT<span>LARISA</span>
          </Link>

          <p>
            Real Estate · Capital · M&A · Strategic Transactions
          </p>
        </div>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} About Larisa</span>

        <span>
          Florida Real Estate Broker · MBA · Engineering
        </span>
      </div>
    </footer>
  );
};

export default Footer;
