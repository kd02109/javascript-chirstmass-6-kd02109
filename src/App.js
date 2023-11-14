import Menu from './Menu.js';
import ReservationDate from './ReservationDate.js';
import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';
import Util from './util/Util.js';
import Discount from './Discount.js';
import { OUTPUT_VIEW_MESSAGE, INPUT_VIEW_MESSAGE, BENEFIT_MESSAGE } from './constants/message.js';
import { FOOD, GIFT_NUMBER } from './constants/constant.js';

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

  #previewEventBenefits() {
    OutputView.printMessage(this.#reservationDate.makeDateString());
    this.#calculateMenu();
    this.#calculateTotalPriceBeforeDiscount();
    this.#calculateGift();
    this.#calculateDiscoount();
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
      OutputView.printMessage(`${FOOD.샴페인} ${GIFT_NUMBER}${INPUT_VIEW_MESSAGE.count}`);
      return;
    }
    OutputView.printMessage(INPUT_VIEW_MESSAGE.none);
  }

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
}

export default App;
