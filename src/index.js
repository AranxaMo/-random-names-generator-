//Se declara el arreglo 
const messages = [
    "Aranxa",
    "Pavel",
    "Naty",
    "Juan",
    "Cristina",
    "Sernas",
    "Paola",
    "Ezequiel",
    "Mayra",
];

//Se crea una función para enviar aleatoriamente los nombres del arreglo
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

//Exportar como un módulo

module.exports = {randomMsg};
