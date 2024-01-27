// Password Checker
let userPassword = prompt("Enter your password: ");
let correctPassword = "12345";
while (userPassword !== correctPassword) {
  console.log("Try Again");
  userPassword = prompt("Enter your password: ");
}
console.log("Correct!!");

// Find Longest country name

let arr = ["Australia", "Germany", "United States of America"];
function findLongest(countryNames) {
  let longest = countryNames[0];
  for (let i = 1; i < countryNames.length; i++) {
    if (longest.length < countryNames[i].length) {
      longest = countryNames[i];
    }
  }
  return longest;
}
console.log(findLongest(arr));

// Fetching user info and checking it

async function getUsergitHub() {
  const response = await fetch("https://api.github.com/users/SandroAptsiauri");
  const data = await response.json();
  if (response.status === 200) {
    throw new Error("TypeError got caught");
  }
}
try {
  getUsergitHub();
} catch (error) {
  console.log(error);
}

// Rotate Array: Write a function that rotates an array of n elements to the right by k steps.

let array = [1, 2, 3, 4, 5, 6, 7];
function rotateArray(arr, k) {
  for (let i = 0; i < k; i++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
  }
  return arr;
}
console.log(rotateArray(array, 2));

// Find Missing Number

let array = [1, 2, 4, 6];
function missingNumber(arr) {
  let missing = [];
  for (let i = 0; (i = arr.length); i++) {
    if (arr.indexOf([i]) === -1) {
      missing.push([i]);
    }
  }
  return missing;
}
console.log(missingNumber(array));

// callback functions

function anything() {
  return new Promise((resolve) => {
    resolve("succes");
  });
}
setTimeout(() => {
  anything().then((response) => console.log(response));
}, 2000);
