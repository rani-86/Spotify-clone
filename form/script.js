const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");
const email = document.getElementById("email");
const form = document.querySelector("form");

togglePassword.addEventListener("click", () => {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent real submission

  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  if (!emailVal || !passwordVal) {
    alert("Please enter both email/username and password.");
    return;
  }

  if (passwordVal.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  // Simulate login success
  alert("Logged in successfully! (Fake Login)");
});
