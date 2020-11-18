/**
 * Promise wrapper that allows to manipulate it more easily by making `resolve`
 * and `reject` accessible outside the usual callback.
 *
 * @example
 * ```js
 * import { Deferred } from '@josselinbuils/utils/Deferred';
 *
 * const deferred = new Deferred();
 * let value = 'initialValue';
 *
 * deferred.promise.then(newValue => (value = newValue));
 *
 * deferred.resolve('Hello');
 * // value: Hello
 * ```
 */
export class Deferred<T> {
  promise: Promise<T>;
  /**
   * Rejects the promise.
   */
  reject!: (reason?: any) => void;
  /**
   * Resolves the promise.
   */
  resolve!: (value?: T) => void;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
