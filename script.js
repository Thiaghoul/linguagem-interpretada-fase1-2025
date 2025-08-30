const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 30,

  // parametros da paginacao
  pagination: {
    el: '.swiper-pagination',
  },

  // navegacao com os botoes
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

window.onscroll = scroll;
function scroll(){
    var btn = document.getElementById("voltar-ao-topo")

    if(document.documentElement.scrollTop > 200){
        btn.style.right = "50px"
        btn.style.transition = ".4s all"
    } else {
        btn.style.right = "-500px"
        btn.style.transition = ".4s all"
    }
}

function voltarTopo(){
    document.documentElement.scrollTop = 0;
}

document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let assunto = document.getElementById("assunto").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    let erros = [];

    if(nome === ""){
        erros.push("nome");

    } 
    
    if(email === "") {
        erros.push("email");

    }
    
    if(telefone === "") {
        erros.push("telefone");

    }
    
    if(assunto === "") {
        erros.push("assunto");

    }
    
    if(mensagem === "") {
        erros.push("mensagem");

    } 
    
    if (erros.length === 0) {
        addFeedback("Enviado com sucesso", "rgb(0, 250, 12)");

    } else {
        addFeedback("Preencha corretamente!", "rgba(201, 25, 25, 1)");

    }

});

function addFeedback(msg, cor) {
    let container = document.querySelector(".alertas");
    container.innerHTML = "";

    let p = document.createElement("p");
    p.classList.add("msg");
    p.textContent = msg;
    p.style.display = "flex";
    p.style.justifyContent = "center";
    p.style.margin = "2vh";
    p.style.padding = "10px";
    p.style.background = "rgba(0, 0, 0, 0.5)";
    p.style.color = cor;
    p.style.borderRadius = "5px";
    p.style.fontWeight = "600";

    container.appendChild(p);
}

function aplicarMobile(mobile){
    if (mobile.matches){
        let containerSobre = document.querySelector(".container-sobre");

        containerSobre.classList.add("d-flex flex-column align-items-center");
    }
}

let mobile = window.matchMedia("(max-width: 1020px)");
aplicarMobile(mobile);

mobile.addEventListener("change", aplicarMobile);