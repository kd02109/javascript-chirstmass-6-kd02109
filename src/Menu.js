import CustomError from './error/CustomError.js';
import Util from './util/Util.js';
import { FOOD, PRICE, APPETIZER, MAIN, DESSERT, BEVERAGE } from './constants/constant.js';
import { ERROR_MESSAGE } from './constants/message.js';

class Menu {
  #main = { ...MAIN };

  #dessert = { ...DESSERT };

  #beverage = { ...BEVERAGE };

  #appetizer = { ...APPETIZER };

  #totalPrice;

  constructor(menu) {
    const data = Util.countMethod(menu);
    this.#validate(data);
    this.#calculateMenuAndPrice(data);
  }

  #validate(data) {
    let total = 0;
    data.forEach(([food, count]) => {
      if (!FOOD[food]) throw CustomError.inputView(ERROR_MESSAGE.order);
      if (Number.isNaN(count) || !Number.isInteger(count) || count < 0)
        throw CustomError.inputView(ERROR_MESSAGE.order);
      total += count;
    });

    const foodList = Util.extractFoodName(data);
    const foodSet = new Set(foodList);
    if (foodList.length !== foodSet.size) throw CustomError.inputView(ERROR_MESSAGE.order);

    if (total > 20 || total < 1) throw CustomError.inputView(ERROR_MESSAGE.moreThan20);
  }

  #calculateMenuAndPrice(data) {
    data.forEach(([food, count]) => {
      if (this.#appetizer[food]) this.#appetizer[food] += count;
      if (this.#dessert[food]) this.#dessert[food] += count;
      if (this.#main[food]) this.#main[food] += count;
      if (this.#beverage[food]) this.#beverage[food] += count;
      this.#totalPrice += PRICE[food] * count;
    });
  }
}

export default Menu;
