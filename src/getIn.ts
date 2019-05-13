/**
 * Allows to get a value deeply in an object without throwing an exception if
 * the path does not exist.
 *
 * @param obj - Object to retrieve the value.
 * @param key - Path of the value.
 * @param defaultValue - Default value.
 * @returns Value if found, default value or `undefined` otherwise.
 *
 * @example
 * ```js
 * const obj = {
 *   key: {
 *     values: [1, 2, 3]
 *   }
 * };
 *
 * // Returns 2
 * getIn(obj, 'key.values[1]');
 *
 * // Returns undefined
 * getIn(obj, 'key.values[100]');
 *
 * // Returns -1
 * getIn(obj, 'key.values[100]', -1);
 * ```
 *
 * @public
 */
export function getIn(obj: any, key: string, defaultValue?: any): any {
  const path = key.match(/[^.[\]]+/g) as string[];

  for (let i = 0; obj && i < path.length; i++) {
    obj = obj[path[i]];
  }

  return obj !== undefined ? obj : defaultValue;
}
