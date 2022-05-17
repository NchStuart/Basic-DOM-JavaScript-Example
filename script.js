

function changeImage(typeImage, typeEspecie, typeDesc){
    document.querySelector('.imagem-inicial').style.display = "none";
    document.querySelector('.imagem-secundaria').style.display = "none";
    document.querySelector('.imagem-inicial').setAttribute('src', 'images/'+typeImage);
    document.querySelector('.imagem-inicial').setAttribute('data-especie', typeEspecie);
    document.querySelector('.imagem-inicial').setAttribute('alt', typeDesc);

    if (typeImage == 'pessoa.png') {
        document.querySelector('.imagem-inicial').style.display = "block";
        document.querySelector('.text-info-01').innerHTML = "A especie atual é de um humano";
        document.querySelector('.text-info-02').innerHTML = "Esse humano se chama Cleber e possui 27 anos de idade.";

    } else {
        document.querySelector('.imagem-secundaria').style.display = "block";
        document.querySelector('.text-info-01').innerHTML = "A especie atual é de um cachorro";
        document.querySelector('.text-info-02').innerHTML = "Esse cachorro se chama Rex e possui 10 anos de idade.";
    }
}


function changeInfo() {
    let textoInfo = document.querySelector('.text-info-01');
    let textoInfo2 = document.querySelector('.text-info-02');
    let imagemPrimaria = document.querySelector('.imagem-inicial');
    let imagemSegunda = document.querySelector('.imagem-secundaria');

    if (textoInfo.textContent === "A especie atual é de um humano") {
        textoInfo.innerHTML = "Humano (taxonomicamente Homo sapiens, termo que deriva do latim homem sábio, também conhecido como pessoa, gente ou homem)";
        textoInfo2.innerHTML = "Os humanos são altamente sociais e tendem a viver em estruturas sociais complexas compostas por muitos grupos cooperantes e concorrentes, desde famílias e redes de parentesco até Estados políticos.";
    } else {
        textoInfo.innerHTML = "Os canídeos são animais de médio a pequeno porte, que se alimentam predominantemente de carne. Raposas, chacais, coiotes, mabecos, lobos e cachorros pertencem a esta família.";
        textoInfo2.innerHTML = "O cão, também chamado de cachorro, é na verdade uma subespécie do lobo: o cinzento. Ele foi domesticado há mais de 130 mil anos, auxiliando o homem em caças e na guarda de seus territórios; tornando-se, no decorrer desse tempo, também um grande companheiro.";
    }

    if (imagemPrimaria.style.display == "block" && imagemSegunda.style.display == "block") {
        textoInfo.innerHTML = "Humano (taxonomicamente Homo sapiens, termo que deriva do latim homem sábio, também conhecido como pessoa, gente ou homem) ---- Os humanos são altamente sociais e tendem a viver em estruturas sociais complexas compostas por muitos grupos cooperantes e concorrentes, desde famílias e redes de parentesco até Estados políticos.";
        textoInfo2.innerHTML = "Os canídeos são animais de médio a pequeno porte, que se alimentam predominantemente de carne. Raposas, chacais, coiotes, mabecos, lobos e cachorros pertencem a esta família. O cão, também chamado de cachorro, é na verdade uma subespécie do lobo: o cinzento. Ele foi domesticado há mais de 130 mil anos, auxiliando o homem em caças e na guarda de seus territórios; tornando-se, no decorrer desse tempo, também um grande companheiro.";
    }
}

function setImage(typeImage, typeEspecie, typeDesc) {
    let imagemPrimaria = document.querySelector('.imagem-inicial');
    let imagemSegunda = document.querySelector('.imagem-secundaria');
    let textPrimario = document.querySelector('.text-info-01');

    document.querySelector('.imagem-inicial').setAttribute('src', 'images/'+typeImage);
    document.querySelector('.imagem-inicial').setAttribute('data-especie', typeEspecie);
    document.querySelector('.imagem-inicial').setAttribute('alt', typeDesc);
    
    imagemPrimaria.style.display = "none";
    imagemSegunda.style.display = "none";

    if (textPrimario.textContent == "A especie atual é de um cachorro","Os canídeos são animais de médio a pequeno porte, que se alimentam predominantemente de carne. Raposas, chacais, coiotes, mabecos, lobos e cachorros pertencem a esta família.") {
        imagemPrimaria.style.display = "block";
    }
    if (textPrimario.textContent == "A especie atual é de um humano","Humano (taxonomicamente Homo sapiens, termo que deriva do latim homem sábio, também conhecido como pessoa, gente ou homem)") {
        imagemSegunda.style.display = "block";
    }

    document.querySelector('.text-info-01').innerHTML = "As especies mostradas são de um humano e de um cachorro.";
    document.querySelector('.text-info-02').innerHTML = "Esse humano se chama Cleber e possui 27 anos de idade e esse cachorro se chama Rex e possui 10 anos de idade.";
} 

function scrollAction() {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

}

function checkButtonScroll() {
    if (window.scrollY === 0) {
        document.querySelector('.button__scroll').style.display = "none";
    } else {
        document.querySelector('.button__scroll').style.display = "flex";
    }
}

window.addEventListener('scroll', checkButtonScroll)



