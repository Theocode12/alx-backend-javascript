export default function updateUniqueItems(mymap) {
  if (!mymap instanceof Map) throw Error('Cannot process')

  mymap.forEach((value, key, thisArg) => {
    if (value === 1) thisArg.set(key, 100);
  })
  return mymap
}
