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

const DAYS = Object.freeze(['목', '금', '토', '일', '월', '화', '수']);
const SPECIAL_DISCOUNT = Object.freeze([3, 10, 17, 24, 25, 31]);
const CHRISTMAS = 25;
const START_DAY = 1;
const END_DAY = 31;

const CHRISTMAS_BASE_DISCOUNT = 1000;
const DAYS_DISCOUNT = 2023;

export const FOOD_OBJ = {
  FOOD,
  PRICE,
  MAIN,
  APPETIZER,
  DESSERT,
  BEVERAGE,
  DAYS,
  SPECIAL_DISCOUNT,
  CHRISTMAS_BASE_DISCOUNT,
  DAYS_DISCOUNT,
  CHRISTMAS,
  START_DAY,
  END_DAY,
};

export {
  FOOD,
  PRICE,
  MAIN,
  APPETIZER,
  DESSERT,
  BEVERAGE,
  DAYS,
  SPECIAL_DISCOUNT,
  DAYS_DISCOUNT,
  CHRISTMAS_BASE_DISCOUNT,
  CHRISTMAS,
  START_DAY,
  END_DAY,
};
