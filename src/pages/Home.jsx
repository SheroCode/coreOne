import { Link } from "react-router-dom";
import EmblaCarousel from "../components/EmblaCarousel";
import Carousel from "../components/Carousel";

const OPTIONS = { loop: true };
// const SLIDE_COUNT = 8;

export default function Home() {
  return (
    <>
      <section className="hero" id="latest">
        <Carousel />
      </section>
      <section id="categories">
        <h2>Categories</h2>
        <EmblaCarousel options={OPTIONS} />
      </section>
    </>
  );
}
