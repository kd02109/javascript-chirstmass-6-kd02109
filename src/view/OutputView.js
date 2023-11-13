import { Console } from '@woowacourse/mission-utils';
import Util from '../util/Util.js';

const OutputView = Object.freeze({
  /**
   * 인자로 들어온 문자를 출력합니다.
   * @param {string} message
   */
  printMessage(message) {
    Console.print(message);
  },

  /**
   * 인자로 들어온 문자를 출력합니다.
   * @param {{[key: string]:number}} message
   */
  printMenu(object) {
    const foodNames = Util.extractFoodName(object);
    foodNames.forEach((food) => {
      if (object[food]) Console.print(`${food} ${object[food]}개`);
    });
  },
});

export default OutputView;
