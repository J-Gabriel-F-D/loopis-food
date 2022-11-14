// declarando uma função para o calculo do desconto 
const desconto = (p) => (p*1) - (p*(20/100));
// criando a função salvar
function salvar(){
    let objPrato = {
        nome: '',
        preco: '',
        promo: '',
    }
    //
    let novaDiv = document.createElement('div');
    let nomePrato = document.createElement('p');
    let precoPrato = document.createElement('p');
    let botaoRemover = document.createElement('button');
    let imagem = document.createElement('img');
    botaoRemover.classList.add('btn');
    nomePrato.classList.add('nome');
    precoPrato.classList.add('preco');
    novaDiv.prepend(imagem);
    novaDiv.appendChild(nomePrato);
    novaDiv.appendChild(precoPrato);
    novaDiv.appendChild(botaoRemover);
    imagem.classList.add('imagem');
    if(document.getElementById('sim').checked){
        imagem.setAttribute('src','https://cdn-icons-png.flaticon.com/512/2733/2733082.png');
        novaDiv.classList.add('comPromocao');
        nomePrato.textContent = disheName.value;
        precoPrato.textContent = `R$${desconto(dishePrice.value)}`;
        botaoRemover.textContent = "X";
        produtos.appendChild(novaDiv);
        objPrato.nome = disheName.value;
        objPrato.preco = desconto(dishePrice.value);
        objPrato.promo = 1;
    }else{
        imagem.setAttribute('src','https://cdn-icons-png.flaticon.com/512/2391/2391713.png');
        novaDiv.classList.add('semPromocao');
        nomePrato.textContent = disheName.value;
        precoPrato.textContent = `R$${dishePrice.value}`;
        botaoRemover.textContent = "X";
        produtos.prepend(novaDiv);
        objPrato.nome = disheName.value;
        objPrato.preco = dishePrice.value;
        objPrato.promo = 0;
    }
    array.push(objPrato);
    localStorage.setItem('pratos', JSON.stringify(array));
    botaoRemover.addEventListener("click",function(){
        produtos.removeChild(novaDiv);
        clear();
    });
    novaDiv.classList.add('alinhar');

}
function refresh (array){
    for(let prato of array){
        let novaDiv = document.createElement('div');
        let nomePrato = document.createElement('p');
        let precoPrato = document.createElement('p');
        let botaoRemover = document.createElement('button');
        let imagem = document.createElement('img');
        imagem.classList.add('imagem');
        nomePrato.classList.add('nome');
        precoPrato.classList.add('preco');    
        novaDiv.appendChild(nomePrato);
        novaDiv.appendChild(precoPrato);
        novaDiv.appendChild(botaoRemover); 
        novaDiv.prepend(imagem);
        if(prato.promo === 1){
            botaoRemover.classList.add('btnPromo');
            imagem.setAttribute('src','https://cdn-icons-png.flaticon.com/512/2733/2733082.png');
            novaDiv.classList.add('comPromocao');
            nomePrato.textContent = prato.nome;
            precoPrato.textContent = `R$${prato.preco}`;
            botaoRemover.textContent = "X";
            produtos.appendChild(novaDiv);
        }else{
            botaoRemover.classList.add('btn');
            imagem.setAttribute('src','https://cdn-icons-png.flaticon.com/512/2391/2391713.png');
            novaDiv.classList.add('semPromocao');
            nomePrato.textContent = prato.nome;
            precoPrato.textContent = `R$${prato.preco}`;
            botaoRemover.textContent = "X";
            produtos.prepend(novaDiv);
        }
        botaoRemover.addEventListener("click",function(){
            produtos.removeChild(novaDiv);
            clear();
        });
        novaDiv.classList.add('alinhar');

    }
}
function clear(){
    for(let item of array){
        array.splice(array.findIndex(check),1);
        function check(element){
            return element === item;
        }
        localStorage.setItem('pratos', JSON.stringify(array));
    }
}
// pegando o nome do prato 
let disheName = document.getElementById("disheName");

// pegando o preço do prato
let dishePrice = document.getElementById("dishePrice");

// pegando o botão salvar
const buttonSave = document.getElementById("buttonSave");

// pegando o local onde será exibido os produtos
const produtos = document.getElementById("produtos");

let array = JSON.parse(localStorage.getItem('pratos')) || [];
refresh(array);
// adiciconando um evento ao botão 
const cadastro = document.getElementById('botaoSalvar');
let p = document.createElement('p');
p.textContent = "O nome/preço não podem estar vazios";
cadastro.appendChild(p);
p.style.display = "none";
buttonSave.addEventListener("click", function(){
    if(disheName.value === "" || dishePrice.value === "") {
        p.style.display = "block";
    }
    else{
        salvar();
        disheName.value = '';
        dishePrice.value = '';
        if(document.getElementById("sim").checked){
            document.getElementById("sim").checked = false;
        }
        else{
            document.getElementById("nao").checked = false;
        }

        p.style.display = "none";
    }
});
