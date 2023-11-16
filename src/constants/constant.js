const FOOD = Object.freeze({
  초코케이크: '초코케이크',
  아이스크림: '아이스크림',
  양송이수프: '양송이수프',
  타파스: '타파스',
  시저샐러드: '시저샐러드',
  티본스테이크: '티본스테이크',
  바비큐립: '바비큐립',
  해산물파스타: '해산물파스타',
  크리스마스파스타: '크리스마스파스타',
  제로콜라: '제로콜라',
  레드와인: '레드와인',
  샴페인: '샴페인',
});

const PRICE = Object.freeze({
  [FOOD.양송이수프]: 6000,
  [FOOD.타파스]: 5500,
  [FOOD.시저샐러드]: 8000,
  [FOOD.티본스테이크]: 55000,
  [FOOD.바비큐립]: 54000,
  [FOOD.해산물파스타]: 35000,
  [FOOD.크리스마스파스타]: 25000,
  [FOOD.초코케이크]: 15000,
  [FOOD.아이스크림]: 5000,
  [FOOD.제로콜라]: 3000,
  [FOOD.레드와인]: 60000,
  [FOOD.샴페인]: 25000,
});

const APPETIZER = Object.freeze({
  [FOOD.양송이수프]: 0,
  [FOOD.타파스]: 0,
  [FOOD.시저샐러드]: 0,
});

const MAIN = Object.freeze({
  [FOOD.티본스테이크]: 0,
  [FOOD.바비큐립]: 0,
  [FOOD.해산물파스타]: 0,
  [FOOD.크리스마스파스타]: 0,
});

const DESSERT = Object.freeze({
  [FOOD.초코케이크]: 0,
  [FOOD.아이스크림]: 0,
});

const BEVERAGE = Object.freeze({
  [FOOD.제로콜라]: 0,
  [FOOD.레드와인]: 0,
  [FOOD.샴페인]: 0,
});

const DAY_CONSTANT = Object.freeze({
  days: Object.freeze(['목', '금', '토', '일', '월', '화', '수']),
  specialDiscountDays: Object.freeze([3, 10, 17, 24, 25, 31]),
  christmas: 25,
  startDay: 1,
  endDay: 31,
});

const PRICE_CONSTANT = Object.freeze({
  baseDiscountPrice: 0,
  christmasBaseDiscountPrice: 1000,
  daysDiscountPrice: 2023,
  presentedAmountPrice: 120000,
  specialDicountPrice: 1000,
});

const COUNT_CONSTANT = Object.freeze({
  numberOfMinmun: 1,
  numberOfMaximun: 20,
  numberOfGift: 1,
});

const BEDGE = Object.freeze({
  star: Object.freeze(['별', 5000]),
  tree: Object.freeze(['트리', 10000]),
  santa: Object.freeze(['산타', 20000]),
});

const BENEFIT_MESSAGE = Object.freeze({
  christmas: ['크리스마스 디데이 할인: ', 'calculateChristmasDayEvent'],
  weekday: ['평일 할인: ', 'calculateWeekdayEvent'],
  weekend: ['주말 할인: ', 'calculateWeekendEvent'],
  special: ['특별 할인: ', 'calculateSpecial'],
  gift: ['증정 이벤트: ', 'calculateGiftEvent'],
});

export const CONSTANT_OBJ = {
  FOOD,
  PRICE,
  MAIN,
  APPETIZER,
  DESSERT,
  BEVERAGE,
  DAY_CONSTANT,
  PRICE_CONSTANT,
  COUNT_CONSTANT,
  BEDGE,
  BENEFIT_MESSAGE,
};

export {
  FOOD,
  PRICE,
  MAIN,
  APPETIZER,
  DESSERT,
  BEVERAGE,
  DAY_CONSTANT,
  PRICE_CONSTANT,
  COUNT_CONSTANT,
  BEDGE,
  BENEFIT_MESSAGE,
};
