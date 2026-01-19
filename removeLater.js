/* all is ia added for now */

// Clase TypeWriter para efecto de texto escribiéndose
class TypeWriter {
  constructor(element, text, options = {}) {
    this.element = element;
    this.text = text;
    this.speed = options.speed || 100;
    this.delay = options.delay || 1000;
    this.cursor = options.cursor || "_";
  }

  start() {
    // Comenzar solo con el cursor parpadeando
    this.element.innerHTML = `<span class="cursor">${this.cursor}</span>`;

    // Esperar el delay antes de empezar a escribir
    setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < this.text.length) {
          // Escribir letra por letra manteniendo el cursor al final
          this.element.innerHTML =
            this.text.substring(0, i + 1) +
            `<span class="cursor">${this.cursor}</span>`;
          i++;
        } else {
          // Terminar el timer cuando se complete el texto
          clearInterval(timer);
          // El cursor queda parpadeando infinitamente
        }
      }, this.speed);
    }, this.delay);
  }
}
// Función para inicializar cuando se carga la página
document.addEventListener("DOMContentLoaded", function () {
  // Buscar el elemento h1 con id 'typewriter'
  const typewriterElement = document.getElementById("typewriter");

  if (typewriterElement) {
    // Crear y ejecutar el efecto typewriter
    const typewriter = new TypeWriter(typewriterElement, "Lumina Furniture", {
      speed: 80, // Velocidad de escritura (ms entre letras)
      delay: 1000, // Delay inicial antes de empezar
      cursor: "_", // Carácter del cursor
    });

    typewriter.start();
  }

  // Animación del header - aparece después de 2 segundos
  const headerContainer = document.querySelector("header .container");
  if (headerContainer) {
    setTimeout(() => {
      headerContainer.classList.add("show");
    }, 2000); // 2 segundos de delay
  }
});
