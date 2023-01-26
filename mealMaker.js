const menu = {
  _meal: '',
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal.lenght !== 0 && this._price.length !== 0) {
      return `Today’s Special is ${this._meal} for $${this._price}!`
    } else {
      'Meal or price was not set correctly!'
    }
  }
}

menu.meal = ''
menu.price =
  console.log(menu.todaysSpecial)
console.log(menu)