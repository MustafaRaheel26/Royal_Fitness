let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ( )=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typong Text Code 

const typed = new Typed('.multiple-text',{
    strings: ['Physical Fitness','Weight Gain','Strength Training','Fat Lose ','Weight Lifting','Running'],
    typeSpeed: 60,
    backSpeed:60,
    backDelay:1000,
    loop:true,
});

function joinUs(){
    let name = prompt("Enter Your Name :");
    let email = prompt("Enter Your Email :");
    let contact = +prompt("Enter Your Contact :");
    
    if((name||email||contact) == " "){
        alert('Please Fill out the required info')
    }else{
    alert(`You will get contacted by our team.`)
    }
}