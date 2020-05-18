soma = [0,0,0,0,0,0,0]
for (let n = 0 ; n <10000 ; n++){
    a = (parseInt(1+4*Math.random()))
    switch(a){
        case 0: soma[0] += 1
        break
        case 1: soma[1] += 1
        break
        case 2: soma[2] += 1
        break
        case 3: soma[3] += 1
        break
        case 4: soma[4] += 1
        break
    }
}
console.log(soma)