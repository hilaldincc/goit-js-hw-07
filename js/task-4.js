const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Sayfanın yenilenmesini engeller.

  const formElement = event.currentTarget;
  const email = formElement.elements.email.value.trim();
  const password = formElement.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData); // Konsola yazdır
  formElement.reset(); // Formu temizle
});
