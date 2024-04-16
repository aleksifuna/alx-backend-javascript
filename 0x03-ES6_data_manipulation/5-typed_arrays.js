export default function createInt8TypedArray(length, position, value) {
  // creates and returns a new ArrayBuffer with an int8 value at aspecific position

  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
