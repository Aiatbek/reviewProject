import { users } from "./data.js"
const container = document.querySelector('.container')
// const buttons = document.querySelector('.buttons')
let index = 0
function createElement(index){
    container.innerHTML = ''
    const user  = `
    <div class="img-wrapper">
    <img src="${users[index].img}" alt="">
    </div>
    <h4>${users[index].userName}</h4>
    <h3>${users[index].position}</h3>
    <P>${users[index].quote}</P>
    <div class="buttons">
    <button class="p"  id=${index}><i class="fas fa-chevron-left fa-2x"></i></button>
    <button class="n"><i class="fas fa-chevron-right fa-2x"></i></button>
    </div>
    <button class='random' onclick='random()'>Surprise me</button>
    `
    container.innerHTML = user

    const prevItem = document.querySelector(".p")
    prevItem.addEventListener("click",function(){
        prev()
    })

    const nextItem = document.querySelector(".n")
    nextItem.addEventListener("click",function(){
        next()
    })

    const randomBtn = document.querySelector('.random')
    randomBtn.addEventListener('click', function(){
        random()
    })
}


    function prev(){
        if(index > 0){
            index--
            createElement(index)
        }
    }

    function next(){
        if(index < users.length - 1){
            index++
            createElement(index)
        }
    }

    function random(){
        let randomIndex = Math.ceil(Math.random()*users.length - 1)
        createElement(randomIndex)
    }

    createElement(index)