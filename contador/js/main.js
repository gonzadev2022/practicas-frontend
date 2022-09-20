const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const agregarCeros = n => n.toString().length > 1 ? n : "0" + n.toString()


const obtenerHora = ()=>{
    const date = new Date();

    const day = agregarCeros(date.getDate());
    const hour = agregarCeros(date.getHours());
    const minute = agregarCeros(date.getMinutes());
    const second = agregarCeros(date.getSeconds());

    days.textContent = day;
    hours.textContent = hour;
    minutes.textContent = minute;
    seconds.textContent = second;
}

obtenerHora()
setInterval(obtenerHora, 1000);
