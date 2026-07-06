

export const getAllProducts = () => {
  return fetch('https://fakestoreapi.com/products')
    .then((response) => response.json());
};

export const getProductById = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json());
};
