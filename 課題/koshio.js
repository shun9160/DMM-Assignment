// Given the value what it needs

let username;
let userresult;

// Ask the name of user

username = prompt("お名前を教えて下さい。");

// Define 「名無し」 if user doesnot put anything for the quesiton

if (username === "") {
    username = "名無し";
}

//Refects the name user typed on screen for value

document.getElementById("name").innerHTML = username;

// Get 0 to 4 randomly

let rand = Math.floor( Math.random() * 5) ;

// Conditional branch

if (rand == 0) {
    userresult = "大吉";
}

if (rand == 1) {
  userresult = "中吉";
}
if (rand == 2) {
  userresult = "小吉";
}
if (rand == 3) {
  userresult = "吉";
}
if (rand == 4) {
  userresult = "凶";
}
document.getElementById("result").innerHTML = userresult;