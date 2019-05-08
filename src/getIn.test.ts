import { getIn } from '.';

describe('getIn', () => {
  it('should provide nested value', () => {
    expect(getIn({ key: { values: [1] } }, 'key.values[0]')).toEqual(1);
  });

  it('should return undefined as value does not exist', () => {
    expect(getIn({}, 'key.key.key')).toEqual(undefined);
  });

  it('should return default value as value does not exist', () => {
    expect(getIn({}, 'key.key.key', true)).toEqual(true);
  });
});
