function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

button.addEventListener("click", () => {
  // renk oluştur.
  const randomColor = getRandomHexColor();

  // body arka planına uygula.
  document.body.style.backgroundColor = randomColor;

  // rengi ekrana yaz.
  colorText.textContent = randomColor;
});
