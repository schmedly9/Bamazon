// Initializes the npm packages used
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// Creates the connection with the server and loads the product data upon a successful connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
promptAddItem();
});

// Function to load the products table from the database and print results to the console
function loadProducts() {

  // Selects data from the view products table
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    // Draw the table in the terminal using the response
    console.table(res);

    // display low stock inventory
   function displayLowInventory() {
     //  selects stock qty less than 5
	queryStr = 'SELECT * FROM products WHERE stock_quantity < 5';
     
	// query the dataBase - error ck
	connection.query(queryStr, function(err, res) {
		if (err) throw err;
       // display 
		console.log('low inventory:');
		console.table(res);
        connection.end();
		})
    }
  });
}
// add inventory
function promptAddItem(inventory) {
 
  inquirer.prompt([
      {
        type: "input",
        name: "item id",
        message:"enter item id to add to inventory"
      },
      {
        type: "input",
        name: "item qty",
        message:"enter quantity to add to inventory"
      
  }],
 function addItem(item_id, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity + ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(err, res) {
      
      console.log()
        
       
      })
    
    
    }
  );
}

// Check to see if the product the user chose exists in the inventory
function checkInventory(choiceId, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
      // If a matching product is found, return the product
      return inventory[i];
    }
  }
  // Otherwise return null
  return null;
}

// Check to see if the user wants to quit the program
function checkIfShouldExit(choice) {
  if (choice.toLowerCase() === "q") {
    // Log a message and exit the current node process
    console.log("Goodbye!");
    process.exit(0);
  }
}
