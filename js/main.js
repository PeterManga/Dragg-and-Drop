
let totalAnimales = document.getElementById("totalAnimales");
let animalesSalvados = 0;
totalAnimales.innerHTML = `${animalesSalvados} Animales Soltados`;

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
    animalesSalvados = 0;
    totalAnimales.innerHTML = `${animalesSalvados} Animales Libres`;
}

//arrastrar usando la id 
const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
};

//permitir drop
const allowDrop = (ev) => {
    ev.preventDefault();
};

// constante drop
const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    //muestra por consola el dato añadito
    console.log(data);
    let secuestrado = document.getElementById(data);
    secuestrado.classList.add("disable");    
    let objetoDeseo = objetos.find(objeto => {
        return objeto.id == data
    });

    animalesSalvados += objetoDeseo.valor;
    totalAnimales.innerHTML = `${animalesSalvados} Animales liberados`;
};

//animales total negativo
if (animalesSalvados < 0 ){
    console.log("se han comido a todos tus animales");
}