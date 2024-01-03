let btnIzracunaj = document.querySelector(".btn-izracunaj");
let inputRuze = document.getElementById("ruza");
let inputLjiljani = document.getElementById("ljiljani");
let inputGerberi = document.getElementById("gerberi");
let divSlika = document.querySelector(".slikovni-Prikaz");

btnIzracunaj.addEventListener("click", function (event) {
  event.preventDefault();
  divSlika.innerHTML = "";

  let ruzeKom = parseInt(inputRuze.value) || 0;
  let ljiljaniKom = parseInt(inputLjiljani.value) || 0;
  let gerberiKom = parseInt(inputGerberi.value) || 0;

  let srcSlikeR = "Slike/ruzaAvatar.jfif";
  let srcSlikeLj = "Slike/ljiljanAvatar.jpg";
  let srcSlikeG = "Slike/gerberiAvatar.jpg";

  function dodajSliku(src, klasa) {
    let novaSlika = document.createElement("img");
    novaSlika.src = src;
    divSlika.appendChild(novaSlika);
    novaSlika.classList.add(klasa);
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
});

// btnIzracunaj.addEventListener("click", (e) => {
//   e.preventDefault();
//   let ruzeKom = ruze.value;
//   console.log(ruzeKom);
//   for (i = 0; i < ruzeKom; i++) {
//     divSlika.innerHTML += ` <img src="Slike/ruzaAvatar.jfif" class="ruzaAvatar" /> `;
//   }
// });
