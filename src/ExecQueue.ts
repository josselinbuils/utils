import { Deferred } from './Deferred';

/**
 * Allows executing asynchronous tasks synchronously.
 */
export class ExecQueue {
  private busy = false;
  private readonly queue: {
    deferred: Deferred<any>;
    task: () => Promise<any>;
  }[] = [];

  /**
   * Pushes an asynchronous task in the exec queue.
   *
   * @param task - Function to be executed when previous tasks are done.
   */
  async enqueue<T>(task: () => Promise<T>): Promise<T> {
    const deferred = new Deferred<T>();

    if (!this.busy) {
      this.exec(task, deferred);
    } else {
      this.queue.push({ deferred, task });
    }
    return deferred.promise;
  }

  /**
   * Makes a function synchronous by enqueuing its executions.
   *
   * @param func - Function to make synchronous.
   */
  makeSync<T extends (...args: any) => any>(func: T): T {
    return ((...args) => this.enqueue(() => func(...args))) as T;
  }

  private async exec<T>(
    task: () => Promise<T>,
    deferred: Deferred<T>
  ): Promise<void> {
    this.busy = true;

    try {
      deferred.resolve(await task());
    } catch (error) {
      console.error(error.stack || error.message);
    }

    const nextEntry = this.queue.shift();

    if (nextEntry !== undefined) {
      await this.exec(nextEntry.task, nextEntry.deferred);
    } else {
      this.busy = false;
    }
  }
}
