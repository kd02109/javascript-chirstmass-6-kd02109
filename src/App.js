import Menu from './Menu.js';
import ReservationDate from './ReservationDate.js';
import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';
import Util from './util/Util.js';
import Discount from './Discount.js';
import { OUTPUT_VIEW_MESSAGE, INPUT_VIEW_MESSAGE, BENEFIT_MESSAGE } from './constants/message.js';
import { FOOD, COUNT_CONSTANT } from './constants/constant.js';

class App {
  #menu;

  #reservationDate;

  #discount;

  async run() {
    OutputView.printMessage(INPUT_VIEW_MESSAGE.hello);

    await this.#initReservationDate();
    await this.#initMenu();
    this.#discount = new Discount(this.#menu, this.#reservationDate);

    this.#previewEventBenefits();
  }

  // init class
  async #initReservationDate() {
    while (true) {
      try {
        const day = await InputView.readDate(OUTPUT_VIEW_MESSAGE.date);
        this.#reservationDate = new ReservationDate(day);
        break;
      } catch (e) {
        OutputView.printMessage(e.message);
      }
    }
  }

  async #initMenu() {
    while (true) {
      try {
        const menu = await InputView.readDate(OUTPUT_VIEW_MESSAGE.menu);
        this.#menu = new Menu(menu);
        break;
      } catch (e) {
        OutputView.printMessage(e.message);
      }
    }
  }

  // show the preview event
  #previewEventBenefits() {
    OutputView.printMessage(this.#reservationDate.makeDateString());
    this.#calculateMenu();
    this.#calculateTotalPriceBeforeDiscount();
    this.#calculateGift();
    this.#calculateDiscoount();
    this.#calculateTotalBenefit();
    this.#calcultaeTotalPriceAfterDiscount();
    this.#calculateEventBedge();
  }

  #calculateMenu() {
    const menu = this.#menu.calculateBuyingMenu();
    OutputView.printMessage(INPUT_VIEW_MESSAGE.menu);
    OutputView.printMenu(menu);
  }

  #calculateTotalPriceBeforeDiscount() {
    OutputView.printMessage(INPUT_VIEW_MESSAGE.totalPrice);
    const totalPrice = Util.chagePriceToString(this.#menu.getTotalPrice());
    OutputView.printMessage(totalPrice);
  }

  #calculateGift() {
    OutputView.printMessage(INPUT_VIEW_MESSAGE.giftMenu);
    if (this.#menu.isPresentedAmount()) {
      OutputView.printMessage(`${FOOD.샴페인} ${COUNT_CONSTANT.numberOfGift}${INPUT_VIEW_MESSAGE.count}`);
      return;
    }
    OutputView.printMessage(INPUT_VIEW_MESSAGE.none);
  }

  // calculate all the benefit prices
  #calculateDiscoount() {
    OutputView.printMessage(INPUT_VIEW_MESSAGE.benefit);
    this.#isChristmasDayEvent();
    this.#isDaysEvent(this.#discount.calculateWeekdayEvent(), BENEFIT_MESSAGE.weekday);
    this.#isDaysEvent(this.#discount.calculateWeekendEvent(), BENEFIT_MESSAGE.weekend);
    this.#isSpecial();
    this.#isGiftEvent();
    if (!this.#discount.calculateTotalBenefitPrice()) OutputView.printMessage(INPUT_VIEW_MESSAGE.none);
  }

  #isChristmasDayEvent() {
    const christmasPrice = this.#discount.calculateChristmasDayEvent();
    if (christmasPrice) {
      const priceToString = Util.chagePriceToMinusString(christmasPrice);
      OutputView.printMessage(`${BENEFIT_MESSAGE.christmas}${priceToString}`);
    }
  }

  #isDaysEvent(discount, message) {
    if (discount) {
      const priceToString = Util.chagePriceToMinusString(discount);
      OutputView.printMessage(`${message}${priceToString}`);
    }
  }

  #isSpecial() {
    const specialPrice = this.#discount.calculateSpecial();
    if (specialPrice) {
      const priceToString = Util.chagePriceToMinusString(specialPrice);
      OutputView.printMessage(`${BENEFIT_MESSAGE.special}${priceToString}`);
    }
  }

  #isGiftEvent() {
    const giftPrice = this.#discount.calculateGiftEvent();
    if (giftPrice) {
      const priceToString = Util.chagePriceToMinusString(giftPrice);
      OutputView.printMessage(`${BENEFIT_MESSAGE.gift}${priceToString}`);
    }
  }

  // calculate total price afet calculating benefit and discount
  #calculateTotalBenefit() {
    OutputView.printMessage(INPUT_VIEW_MESSAGE.totalBenefitAmount);
    const totalBenefitPrice = this.#discount.calculateTotalBenefitPrice();
    if (totalBenefitPrice) {
      OutputView.printMessage(Util.chagePriceToMinusString(totalBenefitPrice));
      return;
    }
    OutputView.printMessage(INPUT_VIEW_MESSAGE.none);
  }

  #calcultaeTotalPriceAfterDiscount() {
    OutputView.printMessage(INPUT_VIEW_MESSAGE.afterDiscount);
    const totalPriceAfterDiscount = this.#menu.getTotalPrice() - this.#discount.calculateTotalDiscount();
    OutputView.printMessage(Util.chagePriceToString(totalPriceAfterDiscount));
  }

  #calculateEventBedge() {
    OutputView.printMessage(INPUT_VIEW_MESSAGE.bedge);
    const bedge = this.#discount.calculateBedge();
    OutputView.printMessage(bedge);
  }
}

export default App;
