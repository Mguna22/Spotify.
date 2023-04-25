let a = document.querySelector('.w1')
let b = document.querySelector('.women')

a.addEventListener(('mouseover'),()=>{
    b.style.display = 'block'
})

a.addEventListener(('mouseout'),()=>{
    b.style.display = 'none'
    d.style.display = 'block'
})

let d = document.querySelector('.aki')
let e = document.querySelector('.kids')

d.addEventListener(('mouseover'),()=>{
    e.style.display = 'block'
})

d.addEventListener(('mouseout'),()=>{
    e.style.display = 'none'
})

let f = document.querySelector('.aho')
let g = document.querySelector('.home')

f.addEventListener(('mouseover'),()=>{
    g.style.display = 'block'
})

f.addEventListener(('mouseout'),()=>{
    g.style.display = 'none'
})

let h = document.querySelector('.abe')
let i = document.querySelector('.beauty')

h.addEventListener(('mouseover'),()=>{
    i.style.display = 'block'
})

h.addEventListener(('mouseout'),()=>{
    i.style.display = 'none'
})