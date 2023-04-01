const projectos = document.querySelectorAll("[proyect]");

let projectText = [
  "Text Encrypter - Challenge Alura Codificator",
  "Hangman with Javascript - Challenge Oracle",
  "E-commerse - Challenge Oracle",
  "Currency conversor - Challenge Oracle",
  "Hotel-Alura Developed in java - Challenge Oracle",
  "Huddle landing page with curved sections"
];

for (let i = 0; i < projectos.length; i++) {
  let projecto = projectos[i];
  let text = new TypeIt(`[p-text-${i+1}]`, {
    strings: projectText[i],
    speed: 80,
  });
  projecto.addEventListener("mouseover", () => {
    text.go();
  });
}

