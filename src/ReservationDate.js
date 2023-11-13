import ReservationDateValidation from './validation/ReservationDateValidation.js';
import { SPECIAL_DISCOUNT, DAYS, CHRISTMAS_BASE_DISCOUNT, CHRISTMAS, START_DAY } from './constants/constant.js';

class ReservationDate {
  #date;

  constructor(date) {
    const dateToNumber = Number(date);
    this.#validate(dateToNumber);
    this.#date = dateToNumber;
  }

  #validate(date) {
    ReservationDateValidation.validateNumber(date);
    ReservationDateValidation.validateUnderAndOver(date);
  }

  #getDate() {
    const index = this.#date % DAYS.length;
    const day = DAYS[index];
    return day;
  }

  /**
   * 해당 요일 이벤트 혜택 시작 문구 반환
   * @returns {string} dateString
   */
  makeDateString() {
    return `12월 ${this.#date}일에 우테코 식장에서 받을 이벤트 혜택 미리 보기!`;
  }

  /**
   * 크리스마스 디데이 할인 금액 출력
   * @returns {number} christmasDiscount
   */
  calculateChristmasDiscount() {
    if (this.#date <= CHRISTMAS) return (this.#date - START_DAY) * 100 + CHRISTMAS_BASE_DISCOUNT;
    return 0;
  }

  /**
   * 주말 여부 확인
   * @returns {boolean} isWeekend
   */
  isWeekend() {
    const day = this.#getDate();
    if (day === DAYS[1] || day === DAYS[2]) return true;
    return false;
  }

  /**
   * 평일 여부 확인
   * @returns {boolean} isWeekday
   */
  isWeekday() {
    const day = this.#getDate();
    if (!(day === DAYS[1]) && !(day === DAYS[2])) return true;
    return false;
  }

  /**
   * 해당 요일이 스페셜 할인이 포함되는 요일인지 확인
   * @returns {boolean} isSpecialDiscount
   */
  isSpecialDiscount() {
    return SPECIAL_DISCOUNT.includes(this.#date);
  }
}

export default ReservationDate;
