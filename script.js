let ran = NaN
let inp = NaN
let result = document.querySelector(".result")
let sub = document.querySelector(".sub")

let main = () => {
    inp = Number( document.querySelector(".inp").value)
    ran =   Math.floor(Math.random()*101)
if (inp === 9000) {
    result.textContent = "Succeed"
    sub.style.visibility = "hidden"

} else {
        if (inp > ran) {
        // alert("larger")
        result.textContent = " Your no. is larger"
        
        
        
    } else if(inp < ran) {
        // alert("smaller")
        result.textContent = `Your no. is smaller`
        
    }
    else{
        // alert("succes")
        result.textContent = "Succeed"
        sub.style.visibility = "hidden"
        

    }    

}
}

    sub.addEventListener("click",() => {
        main();
        console.log(ran)
        console.log(inp)
    })

