// Add event listener for keypress event on the document
document.addEventListener("keypress", function(event) {
  // Check if the pressed key is Enter
  if (event.key === "Enter") {
    // Call the handleSubmit function
    handleSubmit();
  }
});

// Add click event listener for the submit button
document.getElementById("submit").addEventListener("click", function() {
  // Call the handleSubmit function
  handleSubmit();
});

// Define handleSubmit function to handle the form submission
function handleSubmit() {
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
}

// Define the isPowerOfTwo function
const isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
};
