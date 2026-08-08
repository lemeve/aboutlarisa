const Contact = () => {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">CONTACT</p>

        <h1>
          Let's discuss
          <br />
          the <em>opportunity.</em>
        </h1>
      </section>

      <section className="contact-page section">
        <div className="section-label">
          <span>01</span>
          START A CONVERSATION
        </div>

        <div className="contact-grid">
          <div>
            <h2>
              Have a transaction,
              <em> project, or opportunity?</em>
            </h2>

            <p>
              Tell Larisa what you are working on and where you
              need help. Whether you are seeking financing,
              raising capital, selling a business, evaluating
              commercial real estate, or planning an exit, start
              with the opportunity.
            </p>

            <a
              href="mailto:hello@aboutlarisa.com"
              className="contact-email"
            >
              hello@aboutlarisa.com
            </a>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label>
              Name
              <input type="text" name="name" />
            </label>

            <label>
              Email
              <input type="email" name="email" />
            </label>

            <label>
              Company
              <input type="text" name="company" />
            </label>

            <label>
              What can Larisa help with?
              <select name="service">
                <option value="">Select one</option>
                <option>Real Estate Lending</option>
                <option>Fundraising</option>
                <option>Commercial Real Estate</option>
                <option>Business Sale / M&A</option>
                <option>Private Capital</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Tell us about the opportunity
              <textarea name="message" rows="6" />
            </label>

            <button type="submit" className="primary-button">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
