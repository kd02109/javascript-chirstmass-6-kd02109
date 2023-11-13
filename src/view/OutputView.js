import { Console } from '@woowacourse/mission-utils';

const OutputView = Object.freeze({
  /**
   * 인자로 들어온 문자를 출력합니다.
   * @param {string} message
   */
  printMenu(message) {
    Console.print(message);
  },
});

export default OutputView;
