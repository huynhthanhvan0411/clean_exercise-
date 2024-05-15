// Sử dụng async/await để tránh callback hell và làm code dễ đọc

// getData(function (a) {
//   parseData(a, function (b) {
//     processData(b, function (c) {
//       displayData(c, function (d) {
//         console.log("Done");
//       });
//     });
//   });
// });
//clean code 
async function main() {
  try {
    const a = await getData();
    const b = await parseData(a);
    const c = await processData(b);
    const d = await displayData(c);
    console.log("Done");
  } catch (error) {
    console.error(error);
  }
}

main();
