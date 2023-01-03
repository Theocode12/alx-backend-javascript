export default function cleanSet(myset, startString) {
  const result = [];
  for (const key of myset) {
    if (key.slice(0, startString.length) === startString && startString.length !== 0) {
      result.push(key.slice(startString.length));
    }
  }
  return result.join('-');
}
