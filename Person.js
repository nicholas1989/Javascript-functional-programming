class Dish {
    constructor(name, price, ingredients) {
        this.name = name;
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