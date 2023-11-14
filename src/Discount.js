import { PRICE_CONSTANT, BEDGE, FOOD, PRICE } from './constants/constant.js';
import { INPUT_VIEW_MESSAGE } from './constants/message.js';

class Discount {
  #menu;

  #reservationDate;

  /**
   *
   * @param {Menu} menu class Menu Instance
   * @param {ReservationDate} reservationDate class ReservationDate instance
   */
  constructor(menu, reservationDate) {
    this.#menu = menu;
    this.#reservationDate = reservationDate;
  }

  /**
   * 크리스마스 디데이 할인 금액 표기 여부 및 금약 반환
   * @returns {number} christmasPrice
   */
  calculateChristmasDayEvent() {
    let christmasPrice = PRICE_CONSTANT.baseDiscountPrice;
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
    let discount = PRICE_CONSTANT.baseDiscountPrice;
    if (this.#reservationDate.isWeekday() && this.#menu.isOverTheTenThounsand()) {
      discount = this.#menu.calcultaeTotalDessert() * PRICE_CONSTANT.daysDiscountPrice;
    }
    return discount;
  }

  /**
   * 주말 할인 여부와 금액을 구합니다. (메인 메뉴)
   * @returns {number} weekdayPrice
   */
  calculateWeekendEvent() {
    let discount = PRICE_CONSTANT.baseDiscountPrice;
    if (this.#reservationDate.isWeekend() && this.#menu.isOverTheTenThounsand()) {
      discount = this.#menu.calcultaeTotalMain() * PRICE_CONSTANT.daysDiscountPrice;
    }
    return discount;
  }

  /**
   * 특별 할인 여부와 금액을 구합니다. (메인 메뉴)
   * @returns {number} specialDiscount
   */
  calculateSpecial() {
    let discount = PRICE_CONSTANT.baseDiscountPrice;
    if (this.#reservationDate.isSpecialDiscount() && this.#menu.isOverTheTenThounsand()) {
      discount = PRICE_CONSTANT.specialDicountPrice;
    }
    return discount;
  }

  /**
   * 증정 혜택 여부와 금액을 구합니다. (메인 메뉴)
   * @returns {number} giftDiscount
   */
  calculateGiftEvent() {
    let discount = PRICE_CONSTANT.baseDiscountPrice;
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

  /**
   * 총 할인 금액을 구합니다.
   * @returns {number} totalDiscount
   */
  calculateTotalDiscount() {
    return (
      this.calculateChristmasDayEvent() +
      this.calculateWeekdayEvent() +
      this.calculateWeekendEvent() +
      this.calculateSpecial()
    );
  }

  /**
   * 총 혜택 금액을 구합니다.
   * @returns {number} totalBenefitPrice
   */
  calculateTotalBenefitPrice() {
    return this.calculateTotalDiscount() + this.calculateGiftEvent();
  }
}

export default Discount;
