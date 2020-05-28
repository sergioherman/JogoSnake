declaravar()
run()

function declaravar(){
    nn = 0
    tempo = 500
}
function run(){
    nn++
    temporizador = setTimeout(run,tempo)
    funcaolog()
}

function funcaolog(){
    console.log(nn)
    if (nn == 3){
        console.log('Hello World')
        clearTimeout(temporizador)
    }
}