import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/db';

// onAddToCart is passed down from App.jsx
function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-5">Loading product...</p>;
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-5">
          <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: '400px' }} />
        </div>
        <div className="col-md-7">
          <h3>{product.title}</h3>
          <p className="text-muted">{product.category}</p>
          <h4 className="fw-bold">${product.price}</h4>
          <p>{product.description}</p>
          <button className="btn btn-dark" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
