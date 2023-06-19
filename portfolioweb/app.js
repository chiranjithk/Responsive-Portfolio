const sections =document.querySelectorAll('.section');
const sectBtns =document.querySelectorAll('.controls');
const sectBtn =document.querySelectorAll('.control');
const allSections =document.querySelectorAll('.main-content');

function pageTransition(){
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            let curBtn=document.querySelectorAll('.active-btn');
            curBtn[0].className=curBtn[0].className.replace('active-btn','');
            this.className+=' active-btn';
        })
    }
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.active');
            currentBtn[0].className=currentBtn[0].className.replace('active','');
            sections[i].className+=' active';

        })
    }
    const themebtn=document.querySelector('.theme-btn');
    themebtn.addEventListener('click', ()=>{
        let el=document.body;
        el.classList.toggle('light-theme');
    })

}

pageTransition();