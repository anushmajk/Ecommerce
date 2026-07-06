// Simple fetch calls to the Fake Store API
// https://fakestoreapi.com/docs

export const getAllProducts = () => {
  return fetch('https://fakestoreapi.com/products')
    .then((response) => response.json());
};

export const getProductById = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json());
};
