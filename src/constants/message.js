const OUTPUT_VIEW_MESSAGE = Object.freeze({
  date: '12월 중 식당 예상 방문 날짜는 언제인가요?\n',
  menu: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
});

const INPUT_VIEW_MESSAGE = Object.freeze({
  hello: '안녕하세요! 우테코 식장 12월 이벤트 플래너입니다.',
  makeDateEvent: (day) => `12월 ${day}일에 우테코 식장에서 받을 이벤트 혜택 미리 보기!\n`,
  menu: '<주문 메뉴>',
  totalPrice: '<할인 전 총주문 금액>',
  giftMenu: '<증정 메뉴>',
  benefit: '<혜택 내역>',
  totalBenefitAmount: '<총혜택 금액>',
  afterDiscount: '<할인 후 예상 결제 금액>',
  bedge: '<12월 이벤트 배지>',
  won: '원',
  none: '없음',
  blank: '',
});

const BEDGE = Object.freeze({
  star: '별',
  tree: '트리',
  santa: '산타',
});

const ERROR_MESSAGE = Object.freeze({
  date: '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  moreThan20: '총 주문 메뉴의 개수는 20개가 넘어가서는 안됩니다.',
  order: '유효하지 않은 주문입니다. 다시 입력해 주세요',
});

export const MESSAGE = { OUTPUT_VIEW_MESSAGE, INPUT_VIEW_MESSAGE, BEDGE, ERROR_MESSAGE };
export { OUTPUT_VIEW_MESSAGE, INPUT_VIEW_MESSAGE, BEDGE, ERROR_MESSAGE };