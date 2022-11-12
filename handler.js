
// CODELAB: Add feature detection here.
const notSupported = document.getElementById('notSupported');
notSupported.classList.toggle('hidden', 'serial' in navigator);



// document.querySelector('button').addEventListener('click', async () => {
//   // Prompt user to select any serial port.
//   const port = await navigator.serial.requestPort();
// });

// // Prompt user to select any serial port.
// const port = await navigator.serial.requestPort();

// // Wait for the serial port to open.
// await port.open({ baudRate: 115200 });




// const textDecoder = new TextDecoderStream();
// const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
// const reader = textDecoder.readable.getReader();

// // Listen to data coming from the serial device.
// while (true) {
//   const { value, done } = await reader.read();
//   if (done) {
//     // Allow the serial port to be closed later.
//     reader.releaseLock();
//     break;
//   }
//   // value is a string.
//   console.log(value);
// }