#### Intro
We need to build the front end web app of our ecommerce store. This project is based on an existing website that has no functionality. If you worked for this company, they may ask you to fix their current website that doesn't do anything and make it functional for people to buy products on it. You might make the decision to use React to do this. Converting normal websites to React components is a very common thing to do in the industry.

Our simple site will list out some hard coded products. Is this realistic? Would a small company only sell the same 10 items in a year? A user needs to be able to add a product to their shopping cart by clicking a button. How do you atually code the act of adding a product to the a digital shopping cart? 


https://blackrockdigital.github.io/startbootstrap-shop-homepage/

### Setup
* Fork, clone, install http-server or use live server
* Be aware of how to empty the cache

# Part 1 - Building React Components, Props and Dynamic Components
### The components
 * Create a component folder in /public/js to hold component files
 * Organize this web page into appropriate function components (not class components)
   * App
   * ProductDetail
   * Header
   * Footer
   * Carousel
   * Think of some other components you could make
* Look in index.html for the existing html to use for the components
* Use the comments and the expand/collapse feature of the editor to make sure you get the correct html. Normally you would need to figure this out yourself but we are learning.
* Put each component is in its own .js file
* Reference each component file in a script tag in index.html, make sure its in the correct order.
* Make sure to include type="text/babel"
* As you include each script tag, refresh the page to make sure there are no errors
* Don't forget props



### index.js
* Create a index.js file and put the code of rendering App into the div with id = root
* Provide App with a prop called "products" sending in the products array from the global state variable in state.js

### App 
* Cut whatever html is left inside the root div from index.html and turn it into JSX by pasting it into your App.js component. 
* Use all your other components in App. Don't forget where they should have gone.
* Make sure everything is valid JSX. Remember className. HTML comments are not valid JSX.
* App should use the products prop and map the array of products into an array of ProductDetail components

### ProductDetail
* The ProductDetail should repesent only one single product
* The ProductDetail should take a prop called `product` which is an object, and use it to populate price, name, description reviews and stars.
* Remove all hard coded information and use the props
* Make the star images represent the number rating from data.
* Bonus. Notice the grey stars.

### Header
* Header should require a prop numberOfItemsInCart that represents how many products are in the cart
* Make sure this is provided to Header from its parent components somehow


# Part 2 - Events, Component Comm and State

### Add Item To Cart
* Add a button to ProductDetail "Add To Cart"
* When the button is clicked it should increase the value of the state numberOfItemsInCart by 1
* The Header should update to show the current value of numberOfItemsInCart
* How does Header get that information in order to show it?
* How do you update Header so that it shows the number when it changes?
* How do you make one component affect something in another component?


### Add Item To Cart V2
* Adding 1 to a counter is not a realistic way to add an item to the shopping cart
* How would you alter the structure of the state object to represent a realistic way to do this
* How would you alter the data in the state object to represent adding an item to a cart
* How would Header now show how many items are in cart

### State
* Change App into a class component so that it can maintain state and re render itself
* Initialize the state property to shopping cart array 
* Give the shopping cart array to the Header component
* Make sure there is a method that allows adding products to the cart
    * Pass that method to ProductDetail
    * Make sure uses setState to change the state and then re render
    

# Part 3
### Checkout
* Let's create a very simple checkout process
* When you click the checkout button, whatever products are in the cart should somehow be processed so a person knows to ship those products to the customer
* The products in the cart need to be sent to the server to be saved as an order
* When the products are recieved by the server, they need to be saved in a database 

### Server
* Create a database for this project
* Create a web server for this project
* Create routes for products and orders

### Fetch
* Use fetch to retrieve products from your web api
* Where should the fetch call be made?
