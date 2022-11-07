// declarando uma função para o calculo do desconto 
const desconto = (p) => (p*1) - (p*(20/100));

// pegando o nome do prato 
let disheName = document.getElementById("disheName");

// pegando o preço do prato
let dishePrice = document.getElementById("dishePrice");

// pegando o botão salvar
const buttonSave = document.getElementById("buttonSave");

// pegando o local onde será exibido os produtos
const produtos = document.getElementById("produtos");

// adiciconando um evento ao botão 
buttonSave.addEventListener("click", function(e){
    e.preventDefault();
    let novaDiv = document.createElement('div');
    let nomePrato = document.createElement('p');
    let precoPrato = document.createElement('p');
    let botaoRemover = document.createElement('button');
    botaoRemover.classList.add('btn');
    nomePrato.classList.add('fonte');
    precoPrato.classList.add('fonte');
    novaDiv.appendChild(nomePrato);
    novaDiv.appendChild(precoPrato);
    novaDiv.appendChild(botaoRemover);
    if(document.getElementById('sim').checked){
        novaDiv.classList.add('comPromocao');
        nomePrato.textContent = disheName.value;
        precoPrato.textContent = desconto(dishePrice.value);
        botaoRemover.textContent = "Remover";
        produtos.prepend(novaDiv);
    }else{
        novaDiv.classList.add('semPromocao');
        nomePrato.textContent = disheName.value;
        precoPrato.textContent = dishePrice.value;
        botaoRemover.textContent = "Remover";
        produtos.appendChild(novaDiv);
    }
    botaoRemover.addEventListener("click",function(){
        produtos.removeChild(novaDiv);
    });
});