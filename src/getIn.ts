export function getIn(obj: any, key: string, defaultValue?: any) {
  const path = toPath(key);

  for (let i = 0; obj && i < path.length; i++) {
    obj = obj[path[i]];
  }

  return obj !== undefined ? obj : defaultValue;
}

function toPath(key: string) {
  const matches = key.match(/[^.[\]]+/g);

  if (matches === null) {
    throw new Error('Invalid key');
  }

  return matches.map(match => {
    const number = Number(match);
    return Number.isNaN(number) ? match : number;
  });
}
