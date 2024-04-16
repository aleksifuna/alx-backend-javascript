export default function updateUniqueItems(mapObj) {
  if (!(mapObj instanceof Map)) {
    throw new Error('Cannot process');
  }
  mapObj.forEach((value, key, map) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
  return mapObj;
}
