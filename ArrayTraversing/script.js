let data = [32, 54, 74, 21, 65, 34, 75, 98, 34];

// for (let i = 0; i < data.length; i++) {
//   document.write(` Array ${i} is ${data[i]} <br><br>`);
// }
// let x = 5;
// document.write(data[x]);

// ______Get Input Elements______
function getElement() {
  let el = document.getElementById("input").value;
  if (el < data.length && typeof parseInt === "number") {
    alert(data[el]);
  } else {
    alert("Enter Number 0 - 8");
  }
}
