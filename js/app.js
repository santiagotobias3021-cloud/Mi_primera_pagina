const entradaNumero = document.getElementById("numero");
const mensaje = document.getElementById("mensaje");

const selector = document.getElementById("selector");
const tituloPasion = document.getElementById("titulopasion");
const imagen = document.getElementById("imagen");

const botonFrase = document.getElementById("botonFrase");

const numeroFavorito = 8;

// Juego para adivinar el número favorito
entradaNumero.addEventListener("input", function() {
    const numero = Number(entradaNumero.value);

    if (entradaNumero.value.trim() === "") {
        mensaje.textContent = "Escribe un número para comenzar.";
    } else if (numero === numeroFavorito) {
        mensaje.textContent = "¡Felicidades! 👏 ¡Ganaste!";
    } else if (numero < numeroFavorito) {
        mensaje.textContent = "Más arriba.";
    } else {
        mensaje.textContent = "Más abajo.";
    }
});

// Información de las pasiones
const pasiones = {
    futbol: {
        titulo: "Futbol",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJGAoQdarn0uC3CRqiyMmZ2pJ6YGs7tNmn09ZVWIUNlw&s=10"
    },

    gimnasio: {
        titulo: "Gimnasio",
        imagen: "https://img.magnific.com/foto-gratis/entrenamiento-hombre-fuerte-gimnasio_1303-23478.jpg?semt=ais_hybrid&w=740&q=80"
    },

    motos: {
        titulo: "Motos",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsDHPaK04-z7UOekXRuLe2cjgBijVZAlJ9xS5HKh42DIbEkMbcCQxLkX3E&s=10"
    }
};

// Cambiar la imagen al seleccionar una pasión
selector.addEventListener("change", function() {
    const pasionElegida = selector.value;

    if (pasionElegida === "") {
        tituloPasion.textContent = "Mis pasiones ";

        imagen.src = "https://dinahosting.com/blog/upload/2023/09/Imagen-principal-blog-12B.jpg";
        imagen.alt = "Imagen inicial de mis pasiones";

    } else {
        const pasion = pasiones[pasionElegida];

        tituloPasion.textContent = pasion.titulo;

        imagen.src = pasion.imagen;
        imagen.alt = "Imagen de " + pasion.titulo;
    }
});

// Mensaje para el profesor
const frases = [
    "Nunca rendirse a pesar de los obstaculos."
];

botonFrase.addEventListener("click", function() {
    const posicion = Math.floor(Math.random() * frases.length);

    alert(frases[posicion]);
});