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
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}


class Restaurant {
    constructor(restaurantName) {
        this.restaurantName = restaurantName;
        this.orders = [];
    }

    orderDish =(dish, client)=> {
        this.orders.push({dish, client});
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
const pluto = new Client('Pluto', 1);
const goofy = new Client('Goofy', 2);

