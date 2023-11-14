import { INPUT_VIEW_MESSAGE } from '../constants/message.js';

class Util {
  /**
   *
   * @param {string} data
   * @returns {[string, number][]} array
   */
  static countMethod(data) {
    return data
      .split(',')
      .map((item) => item.split('-'))
      .map(([food, count]) => [food.trim(), Number(count)]);
  }

  /**
   *
   * @param {{[key: string]:number} } data
   * @returns {string[]} array
   */
  static extractFoodName(data) {
    return Object.keys(data);
  }

  /**
   *
   * @param {{[key: string]: number}} object
   * @returns {number} totalCount
   */
  static extractFoodTotalCount(object) {
    const countList = Object.values(object);
    return countList.reduce((acc, cur) => acc + cur);
  }

  /**
   * 100000 -> '100,000원'으로 변경
   * @param {number} price
   * @returns {string} totalCount
   */
  static chagePriceToString(price) {
    return `${price.toLocaleString()}${INPUT_VIEW_MESSAGE.won}`;
  }

  /**
   * 100000 -> '-100,000원'으로 변경
   * @param {number} price
   * @returns {string} totalCount
   */
  static chagePriceToMinusString(price) {
    return `${(-price).toLocaleString()}${INPUT_VIEW_MESSAGE.won}`;
  }
}

export default Util;
