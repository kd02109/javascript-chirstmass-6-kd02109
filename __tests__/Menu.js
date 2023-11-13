import Menu from '../src/Menu.js';
import CustomError from '../src/error/CustomError.js';
import { ERROR_MESSAGE } from '../src/constants/message.js';

describe('Menu Class 테스트 실행', () => {
  // given
  test.each([
    '티본스테이크-1바비큐립-1,초코케이크-2,제로콜라-1',
    '티본스테이크-1 바비큐립-1 초코케이크-2 제로콜라-1',
    '티본0스테이크-1, 바비d큐립-1, 초코케a이크-2, 제로콜라-1',
  ])('부정확한 주문을 확인하는지 테스트 합니다.', (input) => {
    // when then
    expect(() => new Menu(input)).toThrow(new CustomError(ERROR_MESSAGE.order));
  });

  // given
  test.each([
    '티본스테이크-0,바비큐립-0,초코케이크-0,제로콜라-0',
    '티본스테이크-15,바비큐립-5,초코케이크-20,제로콜라-1',
    '티본스테이크-21,바비큐립-0,초코케이크-0,제로콜라-0',
  ])('주문 메뉴의 총합이 0이거나 20을 초과한 경우를 확인합니다.', (input) => {
    // when then
    expect(() => new Menu(input)).toThrow(new CustomError(ERROR_MESSAGE.moreThan20));
  });

  // given
  test.each([
    '티본스테이크-1,티본스테이크-1,초코케이크-0,제로콜라-0',
    '티본스테이크-1,초코케이크-5,초코케이크-3,제로콜라-1',
    '제로콜라-3,바비큐립-0,초코케이크-0,제로콜라-2',
  ])('주문 메뉴에 중복이 있는지 확인합니다.', (input) => {
    // when then
    expect(() => new Menu(input)).toThrow(new CustomError(ERROR_MESSAGE.order));
  });
});
