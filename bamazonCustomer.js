// dependencies
var inquirer = require("inquirer");
var mysql = require("mysql");
require("console.table");
var chalk = require("chalk")
//establish connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db",
});
//establish connection w/ sql db, in case of error will display error message
connection.connect(function (error) {
    if (error) {
        console.log(chalk.red("error connecting", error))
    }
    displayProducts();
})
//displays all products from database function
function displayProducts() {
    console.log(chalk.blue("\n Welcome to bamazon! \n"));
    connection.query("Select * from products", function (error, response) {
        if (error) throw error
        // console.log("sql response", response) - used as an example to differentiate log and table
        // will display the products in table format 
        console.log(chalk.black.bgYellow("Displaying stock for all available products \n"));
        console.table(response);
        userInput();
    })


}

function userInput() {
    inquirer.prompt([{
                type: "input",
                name: "itemId",
                message: "What is the ID of the item you would like to purchase?",
            },
            {
                type: "input",
                name: "quantity",
                message: "What quantity would you like to buy?",
            }
        ])

        .then(function (inquirerResponse) {
            //checking if product exists
            connection.query('SELECT * FROM products WHERE item_id = ? ;', [inquirerResponse.itemId], function (error, response) {
                if (error) throw error
                // console.log("sql response", response) - used as an example to differentiate log and table
                // will display the products in table format 
                console.log("Checking Inventory");
                if (inquirerResponse.quantity > response[0].stock_quantity) {
                    console.log(chalk.white.bgRed.bold("Insufficient quantity. Your order cannot be placed."))
                } else {
                    connection.query("Update products set stock_quantity = stock_quantity - ? WHERE item_id = ?", [inquirerResponse.quantity, inquirerResponse.itemId], function (err, res) {
                        if (err) throw err

                        console.log(chalk.black.bgGreen.bold("Succesfully purchased " + inquirerResponse.quantity + " " + response[0].product_name + "(s).\n"));
                    })

                }
                displayProducts();
            })
        })
}