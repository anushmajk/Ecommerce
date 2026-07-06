# Simple Ecommerce (Beginner Version)

A simple React app using the free Fake Store API (`https://fakestoreapi.com/products`).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
src/
├── api/
│   └── db.js              # fetch() calls to fakestoreapi.com
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── pages/
│   ├── Home.jsx            # lists all products
│   ├── ProductDetails.jsx  # single product page
│   └── Cart.jsx
├── App.jsx                  # holds cart state, passes it down as props
└── main.jsx
```

## How it works

- `App.jsx` keeps the cart in a single `useState` array and passes `addToCart` / `removeFromCart` down to pages as props (no Context, no Redux — just plain props).
- `Home.jsx` fetches all products in a `useEffect` using `fetch()`, then renders a `ProductCard` for each one.
- `ProductDetails.jsx` reads the product id from the URL with `useParams` and fetches that one product.
- `Cart.jsx` just displays whatever is in the `cartItems` array it receives as a prop.
- Bootstrap is loaded via CDN link in `index.html` — no extra npm package needed.
