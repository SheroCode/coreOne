import Carousel from "react-bootstrap/Carousel";
import latestPhone from "../assets/latestPhone.png";
import latestAirpods from "../assets/latestAirpods.png";
import latestWatch from "../assets/latestWatch.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";

function UncontrolledCarousel() {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <div className="img-container">
          <img src={latestPhone} />
        </div>
        <div className="productName responsive">
          <p>iPhone 15 Pro</p>
          <FontAwesomeIcon icon={faApple} />
          <h4>Now Available</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img src={latestAirpods} />
        </div>
        <div className="productName responsive">
          <p>Airpods Pro</p>
          <FontAwesomeIcon icon={faApple} />
          <h4>Now Available</h4>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img src={latestWatch} />
        </div>
        <div className="productName responsive">
          <p>Apple Watch S9</p>
          <FontAwesomeIcon icon={faApple} />
          <h4>Now Available</h4>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledCarousel;
