const OUTPUT_VIEW_MESSAGE = Object.freeze({
  date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  menu: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

const INPUT_VIEW_MESSAGE = Object.freeze({
  hello: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  menu: '\n<주문 메뉴>',
  totalPrice: '\n<할인 전 총주문 금액>',
  giftMenu: '\n<증정 메뉴>',
  benefit: '\n<혜택 내역>',
  totalBenefitAmount: '\n<총혜택 금액>',
  afterDiscount: '\n<할인 후 예상 결제 금액>',
  bedge: '\n<12월 이벤트 배지>',
  won: '원',
  count: '개',
  none: '없음',
});

const ERROR_MESSAGE = Object.freeze({
  date: '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  moreThan20: '총 주문 메뉴의 개수는 20개가 넘어가서는 안됩니다.',
  order: '유효하지 않은 주문입니다. 다시 입력해 주세요.',
  onlyBeverage: '음료만 주문하는 것은 불가합니다.',
});

export const MESSAGE = { OUTPUT_VIEW_MESSAGE, INPUT_VIEW_MESSAGE, ERROR_MESSAGE };
export { OUTPUT_VIEW_MESSAGE, INPUT_VIEW_MESSAGE, ERROR_MESSAGE };
