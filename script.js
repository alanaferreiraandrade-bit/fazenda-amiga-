// ===============================
// PROJETO: FAZENDA AMIGA
// JavaScript
// ===============================

// Mensagem de boas-vindas
window.addEventListener("load", () => {
    alert("🌾 Bem-vindo ao site Fazenda Amiga!");
});

// ===============================
// Menu Responsivo
// ===============================
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}

// ===============================
// Curiosidades da Fazenda
// ===============================
const curiosidades = [
    "🐄 Uma vaca pode produzir mais de 20 litros de leite por dia.",
    "🐔 As galinhas conseguem reconhecer mais de 100 rostos.",
    "🌽 O milho é uma das culturas agrícolas mais produzidas no mundo.",
    "🐝 As abelhas são essenciais para a polinização das plantas.",
    "🌳 Árvores ajudam a manter o equilíbrio do clima e do solo.",
    "🚜 Tratores modernos utilizam tecnologia GPS para aumentar a produtividade."
];

const btnCuriosidade = document.getElementById("btnCuriosidade");
const textoCuriosidade = document.getElementById("curiosidade");

if (btnCuriosidade && textoCuriosidade) {
    btnCuriosidade.addEventListener("click", () => {
        const numero = Math.floor(Math.random() * curiosidades.length);
        textoCuriosidade.textContent = curiosidades[numero];
    });
}

// ===============================
// Rolagem Suave
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// Ano Automático no Rodapé
// ===============================
const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

// ===============================
// Contador de Visitas (Local)
// ===============================
let visitas = localStorage.getItem("visitas");

if (!visitas) {
    visitas = 1;
} else {
    visitas = Number(visitas) + 1;
}

localStorage.setItem("visitas", visitas);

const contador = document.getElementById("contador");

if (contador) {
    contador.textContent = `Você visitou este site ${visitas} vezes.`;
}
