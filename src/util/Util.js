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
}

export default Util;
