import { Console } from '@woowacourse/mission-utils';

const InputView = Object.freeze({
  /**
   * 입력 값을 Promise 객체로 반환
   * @param {string} message
   * @returns {Promise<string>} input
   */
  async readDate(message) {
    const input = await Console.readLineAsync(message);
    return input;
  },
});

export default InputView;
