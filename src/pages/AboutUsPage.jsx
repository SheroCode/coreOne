import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

export default function AboutUsPage() {
  return (
    <div className="about-us-page">
      <section className="hero-section">
        <h1>About CoreOne</h1>
        <p>
          Premium Apple Reseller. Delivering world-class Apple products and
          unparalleled customer service.
        </p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At CoreOne, we are committed to delivering the ultimate Apple
            experience. As a trusted premium reseller, we offer the full range
            of Apple products combined with top-tier service and support,
            ensuring every customer receives the innovation and quality they
            deserve.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Our vision is to create a seamless connection between people and
            technology by offering the most advanced Apple products,
            transforming the way our customers live, work, and play in the
            digital world.
          </p>
        </div>
      </section>

      <section className="our-team">
        <h2>Meet the CoreOne Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={person1} alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={person2} alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Head of Customer Relations</p>
          </div>
          <div className="team-member">
            <img src={person3} alt="Team Member 3" />
            <h3>Michael Lee</h3>
            <p>Chief Technology Officer</p>
          </div>
        </div>
      </section>

      <section className="history">
        <h2>Our History</h2>
        <p>
          CoreOne was founded in 2012 with a focus on delivering premium
          technology solutions. Our partnership with Apple has grown over the
          years, allowing us to bring the latest in innovation to our customers
          while maintaining exceptional service and support. Today, CoreOne is
          proud to be a leading Apple Premium Reseller.
        </p>
      </section>
    </div>
  );
}
