import { INPUT_VIEW_MESSAGE } from '../constants/message.js';

class Util {
  /**
   * "타파스-1,제로콜라-1" -> [[타파스,1],[제로콜라,1]]
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
   * 인자로 주어진 객체의 key값을 배열로 추출
   * @param {{[key: string]:number} } data
   * @returns {string[]} array
   */
  static extractKeys(data) {
    return Object.keys(data);
  }

  /**
   * 인자로 주어진 객체의 value 값을 추출하고 모두 더합니다.
   * @param {{[key: string]: number}} object
   * @returns {number} totalCount
   */
  static extractValuesAndSum(object) {
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
