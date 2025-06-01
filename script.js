//Question 1 answer
document
  .querySelector("#questionOneInput")
  .addEventListener("input", (event) => {
    document.querySelector("#questionOneAnswer").value = countVowels(event);
  });
//vowel count return function
function countVowels(event) {
  const str = event.target.value;
  const vowelsArray = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowelsArray.includes(char)) {
      count++;
    }
  }
  return count;
}

//Question 2 Answer
function sortNumbers(input) {
  const inputArray = input.split(" ");
  const numArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    const parsedNum = parseInt(inputArray[i]);

    if (!Number.isNaN(parsedNum)) {
      numArray.push(inputArray[i]);
    }
  }
  return numArray.sort((a, b) => a - b);
}

document
  .querySelector("#questionTwoInput")
  .addEventListener("input", (event) => {
    const inputvalues = event.target.value;
    document.querySelector("#questionTwoAnswer").value =
      sortNumbers(inputvalues).join(" ");
  });
