// 1
// const buf = Buffer.from('hello', 'utf16le');
// const uint16arr = new Uint16Array(
//   buf.buffer,
//   buf.byteOffset,
//   buf.length / Uint16Array.BYTES_PER_ELEMENT
// );
// console.log(uint16arr);


// 2
const buf = Buffer.from([1, 2, 3, 4]);
const uint32array = new Uint32Array(buf);

console.log(uint32array);
console.log(Uint32Array.BYTES_PER_ELEMENT);



