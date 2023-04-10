function selisih(arr){
    let max = Math.max(...arr)
    let min = Infinity
    let i = 0

    while(i < arr.indexOf(max)){
        if(arr[i] < min){
            min = arr[i]
        }

        i++
    }

    return min !== Infinity ? max - min : max
}

let harga = [10, 7, 5, 8, 11, 9, 1]

console.log(selisih(harga))