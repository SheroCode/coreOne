export default function SupportPage() {
  return (
    <div className="support-page">
      <section className="support-header">
        <h1>Support Center</h1>
        <p>We're here to help! Reach out to us or browse through the FAQ.</p>
      </section>

      <section className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I reset my password?</h3>
          <p>
            You can reset your password by going to the account settings and
            clicking on "Forgot Password".
          </p>
        </div>
        <div className="faq-item">
          <h3>Where can I view my order history?</h3>
          <p>
            Log into your account and navigate to the "Order History" section to
            view past orders.
          </p>
        </div>
        <div className="faq-item">
          <h3>How can I contact support?</h3>
          <p>
            You can contact us through the form above, or by emailing us at
            support@coreone.com.
          </p>
        </div>
      </section>
    </div>
  );
}
