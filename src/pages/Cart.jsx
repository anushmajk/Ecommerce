// cartItems and onRemove are passed down from App.jsx
function Cart({ cartItems, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container text-center py-5">
        <h5>Your cart is empty</h5>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h3 className="mb-4">Your Cart</h3>
      {cartItems.map((item, index) => (
        <div key={index} className="row align-items-center border-bottom py-2">
          <div className="col-2">
            <img src={item.image} alt={item.title} style={{ height: '60px' }} />
          </div>
          <div className="col-6">{item.title}</div>
          <div className="col-2">${item.price}</div>
          <div className="col-2 text-end">
            <button className="btn btn-sm btn-outline-danger" onClick={() => onRemove(index)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <h5 className="mt-4">Total: ${total.toFixed(2)}</h5>
    </div>
  );
}

export default Cart;
