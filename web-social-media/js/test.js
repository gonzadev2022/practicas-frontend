document.documentElement.setAttribute("theme", "light")
const boton = document.getElementById("toggle");

boton.addEventListener("click", ()=> {
    boton.classList.toggle("active");
    
    if (boton.classList.contains("active")) document.documentElement.setAttribute("theme", "dark")
    else document.documentElement.setAttribute("theme", "light")
})




