let btnIzracunaj = document.querySelector(".btn-izracunaj");
let inputRuze = document.getElementById("ruza");
let inputLjiljani = document.getElementById("ljiljani");
let inputGerberi = document.getElementById("gerberi");
let divSlika = document.querySelector(".slikovni-Prikaz");

// let chbxBombonjera = document.querySelector('.chbx-bombonjera');
// let chbxCokoloda = document.querySelector('.chbx-cokoloada');
// let chbxSampanjac = document.querySelector('.chbx-sampanjac');

let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
let checked = [];
checkboxes.forEach((checkbox) => {
  checked.push(checkbox.value);
});

btnIzracunaj.addEventListener("click", function (event) {
  event.preventDefault();
  divSlika.innerHTML = "";

  let naslov = document.createElement("h1");
  divSlika.appendChild(naslov);
  naslov.textContent = "Vas buket izgleda ovako:";

  let ruzeKom = parseInt(inputRuze.value) || 0;
  let ljiljaniKom = parseInt(inputLjiljani.value) || 0;
  let gerberiKom = parseInt(inputGerberi.value) || 0;

  let srcSlikeR = "Slike/ruzaAvatar.jfif";
  let srcSlikeLj = "Slike/ljiljanAvatar.jpg";
  let srcSlikeG = "Slike/gerberiAvatar.jpg";

  function dodajSliku(src, klasa) {
    let novaSlika = document.createElement("img");
    novaSlika.src = src;
    novaSlika.classList.add(klasa);
    divSlika.appendChild(novaSlika);
  }
  function dodajParagraf(textContent) {
    let noviP = document.createElement("p");
    divSlika.appendChild(noviP);
    noviP.textContent = textContent;
  }

  for (let i = 0; i < ruzeKom; i++) {
    dodajSliku(srcSlikeR, "ruzaAvatar");
  }

  for (let i = 0; i < ljiljaniKom; i++) {
    dodajSliku(srcSlikeLj, "ljiljaniAvatar");
  }

  for (let i = 0; i < gerberiKom; i++) {
    dodajSliku(srcSlikeG, "gerberiAvatar");
  }

  for (let i = 0; i < checked.length; i++) {
    if (checked[i].value == Bombonjera) {
      texContent = `+ ${checked[i].value}`;
      dodajParagraf(texContent);
    }
    if (checked[i].value == Cokolada) {
      texContent = `+ ${checked[i].value}`;
      dodajParagraf(texContent);
    }
    if (checked[i].value == Sampanjac) {
      texContent = `+ ${checked[i].value}`;
      dodajParagraf(texContent);
    }
  }
});

// btnIzracunaj.addEventListener("click", (e) => {
//   e.preventDefault();
//   let ruzeKom = ruze.value;
//   console.log(ruzeKom);
//   for (i = 0; i < ruzeKom; i++) {
//     divSlika.innerHTML += ` <img src="Slike/ruzaAvatar.jfif" class="ruzaAvatar" /> `;
//   }
// });
