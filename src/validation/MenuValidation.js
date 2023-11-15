import CustomError from '../error/CustomError.js';
import { ERROR_MESSAGE } from '../constants/message.js';
import { FOOD, COUNT_CONSTANT } from '../constants/constant.js';
import Util from '../util/Util.js';

const MenuValidation = Object.freeze({
  /**
   * 주문 형식및 메뉴 게수가 제한 사항과 일치하는지 확인합니다.
   * @param {[string, number][]} data
   */
  validateMenuAndMenuCount(data) {
    let total = 0;
    data.forEach(([food, count]) => {
      if (!FOOD[food]) CustomError.inputView(ERROR_MESSAGE.order);
      if (Number.isNaN(count) || !Number.isInteger(count) || count < 0) CustomError.inputView(ERROR_MESSAGE.order);
      total += count;
    });

    if (total > COUNT_CONSTANT.numberOfMaximun || total < COUNT_CONSTANT.numberOfMinmun)
      CustomError.inputView(ERROR_MESSAGE.moreThan20);
  },

  /**
   * 중복으로 작성된 주문이 있는지 확인합니다.
   * @param {[string, number][]} data
   */
  validateDuplicate(data) {
    const foodList = data.map((item) => item[0]);
    const foodSet = new Set(foodList);
    if (foodList.length !== foodSet.size) CustomError.inputView(ERROR_MESSAGE.order);
  },

  /**
   * 음료만 주문되었는지 확인합니다.
   * @param {{[key: string]: number}} object
   * @param {[string, number][]} data
   */
  validateOnlyBeverage(object, data) {
    const foodNames = Util.extractKeys(object);
    const dataFoodName = data.map((item) => item[0]);
    const dataFoodCount = data.map((item) => item[1]);

    const notBeverage = foodNames.find((food) => {
      const index = dataFoodName.indexOf(food);
      if (index !== -1 && dataFoodCount[index] !== 0) return true;
      return false;
    });

    if (!notBeverage) CustomError.inputView(ERROR_MESSAGE.onlyBeverage);
  },
});

export default MenuValidation;
