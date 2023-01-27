//adiconar elemento a variavel

const openSideBar = document.querySelector('.openSide');





//adicionar função para inserir logout
function insertExit(){
    let exit = document.querySelector('.exit')
    exit.innerHTML = '<li class="buttons"><a href="#"><img src="./images/photo.jpg" alt="Imagem Usuario" style="width: 50px;"></a></li><li class=" buttons"><a href="#"><img src="./images/log-out.svg" alt="Sair"></a></li>'
}

//adicionar função para inserir logo
function insertLogo(){
    let element = document.querySelector('.logo');
    element.innerHTML = '<li class="buttons"><a href="index.html"><img src="./images/logo.svg" alt="Logotipo"></a></li><li class="openSide buttons"><a href="index.html"><img src="./images/menu.svg" alt="botão Menu"></a></li>'
}
//adicionar função para inserir textos nos botões
function insertText(){
    let text = document.getElementsByClassName('button-text')
    
    
    for(var i = text.length - 1; i >= 0; i--)
    {
        text[i].classList.remove('invisible')
    }
}

// adicionar função para abrir sidebar
function openBody(){
    let openBody = document.querySelector('body')

    openBody.style.gridTemplateColumns = "0.4fr 3fr"

       
}


function openNow(){
    insertLogo()
    insertText()
    openBody()
    insertExit()
}

// adicionar evento para abrir sidebar

openSideBar.addEventListener('click',openNow)



