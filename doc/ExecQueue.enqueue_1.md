<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[utils](../README.md) > [API Documentation](./README.md) > [ExecQueue](./ExecQueue.md) > enqueue

# enqueue

Pushes an asynchronous task in the exec queue.

```typescript
enqueue<T>(task: () => Promise<T>): Promise<T>
```

## Parameters

| Parameter | Type               | Description                                           |
| --------- | ------------------ | ----------------------------------------------------- |
| task      | `() => Promise<T>` | Function to be executed when previous tasks are done. |

## Returns

`Promise<T>`
