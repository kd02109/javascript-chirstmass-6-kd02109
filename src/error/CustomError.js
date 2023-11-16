class CustomError extends Error {
  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(`[ERROR] ${message}\n`);
  }

  /**
   * 커스텀 에러를 강제적으로 발생시킵니다.
   * @param {string} message
   */
  static inputView(message) {
    throw new CustomError(message);
  }
}

export default CustomError;
