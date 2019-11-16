//Object propert shorthand

const name = 'Arush';
const userAge = 26;

const user = {
  name: name,
  age: userAge,
  location: 'Austin'
};

/**
 * Same as code below
 */

const es6User = {
  name,
  age: userAge,
  location: 'Austin'
};

console.log(user);
console.log(es6User);

// Object Destructuring

const product = {
  label: 'Red Dead Redemption',
  price: 60,
  stock: 100,
  salePrice: undefined
};

// console.log(product.label);

const { label: productLabel, stock, rating = 4 } = product;

console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);
