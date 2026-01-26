const menu = document.querySelector("header")
const corpo = document.querySelector("body")

// EFEITO MENU OCULTO 
document.querySelector(".menu_hamburguer").addEventListener("click", ()=> {
    menu.classList.toggle("ativado")
    if (menu.classList.contains("ativado")) 
        corpo.style.overflowY = "hidden"
    else
        corpo.style.overflowY = "scroll"
})

document.querySelectorAll(".opcao_menu").forEach(link => {
    link.addEventListener("click", ()=> {
        menu.classList.remove("ativado")
        corpo.style.overflowY = "scroll"
    })
})
// EFEITO MENU OCULTO 


// EFEITO COLORIR TEXTO
const textoEfeito = document.querySelectorAll(".texto_efeito_colorir")
const colorirTexto = ()=> {
    const eixoY = window.innerHeight / 2
    let fechamento = null, Fechamento = Infinity 
    textoEfeito.forEach(t => {
        const medida = Math.abs((t.getBoundingClientRect().top + t.getBoundingClientRect().bottom) / 2 - eixoY)
        if (medida < Fechamento) [Fechamento, fechamento] = [medida, t]
    })

    textoEfeito.forEach(t => t.classList.remove("colorido"))
    if (fechamento)
        fechamento.classList.add("colorido")
}
window.addEventListener("scroll", colorirTexto);
window.addEventListener("resize", colorirTexto);
colorirTexto();
// EFEITO COLORIR TEXTO

// EFEITO CARDS FUNDADORES
const observador = new IntersectionObserver(entrar => {
    entrar.forEach(card => {
        if (card.isIntersecting)
            card.target.classList.add("visto")   
        else   
            card.target.classList.remove("visto")   
    });
}, {threshold: 0.7});
document.querySelectorAll(".card_fundadores").forEach(cards => observador.observe(cards))
// EFEITO CARDS FUNDADORES