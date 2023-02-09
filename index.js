const projectos = document.querySelectorAll("[proyect]");

let projectDescription = [
  "Text Encrypter - Challenge Alura Codificator.",
  "Game creaded with Javascript - Challenge Oracle",
  "E-commerse - Challenge Oracle",
  "Currency conversor - Challenge Oracle",
  "Hotel-Alura Developed in java - Challenge Oracle",
  "Portfolio - Challenge Oracle"
];

for (let i = 0; i < projectos.length; i++) {
  let projecto = projectos[i];
  let text = new TypeIt(`[p-text-${i+1}]`, {
    strings: projectDescription[i],
    speed: 80,
  });
  projecto.addEventListener("mouseover", () => {
    text.go();
  });
}

