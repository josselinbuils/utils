import { Subject } from '.';

describe('Subject', () => {
  it('should send values to multiple subscriptions', () => {
    const subject = new Subject();
    const subscription1 = jest.fn();
    const subscription2 = jest.fn();
    const value = 'hello';

    subject.subscribe(subscription1);
    subject.subscribe(subscription2);
    subject.next(value);

    expect(subscription1).toHaveBeenLastCalledWith(value);
    expect(subscription2).toHaveBeenLastCalledWith(value);
  });

  it('should send the default value when an subscription subscribes', () => {
    const defaultValue = 'hello';
    const subject = new Subject(defaultValue);
    const subscription = jest.fn();

    subject.subscribe(subscription);

    expect(subscription).toHaveBeenCalledWith(defaultValue);
  });

  it('should send the last value when an subscription subscribes', () => {
    const defaultValue = 'hello';
    const subject = new Subject(defaultValue);
    const subscription = jest.fn();
    const value = 'world';

    subject.next(value);
    subject.subscribe(subscription);

    expect(subscription).toHaveBeenCalledWith(value);
  });

  it('should allow subscriptions to unsubscribe', () => {
    const subject = new Subject<string>();
    const subscription = jest.fn();
    const value = 'hello';
    const unsubscribe = subject.subscribe(subscription);
    unsubscribe();

    subject.next(value);

    expect(subscription).not.toHaveBeenCalled();
  });
});
