const increaseBtns = document.querySelectorAll(".increase");

increaseBtns.forEach((btn) => {
  let quantityInput = btn.parentElement.querySelector(".quantity-input");

  btn.addEventListener("click", (e) => {
    let value = +quantityInput.value;
    quantityInput.value = value + 1;
  });
});
