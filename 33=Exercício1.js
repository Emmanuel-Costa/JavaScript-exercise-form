//Ocultar mensagem de erro
function ocultarErro(){
    //Alterando características CSS do h1
    var exibirErro = documento.getElementsByTagName("h1")[0].style.display="none";
}

//Validar
function validar(){

    //Obter objetos 
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var cargo = document.getElementById("cargo");
    var mensagem = document.getElementById("mensagem");
    var exibirErro = document.getElementsByTagName("h1")[0];

    //Validação
    if(nome.value == ""){
        exibirErro.innerHTML = "O campo nome não pode estar vazio.";
        exibirErro.style.display = "block";
        nome.focus;
        return false;

    }else if(nome.value.length < 3){
        exibirErro.innerHTML = "O campo nome deve ter pelo menos 3 letras.";
        exibirErro.style.display = "block";
        nome.focus;
        return false;

    }else if(email.value == ""){
        exibirErro.innerHTML = "O campo email não pode estar vazio.";
        exibirErro.style.display = "block";
        email.focus;
        return false;
    }else if(email.value.indexOf("@") == -1){
        exibirErro.innerHTML = "O campo e-mail deve ter @.";
        exibirErro.style.display = "block";
        email.focus;
        return false;
    }else if(email.value.indexOf(".") == -1){
        exibirErro.innerHTML = "O campo e-mail deve ter ponto.";
        exibirErro.style.display = "block";
        email.focus;
        return false;
    }else if(cargo.value == "Cargo"){
        exibirErro.innerHTML = "Informe um cargo";
        exibirErro.style.display = "block";
        cargo.focus;
        return false;
    }
}