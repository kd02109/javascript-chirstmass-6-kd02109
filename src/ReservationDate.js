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

  makeDateString() {
    return `12월 ${this.#date}일에 우테코 식장에서 받을 이벤트 혜택 미리 보기!\n`;
  }

  calculateChristmasDiscount() {
    if (this.#date <= CHRISTMAS) return (this.#date - START_DAY) * 100 + CHRISTMAS_BASE_DISCOUNT;
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
