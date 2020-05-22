// ii=0
// anda()
// function anda(){
//     console.log('oi')
//     var timeout1 = setTimeout(anda,1000)
//     ii++
//     n=[]
//     n.push(1)
//     console.log(ii)
//     if (ii>3){
//     clearTimeout(timeout1)
//     }
// }

continua = true
anda()
function anda () {
    var data = new Date();
    var mmsinicio = data.getMilliseconds();
    console.log(mmsinicio)

    if (continua == false){
        clearTimeout(timeout1)
    }else{
        var timeout1 = setTimeout(anda,1000)
    }
        
    var data = new Date();
    var mmsfim = data.getMilliseconds();
    document.getElementById('fim').value=mmsfim
    if (bateu == false && continua == true) {
        if(mmsinicio <= mmsfim){
            var tempopr = mmsfim - mmsinicio
            // if (bateu == false){
            document.getElementById('tempoproc').value+=tempopr + ' - '
            // }
        }else {
            document.getElementById('tempoproc').value+= 'min-over'
        }

    }
// ----------------------------------------------------

