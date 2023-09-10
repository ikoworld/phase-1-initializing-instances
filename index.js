// Write your code here
class Breakfast {
    constructor(food,drink){
        this.food=food;
        this.drink=drink;

    }
}
const breakfast=new Breakfast("omellete","smoothie");

class Lunch {
    constructor(salad,soup,drink){
        this.salad=salad;
        this.soup=soup;
        this.drink=drink;

    }
}
const newlunch = new Lunch(
    "side salad",
    "broccoli cheddar soup",
    "iced tea"
  );
class Dinner {
    #desert;
    constructor(salad,soup,entree,desert){
        this.salad=salad;
        this.soup=soup;
        this.entree=entree;
        this.#desert=desert;

    }
}
const dinner=new Dinner(potato-salad,tomato-soup,gratin,flan);