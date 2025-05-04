document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = document.getElementById("myForm");
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorDiv = document.getElementById("errors");

  // Очищаем старые ошибки
  errorDiv.innerHTML = "";

  const errors = [];

  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

  if (!name || !nameRegex.test(name)) {
    errors.push("Имя должно содержать только английские буквы.");
  }

  if (!email || !emailRegex.test(email)) {
    errors.push("Введите корректный email.");
  }

  if (!password || !passwordRegex.test(password)) {
    errors.push(
      "Пароль должен быть не менее 8 символов и содержать буквы и цифры."
    );
  }

  if (password !== confirmPassword) {
    errors.push("Пароли не совпадают.");
  }

  if (errors.length > 0) {
    errorDiv.innerHTML = errors
      .map((msg) => `<p style="color:red;">${msg}</p>`)
      .join("");
  } else {
    alert("Форма успешно отправлена!");
    // Тут можно использовать form.submit() или отправку через fetch/AJAX
    form.reset(); // Очистим форму после успешной отправки
  }
});
