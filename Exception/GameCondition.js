import { ERROR } from '../core/Constants';

import ErrorCase from './ErrorCase';

class GameCondition extends ErrorCase {
  #inputValue;
  constructor(value) {
    super();
    this.#inputValue = value;
  }

  checkAllException() {
    if (!(this.checkOneOrTwo() && this.checkLength())) {
      throw ERROR.INVALID_NUMBER;
    }
  }

  checkOneOrTwo() {
    return this.changeTypeForNum() === 1 || this.changeTypeForNum() === 2;
  }

  checkLength() {
    return this.#inputValue.length === 1;
  }

  changeTypeForNum() {
    return Number(this.#inputValue);
  }
}

export default GameCondition;
