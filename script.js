
// let btn=document.querySelector('#btn');




// btn.addEventListener('click',function(){
//     let heading=document.querySelector('#heading');
//     let random_color=change_color();
//     let box = document.querySelector('#color-box');
//     let kachu = document.querySelector('#kachu');
//     kachu.innerText = 'kachu muchu horha kachu muchu';
//     heading.innerText= random_color;
//     box.style.backgroundColor = random_color;
    
// });


// function change_color(){
//     let a=Math.floor(Math.random()*255)
//     let b=Math.floor(Math.random()*255)
//     let c=Math.floor(Math.random()*255)
    
//     let color=`rgb(${a},${b},${c})`
//     return color
// };




// let btn = document.querySelector('#btn');

// let form=document.querySelector('form');
// form.addEventListener('submit',function(e){
//     e.preventDefault();
// });
// btn.addEventListener('click',function(){
//     let name=document.querySelector('#name').value;
//     let txt=document.querySelector('#kachu-muchu');
//     txt.innerText = `your name is ${name} kachu muchu` 
// });


let btn=document.querySelector('#btn');

btn.addEventListener('click',function(){
    let list=document.querySelector('ul');
    if (list.style.display='none') {
        btn.innerText='hide projects';
        list.style.display='block';
    }
    else{
    list.style.display= 'none';
    }
})