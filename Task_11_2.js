function simpleNumber(n){
    if ( n == 0 || n == 1 || n >= 1000 ){
        return console.log ("Данные неверны")
    }
    let j = 0
    for ( let i = 1; i <= n; i++ ){
        if ( n%i == 0 ){
            j++
        }
    }
    if ( j == 2){
        return console.log("Число простое")
    } else{
        return console.log("Число непростое")
    }
}

simpleNumber(12)

// function simpleNumber1(n){
//         if ( n == 0 || n == 1 || n >= 1000 ){
//             return console.log ("Данные неверны")
//         }
//         next:
//         for (let i = 2; i <= n; i++){
//             for ( let j = 2; j < i; j++ ){
//                 if ( i % j == 0 ) continue next
//             }
//             console.log(i)
//         }
// }

// simpleNumber1(10)