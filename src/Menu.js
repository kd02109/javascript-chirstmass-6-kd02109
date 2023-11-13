import { FOOD, PRICE, APPETIZER, MAIN, DESSERT, BEVERAGE } from './constants/constant.js';
import CustomError from './error/CustomError.js';
import { ERROR_MESSAGE } from './constants/message.js';

class Menu {
  #main = { ...MAIN };

  #dessert = { ...DESSERT };

  #beverage = { ...BEVERAGE };

  #appetizer = { ...APPETIZER };

  #total;

  constructor(menu) {
    const data = this.#dataSplit(menu);
    this.#validate(data);
  }

  /**
   *
   * @param {string} menu
   * @returns {[string, number][]} array
   */
  #dataSplit(menu) {
    return menu
      .split(',')
      .map((item) => item.split('-'))
      .map(([food, count]) => [food.trim(), Number(count)]);
  }

  #validate(data) {
    let total = 0;
    data.forEach(([food, count]) => {
      if (!FOOD[food]) throw CustomError.inputView(ERROR_MESSAGE.order);
      if (Number.isNaN(count) || !Number.isInteger(count) || count < 0)
        throw CustomError.inputView(ERROR_MESSAGE.order);
      total += count;
    });

    const foodList = data.map((item) => item[0]);
    const foodSet = new Set(foodList);
    if (foodList.length !== foodSet.size) throw CustomError.inputView(ERROR_MESSAGE.order);

    if (total > 20 || total < 1) throw CustomError.inputView(ERROR_MESSAGE.moreThan20);
  }
}

export default Menu;
