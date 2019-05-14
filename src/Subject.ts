/**
 * Observable implementation that allows multiple observers to watch values.
 */
export class Subject<T> {
  private readonly subscriptions: ((value: T | undefined) => void)[] = [];
  private value: T | undefined;

  /**
   * @param defaultValue - Value to send by default to new subscribers.
   *
   * If a default value was provided and a new value is sent using next, the new
   * value will become the default value.
   *
   * If no default value is provided, nothing will be sent to new subscribers,
   * even if a new value is sent using next .
   */
  constructor(private readonly defaultValue?: T) {
    this.value = defaultValue;
  }

  /**
   * Sends a value to all Subject observers.
   *
   * @param value - Value to send.
   */
  next(value?: T): void {
    this.value = value;
    this.subscriptions.forEach(subscription => subscription(value));
  }

  /**
   * Subscribes to subject updates.
   *
   * @param subscription - Callback that will receive Subject values.
   * @returns Unsubscribe function.
   */
  subscribe(subscription: (value: T | undefined) => void): () => void {
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
