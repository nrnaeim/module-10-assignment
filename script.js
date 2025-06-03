//Question 1 answer
document.querySelectorAll(".inputWrapper input").forEach((inputField) => {
  inputField.addEventListener("input", (event) => {
    const id = event.target.id;
    const targetValue = event.target.value;
    if (id === "questionOneInput") {
      const resultInput = document.querySelector("#questionOneResult");
      if (targetValue !== "") {
        const result = `Number of vowels in "${targetValue}" is: ${countVowels(
          targetValue
        )}`;
        resultInput.value = result;
      } else {
        resultInput.value = "";
      }
    } else if (id === "questionTwoInput") {
      document.querySelector("#questionTwoAnswer").value =
        sortNumbers(targetValue).join(" ");
    } else if (id === "questionThreeInput") {
      document.querySelector("#questionThreeResult").value =
        reverseString(targetValue);
    } else if (id === "questionFourInput") {
      document.querySelector("#questionFourResult").value =
        getLastElement(targetValue);
    } else if (id === "questionFiveInput1" || id === "questionFiveInput2") {
      document.querySelector("#questionFiveResult").value =
        mergeArrays().join(" ");
    } else if (id === "questionSixInput") {
      document.querySelector("#questionSixResult").value =
        hasSpace(targetValue);
    } else if (id === "questionSevenInput") {
      document.querySelector("#questionSevenResult").value =
        isEmptyString(targetValue);
    } else if (id === "questionEightInput") {
      document.querySelector("#questionEightResult").value =
        removeNegativeNumbers(targetValue);
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

//Question 4 Answer getLastElement
function getLastElement(targetValue) {
  const array = targetValue.split(" ");
  const trimedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "") {
      trimedArray.push(array[i]);
    }
  }
  if (trimedArray.length === 0) {
    return "";
  } else {
    return trimedArray[trimedArray.length - 1];
  }
}

//Question 5 Answer  mergeArrays
function mergeArrays() {
  const input1 = document.querySelector("#questionFiveInput1").value;
  const input2 = document.querySelector("#questionFiveInput2").value;

  const array1 = formArray(input1);
  const array2 = formArray(input2);

  return array1.concat(array2);

  //destructur
  // return [...array1, ...array2];

  function formArray(string) {
    const tempArray = [];
    string.split(" ").forEach((el) => {
      if (el !== "") {
        tempArray.push(el);
      }
    });
    return tempArray;
  }
}

//Question 6 Answer  hasSpace
function hasSpace(targetValue) {
  for (let i = 0; i < targetValue.length; i++) {
    if (targetValue[i] === " ") {
      return true;
    }
  }
  return false;
}

//Question 7 Answer  isEmptyString
function isEmptyString(targetValue) {
  if (targetValue.length === 0) {
    return true;
  }
  return false;
}

//Question 8 Answer  removeNegativeNumbers
function removeNegativeNumbers(targetValue) {
  const valueArray = targetValue.trim().split(" ").map(Number);
  const trimmedArray = [];
  for (let i = 0; i < valueArray.length; i++) {
    if (valueArray[i] != "NaN" && valueArray[i] > -1) {
      trimmedArray.push(valueArray[i]);
    }
  }
  return trimmedArray.join(" ");
}
