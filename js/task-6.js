function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input"); //Kullanıcının sayı girdiği kutu//
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes"); //Kutuların ekleneceği alan//

// Kutu oluşturan fonksiyon //
function createBoxes(amount) {
  const boxElements = []; // Kutuları bellekte boxElements dizisine topluyoruz.
  let size = 30; //ilk kutunun boyutu

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div"); //yeni div
    box.style.width = `${size}px`; // genişlik
    box.style.height = `${size}px`; //yükseklik
    box.style.backgroundColor = getRandomHexColor(); //rastgele renk
    box.style.marginBottom = "5px"; //altta boşluk ekle.
    boxElements.push(box); //diziye ekle.
    size += 10; // bir sonraki kutu +10px daha büyük olsun..
  }

  boxesContainer.append(...boxElements); //tüm kutuları öğelere ayırıp tek seferde DOM'a (ekrana) ekliyoruz.
}

// Kutu(ları) silen fonksiyon //
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Olaylar..(events) //
createBtn.addEventListener("click", () => {
  const amount = Number(input.value); // inputtaki stringi sayıya çevirip aldık.
  if (amount < 1 || amount > 100) {
    // geçersizse uyarı veriyoruz.
    alert("Please enter a number between 1 and 100"); //ödevde yoktu ben ekledim..
    return;
  }
  createBoxes(amount); // geçerliyse kutuları oluştur.
});

destroyBtn.addEventListener("click", destroyBoxes); //Destroy butonuna tıklanınca kutuları sil.
