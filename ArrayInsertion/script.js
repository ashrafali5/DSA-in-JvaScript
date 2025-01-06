// let data = [34, 53, 62, 72, 92, 46, 83, 38];
// let newEl = 99;
// let position = 4;

// there are two possible methodes

// for (let i = data.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     data[i + 1] = data[i];
//     if (i == position) {
//       data[i] = newEl;
//     }
//   }
// }

// for (let i = data.length - 1; i >= position; i--) {
//   data[i + 1] = data[i];
//   if (i == position) {
//     data[i] = newEl;
//   }
// }

// console.log(data);

function insertElement() {
  let data = [34, 53, 62, 72, 92, 46, 83, 38];
  let newEl = document.getElementById("newElement").value;
  newEl = parseInt(newEl);
  let position = document.getElementById("position").value;
  for (let i = data.length - 1; i >= position; i--) {
    data[i + 1] = data[i];
    if (i == position) {
      data[i] = newEl;
    }
  }
  console.log(data);
}
