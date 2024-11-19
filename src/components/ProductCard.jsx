import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/details/${product.id}`}>
      <div className="card-container">
        <div className="img-container">
          <img src={product.thumbnail} alt={`${product.name}`} />
        </div>
        <p className="product-name">{product.name}</p>
      </div>
    </Link>
  );
}
