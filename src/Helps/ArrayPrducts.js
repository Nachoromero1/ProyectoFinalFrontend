const agregarProductosLocalStorage = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
    localStorage.setItem('products', JSON.stringify(data));
    
  } catch (error) {
    console.error('Error fetching or storing data:', error);
  }
};

export default agregarProductosLocalStorage;