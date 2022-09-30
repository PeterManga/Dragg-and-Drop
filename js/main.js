
let totalCarrito = document.getElementById("totalCarrito");
let precioTotal = 0;
totalCarrito.innerHTML = `${precioTotal} Animales Libres`;

//Delcarion de objetos
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
        id: "loro",
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
        id: "ardilla",
        valor: 1
    },
];

const vaciar = () =>{
    precioTotal = 0;
    totalCarrito.innerHTML = `${precioTotal} Animales Libres`;
}


const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
};


const allowDrop = (ev) => {
    ev.preventDefault();
};

const leon = document.getElementById('leon');
leon.addEventListener('dragstart', ()=>{
    // elem.addEventListener("rojo", rojo);
    leon.classList.add("imagen")

    console.log("arrastrando")
})

// leon.addEventListener('dragend', ()=>{
//     leon.classList.remove("")
// })

const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    console.log(data);

    let secuestrado = document.getElementById(data);
    secuestrado.classList.add("disable");
     // ev.target.appendChild(document.getElementById(data));
    
    let objetoDeseo = objetos.find(objeto => {
        return objeto.id == data
    });

    precioTotal += objetoDeseo.valor;
    totalCarrito.innerHTML = `${precioTotal} Animales liberados`;
};
