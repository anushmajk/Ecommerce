import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top p-3"
          style={{ height: '220px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.title}</h6>
          <p className="fw-bold">${product.price}</p>
          <Link to={`/product/${product.id}`} className="btn btn-outline-dark btn-sm mb-2">
            View Details
          </Link>
          <button
            className="btn btn-dark btn-sm mt-auto"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
