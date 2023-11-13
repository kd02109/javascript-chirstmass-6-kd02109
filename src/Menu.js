import CustomError from './error/CustomError.js';
import Util from './util/Util.js';
import { FOOD, PRICE, APPETIZER, MAIN, DESSERT, BEVERAGE, PRESENTED_AMOUNT } from './constants/constant.js';
import { ERROR_MESSAGE } from './constants/message.js';

class Menu {
  #main = { ...MAIN };

  #dessert = { ...DESSERT };

  #beverage = { ...BEVERAGE };

  #appetizer = { ...APPETIZER };

  #totalPrice = 0;

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

    const foodList = data.map((item) => item[0]);
    const foodSet = new Set(foodList);
    if (foodList.length !== foodSet.size) throw CustomError.inputView(ERROR_MESSAGE.order);

    if (total > 20 || total < 1) throw CustomError.inputView(ERROR_MESSAGE.moreThan20);
  }

  #calculateMenuAndPrice(data) {
    data.forEach(([food, count]) => {
      if (this.#appetizer[food] !== undefined) this.#appetizer[food] += count;
      if (this.#dessert[food] !== undefined) this.#dessert[food] += count;
      if (this.#main[food] !== undefined) this.#main[food] += count;
      if (this.#beverage[food] !== undefined) this.#beverage[food] += count;
      this.#totalPrice += PRICE[food] * count;
    });
  }

  /**
   * 총 주문한 디저트의 개수
   * @returns {number} totalDessert
   */
  calcultaeTotalDessert() {
    return Util.extractFoodTotalCount(this.#dessert);
  }

  /**
   * 총 주문한 메인 메뉴의 개수
   * @returns {number} totalMainMenu
   */
  calcultaeTotalMain() {
    return Util.extractFoodTotalCount(this.#main);
  }

  /**
   * 에피타이저, 메인메뉴, 디저트, 음료 중 1개이상 주문한 메뉴만 추려서 반환
   * @returns {{[key:string]: number}} buyingMenu
   */
  calculateBuyingMenu() {
    const totalFood = { ...this.#appetizer, ...this.#main, ...this.#dessert, ...this.#beverage };
    const foodNames = Util.extractFoodName(totalFood);
    const buyingMenu = {};
    foodNames.forEach((food) => {
      if (totalFood[food]) buyingMenu[food] = totalFood[food];
    });
    return buyingMenu;
  }

  /**
   * 12만원 이상 구매 여부 반환
   * @returns {boolean} isPresentedAmount
   */
  isPresentedAmount() {
    if (this.#totalPrice >= PRESENTED_AMOUNT) return true;
    return false;
  }

  /**
   * 할인전 총 금액 반환
   * @returns {number} totalPrice
   */
  getTotalPrice() {
    return this.#totalPrice;
  }
}

export default Menu;
