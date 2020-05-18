mat = [1,2,3,4]
console.log(mat)
for (let n = 0; n < 3; n++){
    if (n==4){n=0}
    if (n==0){m=3}else{m=n-1}
    mat[n] = mat[m] + 1
}
console.log(mat)


mat = [[1,1],[2,1],[3,1],[4,1]]
console.log(mat)
for (let n = 0; n < 3; n++){
    if (n==4){n=0}
    if (n==0){m=3}else{m=n-1}
    mat[n][0] = mat[m][0] + 1
}
console.log(mat)