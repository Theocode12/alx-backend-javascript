export default function cleanSet(myset, startString) {
  const result = [];
  for (const key of myset) {
    if (key.startsWith(startString) && startString.length !== 0) {
      const subString = key.slice(startString.length);
      if (subString && subString !== key) {
        result.push(subString);
      }
    }
  }
  return result.join('-');
}
