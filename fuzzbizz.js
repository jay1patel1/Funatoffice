for (let index = 0; index < 100; index++) {
  let d3 = index % 3 === 0;
  let d5 = index % 5 === 0;

  if (d3 && d5) {
    console.log(`${index} - fuzzbizz`)
    return;
  } else if (d3) {
    console.log (`${index} - fuzz`)
    return;
  } else if (d5) {
  console.log (`${index} - bizz`)
  return;
}