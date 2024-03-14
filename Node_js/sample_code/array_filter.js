// Example data representing items in the shopping cart
const shoppingCart = [
    { id: 1, name: 'Product 1', price: 10, onSale: true, inStock: 5 },
    { id: 2, name: 'Product 2', price: 20, onSale: false, inStock: 0 },
    { id: 3, name: 'Product 3', price: 15, onSale: true, inStock: 10 },
    { id: 4, name: 'Product 4', price: 25, onSale: true, inStock: 3 },
  ];
  
  // Function to filter items on sale and check if at least one is in stock
  function isAnySaleItemInStock() {
      // Filter items on sale
      const saleItems = shoppingCart.filter(item => item.onSale);
  
      // Check if at least one sale item is in stock
      const anyInStock = saleItems.some(item => item.inStock > 0);
  
    return anyInStock;
  }
  
  function isAnySaleItemInStock1() {
    const anyInStock = shoppingCart.filter(item=>{
        return item.price<28 && item.inStock ==10;
    })
    return anyInStock;
}
  
  // Test the function
  console.log('Is at least one sale item in stock?', isAnySaleItemInStock1());