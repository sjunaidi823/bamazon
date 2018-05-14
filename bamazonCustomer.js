var mysql = require("mysql");
var inquirer = require("inquirer");

// create connection to database
var connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "password",
   database: "bamazon_DB"
});


connection.connect(function (err) {
   if (err) console.log(err);

   start();
   console.log("you are connected");
});
function start() {
   connection.query("SELECT * FROM products", function (err, result) {
       if (err) console.log(err);

       var table = [];

       //loops through the items and their properties
       for (var i = 0; i < result.length; i++) {
           table.push(
               ["id: " + result[i].item_id + " | " + "product name: " + result[i].product_name + " | " + "price: " + result[i].price + " | " + "quantity :" + result[i].stock_quantity + " | " + "\n"]
           );
       }
       //console logs the results
       console.log(table.toString());
       //starts the buy function
       buy();
   });
};
function update() {
   connection.query("SELECT * FROM products", function (err, result) {
       if (err) console.log(err);

       var table = [];

       //loops through the items and their properties
       for (var i = 0; i < result.length; i++) {
           table.push(
               ["id: " + result[i].item_id + " | " + "product name: " + result[i].product_name + " | " + "price: " + result[i].price + " | " + "quantity :" + result[i].stock_quantity + " | " + "\n"]
           );
       }
       //console logs the results
       console.log(table.toString());
       //current stocks
       console.log("updated stocks")
   });
};
function buy() {
   //prompts the users what id they want and they get the info from the console logged stuff i listed above
   inquirer
       .prompt([
           {
               name: "product",
               type: "input",
               message: "What is the ID of the product you want to buy?"
           },
           {
               name: "amount",
               type: "input",
               message: "How many would you like to buy>?"
           }
       ])
       .then(function (input) {
           //selects my items
           var selector = 'SELECT * FROM products WHERE ?';

           connection.query(selector, { item_id: input.product }, function (err, data) {
               if (err) throw err;
               //grabs the data
               var productData = data[0];
               //if the user amount is less than the amount we got stocked, then this will update the stock depending on how many the user put to buy
               if (input.amount <= parseInt(productData.stock_quantity)) {
                   // updates the quantity from the grabbed item and subtracts the input amount (the amount that the user wants to buy) from the current quantity where the id is from the one that the user put
                   var updateQuantity = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - input.amount) + ' WHERE item_id = ' + input.product;
                   connection.query(updateQuantity, function (err, data) {
                       if (err) throw err;
                       //says that the order is placed
                       console.log("Order has been placed!");
                       connection.end();
                   })

               }
               else {
                   // when we dont have enough of that item
                   console.log("Insufficient quantity!");
               }
               update();

           });
       });

};