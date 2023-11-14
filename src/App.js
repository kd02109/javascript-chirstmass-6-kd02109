import Menu from './Menu.js';
import ReservationDate from './ReservationDate.js';
import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';
import Util from './util/Util.js';
import { OUTPUT_VIEW_MESSAGE, INPUT_VIEW_MESSAGE } from './constants/message.js';
import { FOOD, GIFT_NUMBER } from './constants/constant.js';

class App {
  #menu;

  #reservationDate;

  async run() {
    OutputView.printMessage(INPUT_VIEW_MESSAGE.hello);
    await this.#initReservationDate();
    await this.#initMenu();

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
  }

  #calculateMenu() {
    const menu = this.#menu.calculateBuyingMenu();
    OutputView.printMessage(INPUT_VIEW_MESSAGE.menu);
    OutputView.printMenu(menu);
  }

  #calculateTotalPriceBeforeDiscount() {
    OutputView.printMessage(INPUT_VIEW_MESSAGE.totalPrice);
    const totalPrice = Util.chagePriceToString(this.#menu.getTotalPrice());
    OutputView.printMessage(`${totalPrice}${INPUT_VIEW_MESSAGE.won}`);
  }

  #calculateGift() {
    OutputView.printMessage(INPUT_VIEW_MESSAGE.giftMenu);
    if (this.#menu.isPresentedAmount()) {
      OutputView.printMessage(`${FOOD.샴페인} ${GIFT_NUMBER}${INPUT_VIEW_MESSAGE.count}`);
      return;
    }
    OutputView.printMessage(INPUT_VIEW_MESSAGE.none);
  }
}

export default App;
