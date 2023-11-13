import CustomError from './error/CustomError.js';
import { ERROR_MESSAGE } from './constants/message.js';
import { SPECIAL_DISCOUNT, DAYS, CHRISTMAS_BASE_DISCOUNT, CHRISTMAS, START_DAY, END_DAY } from './constants/constant';

class ReservationDate {
  #date;

  constructor(date) {
    const dateToNumber = Number(date);
    this.#validate(dateToNumber);
    this.#date = dateToNumber;
  }

  #validate(date) {
    if (Number.isNaN(date)) throw CustomError.inputView(ERROR_MESSAGE.date);

    if (date < START_DAY || date > END_DAY) throw CustomError.inputView(ERROR_MESSAGE.date);
  }

  #getDate() {
    const index = this.#date % DAYS.length;
    const day = DAYS[index];
    return day;
  }

  calculateChristmasDiscount() {
    if (this.#date <= CHRISTMAS) return (CHRISTMAS - START_DAY) * CHRISTMAS_BASE_DISCOUNT;
    return 0;
  }

  isWeekend() {
    const day = this.#getDate();
    if (day === DAYS[1] || day === DAYS[2]) return true;
    return false;
  }

  isWeekday() {
    const day = this.#getDate();
    if (!(day === DAYS[1]) && !(day === DAYS[2])) return true;
    return false;
  }

  isSpecialDiscount() {
    return SPECIAL_DISCOUNT.includes(this.#date);
  }
}

export default ReservationDate;
