import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/social.png";
import phone from "../assets/phone.png";
import apple from "../assets/apple.png";
import googlePlay from "../assets/google-play.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Coreone Stores</h3>
          <p>
            <Link href="#">About us</Link>
          </p>
          <p>
            <Link href="#">Contact us</Link>
          </p>
          <p>
            <Link href="#">Support</Link>
          </p>
          <p>
            <Link href="#">Return Policy</Link>
          </p>
          <p>
            <Link href="#">Privacy Policy</Link>
          </p>
          <p>
            <Link href="#">Shipping Policy</Link>
          </p>
          <p>
            <Link href="#">FAQs</Link>
          </p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>
            <img src={phone} />
            17985
          </h3>
          <p>
            <Link>sales@coreone.com</Link>
          </p>
          <p>
            Hyde Park, New Cairo,
            <br /> Beverly Hills,
            <br /> Cairo, EG
          </p>
        </div>

        <div className="footer-section mobile-app">
          <h3>Coreone Mobile App</h3>
          <Link href="#">
            <img src={apple} alt="Download on the App Store" />
            <p>App Store</p>
          </Link>
          <Link href="#">
            <img src={googlePlay} alt="Get it on Google Play" />
            <p>Google Play</p>
          </Link>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter</p>
          <form action="#">
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
          </form>
          <div className="social-icons">
            <Link href="#">
              <img src={facebook} alt="Facebook" />
            </Link>
            <Link href="#">
              <img src={instagram} alt="Instagram" />
            </Link>
            <Link href="#">
              <img src={twitter} alt="Twitter" />
            </Link>
            <Link href="#">
              <img src={linkedin} alt="LinkedIn" />
            </Link>
            <Link href="#">
              <img src={youtube} alt="YouTube" />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          CoreOne is the one-stop shop for all your electronics needs, offering
          a wide range of products, expert guidance, and top-notch after-sales
          support, along with financing options, training, and exclusive
          promotions.
        </p>
      </div>
    </footer>
  );
}
