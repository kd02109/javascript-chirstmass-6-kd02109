import CustomError from '../error/CustomError.js';
import { ERROR_MESSAGE } from '../constants/message.js';
import { START_DAY, END_DAY } from '../constants/constant.js';

const ReservationDateValidation = Object.freeze({
  validateNumber(date) {
    if (Number.isNaN(date)) CustomError.inputView(ERROR_MESSAGE.date);
  },
  validateUnderAndOver(date) {
    if (date < START_DAY || date > END_DAY) CustomError.inputView(ERROR_MESSAGE.date);
  },
});

export default ReservationDateValidation;
