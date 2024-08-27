const botaoSubmit = document.getElementById('idSubmit');
const numeroA = document.getElementById('idNumeroA');
const numeroB = document.getElementById('idNumeroB');
const msgValidadeFormulario = document.getElementById('MsgValidadeFormulario');

function formularioValido(numeroA, numeroB){
    console.log(`O numero A: ${numeroA.value} e menor que o numero B: ${numeroB.value}`)
    return numeroB.value > numeroA.value;
}

function animacaoMsgValidadeForm(isTrue){
    msgValidadeFormulario.style.display = 'block';

    if(isTrue){
        msgValidadeFormulario.classList.add('correto');
        msgValidadeFormulario.innerHTML = `O numero A: ${numeroA.value} e menor que o numero B: ${numeroB.value}`
        console.log('Sucesso')

    }
    else{
        msgValidadeFormulario.classList.add('falha');
        msgValidadeFormulario.innerHTML = `O numero A: ${numeroA.value} e maior ou igual que o numero B: ${numeroB.value}`
        console.log('Falha')
    }
}

botaoSubmit.addEventListener('click', function(e){
    e.preventDefault()
    if(formularioValido(numeroA, numeroB)){
        animacaoMsgValidadeForm(true)
    }
    else{
        animacaoMsgValidadeForm(false)
    }
    
})
