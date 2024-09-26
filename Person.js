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

