function stars(n){
    let i = 1
    
    while(i <= n){
        // console.log(i, n)
        let output = ''

        for(let j = 0; j < (n + 3); j++){
            if(j === i || j === (i + 1)){
                output += '*'
            } else {
                output += (j + 1).toString()
            }
        }

        console.log(output)

        i++
    }
}

stars(5)