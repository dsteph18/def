/*The best way to store cart items is by creating a variable named cartItems that stores an empty array*/
var cartItems = [];
/*For each product, we'll create an object. Create a variable named birthday that stores an object with name: "Birthday" and price: 400 properties*/
var birthday = {
    name: "Birthday",
    price: 400
}
/*We'll need a similar variable storing an object for the lion pic.*/
var lion = {
    name: "Lion",
    price: 300
}
/*Now, we should add the birthday object to cartItems array*/
/*To add item s to the array, create an addToCart function with item as a parameter*/
function addToCart(item) {
    /*Make sure that the addToCart function adds each item to the cartItems array using .push()*/
    cartItems.push(item);
    /*Display the array's length on the webpage by setting it as the innerHTML of the element that creates the item counter*/
    document.getElementById("itemCounter").innerHTML = cartItems.length;
}

