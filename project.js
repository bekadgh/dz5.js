let gtr = document.querySelector('.gtr')
let h1 = document.createElement('h1')
h1.innerHTML = "Our Products"
gtr.before(h1)  
let content = [
    {id: 1, img:'./images/image 1.png',title:"Syltherine", subtitle:"Stylish cafe chair", price:"Rp 2.500.000",},
    {id: 2, img:'./images/image 2.png',title:"Leviosa", subtitle:"Stylish cafe chair", price:"Rp 2.500.000"},
    {id: 3, img:'./images/image 3.png',title:"Lolito", subtitle:"Luxury big sofa", price:"Rp 7.000.000", },
    {id: 4, img:'./images/image 4.png',title:"Respira", subtitle:"Minimalist fan", price:"Rp 500.000"},
    {id: 5, img:'./images/image 6.png',title:"Grifo", subtitle:"Night lamp", price:"Rp 1.500.000"},
    {id: 6, img:'./images/image 7.png',title:"Muggo", subtitle:"Small mug", price:"Rp 150.000"},
    {id: 7, img:'./images/image 8.png',title:"Pingky", subtitle:"Cute bed set", price:"Rp 7.000.000",},
    {id: 8, img:'./images/image 9.png',title:"Potty",subtitle:"Minimalist flower pot", price:"Rp 500.000"},
   
]
content.forEach((item) => {
    gtr.innerHTML += `<div class="all" id="${item.id}">
    <img class="image-all" src="${item.img}">
    <div class="bgr"><p class="title"> ${item.title}</p>
    <p class="subtitle">${item.subtitle}</p>
    <p class="price">${item.price}</p></div</div>`
    
    
})
let a = document.createElement('a')
a.innerHTML = "Show More"
a.classList = 'knopka'
gtr.after(a)
a.href = '#'