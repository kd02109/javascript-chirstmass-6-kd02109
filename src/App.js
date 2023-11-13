import Menu from './Menu.js';
import ReservationDate from './ReservationDate.js';
import OutputView from './view/OutputView.js';
import InputView from './view/InputView.js';
import { OUTPUT_VIEW_MESSAGE, INPUT_VIEW_MESSAGE } from './constants/message.js';

class App {
  #menu;

  #reservationDate;

  async run() {
    OutputView.printMessage(INPUT_VIEW_MESSAGE.hello);
    await this.#initReservationDate();
    await this.#initMenu();
    OutputView.printMessage(this.#reservationDate.makeDateString());
  }

  async #initReservationDate() {
    while (true) {
      try {
        const day = await InputView.readDate(OUTPUT_VIEW_MESSAGE.date);
        this.#reservationDate = new ReservationDate(day);
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
      } catch (e) {
        OutputView.printMessage(e.message);
      }
    }
  }
}

export default App;
