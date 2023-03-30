const incrementCount = document.getElementById("incrementBtn");

const totalCount = document.getElementById("counter");

var count = 0;

// Display initial count value
totalCount.innerHTML = count;


// Function to increment count
const handleIncrement = () => {
  count++;
	alert(count)
  totalCount.innerHTML =count;
};
incrementBtn.addEventListener("click", handleIncrement);