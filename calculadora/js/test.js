window.addEventListener("load", ()=>{

    //Variables
    let tema = 1;
    let tema_ant = 0;
    let raiz = document.documentElement;
    let display = document.querySelector(".main__screen");
    let keypad = document.querySelector(".main__keypad");
    let simboloNoPrevio = true;
  
    //Cambio de temas (colores)
    raiz.setAttribute("tema", tema);
    const boton = document.getElementById("toggle");


    boton.addEventListener("click", ()=> {

        if (tema == 1 || tema_ant == 1){
            tema_ant = tema;
            tema++;
            raiz.setAttribute("tema", tema);
        }
    
        else{
            tema_ant = tema;
            tema--;
            raiz.setAttribute("tema", tema);  
        }
    })
    
    //Calculadora
    keypad.addEventListener("click", (e)=> {

        let clase = e.target.classList[1]
        let contenido = e.target.innerHTML
        
        //Agregando numero
        if (clase == "number"){

            if (display.innerHTML == "0") display.innerHTML = contenido;
            else display.innerHTML += contenido;
        }

        //Eliminando numero/s
        else if (clase == "reset") display.innerHTML = 0
        else if (clase == "del") {
            if (display.innerHTML.length == 1) display.innerHTML = 0;
            else display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
        }

        //Calculando resultado
        else if (clase == "equal") display.innerHTML = eval(display.innerHTML)
        

        //Agregando simbolos (Casos y validaciones especiales)
        else if (clase == "symbol"){

            //Selecciono ultimo digito
            let ud = display.innerHTML[display.innerHTML.length - 1]
            
            //Valido que no se puedan ingresar dos signos o simbolos consecutivos
            if (!(ud == "+" || ud == "-" || ud == "x" || ud == "/" || ud == ".")){

                if (contenido == "x") contenido = "*";  //Signo multiplicacion (para evitar error con funcion eval)

                display.innerHTML += contenido;   
            }
        }
    })
})