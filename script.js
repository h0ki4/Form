// document.addEventListener("DOMContentLoaded", () => {
//   event.preventDefault();
//   const input = document.querySelector("input");
//   event.preventDefault();
//   if (input.type === "password") {
//     input.type = "text";
//   }
// });
document.addEventListener("DOMContentLoaded", () => {
  const visibilityButtons = document.querySelectorAll(".btn_visability");

  visibilityButtons.forEach((button) => {
    const input = button.previousElementSibling;
    const icon = button.querySelector("i");

    button.addEventListener("click", () => {
      if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye-slash", "fa-eye");
      } else {
        input.type = "password";
        icon.classList.replace("fa-eye", "fa-eye-slash");
      }
    });
  });
});
