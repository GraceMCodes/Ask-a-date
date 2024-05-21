const container =document.getElementById(".image-1");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber( min, max){
    const randomNumber = Math.floor(Math.random()* (max - min + 1)) + min;
    return randomNumber;
}
btnNo.addEventListener("mouseover", (e)=>{
    const containerHeight = container.getBoundingClientRect().height;
    const containerwidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnwidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = container.getBoundingClientRect().left;

     let newTop = btnTop;
     let newLeft = btnLeft;

     while (Math.abs(newTop - btnTop) < containerHeight / 3 ){
        newTop = getRandomNumber(0, containerHeight - btnHeight);
     }
     while (Math.abs(newLeft - btnLeft ) < containerwidth / 3) {
        newLeft = getRandomNumber(0, containerwidth - btnwidth);
     }
     btnNo.style.top = Math.floor(newTop) + "px";
     btnNo.style.left = Math.floor(newLeft) + "px";
     
})

btnYes.addEventListener("click", (e)=> {
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
})