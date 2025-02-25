function mostrar(data){
    document.querySelector('#res').value += data
}

function limpar(){
    document.querySelector('#res').value = ''
}
function voltar(){
    let display =  document.querySelector('#res')
    display.value = display.value.slice(0, -1)
}
function calc(){
    let display =  document.querySelector('#res')
    try{
        display.value = eval(display.value)
    }catch{
        display.value = 'Error'
    }
}