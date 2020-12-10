function sumCallback (num){
    return function (i){
        let res
        return res = num + i
    }
}
let sum = sumCallback(2)
let result = sum(3)
console.log(result)