import { users } from "./data.js"
const container = document.querySelector('.container')
// const buttons = document.querySelector('.buttons')

let index = 0
createElement(index)

function createElement(index){
    container.innerHTML = ''
    container.innerHTML = `
    <div class="img-wrapper">
    <img src="${users[index].img}" alt="">
    </div>
    <h4>${users[index].userName}</h4>
        <h3>${users[index].position}</h3>
        <P>${users[index].quote}</P>
        <div class="buttons">
            <button class="p"><i class="fas fa-chevron-left fa-2x"></i></button>
            <button class="n"><i class="fas fa-chevron-right fa-2x"></i></button>
            </div>
            <button class='random'>Surprise me</button>
            `
        }

        const pBtn = document.querySelector('.p')
        pBtn.addEventListener('click', ()=> {
            if(index > 0){
                index--
                createElement(index) 
            }
        })
        

        const nBtn = document.querySelector('.n')
        nBtn.addEventListener('click', ()=> {
            if(index < users.length - 1){
                index++
                createElement(index)
            }
        })

        const random = document.querySelector('.random')
        random.addEventListener('click', ()=>{
            let randomIndex = Math.ceil(Math.random()*users.length - 1)
            createElement(randomIndex)
        })


