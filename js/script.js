
const menu = document.querySelector("#menu")
const go = document.querySelector("#btn-go")
const email = document.querySelector("#ipt-text")
const err = document.querySelector("#err")

menu.addEventListener("click", () => {
    menu.classList.toggle("cheer")
    const nav = document.querySelector("#nav")
    nav.classList.toggle("show")
})

go.addEventListener("click", () => {
    const exclude = /[^@\-.\w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    const check = /@[a-zA-Z0-9-]+\./;
    const checkend = /\.[a-zA-Z]{2,}$/;
    if(((email.value.search(exclude) != -1)||(email.value.search(check)) == -1)||(email.value.search(checkend) == -1)){
        email.classList.add("erro")
        err.style.display = "block"
    }
})

email.addEventListener("click", () => {
    email.classList.remove("erro")
    err.style.display = "none"
})

const witness = document.querySelector(".container-3__witness")
const ball = Array.from(document.querySelectorAll(".bottom__ball span"))
const last__ball = ball[ball.length-1]

let value = 25
let c = 1
let pass_witness

const media1 = window.matchMedia("(max-width:699px)")

const media__mobile = () => {
    if(media1.matches){
        pass_witness = (callback) => {
            if(value >= 100){
                value = 0
            }
            witness.style.transform = `translate(-${value}%,0)`
            value += 25
            callback()
        }
        if(ball.indexOf(last__ball)  == -1){
            ball.push(last__ball)
            const div = document.querySelector(".bottom__ball")
            div.appendChild(last__ball)
        }
    }
}

media__mobile()

media1.addEventListener("change", media__mobile)

const pass_ball = () => {
    if(c >= ball.length){
        ball[c-1].style.backgroundColor = "transparent"
        c = 0
    }
    ball[c].style.backgroundColor = "#F25F3A"
    if(ball.findIndex(item => item  == ball[c]) >= 1){
        ball[c-1].style.backgroundColor = "transparent"
    }
    c++
}

setInterval(()=>{
    pass_witness(pass_ball)    
},3000)

const media2 = window.matchMedia("(min-width:700px) and (max-width:991px)")

const media__tablet = () => {
    if(media2.matches){ 
        pass_witness = (callback) => {
            if(value >= 75){
                value = 0
            }
            witness.style.transform = `translate(-${value}%,0)`
            value += 25
            callback()
        } 
        console.log(pass_witness)
        if(ball.indexOf(last__ball) != -1){
            ball[ball.indexOf(last__ball)].remove()
            ball.splice(ball.indexOf(last__ball),1)
            if(c > ball.length){
                c = 0
                witness.style.transform = `translate(-0%,0)`
                last__ball.style.backgroundColor = "transparent"
                ball[0].style.backgroundColor = "#F25F3A"
            }
            
        }
    }
}

media__tablet()

media2.addEventListener("change", media__tablet)

const media3 = window.matchMedia("(min-width:992px)")

const media__desktop = () => {
    if(media3.matches){
        pass_witness = null
        witness.style.transform = `translate(-0%,0)`
    }
} 

media__desktop()

media3.addEventListener("change",media__desktop)