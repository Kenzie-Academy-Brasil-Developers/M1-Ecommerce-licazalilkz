let itens = [
    {
        image: './images/camiseta_branca.svg',
        price: 'R$100,00',
        name: 'Camiseta Branca',
        type: 'Camiseta'
    },
    {
        image:'./images/camiseta_preta.svg',
        price:'R$100,00',
        name:'Camisete Preta',
        type: 'Camiseta'
    },
    {
        image:'./images/gorro.svg',
        price:'R$50,00',
        name:'Gorro',
        type: 'Acessorios'
    },
    {
        image:'./images/jaqueta.svg',
        price:'R$150,00',
        name:'Jaqueta',
        type: 'Casaco'
    },
    {
        image:'./images/mascara.svg',
        price:'R$50,00',
        name:'Mascara',
        type: 'Acessorios'
    },
    {
        image:'./images/moletom.svg',
        price:'R$150,00',
        name:'Moletom',
        type: 'Casaco'
    }
];

function createProduct(products){
    const cards = document.querySelector('.main-cards');
    const cardsList = document.createElement('ul');
    for (let i = 0; i < itens.length; i++) {
        const cardItem = document.createElement('li');
        const cardItemName = document.createElement('p');
        const cardItemPrice = document.createElement('p');
        const cardItemImg = document.createElement('img')

        cardItemImg.src = itens[i].image;
        cardItemName.innerText = itens[i].name;
        cardItemPrice.innerText = itens[i].price;

        cardItem.appendChild(cardItemImg);
        cardItem.appendChild(cardItemName);
        cardItem.appendChild(cardItemPrice);

        cardsList.appendChild(cardItem);
    }
    cards.appendChild(cardsList);
}

const buttonAcessorio = document.querySelector('.acessorio');
const buttonCamiseta = document.querySelector('.camiseta');
const buttonTodos = document.querySelector('.todos');

buttonAcessorio.addEventListener("click", function(){
    removeItens();
    const cards = document.querySelector('.main-cards');
    const cardsList = document.createElement('ul');
    for (let i = 0; i < itens.length; i++) {
        if(itens[i].type === 'Acessorios'){
            const cardItem = document.createElement('li');
            const cardItemName = document.createElement('p');
            const cardItemPrice = document.createElement('p');
            const cardItemImg = document.createElement('img')
    
            cardItemImg.src = itens[i].image;
            cardItemName.innerText = itens[i].name;
            cardItemPrice.innerText = itens[i].price;
    
            cardItem.appendChild(cardItemImg);
            cardItem.appendChild(cardItemName);
            cardItem.appendChild(cardItemPrice);
    
            cardsList.appendChild(cardItem);
        }
    }
    cards.appendChild(cardsList);
})

buttonCamiseta.addEventListener("click",function(){
    removeItens();
    const cards = document.querySelector('.main-cards');
    const cardsList = document.createElement('ul');
    for (let i = 0; i < itens.length; i++) {
        if(itens[i].type === 'Camiseta'){
            const cardItem = document.createElement('li');
            const cardItemName = document.createElement('p');
            const cardItemPrice = document.createElement('p');
            const cardItemImg = document.createElement('img')
    
            cardItemImg.src = itens[i].image;
            cardItemName.innerText = itens[i].name;
            cardItemPrice.innerText = itens[i].price;
    
            cardItem.appendChild(cardItemImg);
            cardItem.appendChild(cardItemName);
            cardItem.appendChild(cardItemPrice);
    
            cardsList.appendChild(cardItem);
        }
    }
    cards.appendChild(cardsList);
})

buttonTodos.addEventListener("click",function(){
    removeItens();
    const cards = document.querySelector('.main-cards');
    const cardsList = document.createElement('ul');
    for (let i = 0; i < itens.length; i++) {
        const cardItem = document.createElement('li');
        const cardItemName = document.createElement('p');
        const cardItemPrice = document.createElement('p');
        const cardItemImg = document.createElement('img')

        cardItemImg.src = itens[i].image;
        cardItemName.innerText = itens[i].name;
        cardItemPrice.innerText = itens[i].price;

        cardItem.appendChild(cardItemImg);
        cardItem.appendChild(cardItemName);
        cardItem.appendChild(cardItemPrice);

        cardsList.appendChild(cardItem);
    }
    cards.appendChild(cardsList);
})
function removeItens(){
    const removeCards = document.querySelector('.main-cards ul');
    removeCards.remove();
}


createProduct(itens);