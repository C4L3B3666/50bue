document.addEventListener("DOMContentLoaded", ()=> {

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

// EFEITO CARREGAMENTO (PRELOADER) 
const preloader = document.getElementById("carregamento");
if (preloader) {
    setTimeout(() => {
        preloader.classList.add("hide");
        
        if (preloader.classList.contains("hide")) {
            document.querySelector("body").classList.remove("overflow-hidden")
            document.querySelector("body").classList.add("overflow-x-hidden")
        }
        
        setTimeout(() => {
            preloader.style.display = "none";
        }, 1000); 
    }, 500); 
}
// EFEITO CARREGAMENTO (PRELOADER) 

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

// EFEITO ESTRELAS 
function criarEstrelas(seletor, quantidade) {
    const containers = document.querySelectorAll(seletor)

    containers.forEach(container => {
        for (let i = 0; i < quantidade; i++) {
            const estrela = document.createElement('div')

            estrela.className = `
                estrelas inset-0 w-[2px] h-[2px] rounded-full 
                bg-[radial-gradient(circle_at_15%_20%,white_1px,transparent_2px),
                radial-gradient(circle_at_85%_60%,white_1px,transparent_2px),
                radial-gradient(circle_at_40%_80%,#DDD_1px,transparent_2px)]
                absolute shadow-[0_0_5px_#F5F5F5] bg-[#F5F5F5] 
                opacity-70 -z-1 
                animate-[brilhoEstrela_4s_infinite_ease-in-out]
            `

            estrela.style.left = Math.random() * 100 + '%'
            estrela.style.top = Math.random() * 100 + '%'
            estrela.style.animationDelay = Math.random() * 5 + 's'
            estrela.style.animationDuration = (Math.random() * 3 + 2) + 's'

            container.appendChild(estrela)
        }
    })
}
criarEstrelas(".div_estrelas", 200)
// EFEITO ESTRELAS 

// ANO ATUAL HOME E EXTRAS
    document.querySelectorAll(".ano_atual").forEach(ano =>  {
        ano.textContent = new Date().getFullYear()
    })
// ANO ATUAL HOME E EXTRAS

})