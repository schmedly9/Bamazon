var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "bamazon",
      type: "storefront",
      message: "what would you like?"
     
    })
    //
}

// 
function postOrder() {
  // prompt for order details- item number and quanity
  inquirer
    .prompt([
      {
        name: "item number",
        type: "input",
        message: "enter item number and quanity"
      },
      {
        name: "item number",
        type: "input",
        message: "enter item number and quanity"
      },
      {
        name: "item number",
        type: "input",
        
       // update quantity / stock

        if (quantity <= productData.stock_quantity) {
                    console.log()

                    // Construct the updating query string
                    var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

                    // Update the inventory
                    connection.query(updateQueryStr, function (err, res) {
                        if (err) throw err;

                        console.log('Your total is $' + productData.price * quantity);
          }
      
        }
      }
    ])
    
        },
        function(err) {
          if (err) throw err;
          console.log("You're successful!");
          // re-prompt the user for if they want to bid or post
          start();
        }
      );
    });

