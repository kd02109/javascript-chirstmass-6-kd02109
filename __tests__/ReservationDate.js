import ReservationDate from '../src/ReservationDate.js';
import CustomError from '../src/error/CustomError.js';
import { ERROR_MESSAGE } from '../src/constants/message.js';

describe('예약 요일을 관리하는 Reservation Date class를 테스트합니다.', () => {
  // given
  test.each(['asd', 'test', '13th', '십삼일'])('요일 입력값으로 문자가 들어왔을 경우를 테스트합니다.', (input) => {
    // when then
    expect(() => new ReservationDate(input)).toThrow(new CustomError(ERROR_MESSAGE.date));
  });

  // given
  test.each(['0', '-1', '32'])('요일 입력값으로 1미만, 31초과의 수가 들어왔을 경우를 테스트합니다.', (input) => {
    // when then
    expect(() => new ReservationDate(input)).toThrow(new CustomError(ERROR_MESSAGE.date));
  });

  // given
  test.each([[['1', false]], [['3', true]], [['25', true]], [['29', false]]])(
    '특별할인에 속하는 날인지를 정확히 확인하는지 테스트합니다.',
    ([date, result]) => {
      // when
      const reservationDate = new ReservationDate(date);

      // then
      expect(reservationDate.isSpecialDiscount()).toBe(result);
    },
  );

  // given
  test.each([[['1', 1000]], [['3', 1200]], [['25', 3400]], [['18', 2700]], [['31', 0]]])(
    '크리스마스 디데이 할인 금액이 정확히 계산되는지 확인합니다.',
    ([date, result]) => {
      // when
      const reservationDate = new ReservationDate(date);

      // then
      expect(reservationDate.calculateChristmasDiscount()).toBe(result);
    },
  );

  // given
  test.each([[['3', true]], [['18', true]], [['28', true]], [['13', true]], [['15', false]]])(
    '평일 할인을 하는 요일인지 확인합니다.',
    ([date, result]) => {
      // when
      const reservationDate = new ReservationDate(date);

      // then
      expect(reservationDate.isWeekday()).toBe(result);
    },
  );

  // given
  test.each([[['7', false]], [['13', false]], [['19', false]], [['29', true]], [['2', true]]])(
    '주말 할인을 하는 요일인지 확인합니다.',
    ([date, result]) => {
      // when
      const reservationDate = new ReservationDate(date);

      // then
      expect(reservationDate.isWeekend()).toBe(result);
    },
  );

  // given
  test.each([
    [['7', '12월 7일에 우테코 식장에서 받을 이벤트 혜택 미리 보기!']],
    [['13', '12월 13일에 우테코 식장에서 받을 이벤트 혜택 미리 보기!']],
    [['19', '12월 19일에 우테코 식장에서 받을 이벤트 혜택 미리 보기!']],
    [['29', '12월 29일에 우테코 식장에서 받을 이벤트 혜택 미리 보기!']],
    [['2', '12월 2일에 우테코 식장에서 받을 이벤트 혜택 미리 보기!']],
  ])('입력 요일에 따라 문장을 정상적으로 생성하는지 확인', ([date, result]) => {
    // when
    const reservationDate = new ReservationDate(date);

    // then
    expect(reservationDate.makeDateString()).toBe(result);
  });
});
