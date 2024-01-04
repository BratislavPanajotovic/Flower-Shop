let btnIzracunaj = document.querySelector(".btn-izracunaj");
let inputRuze = document.getElementById("ruza");
let inputLjiljani = document.getElementById("ljiljani");
let inputGerberi = document.getElementById("gerberi");
let divSlika = document.querySelector(".slikovni-Prikaz");
let radioKes = document.querySelector(".kes-radio");
let radioKartica = document.querySelector(".kartica-radio");

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

  function dodajParagraf(textContent, klasa) {
    let noviP = document.createElement("p");
    divSlika.appendChild(noviP);
    noviP.textContent = textContent;
    noviP.classList.add(klasa);
  }

  function dodajCenu() {
    if (radioKartica.checked) {
      let noviPar = document.createElement("p");
      let cenaPopust = document.createElement("h3");
      divSlika.appendChild(noviPar);
      divSlika.appendChild(cenaPopust);

      let cena = 0;
      cena =
        ruzeKom * 150 +
        ljiljaniKom * 120 +
        gerberiKom * 70 +
        checked.length * 500;
      noviPar.textContent = `Cena bez popusta je: ${cena} dinara.`;
      cenaPopust.textContent = `Cena sa popustom je ${cena * 0.9} dinara.`;
      noviPar.classList.add("cena");
    } else if (radioKes.checked) {
      let noviPar = document.createElement("p");
      divSlika.appendChild(noviPar);
      let cena = 0;
      cena =
        ruzeKom * 150 +
        ljiljaniKom * 120 +
        gerberiKom * 70 +
        checked.length * 500;
      noviPar.textContent = `Cena je: ${cena}.
        Za placanje karticom imate popust od 10%!`;
      noviPar.classList.add("cena");
    } else {
      alert("Molimo Vas, izaberite nacin placanja. Hvala.");
    }
  }

  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let checked = [];
  checkboxes.forEach((checkbox) => {
    checked.push(checkbox.value);
  });

  console.log("Checked values:", checked);

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
    if (
      checked[i] === "Bombonjera" ||
      checked[i] === "Cokolada" ||
      checked[i] === "Sampanjac"
    ) {
      texContent = `+ ${checked[i]}`;
      let klasa = checked[i];
      dodajParagraf(texContent, klasa);
    }
  }
  dodajCenu();
  console.log(ruzeKom, ljiljaniKom, gerberiKom, checked.length);
});
