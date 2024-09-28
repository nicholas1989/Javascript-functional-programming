// Side project to log to the browser instead of the console
const displayInBrowser = (content) => {
    let container = document.getElementById("console")
    content.forEach(element => {
        let newDiv = document.createElement("div")
        newDiv.innerText = element
        container.appendChild(newDiv)
    });
}


class Dish {
    constructor(food, price, ingredients) {
        this.food = food;
        this.price = price;
        this.ingredients = ingredients;
    }

    // To calculate the total cost of a dish using the fixed cost to be 10
    cost = () => {
        const costOfIngredients = this.ingredients.reduce((total, ingredient) => total + ingredient.cost, 0);
        return 10 + costOfIngredients;
    }

    profit = () => {
        return this.price - this.cost();
    }
}

class Ingredient {
    constructor(ingredientName, cost) {
        this.ingredientName = ingredientName;
        this.cost = cost;
    }
}


class Client {
    constructor(clientName, clientId) {
        this.clientName = clientName;
        this.clientId = clientId;
    }
}


class Restaurant {
    constructor(restaurantName) {
        this.restaurantName = restaurantName;
        this.orders = [];
    }

    orderDish = (dish, client) => {
        this.orders.push({dish, client});
    }

    printOrder = (client) => {
        const clientOrders = this.orders.filter(order => order.client.clientId === client.clientId);

        console.log(`${client.clientName}`);
        let total = 0;
        clientOrders.forEach((order, index) => {
            console.log(`Order #${index}: ${order.dish.food} - ${order.dish.price}`);
            total += order.dish.price;
        });
        console.log(`Total: ${total}`);
    }

    // Print the total profit for the restaurant
    totalProfit = () => {
        let profit = 0;
        this.orders.forEach(order => {
            profit += order.dish.profit();
        })
        console.log(`Total Profit: ${profit}`)
    }

    // Calculate the profit for a specific client
    clientProfit = (client) => {
        const clientOrders = this.orders.filter(order => order.client.clientId === client.clientId);
        let profit = 0;
        clientOrders.forEach(order => {
            profit += order.dish.profit();
        });
        console.log(`Profit from ${client.clientName}: ${profit}`);
    }
}




// Ingredients
const cheese = new Ingredient('Cheese', 5);
const pepperoni = new Ingredient('Pepperoni', 7);
const dough = new Ingredient('Dough', 3);
const lettuce = new Ingredient('Lettuce', 2);
const tomato = new Ingredient('Tomato', 4);

// Dishes
const pizza = new Dish('Pizza', 30, [cheese, pepperoni, dough]);
const salad = new Dish('Salad', 25, [lettuce, cheese, tomato]);

// Clients
const Nkemakolam = new Client('Nkemakolam', 1);
const Chioma = new Client('Chioma', 2);

// Restaurant
const pizzahut = new Restaurant('Pizza Hut');

// Place orders for Goofy and Pluto
pizzahut.orderDish(pizza, Chioma);
pizzahut.printOrder(Chioma);

pizzahut.orderDish(pizza, Nkemakolam);
pizzahut.orderDish(salad, Nkemakolam);
pizzahut.printOrder(Nkemakolam);

// Calculate total profit
pizzahut.totalProfit();

// Calculate profit for each client
pizzahut.clientProfit(Nkemakolam);
pizzahut.clientProfit(Chioma);