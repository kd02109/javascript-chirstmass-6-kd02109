import CustomError from '../error/CustomError.js';
import { ERROR_MESSAGE } from '../constants/message.js';
import { START_DAY, END_DAY } from '../constants/constant.js';

const ReservationDateValidation = Object.freeze({
  /**
   * 숫자만 입력했는지 확인
   * @param {number} date
   */
  validateNumber(date) {
    if (Number.isNaN(date)) CustomError.inputView(ERROR_MESSAGE.date);
  },

  /**
   * 1~31 사이의 수만 입력했는지 확인
   * @param {number} date
   */
  validateUnderAndOver(date) {
    if (date < START_DAY || date > END_DAY) CustomError.inputView(ERROR_MESSAGE.date);
  },
});

export default ReservationDateValidation;
