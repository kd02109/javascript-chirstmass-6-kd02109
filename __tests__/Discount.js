import Menu from '../src/Menu.js';
import ReservationDate from '../src/ReservationDate.js';
import Discount from '../src/Discount.js';

describe('Discount Class 기능 검증 구현', () => {
  // given
  test.each([
    [['3', '타파스-1', 0]],
    [['25', '타파스-1,제로콜라-1,초코케이크-1', 3400]],
    [['10', '타파스-1,제로콜라-1', 0]],
    [['26', '티본스테이크-2', 0]],
    [['17', '해산물파스타-2, 레드와인-1, 아이스크림-2', 2600]],
  ])('크리스마스 할인을 정상적으로 계산하는지 Test', ([day, menu, result]) => {
    // when
    const food = new Menu(menu);
    const reservationDay = new ReservationDate(day);
    const discount = new Discount(food, reservationDay);

    // then
    expect(discount.calculateChristmasDayEvent()).toBe(result);
  });

  // given
  test.each([
    [['3', '아이스크림-1', 0]],
    [['3', '아이스크림-2', 4046]],
    [['4', '타파스-1,제로콜라-1,초코케이크-1,바비큐립-2', 2023]],
    [['5', '타파스-1,제로콜라-1,크리스마스파스타-1, 초코케이크-1', 2023]],
    [['6', '티본스테이크-2, 아이스크림-2', 4046]],
    [['7', '해산물파스타-1, 바비큐립-1, 레드와인-1, 아이스크림-2', 4046]],
    [['8', '해산물파스타-1, 바비큐립-1, 레드와인-1, 아이스크림-2', 0]],
    [['9', '해산물파스타-1, 바비큐립-1, 레드와인-1, 아이스크림-2', 0]],
  ])('평일 할인을 정상적으로 계산하는지 Test', ([day, menu, result]) => {
    // when
    const food = new Menu(menu);
    const reservationDay = new ReservationDate(day);
    const discount = new Discount(food, reservationDay);

    // then
    expect(discount.calculateWeekdayEvent()).toBe(result);
  });

  // given
  test.each([
    [['3', '아이스크림-2, 바비큐립-1', 0]],
    [['4', '타파스-1,제로콜라-1,초코케이크-1,바비큐립-2', 0]],
    [['5', '타파스-1,제로콜라-1,크리스마스파스타-1, 초코케이크-1', 0]],
    [['6', '티본스테이크-2, 아이스크림-2', 0]],
    [['7', '해산물파스타-1, 바비큐립-1, 레드와인-1, 아이스크림-2', 0]],
    [['8', '해산물파스타-1, 바비큐립-1, 레드와인-1, 아이스크림-2', 4046]],
    [['9', '해산물파스타-3, 레드와인-1, 아이스크림-2', 6069]],
    [['9', '레드와인-1, 아이스크림-2, 타파스-1', 0]],
  ])('주말 할인을 정상적으로 계산하는지 Test', ([day, menu, result]) => {
    // when
    const food = new Menu(menu);
    const reservationDay = new ReservationDate(day);
    const discount = new Discount(food, reservationDay);

    // then
    expect(discount.calculateWeekendEvent()).toBe(result);
  });

  // given
  test.each([
    [['3', '아이스크림-2, 바비큐립-1', 1000]],
    [['10', '타파스-1,제로콜라-1', 0]],
    [['17', '타파스-1,제로콜라-1,크리스마스파스타-1, 초코케이크-1', 1000]],
    [['15', '티본스테이크-2, 아이스크림-2', 0]],
    [['25', '해산물파스타-1, 바비큐립-1, 레드와인-1, 아이스크림-2', 1000]],
    [['23', '해산물파스타-1, 바비큐립-1, 레드와인-1, 아이스크림-2', 0]],
    [['24', '아이스크림-1', 0]],
    [['31', '레드와인-1, 아이스크림-2, 타파스-1', 1000]],
  ])('특별 할인을 정상적으로 계산하는지 Test', ([day, menu, result]) => {
    // when
    const food = new Menu(menu);
    const reservationDay = new ReservationDate(day);
    const discount = new Discount(food, reservationDay);

    // then
    expect(discount.calculateSpecial()).toBe(result);
  });

  // given
  test.each([
    [['3', '아이스크림-2, 바비큐립-1', 1000 + 4046 + 1200]],
    [['10', '타파스-1,제로콜라-1', 0]],
    [['17', '타파스-1,제로콜라-1,크리스마스파스타-1, 초코케이크-1', 1000 + 2600 + 2023]],
    [['15', '티본스테이크-2, 아이스크림-2', 25000 + 2400 + 4046]],
    [['25', '해산물파스타-1, 바비큐립-1, 레드와인-1, 아이스크림-2', 4046 + 3400 + 25000 + 1000]],
    [['23', '해산물파스타-1, 바비큐립-1, 레드와인-1, 아이스크림-2', 3200 + 4046 + 25000]],
    [['24', '아이스크림-1', 0]],
    [['31', '레드와인-1, 아이스크림-2, 타파스-1', 1000 + 4046]],
  ])('총 혜택 금액을 정확하게 계산하는지 Test', ([day, menu, result]) => {
    // when
    const food = new Menu(menu);
    const reservationDay = new ReservationDate(day);
    const discount = new Discount(food, reservationDay);

    // then
    expect(discount.calculateTotalBenefitPrice()).toBe(result);
  });

  // given
  test.each([
    [['3', '아이스크림-2, 바비큐립-1', 1000 + 4046 + 1200]],
    [['10', '타파스-1,제로콜라-1', 0]],
    [['17', '타파스-1,제로콜라-1,크리스마스파스타-1, 초코케이크-1', 1000 + 2600 + 2023]],
    [['15', '티본스테이크-2, 아이스크림-2', 2400 + 4046]],
    [['25', '해산물파스타-1, 바비큐립-1, 레드와인-1, 아이스크림-2', 4046 + 3400 + 1000]],
    [['23', '해산물파스타-1, 바비큐립-1, 레드와인-1, 아이스크림-2', 3200 + 4046]],
    [['24', '아이스크림-1', 0]],
    [['31', '레드와인-1, 아이스크림-2, 타파스-1', 1000 + 4046]],
  ])('총 할인 금액을 정확하게 계산하는지 Test', ([day, menu, result]) => {
    // when
    const food = new Menu(menu);
    const reservationDay = new ReservationDate(day);
    const discount = new Discount(food, reservationDay);

    // then
    expect(discount.calculateTotalDiscount()).toBe(result);
  });
});
