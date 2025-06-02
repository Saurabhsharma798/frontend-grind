
let btn=document.querySelector('#btn');




btn.addEventListener('click',function(){
    let heading=document.querySelector('#heading');
    let random_color=change_color();
    let box = document.querySelector('#color-box');
    let kachu = document.querySelector('#kachu');
    kachu.innerText = 'kachu muchu horha kachu muchu';
    heading.innerText= random_color;
    box.style.backgroundColor = random_color;
    
});


function change_color(){
    let a=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    let c=Math.floor(Math.random()*255)
    
    let color=`rgb(${a},${b},${c})`
    return color
};



