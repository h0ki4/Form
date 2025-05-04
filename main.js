document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Останавливаем отправку формы
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();
  const errors = [];

  const nameRegex = /^[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

  if (!name || !nameRegex.test(name)) {
    errors.push(
      "Имя должно начинаться с заглавной буквы и содержать только <span style='color: red; font-weight: bold;'>буквы</span>."
    );
  }
  if (!password || !passwordRegex.test(password)) {
    errors.push(
      'Пароль должен быть не менее <span style="color: red; font-weight: bold;">8 символов</span>, содержать буквы и цифры.'
    );
  }

  const errorDiv = document.getElementById("errors");
  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
  } else {
    errorDiv.innerHTML = "";
    alert("Форма успешно отправлена!");
    // Здесь можно отправить форму вручную, например через fetch()
    // this.submit(); — если нужна стандартная отправка
  }
});
