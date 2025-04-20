// const email = document.getElementById("mail");
// email.addEventListener("input", (event) => {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("i am expecting an email address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

const email1= document.getElementById("mail1");

email1.addEventListener("input", (event) => {
  // Validate with the built-in constraints
  email1.setCustomValidity("");
  console.log(email1.validity)
  if (!email1.validity.valid) {
    return;
  }

  // Extend with a custom constraints
  if (!email1.value.endsWith("@example.com")) {
    email1.setCustomValidity("Please enter an email address of @example.com");
  }
});