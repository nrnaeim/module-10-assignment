//Question 1 answer
document.querySelectorAll(".inputWrapper input").forEach((inputField) => {
  inputField.addEventListener("input", (event) => {
    const id = event.target.id;
    const targetValue = event.target.value;
    if (id === "questionOneInput") {
      document.querySelector("#questionOneResult").value =
        countVowels(targetValue);
    } else if (id === "questionTwoInput") {
      document.querySelector("#questionTwoAnswer").value =
        sortNumbers(targetValue).join(" ");
    } else if (id === "questionThreeInput") {
      document.querySelector("#questionThreeResult").value =
        reverseString(targetValue);
    }
  });
});

//Question 1 Answer countVowels
function countVowels(targetValue) {
  const vowelsArray = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < targetValue.length; i++) {
    let char = targetValue[i].toLowerCase();
    if (vowelsArray.includes(char)) {
      count++;
    }
  }
  return count;
}

//Question 2 Answer sortNumbers
function sortNumbers(targetValue) {
  const inputArray = targetValue.split(" ");
  const numArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    const parsedNum = parseInt(inputArray[i]);
    if (!Number.isNaN(parsedNum)) {
      numArray.push(inputArray[i]);
    }
  }
  return numArray.sort((a, b) => a - b);
}

//Question 3 Answer reverseString
function reverseString(targetValue) {
  let reverseString = "";
  for (let i = targetValue.length - 1; i >= 0; i--) {
    reverseString += targetValue[i];
  }
  return reverseString;
}
