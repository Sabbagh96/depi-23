function convertValue() {
  var dollar = document.getElementById("dollar").value;
  var result = document.getElementById("result");

  if (dollar == "") {
    result.innerHTML = "Enter Data";
  } else if (isNaN(dollar)) {
    result.innerHTML = "Enter number not text";
  } else if (dollar < 0) {
    result.innerHTML = "Enter positive number";
  } else if (dollar == 0) {
    result.innerHTML = "Enter number rather than 0";
  } else {
    result.innerHTML = dollar * 50 + " Egyptian pound";
  }
  return false;
}
