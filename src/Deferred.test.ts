import { Deferred } from '.';

describe('Deferred', () => {
  it('should contain a promise', () => {
    const deferred = new Deferred();
    expect(deferred.promise).toBeInstanceOf(Promise);
  });

  it('should allow to resolve the promise', () => {
    const deferred = new Deferred();
    deferred.resolve(true);
    expect(deferred.promise).resolves.toEqual(true);
  });

  it('should allow to reject the promise', () => {
    const deferred = new Deferred();
    deferred.reject(new Error(':('));
    expect(deferred.promise).rejects.toThrow(':(');
  });
});
