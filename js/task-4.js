const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const passworld = form.elements.passworld.value.trim();

  if (email === "" || passworld === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email,
    passworld,
  };

  console.log(formData);

  form.reset();
});
