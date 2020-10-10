const button = document.querySelector("input");
const popup = document.querySelector("form");
const popout = document.querySelector("span");
button.addEventListener("click",()=>{
    popup.style.display = "block";
    button.style.display = "none";
});
popout.addEventListener("click", ()=>{
    popup.style.display = "none";
    button.style.display = "block"
})
