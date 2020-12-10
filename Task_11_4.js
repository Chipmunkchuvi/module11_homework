function Print(a,b){
    let intrvalId = setInterval (function(){
        console.log(a)
        if (a == b) {
        clearInterval(intrvalId)
        }
        a++
    },1000
    )
}

Print(10,27)