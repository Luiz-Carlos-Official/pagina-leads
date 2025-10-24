// ======= ANIMAÇÃO SUAVE AO ROLAR =======

// Quando o usuário rola a página, os elementos aparecem com um leve fade e movimento
const elementosAnimados = document.querySelectorAll("section, header h1, header p, .botao-comprar");

function revelarAoRolar() {
    const gatilho = window.innerHeight * 0.85; // 85% da tela
    elementosAnimados.forEach(el => {
        const topo = el.getBoundingClientRect().top;
        if (topo < gatilho) {
            el.classList.add("visivel");
        }
    });
}

window.addEventListener("scroll", revelarAoRolar);
revelarAoRolar(); // executa ao carregar

// ======= ROLAGEM SUAVE PARA O BOTÃO =======
const botao = document.querySelector(".botao-comprar");
botao.addEventListener("click", e => {
    // Caso o link leve a outra página, não impede o clique real
    if (botao.getAttribute("href") === "#") {
        e.preventDefault();
        alert("Simulação: aqui você seria redirecionado para o checkout!");
    }
});

// ======= PULSO VISUAL NO BOTÃO DE COMPRA =======
setInterval(() => {
    botao.classList.toggle("pulse");
}, 2000);

// ======= ANIMAÇÃO DO HEADER AO CARREGAR =======
window.addEventListener("load", () => {
    document.querySelector("header h1").classList.add("slideDown");
    document.querySelector("header p").classList.add("fadeIn");
});
