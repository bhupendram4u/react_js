// Sample list of products
const products = [
    { name: 'Product A', price: 50, category: 'Electronics', brand: 'Brand X' },
    { name: 'Product B', price: 70, category: 'Clothing', brand: 'Brand Y' },
    { name: 'Product C', price: 100, category: 'Electronics', brand: 'Brand X' },
    { name: 'Product D', price: 80, category: 'Electronics', brand: 'Brand Z' },
    { name: 'Product D', price: 80,  brand: 'Brand Z' },
    // More products...
    // More products...
];

// Curried function to filter products based on criteria
function filterProducts(criteria) {
    return function(productList) {
        return productList.filter(product => {
                //   return Object.keys(criteria).every(key=>criteria[key]==product[key])
            return Object.keys(criteria).every(key => {
                return criteria[key] === undefined || product[key] === criteria[key];
            });
        });
    };
}

// Example usage
// const filterByCategory = filterProducts({ category: 'Electronics' });
// console.log('FInd By Product',filterByCategory(products));
console.log('FInd By Product', filterProducts({})(products))
// Outputs: [{ name: 'Product A', price: 50, category: 'Electronics', brand: 'Brand X' },
//           { name: 'Product C', price: 100, category: 'Electronics', brand: 'Brand X' },
//           { name: 'Product D', price: 80, category: 'Electronics', brand: 'Brand Z' }]

const filterByPriceRange = filterProducts({ price: price => price >= 50 && price <= 80 });
console.log('\n ### FInd By price Range',filterByPriceRange(products));
// Outputs: [{ name: 'Product A', price: 50, category: 'Electronics', brand: 'Brand X' },
//           { name: 'Product D', price: 80, category: 'Electronics', brand: 'Brand Z' }]
return;
const log=console.log
var check_glob;
var d=10
var n="strin" 
let bl=true

console.log(typeof check_glob)
log(typeof d,typeof n,typeof bl);