var data = [
    {
        "nome": "3 Queijos",
        "desc": "Queijo, requeijão, oregano e parmesão ralado.",
        "preco": "R$ 40,00",
        "img": "../img/3queijos.jpg"
    },
    {
        "nome": "Bauru",
        "desc": "Queijo, presunto, requeijão, oregano e tomate.",
        "preco": "R$ 45,00",
        "img": "../img/bauru.jpg"
    },
    {
        "nome": "Calabresa",
        "desc": "Queijo, calabresa e cebola, oregano.",
        "preco": "R$ 40,00",
        "img": "../img/calabresa.jpg"
    },
    {
        "nome": "Frango com Requeijão",
        "desc": "Frango desfiado, cebola, oregano e requeijão",
        "preco": "R$ 43,00",
        "img": "../img/frangorequeijao.jpg"
    },
    {
        "nome": "Margherita",
        "desc": "Queijo, tomate, oregano e manjericão.",
        "preco": "R$ 38,00",
        "img": "../img/margherita.jpg"
    },
    {
        "nome": "Milho e Bacon",
        "desc": "Queijo, bacon, oregano e milho.",
        "preco": "R$ 42,00",
        "img": "../img/milhobacon.jpg"
    },
    {
        "nome": "Napolitana",
        "desc": "Queijo, tomate, oregano e parmesão ralado.",
        "preco": "R$ 40,00",
        "img": "../img/napolitana.jpg"
    },
    {
        "nome": "Pepperoni",
        "desc": "Queijo, oregano e pepperoni..",
        "preco": "R$ 42,00",
        "img": "../img/pepperoni.jpg"
    },
    {
        "nome": "Portuguesa",
        "desc": "Queijo, presunto, ovo de codorna, azeitona preta, cebola, oregano e pimentão verde.",
        "preco": "R$ 43,00",
        "img": "../img/portuguesa.jpg"
    }
]

function load(){
    let card = document.querySelector('.card')
    let main = document.querySelector('.main')
    data.forEach(pizza => {
        let clone = card.cloneNode(true);
        clone.classList.remove('model');
        clone.querySelector('#img').src = pizza.img;
        clone.querySelector('#nome').innerHTML = pizza.nome;
        clone.querySelector('#nomeBack').innerHTML = pizza.nome;
        clone.querySelector('#desc').innerHTML = pizza.desc;
        clone.querySelector('#preco').innerHTML = pizza.preco;
        main.appendChild(clone);
    })
}
