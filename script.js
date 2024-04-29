var texto = "Olá, sou o Igor! Formado em Gestão da Tecnologia da Informação, minha jornada é impulsionada pela busca contínua pelo conhecimento em desenvolvimento web. Atualmente, trilho meu caminho como freelancer, criando soluções web eficientes e inovadoras. Explore meu portfólio e descubra como posso agregar valor ao seu negócio.";
var elemento = document.getElementById('textoDigitado');
var posicao = 0;
function adicionarTexto() {
    elemento.textContent += texto.charAt(posicao);
    posicao++;

    if (posicao < texto.length) {
        setTimeout(adicionarTexto, 25);
    }
}
adicionarTexto();

document.addEventListener("DOMContentLoaded", () => {


    const elements = document.querySelectorAll(".fixLinks");

    elements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.style.background = "rgba(0, 0, 0, 0.5)"
            element.style.transform = "translate(-5px, -5px)";
        });
        element.addEventListener("mouseleave", () => {
            element.style.background = "none"
            element.style.transform = "none";
        });

    });

});