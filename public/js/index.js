const changeImg = (e)=>{
    const image = document.querySelector("#character img")
    image.src = e
}

const changeTxt = (e)=>{
    const text = document.querySelector("#chara-text img")
    text.src = e
}

const button = document.querySelector(".whooper");
const menu = document.querySelector(".side-bar");

button.addEventListener('click', function(){
    menu.classList.toggle('showmenu');
})

const subscribe = document.querySelector(".input .btn");
const input = document.querySelector('.email input').value;

subscribe.addEventListener('click', function(){
    if (input!=null){
        alert("thanks you're get nothing tho")
    }else if(input===null){
        alert("none")
    }
})
