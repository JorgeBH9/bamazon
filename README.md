# Bamazon App

# DB Schema

1. There is a Database called bamazon_db.
2. It has a Table inside called products.
3. The products have each of the following columns:

    * item_id (unique id for each product)
    * product_name (Name of product)
    * department_name
    * price (cost to customer)
    * stock_quantity (how much of the product is available in stores)

4. About know there are only 10 different products.

# Node App bamazonCustomer.js

1. When running this application will first display all of the items available for sale. Includes the ids, names, and prices of products for sale.
2. The app prompts the user with two messages.

    * The first ask the user for the ID of the product they would like to buy.
    * The second message ask the user how many units of the product they would like to buy.

3. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

* The app log´s a phrase like Insufficient quantity!, and then prevent the order from going through.

* However, if the DB store does have enough of the product, it should fulfill the customer's order.

* Once the update goes through, show the customer the total cost of their purchase.

## This is my first version of the HW

1. I have to make the update to the table when actually sales are being made...

2. I have to make the confirmations for the users... for some parts

3. I have to make the return to the main menu.
   
   * [Ask some of the TA´s](https://drive.google.com/file/d/1VxP4KK5N7CPzFv4-LTWg7j98c-YLhRnx/view)
