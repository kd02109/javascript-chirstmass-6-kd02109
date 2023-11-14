import { CHRISTMAS_BASE_DISCOUNT, DAYS_DISCOUNT, FOOD, PRICE } from './constants/constant.js';
import { BEDGE, INPUT_VIEW_MESSAGE } from './constants/message.js';

class Discount {
  #menu;

  #reservationDate;

  constructor(menu, reservationDate) {
    this.#menu = menu;
    this.#reservationDate = reservationDate;
  }

  /**
   * 크리스마스 디데이 할인 금액 표기 여부 및 금약 반환
   * @returns {number} christmasPrice
   */
  calculateChristmasDayEvent() {
    let christmasPrice = 0;
    if (this.#menu.isOverTheTenThounsand()) {
      christmasPrice = this.#reservationDate.calculateChristmasDiscount();
    }
    return christmasPrice;
  }

  /**
   * 평일 할인 여부와 금액을 구합니다. (디저트)
   * @returns {number} weekdayPrice
   */
  calculateWeekdayEvent() {
    let discount = 0;
    if (this.#reservationDate.isWeekday() && this.#menu.isOverTheTenThounsand()) {
      discount = this.#menu.calcultaeTotalDessert() * DAYS_DISCOUNT;
    }
    return discount;
  }

  /**
   * 주말 할인 여부와 금액을 구합니다. (메인 메뉴)
   * @returns {number} weekdayPrice
   */
  calculateWeekendEvent() {
    let discount = 0;
    if (this.#reservationDate.isWeekend() && this.#menu.isOverTheTenThounsand()) {
      discount = this.#menu.calcultaeTotalMain() * DAYS_DISCOUNT;
    }
    return discount;
  }

  /**
   * 특별 할인 여부와 금액을 구합니다. (메인 메뉴)
   * @returns {number} specialDiscount
   */
  calculateSpecial() {
    let discount = 0;
    if (this.#reservationDate.isSpecialDiscount() && this.#menu.isOverTheTenThounsand()) {
      discount = CHRISTMAS_BASE_DISCOUNT;
    }
    return discount;
  }

  /**
   * 증정 혜택 여부와 금액을 구합니다. (메인 메뉴)
   * @returns {number} giftDiscount
   */
  calculateGiftEvent() {
    let discount = 0;
    if (this.#menu.isPresentedAmount() && this.#menu.isOverTheTenThounsand()) {
      discount = PRICE[FOOD.샴페인];
    }
    return discount;
  }

  /**
   * 총 혜택 금액에 따라 어떤 베지를 받을 수 있는지 계산합니다.
   * @returns {"산타"|"트리"|"별"|"없음"} bedge
   */
  calculateBedge() {
    const totalBenefit = this.calculateTotalBenefitPrice();
    if (totalBenefit >= BEDGE.santa[1]) {
      return BEDGE.santa[0];
    }
    if (totalBenefit >= BEDGE.tree[1]) {
      return BEDGE.tree[0];
    }
    if (totalBenefit >= BEDGE.star[1]) {
      return BEDGE.star[0];
    }
    return INPUT_VIEW_MESSAGE.none;
  }

  calculateTotalDiscount() {
    return (
      this.calculateChristmasDayEvent() +
      this.calculateWeekdayEvent() +
      this.calculateWeekendEvent() +
      this.calculateSpecial()
    );
  }

  calculateTotalBenefitPrice() {
    return (
      this.calculateChristmasDayEvent() +
      this.calculateWeekdayEvent() +
      this.calculateWeekendEvent() +
      this.calculateSpecial() +
      this.calculateGiftEvent()
    );
  }
}

export default Discount;
