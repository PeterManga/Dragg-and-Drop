
let totalAnimales = document.getElementById("totalAnimales");
let precioTotal = 0;
totalAnimales.innerHTML = `${precioTotal} Animales Libres`;

//Declacion de objetos
let objetos = [
    {
        id: "leon",
        valor: 1
    },
    {
        id: "mono",
        valor: 1
    },
    {
        id: "buho",
        valor: 1
    },
    {
        id: "serpiente",
        valor: 1
    },
    {
        id: "ardilla",
        valor: 1
    },
    
    {
        id: "swiper",
        valor: -1
    },

    {
        id: "lobo",
        valor: -2
    },
    
    {
        id: "perezoso",
        valor: 1
    },
];

//boton vaciar
const vaciar = () =>{
    precioTotal = 0;
    totalAnimales.innerHTML = `${precioTotal} Animales Libres`;
}

//arrastrar usando la id 
const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
};

//permitir drop
const allowDrop = (ev) => {
    ev.preventDefault();
};

//pruebas constante leon
// const leon = document.getElementById('leon');
// leon.addEventListener('dragstart', ()=>{
//     // elem.addEventListener("rojo", rojo);
//     leon.classList.add("imagen")

//     console.log("arrastrando")
// })

// leon.addEventListener('dragend', ()=>{
//     leon.classList.remove("")
// })

// constante drop
const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    console.log(data);
    let secuestrado = document.getElementById(data);
    secuestrado.classList.add("disable");    
    let objetoDeseo = objetos.find(objeto => {
        return objeto.id == data
    });

    precioTotal += objetoDeseo.valor;
    totalAnimales.innerHTML = `${precioTotal} Animales liberados`;
};

//precio total negativo
if (precioTotal < 0 ){
    console.log("se han comido a todos tus animales")
}