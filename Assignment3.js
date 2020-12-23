let shoppingCart = [
	{ id: 'A31', item: 'T-shirt', price: 9.9, quantity: 5 },
	{ id: 'A32', item: 'Jacket', price: 99.9, quantity: 1 },
	{ id: 'A33', item: 'Skirt', price: 19.9, quantity: 2 },
	{ id: 'A34', item: 'Ankle Pant', price: 39.9, quantity: 3 },
	{ id: 'A35', item: 'Polo shirt', price: 14.9, quantity: 3 },
	{ id: 'A36', item: 'Chino Short', price: 29.9, quantity: 2 },
	{ id: 'A37', item: 'Easy Short', price: 19.9, quantity: 2 },
];
// Write a function that returns an array of prices for each product in the cart (item price * quantity).
function getPriceArray(shoppingCart){
    return shoppingCart.map(item => item.price * item.quantity);
}
console.log(getPriceArray(shoppingCart));

//Write a function that returns the total price.
function getTotalPrice(shoppingCart){
    return shoppingCart.reduce((sum, current) => sum + current.price * current.quantity, 0);
}
console.log("Total price", getTotalPrice(shoppingCart));

// Write a function called removeItemsFromCart(productId, quantity) that will remove the quantity number of item with the productId in the cart and return the result in a new array. If the quantity after removing is 0, remove the product out of the cart.
function removeItemsFromCart(productId, quantity){
    let newCart = shoppingCart.filter(product => {
        if(product.id === productId){
            product.quantity -= quantity;
            if(product.quantity <= 0){
                return false;
            }
        }
        return true;
    })
    return newCart;
}
console.log(removeItemsFromCart("A31", 5));

// Write a function called addItemToCart(product, quantity) that will add new products into the cart if there is no product like this, or increase the quantity if the cart already contains that kind of product. The result will be returned in a new array.
function addItemToCart(product, quantity){
    let flag = false;
    shoppingCart.forEach(p => {
        if(p.id === product.id){
            p.quantity += quantity;
            flag = true;
        }
    })
    if(!flag){
        product.quantity = quantity;
        shoppingCart.push(product);
    }
    return shoppingCart;
}
let newProduct = { id: 'A31', item: 'T-shirt', price: 10};
console.log(addItemToCart(newProduct,10));

let newProduct2 = { id: 'A01', item: 'T-shirt', price: 10};
console.log(addItemToCart(newProduct2,10));
