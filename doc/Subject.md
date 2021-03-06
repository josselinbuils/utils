<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[utils](../README.md) > [API Documentation](./README.md) > Subject

# Subject

Observable implementation that allows multiple observers to watch values.

```typescript
class Subject<T>
```

## Constructor

```typescript
constructor(defaultValue?: T | undefined)
```

| Parameter    | Type            | Description                                                                                                                                                                                                                                                                    |
| ------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| defaultValue | `T ǀ undefined` | Value to send by default to new subscribers.If a default value was provided and a new value is sent using next, the new value will become the default value.If no default value is provided, nothing will be sent to new subscribers, even if a new value is sent using next . |

## Methods

| Method                                | Description                             |
| ------------------------------------- | --------------------------------------- |
| [next](./Subject.next_1.md)           | Sends a value to all Subject observers. |
| [subscribe](./Subject.subscribe_1.md) | Subscribes to subject updates.          |

## Example

```js
import { Subject } from '@josselinbuils/utils/Subject';

const subject = new Subject();
let value = 'initialValue';

const unsubscribe = subject.subscribe(newValue => (value = newValue));

subject.next('Hello');
// value: Hello

subject.next('World');
// value: World

unsubscribe();
subject.next('WAZAAAA');
// value: World
```
