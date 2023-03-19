

function validateInput() {
    const inputField = document.getElementById("inputField");
    const errorMessage = document.getElementById("errorMessage");
  
    if (inputField.value.trim() === "") {
      errorMessage.textContent = "Error: Input field cannot be empty";
    } else {
      errorMessage.textContent = "";
    }
  }