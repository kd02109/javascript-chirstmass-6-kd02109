import Util from './util/Util.js';
import MenuValidation from './validation/MenuValidation.js';
import { PRICE, APPETIZER, MAIN, DESSERT, BEVERAGE, PRICE_CONSTANT } from './constants/constant.js';

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
    MenuValidation.validateMenuAndMenuCount(data);
    MenuValidation.validateDuplicate(data);
    MenuValidation.validateOnlyBeverage({ ...this.#appetizer, ...this.#main, ...this.#dessert }, data);
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
    return Util.extractValuesAndSum(this.#dessert);
  }

  /**
   * 총 주문한 메인 메뉴의 개수
   * @returns {number} totalMainMenu
   */
  calcultaeTotalMain() {
    return Util.extractValuesAndSum(this.#main);
  }

  /**
   * 에피타이저, 메인메뉴, 디저트, 음료 중 1개이상 주문한 메뉴만 추려서 반환
   * @returns {{[key:string]: number}} buyingMenu
   */
  calculateBuyingMenu() {
    const totalFood = { ...this.#appetizer, ...this.#main, ...this.#dessert, ...this.#beverage };
    const foodNames = Util.extractKeys(totalFood);
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
    return this.#totalPrice >= PRICE_CONSTANT.presentedAmountPrice;
  }

  /**
   * 총 구입 금액이 기준 금액 이상 여부에 따라서 이벤트 혜택 여부를 확인합니다.
   * @returns {boolean} 이벤트 대상 여부를 확인합니다.
   */
  isEvent() {
    return this.#totalPrice >= 10000;
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
