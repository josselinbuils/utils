/**
 * Promise wrapper that allows to manipulate it more easily by making `resolve`
 * and `reject` accessible outside the usual callback.
 *
 * @public
 */
export class Deferred<T> {
  promise: Promise<T>;
  /**
   * Rejects the promise.
   */
  reject!: (...args: any[]) => void;
  /**
   * Resolves the promise.
   */
  resolve!: (...args: any[]) => void;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
