/**
 * Observable implementation that allows multiple observers to watch values.
 *
 * @public
 */
export class Subject<T> {
  private subscriptions: ((value: T) => void)[] = [];
  private value: T | undefined;

  constructor(private defaultValue?: T) {
    this.value = defaultValue;
  }

  /**
   * Sends a value to all Subject observers.
   *
   * @param value - Value to send.
   */
  next(value: T): void {
    this.value = value;
    this.subscriptions.forEach(subscription => subscription(value));
  }

  /**
   * Subscribes to subject updates.
   *
   * @param subscription - Callback that will receive Subject values.
   * @returns Unsubscribe function.
   */
  subscribe(subscription: (value: T) => void): () => void {
    this.subscriptions.push(subscription);

    if (this.defaultValue !== undefined) {
      subscription(this.value as T);
    }

    return () => {
      const index = this.subscriptions.indexOf(subscription);
      this.subscriptions.splice(index, 1);
    };
  }
}
