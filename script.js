//your JS code here. If required.
// Declare a variable to store the output
let output = "";

// Loop through the numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  // Check if the number is divisible by both 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    // Append "FizzBuzz" to the output
    output += "FizzBuzz\n";
  }
  // Check if the number is divisible by 3
  else if (i % 3 === 0) {
    // Append "Fizz" to the output
    output += "Fizz\n";
  }
  // Check if the number is divisible by 5
  else if (i % 5 === 0) {
    // Append "Buzz" to the output
    output += "Buzz\n";
  }
  // Otherwise, append the number itself to the output
  else {
    output += i + "\n";
  }
}

// Display the output using alert
alert(output);
