function sortArray (arr){
    let even = 0
    let odd = 0
    let zero = 0
    arr.forEach(function(item){
        if (item%2 === 1 ){
            odd++
        }
        else if(item === 0){
            zero++
        }
        else if (typeof item != "number"){
        }
        else even++
    })
    return console.log(`Четные ${even}
Нечетные ${odd}
Нули ${zero}`)
}

let someArray = [0,1,2,4]
sortArray(someArray)
