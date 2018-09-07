// ========================================================================

// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Load the MySQL Package

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    //console.log("connected as id " + connection.threadId);
    startApp();
});

function startApp() {

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        //console.log(res);
        var choiceArray = [];

        for (var i = 0; i < res.length; i++) {
            choiceArray.push(`${res[i].item_id}-->  ` + `${res[i].product_name} ` + `--> cost: $${res[i].price}`)
        }
        //console.log(`${res[i].item_id} : ${res[i].product_name} - $ ${res[i].price}`);
        //return choiceArray;
        console.log(choiceArray.join("\n"));

        //for (var i = 0; i < choiceArray; i++) {
        //    choiceArray.toString();
        //}

        inquirer.prompt([

            {
                name: "productSelection",
                type: "input",
                message: "Hello. What do you want to buy? (select by typing the item number)"
            },
            {
                name: "quantitySelection",
                type: "input",
                message: "How many pieces would you want to buy?"
            }

        ]).then(function (answer) {
            var product = parseInt(answer.productSelection);
            var quantity = parseInt(answer.quantitySelection);

            //console.log(product_id); this are only strings
            //console.log(quantityToBuy); this are only strings
            //console.log(product_id * quantityToBuy); now this are numbers

            connection.query("SELECT * FROM products WHERE ?", { item_id: product }, function (err, res) {

                if (err) throw err;
                //SELECT item_id, price, stock_quantity FROM products
                //console.log(`${res[0].item_id}` + `${res[0].price}` + `${res[0].stock_quantity}`);
                //if (product === res.item_id)
                //stock_quantity - quantity

                //for (var i = 0; i < res.length; i++) {

                //var itemid = res[0].item_id;
                var price = res[0].price;
                var quantityDB = res[0].stock_quantity;

                if (quantityDB >= quantity) {
                    console.log("We can sell it to you!");
                    console.log("Your total is: " + (price * quantity));

                } else if (quantityDB < quantity) {
                    console.log("We are out of stock. Sorry about that!");
                } else {
                    console.log("Start the prompt again...");
                }

                //console.log(itemid);
                //console.log("\n");
                //console.log(price);
                //console.log("\n");
                //console.log(quantity);
                //console.log("\n");

                connection.end();

            });

        })
        //------------------------------------------
    })

}