const isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
};

document.getElementById("submit").addEventListener("click", function() {
  const inputValue = document.getElementById("nInput").value.trim();
  const outputDiv = document.getElementById("output");

  if (inputValue === "") {
    outputDiv.textContent = "Please enter a number.";
  } else {
    const number = parseInt(inputValue);
    if (!isNaN(number)) {
      const result = isPowerOfTwo(number);
      outputDiv.textContent = result;
    } else {
      outputDiv.textContent = "Invalid input. Please enter a valid number.";
    }
  }
});
