let gtr = document.querySelector('.gtr')
let h1 = document.createElement('h1')
h1.innerHTML = "Our Products"
gtr.before(h1)  
let content = [
    {id: "one", img:'./images/image 1.png',title:"Syltherine", subtitle:"Stylish cafe chair", price:"Rp 2.500.000",button:"button1"},
    {id: "two", img:'./images/image 2.png',title:"Leviosa", subtitle:"Stylish cafe chair", price:"Rp 2.500.000",button:"button2"},
    {id: "three", img:'./images/image 3.png',title:"Lolito", subtitle:"Luxury big sofa", price:"Rp 7.000.000",button:"button3" },
    {id: "four", img:'./images/image 4.png',title:"Respira", subtitle:"Minimalist fan", price:"Rp 500.000",button:"button4"},
    {id: "five", img:'./images/image 6.png',title:"Grifo", subtitle:"Night lamp", price:"Rp 1.500.000",button:"button5"},
    {id: "six", img:'./images/image 7.png',title:"Muggo", subtitle:"Small mug", price:"Rp 150.000",button:"button6"},
    {id: "seven", img:'./images/image 8.png',title:"Pingky", subtitle:"Cute bed set", price:"Rp 7.000.000",button:"button7"},
    {id: "eight", img:'./images/image 9.png',title:"Potty",subtitle:"Minimalist flower pot", price:"Rp 500.000",button:"button8"},
    
]
content.forEach((item) => {
    gtr.innerHTML += `<div class="all" id="${item.id}">
    <img class="image-all" src="${item.img}">
        <div class="bgr">
                <p class="title"> ${item.title}</p>
                <p class="subtitle">${item.subtitle}</p>
                <p class="price">${item.price}</p>
                <button class="${item.button} ">Delete</button>
        </div>
    </div>`
})
let a = document.createElement('a')
a.innerHTML = "Show More"
a.classList = 'knopka'
gtr.after(a)
a.href = '#'

const btn1 = document.querySelector('.button1')
btn1.addEventListener('click',function() {
    const one = document.querySelector('#one')
    one.remove(one.remove)
})


const btn2 = document.querySelector('.button2')
btn2.addEventListener('click',function() {
    const two = document.querySelector('#two')
    two.remove(two.remove)
})


const btn3 = document.querySelector('.button3')
btn3.addEventListener('click',function() {
    const three = document.querySelector('#three')
    three.remove(three.remove)
})


const btn4 = document.querySelector('.button4')
btn4.addEventListener('click',function() {
    const four = document.querySelector('#four')
    four.remove(four.remove)
})


const btn5 = document.querySelector('.button5')
btn5.addEventListener('click',function() {
    const five = document.querySelector('#five')
    five.remove(five.remove)
})


const btn6 = document.querySelector('.button6')
btn6.addEventListener('click',function() {
    const six = document.querySelector('#six')
    six.remove(six.remove)
})


const btn7 = document.querySelector('.button7')
btn7.addEventListener('click',function() {
    const seven = document.querySelector('#seven')
    seven.remove(seven.remove)
})


const btn8 = document.querySelector('.button8')
btn8.addEventListener('click',function() {
    const eight = document.querySelector('#eight')
    eight.remove(eight.remove)
})







